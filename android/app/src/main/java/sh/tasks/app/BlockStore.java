package sh.tasks.app;

import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;

import org.json.JSONObject;

/**
 * v81: where the blocker keeps its state.
 *
 * The rules are written by the web layer (Block plugin) and read by the
 * foreground service every 15 seconds, so there is exactly one copy of them.
 * Daily minutes are kept as one JSON blob keyed by IST day, and reset by
 * simply not being found for a new day -- no timer, nothing to miss.
 */
final class BlockStore {

    static final String PREFS = "tasksh.block.v1";
    static final int NOTIFY_ID = 7371;

    private BlockStore() {}

    static SharedPreferences prefs(Context c) {
        return c.getApplicationContext().getSharedPreferences(PREFS, Context.MODE_PRIVATE);
    }

    static void saveRules(Context c, String json) {
        try {
            JSONObject o = new JSONObject(json);
            if (o.optInt("v", 0) != 1) return;
            prefs(c).edit().putString("rules", json).apply();
        } catch (Exception e) { /* a malformed write never wipes a good one */ }
    }

    static JSONObject rules(Context c) {
        String s = prefs(c).getString("rules", null);
        if (s == null) return null;
        try { return new JSONObject(s); } catch (Exception e) { return null; }
    }

    /** Minutes spent in `pkg` on `day`. Stored per day, so the limit resets at
     *  the same 03:00 rollover the rest of the app uses, not at midnight. */
    static long minutesToday(Context c, String pkg, String day) {
        String s = prefs(c).getString("usage." + day, null);
        if (s == null) return 0;
        try { return new JSONObject(s).optLong(pkg, 0L); } catch (Exception e) { return 0; }
    }

    static void addMinutes(Context c, String pkg, String day, long mins) {
        String key = "usage." + day;
        JSONObject o;
        try { o = new JSONObject(prefs(c).getString(key, "{}")); } catch (Exception e) { o = new JSONObject(); }
        try {
            o.put(pkg, Math.max(0L, o.optLong(pkg, 0L) + mins));
            prefs(c).edit().putString(key, o.toString()).apply();
        } catch (Exception e) { /* nothing to do */ }
        // keep the file from growing forever: drop days older than a fortnight
        SharedPreferences p = prefs(c);
        java.util.Set<String> all = p.getAll().keySet();
        String[] keys = all.toArray(new String[0]);
        java.util.Arrays.sort(keys);
        for (String k : keys) {
            if (!k.startsWith("usage.")) continue;
            String d = k.substring(6);
            if (d.compareTo(daysAgo(14)) < 0) p.edit().remove(k).apply();
        }
    }

    private static String daysAgo(int n) {
        long ms = System.currentTimeMillis() - n * 86400000L - 3 * 3600000L;   // 03:00 rollover
        return new java.text.SimpleDateFormat("yyyy-MM-dd", java.util.Locale.US)
                .format(new java.util.Date(ms + 19800000L));
    }

    /** The sticky notification the foreground service must show to be allowed
     *  to run at all. It says what the service is doing, plainly. */
    static Notification foreground(Context c) {
        NotificationManager nm = (NotificationManager) c.getSystemService(Context.NOTIFICATION_SERVICE);
        if (nm != null && android.os.Build.VERSION.SDK_INT >= 26) {
            NotificationChannel ch = new NotificationChannel(CHANNEL, "App limits",
                    NotificationManager.IMPORTANCE_LOW);
            ch.setDescription("Shows when tasks.sh is watching app limits");
            nm.createNotificationChannel(ch);
        }
        Intent open = new Intent(c, MainActivity.class);
        int flags = PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE;
        PendingIntent pi = PendingIntent.getActivity(c, 11, open, flags);
        Notification.Builder b = android.os.Build.VERSION.SDK_INT >= 26
                ? new Notification.Builder(c, CHANNEL)
                : new Notification.Builder(c);
        return b.setContentTitle("tasks.sh limits")
                .setContentText("watching app time")
                .setSmallIcon(android.R.drawable.ic_lock_idle_alarm)
                .setContentIntent(pi)
                .setOngoing(true)
                .build();
    }

    static final String CHANNEL = "tasksh.block";

    /** The same 03:00 IST rollover the rest of the app uses, so a limit that
     *  resets "tomorrow" resets when he says tomorrow starts. */
    static String today() {
        long ms = System.currentTimeMillis() - 3 * 3600000L;
        return new java.text.SimpleDateFormat("yyyy-MM-dd", java.util.Locale.US)
                .format(new java.util.Date(ms + 19800000L));
    }
}
