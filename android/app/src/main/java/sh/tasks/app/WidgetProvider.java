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

import org.json.JSONArray;
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
    /** v81: the quest row's fill-in intent carries these, and CompleteReceiver
     *  reads them back. Names live here so the two halves cannot drift. */
    static final String EXTRA_QUEST_ID = "questId";
    static final String EXTRA_QUEST_NAME = "questName";
    private static final long TICK_MS = 60000L;
    /** Older than this and the model is yesterday's news, not a schedule. */
    private static final long MAX_AGE_MS = 36L * 60L * 60L * 1000L;

    @Override
    public void onUpdate(Context context, AppWidgetManager mgr, int[] ids) {
        for (int id : ids) mgr.updateAppWidget(id, build(context, id));
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
        for (int id : ids) mgr.updateAppWidget(id, build(context, id));
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

    static RemoteViews build(Context context, int widgetId) {
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
            v.setProgressBar(R.id.widget_progress, 100, 0, false);
            v.setOnClickPendingIntent(R.id.widget_root, openApp(context));
            v.setOnClickPendingIntent(R.id.widget_tick, openApp(context));
            v.setViewVisibility(R.id.widget_quests, View.GONE);
            v.setViewVisibility(R.id.widget_quests_empty, View.VISIBLE);
            v.setTextViewText(R.id.widget_quests_empty, "open tasks.sh to sync");
            v.setTextViewText(R.id.widget_quest_head, "QUESTS");
            return v;
        }

        long now = System.currentTimeMillis();
        v.setTextViewText(R.id.widget_headline, headline(m, now));
        int total = m.optInt("total", 0);
        int doneN = m.optInt("done", 0);
        v.setTextViewText(R.id.widget_count, doneN + "/" + total);
        int pct = total > 0 ? Math.round(doneN * 100f / total) : 0;
        v.setProgressBar(R.id.widget_progress, 100, pct, false);
        // the whole panel is a shortcut into the app
        v.setOnClickPendingIntent(R.id.widget_root, openApp(context));

        JSONObject next = m.optJSONObject("next");
        if (next == null) {
            v.setTextViewText(R.id.widget_label, doneN >= total ? "every routine ticked" : "nothing left to start");
            v.setTextViewText(R.id.widget_sub, "");
            v.setViewVisibility(R.id.widget_tick, View.VISIBLE);
            v.setOnClickPendingIntent(R.id.widget_tick, openApp(context));
            attachQuests(context, v, widgetId, m);
            return v;
        }

        String label = next.optString("label", "");
        v.setTextViewText(R.id.widget_label, label.isEmpty() ? "routine" : label);

        // 12-hour always, whichever side of the model produced it
        String clock = next.optString("time12", "");
        if (clock.isEmpty()) clock = to12h(next.optString("time", ""));
        StringBuilder sub = new StringBuilder(clock);
        int dur = next.optInt("duration", 0);
        if (dur > 0) sub.append("  ·  ").append(dur).append(" min");
        String alt = next.optString("alt", "");
        if (!alt.isEmpty()) sub.append("  ·  ").append(alt);
        v.setTextViewText(R.id.widget_sub, sub.toString());

        // The tick stays tappable even when the routine is already done: a
        // button that vanishes reads as a broken widget, and a tap that does
        // nothing reads as broken too. Repeat taps are harmless -- the queue is
        // add-only and the app de-duplicates by day.
        boolean doneToday = next.optBoolean("doneToday", false);
        v.setViewVisibility(R.id.widget_tick, View.VISIBLE);
        Intent ci = new Intent(context, CompleteReceiver.class);
        ci.setAction(CompleteReceiver.ACTION_COMPLETE);
        ci.putExtra("id", next.optString("id", ""));
        ci.putExtra("day", m.optString("day", ""));
        ci.putExtra("already", doneToday);
        int flags = PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE;
        PendingIntent pi = PendingIntent.getBroadcast(
                context, next.optString("id", "w").hashCode(), ci, flags);
        v.setOnClickPendingIntent(R.id.widget_tick, pi);

        attachQuests(context, v, widgetId, m);
        return v;
    }

    /** v81: hands the quest list to the launcher. A ListView in a widget is
     *  filled by a RemoteViewsService at the launcher's pace, never by us. */
    private static void attachQuests(Context context, RemoteViews v, int widgetId, JSONObject m) {
        JSONArray q = m.optJSONArray("quests");
        boolean any = q != null && q.length() > 0;
        v.setViewVisibility(R.id.widget_quests, any ? View.VISIBLE : View.GONE);
        v.setViewVisibility(R.id.widget_quests_empty, any ? View.GONE : View.VISIBLE);
        if (!any) {
            v.setTextViewText(R.id.widget_quests_empty, "no quests drawn today");
            return;
        }
        int left = 0;
        for (int i = 0; i < q.length(); i++) {
            JSONObject o = q.optJSONObject(i);
            if (o != null && !o.optBoolean("done", false)) left++;
        }
        v.setTextViewText(R.id.widget_quest_head, left > 0 ? "QUESTS · " + left + " LEFT" : "QUESTS · ALL DONE");

        Intent svc = new Intent(context, WidgetQuestService.class);
        svc.putExtra(AppWidgetManager.EXTRA_APPWIDGET_ID, widgetId);
        svc.setData(android.net.Uri.parse(svc.toUri(Intent.URI_INTENT_SCHEME)));
        v.setRemoteAdapter(R.id.widget_quests, svc);
        // the rows carry their own tap, so the list itself needs no intent
        v.setPendingIntentTemplate(R.id.widget_quests, questTemplate(context, m.optString("day", "")));
    }

    /** What a tapped quest row does: the fill-in intent supplies id + name. */
    static PendingIntent questTemplate(Context context, String day) {
        Intent i = new Intent(context, CompleteReceiver.class);
        i.setAction(CompleteReceiver.ACTION_COMPLETE);
        i.putExtra("day", day);
        i.putExtra("kind", "quest");
        // FLAG_MUTABLE is required: the launcher fills in the row's extras.
        int flags = PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_MUTABLE;
        return PendingIntent.getBroadcast(context, 913, i, flags);
    }

    /** The panel tap: open tasks.sh, the same way the launcher would. */
    private static PendingIntent openApp(Context context) {
        Intent i = new Intent(context, MainActivity.class);
        i.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TOP);
        int flags = PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE;
        return PendingIntent.getActivity(context, 42, i, flags);
    }

    private static boolean fresh(JSONObject m) {
        if (m.optInt("v", 0) != 1) return false;
        long updated = m.optLong("updatedAt", 0L);
        if (updated <= 0) return false;
        return Math.abs(System.currentTimeMillis() - updated) < MAX_AGE_MS;
    }

    /** "18:40" -> "6:40 PM". Never 24-hour: the widget is a clock, and a
     *  clock he has to convert in his head is decoration. */
    static String to12h(String hhmm) {
        if (hhmm == null) return "";
        String[] parts = hhmm.split(":");
        if (parts.length < 2) return hhmm;
        int h, m;
        try {
            h = Integer.parseInt(parts[0].trim());
            m = Integer.parseInt(parts[1].trim());
        } catch (Exception e) {
            return hhmm;
        }
        int hh = ((h % 24) + 24) % 24;
        String suffix = hh < 12 ? "AM" : "PM";
        int h12 = hh % 12 == 0 ? 12 : hh % 12;
        return String.format(java.util.Locale.US, "%d:%02d %s", h12, m, suffix);
    }

    /**
     * The line above the routine. Kept word for word in step with
     * widgetHeadline() in app.jsx, which is the copy the tests pin down.
     *
     * The order is load-bearing and used to be wrong: "already ticked" was
     * tested before the state, so a routine in progress printed "done today"
     * and the countdown -- the reason the widget exists -- never appeared.
     */
    static String headline(JSONObject m, long nowMs) {
        if (m == null || "empty".equals(m.optString("state")) || m.optInt("total", 0) == 0) {
            return "no routines";
        }
        JSONObject next = m.optJSONObject("next");
        if (next == null) {
            return m.optInt("done", 0) >= m.optInt("total", 0) ? "all done" : "day over";
        }
        boolean done = next.optBoolean("doneToday", false);

        if ("now".equals(m.optString("state"))) {
            long left = Math.max(0L, next.optLong("endMs", nowMs) - nowMs);
            long mins = (left + 59999L) / 60000L;
            String tail = mins >= 60 ? (mins / 60) + "h " + (mins % 60) + "m left" : mins + "m left";
            return done ? "done · " + tail + " to go" : "now · " + tail;
        }
        long toStart = next.optLong("startMs", nowMs) - nowMs;
        if (toStart <= 0) return "starting now";
        long mins = Math.max(0L, Math.round(toStart / 60000.0));
        String tail = mins < 60 ? mins + "m" : (mins / 60) + "h " + (mins % 60) + "m";
        return done ? "done today · next in " + tail : "next in " + tail;
    }
}
