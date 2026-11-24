package sh.tasks.app;

import android.app.usage.UsageStats;
import android.app.usage.UsageStatsManager;
import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.os.Handler;
import android.os.Looper;

import org.json.JSONArray;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * v81: the app blocker.
 *
 * "Use YouTube for 40 minutes and it closes until tomorrow" needs two things
 * Android will not give an ordinary app for free:
 *
 *   * how long an app has been in the foreground -- that is UsageStats, which
 *     needs the Usage Access permission, not root;
 *   * the ability to throw an overlay over it -- SYSTEM_ALERT_WINDOW.
 *
 * So this runs a foreground service that asks UsageStats how long the current
 * app has been in front, and when a limit is crossed it raises a full-screen
 * overlay and sends the user home. The app itself is NOT force-stopped: Android
 * does not allow that from an ordinary app, and pretending otherwise would be a
 * lie in a UI. What it can do, and does, is take the screen away and refuse to
 * give it back until the limit resets at the 03:00 rollover.
 *
 * The limits live in the same SharedPreferences the web layer writes through
 * the Block plugin, so the settings screen and this loop cannot disagree.
 */
public class AppBlockService extends android.app.Service {

    static final String CHANNEL = "tasksh.block";
    private static final long POLL_MS = 15000L;   // 15s: cheap, and precise enough

    private Handler handler;
    private final Runnable poll = new Runnable() {
        @Override public void run() {
            try { check(); } catch (Exception e) { /* never let the loop die */ }
            if (handler != null) handler.postDelayed(this, POLL_MS);
        }
    };

    @Override
    public void onCreate() {
        super.onCreate();
        handler = new Handler(Looper.getMainLooper());
        startForeground(BlockStore.NOTIFY_ID, BlockStore.foreground(this));
        handler.post(poll);
    }

    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        return START_STICKY;    // a blocker that dies when Android is bored is not a blocker
    }

    @Override
    public android.os.IBinder onBind(Intent intent) { return null; }

    @Override
    public void onDestroy() {
        if (handler != null) { handler.removeCallbacks(poll); handler = null; }
        super.onDestroy();
    }

    /** One pass: what is in front, how long has it been there, over the limit? */
    private void check() {
        JSONObject cfg = BlockStore.rules(this);
        if (cfg == null || !cfg.optBoolean("on", false)) return;

        String day = BlockStore.today();
        String pkg = foregroundPackage();
        if (pkg == null || pkg.isEmpty()) return;
        if (pkg.equals(getPackageName())) return;      // never block yourself

        JSONArray limits = cfg.optJSONArray("limits");
        if (limits == null) return;
        long limitMin = 0;
        String label = "";
        for (int i = 0; i < limits.length(); i++) {
            JSONObject o = limits.optJSONObject(i);
            if (o == null) continue;
            if (pkg.equals(o.optString("pkg", ""))) {
                limitMin = o.optLong("minutes", 0);
                label = o.optString("label", pkg);
                break;
            }
        }
        if (limitMin <= 0) return;

        long usedMin = BlockStore.minutesToday(this, pkg, day);
        if (usedMin < limitMin) return;

        // Over the line: raise the wall and go home. The wall is a separate
        // activity so it can be dismissed by the back gesture without leaving
        // the user stuck on a blank screen.
        Intent wall = new Intent(this, BlockWallActivity.class);
        wall.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TOP);
        wall.putExtra("pkg", pkg);
        wall.putExtra("label", label);
        wall.putExtra("usedMin", usedMin);
        wall.putExtra("limitMin", limitMin);
        startActivity(wall);

        Intent home = new Intent(Intent.ACTION_MAIN);
        home.addCategory(Intent.CATEGORY_HOME);
        home.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        startActivity(home);
    }

    /** The app in the foreground right now, by UsageStats. Null if the user has
     *  not granted Usage Access -- which the settings screen forces first. */
    private String foregroundPackage() {
        UsageStatsManager usm = (UsageStatsManager) getSystemService(Context.USAGE_STATS_SERVICE);
        if (usm == null) return null;
        long now = System.currentTimeMillis();
        List<UsageStats> list = usm.queryUsageStats(UsageStatsManager.INTERVAL_DAILY, now - 60000L, now);
        if (list == null || list.isEmpty()) return null;
        String best = null;
        long bestAt = 0;
        for (UsageStats u : list) {
            if (u.getLastTimeUsed() > bestAt) { bestAt = u.getLastTimeUsed(); best = u.getPackageName(); }
        }
        // "most recently used" is only trustworthy if it was used just now
        return now - bestAt < 60000L ? best : null;
    }
}
