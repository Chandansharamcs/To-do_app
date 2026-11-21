package sh.tasks.app;

import android.app.AlarmManager;
import android.app.PendingIntent;
import android.appwidget.AppWidgetManager;
import android.appwidget.AppWidgetProvider;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.view.View;
import android.widget.RemoteViews;

import org.json.JSONObject;

import java.util.Calendar;

/**
 * v78: the home-screen widget.
 *
 * updatePeriodMillis has a 30-minute floor, which is useless for a countdown,
 * so the provider arms its own one-minute repeating alarm while at least one
 * widget exists and cancels it when the last one is removed. Nothing here
 * computes state: the app pushes a model (see WidgetStore) and this class draws
 * it. The countdown is derived from absolute startMs/endMs so it stays right
 * even if the app has not run today.
 */
public class WidgetProvider extends AppWidgetProvider {

    static final String ACTION_TICK = "sh.tasks.app.WIDGET_TICK";
    private static final long TICK_MS = 60000L;
    /** Older than this and the model is yesterday's news, not a schedule. */
    private static final long MAX_AGE_MS = 36L * 60L * 60L * 1000L;

    @Override
    public void onUpdate(Context context, AppWidgetManager mgr, int[] ids) {
        for (int id : ids) mgr.updateAppWidget(id, build(context));
    }

    @Override
    public void onEnabled(Context context) {
        super.onEnabled(context);
        arm(context);
    }

    @Override
    public void onDisabled(Context context) {
        super.onDisabled(context);
        // The last widget is gone: stop waking the device every minute.
        AlarmManager am = (AlarmManager) context.getSystemService(Context.ALARM_SERVICE);
        if (am != null) am.cancel(tickIntent(context));
    }

    @Override
    public void onReceive(Context context, Intent intent) {
        super.onReceive(context, intent);
        if (intent != null && ACTION_TICK.equals(intent.getAction())) refreshAll(context);
    }

    /** Redraws every placed widget. Cheap: one JSON read, one RemoteViews. */
    static void refreshAll(Context context) {
        AppWidgetManager mgr = AppWidgetManager.getInstance(context);
        if (mgr == null) return;
        ComponentName me = new ComponentName(context, WidgetProvider.class);
        int[] ids = mgr.getAppWidgetIds(me);
        if (ids == null || ids.length == 0) return;
        RemoteViews v = build(context);
        for (int id : ids) mgr.updateAppWidget(id, v);
    }

    private static PendingIntent tickIntent(Context context) {
        Intent i = new Intent(context, WidgetProvider.class);
        i.setAction(ACTION_TICK);
        int flags = PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE;
        return PendingIntent.getBroadcast(context, 0, i, flags);
    }

    private static void arm(Context context) {
        AlarmManager am = (AlarmManager) context.getSystemService(Context.ALARM_SERVICE);
        if (am == null) return;
        // First fire on the next whole minute, so the countdown changes on the
        // minute rather than drifting with whatever second the widget was made.
        Calendar next = Calendar.getInstance();
        next.add(Calendar.MINUTE, 1);
        next.set(Calendar.SECOND, 0);
        next.set(Calendar.MILLISECOND, 0);
        am.setRepeating(AlarmManager.RTC, next.getTimeInMillis(), TICK_MS, tickIntent(context));
    }

    // ---- drawing -------------------------------------------------------

    static RemoteViews build(Context context) {
        RemoteViews v = new RemoteViews(context.getPackageName(), R.layout.widget_routine);
        String raw = WidgetStore.readModel(context);
        JSONObject m = null;
        try { if (raw != null) m = new JSONObject(raw); } catch (Exception e) { m = null; }

        if (m == null || !fresh(m)) {
            // Better to admit it than to show a routine from two days ago.
            v.setTextViewText(R.id.widget_headline, "tasks.sh");
            v.setTextViewText(R.id.widget_label, "open tasks.sh to sync");
            v.setTextViewText(R.id.widget_sub, "the widget reads what the app last pushed");
            v.setTextViewText(R.id.widget_count, "");
            v.setViewVisibility(R.id.widget_tick, View.GONE);
            return v;
        }

        long now = System.currentTimeMillis();
        v.setTextViewText(R.id.widget_headline, headline(m, now));
        v.setTextViewText(R.id.widget_count, m.optInt("done", 0) + "/" + m.optInt("total", 0) + " today");

        JSONObject next = m.optJSONObject("next");
        if (next == null) {
            v.setTextViewText(R.id.widget_label, m.optInt("done", 0) >= m.optInt("total", 0)
                    ? "every routine ticked" : "nothing left to start");
            v.setTextViewText(R.id.widget_sub, "");
            v.setViewVisibility(R.id.widget_tick, View.GONE);
            return v;
        }

        String label = next.optString("label", "");
        v.setTextViewText(R.id.widget_label, label.isEmpty() ? "routine" : label);

        StringBuilder sub = new StringBuilder(next.optString("time", ""));
        int dur = next.optInt("duration", 0);
        if (dur > 0) sub.append(" · ").append(dur).append("m");
        String alt = next.optString("alt", "");
        if (!alt.isEmpty()) sub.append(" · ").append(alt);
        v.setTextViewText(R.id.widget_sub, sub.toString());

        boolean doneToday = next.optBoolean("doneToday", false);
        v.setViewVisibility(R.id.widget_tick, doneToday ? View.GONE : View.VISIBLE);
        if (!doneToday) {
            Intent ci = new Intent(context, CompleteReceiver.class);
            ci.setAction(CompleteReceiver.ACTION_COMPLETE);
            ci.putExtra("id", next.optString("id", ""));
            ci.putExtra("day", m.optString("day", ""));
            int flags = PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE;
            PendingIntent pi = PendingIntent.getBroadcast(
                    context, next.optString("id", "w").hashCode(), ci, flags);
            v.setOnClickPendingIntent(R.id.widget_tick, pi);
        }
        return v;
    }

    private static boolean fresh(JSONObject m) {
        if (m.optInt("v", 0) != 1) return false;
        long updated = m.optLong("updatedAt", 0L);
        if (updated <= 0) return false;
        return Math.abs(System.currentTimeMillis() - updated) < MAX_AGE_MS;
    }

    /** The line above the routine. Kept word for word in step with
     *  widgetHeadline() in app.jsx, which is the copy the tests pin down. */
    static String headline(JSONObject m, long nowMs) {
        if (m == null || "empty".equals(m.optString("state")) || m.optInt("total", 0) == 0) {
            return "no routines";
        }
        JSONObject next = m.optJSONObject("next");
        if (next == null) {
            return m.optInt("done", 0) >= m.optInt("total", 0) ? "all done" : "day over";
        }
        if (next.optBoolean("doneToday", false)) return "done today";

        if ("now".equals(m.optString("state"))) {
            long left = Math.max(0L, next.optLong("endMs", nowMs) - nowMs);
            return "now · " + ((left + 59999L) / 60000L) + "m left";
        }
        long toStart = next.optLong("startMs", nowMs) - nowMs;
        if (toStart <= 0) return "starting now";
        long mins = Math.max(0L, Math.round(toStart / 60000.0));
        if (mins < 60) return "in " + mins + "m";
        return "in " + (mins / 60) + "h " + (mins % 60) + "m";
    }
}
