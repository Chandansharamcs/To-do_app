package sh.tasks.app;

import android.app.AppOpsManager;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Build;
import android.os.Process;
import android.provider.Settings;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import org.json.JSONArray;
import org.json.JSONObject;

/**
 * v81: the bridge for app limits.
 *
 * Everything here is either a permission check, a settings deep link, or a
 * write of the rules. It never decides anything about time -- that is
 * AppBlockService's job, and it reads the same SharedPreferences.
 */
@CapacitorPlugin(name = "Block")
public class BlockPlugin extends Plugin {

    /** Is Usage Access granted? It has no runtime dialog, only a settings page,
     *  so the only honest way to ask is to read the app-op back. */
    private boolean hasUsage() {
        try {
            AppOpsManager ops = (AppOpsManager) getContext().getSystemService(Context.APP_OPS_SERVICE);
            int mode = Build.VERSION.SDK_INT >= 29
                    ? ops.unsafeCheckOpNoThrow(AppOpsManager.OPSTR_GET_USAGE_STATS, Process.myUid(), getContext().getPackageName())
                    : ops.checkOpNoThrow(AppOpsManager.OPSTR_GET_USAGE_STATS, Process.myUid(), getContext().getPackageName());
            return mode == AppOpsManager.MODE_ALLOWED;
        } catch (Exception e) { return false; }
    }

    private boolean canOverlay() {
        return Build.VERSION.SDK_INT < 23 || Settings.canDrawOverlays(getContext());
    }

    private boolean ignoringBattery() {
        android.os.PowerManager pm = (android.os.PowerManager)
                getContext().getSystemService(Context.POWER_SERVICE);
        return pm != null && pm.isIgnoringBatteryOptimizations(getContext().getPackageName());
    }

    @PluginMethod
    public void status(PluginCall call) {
        JSObject r = new JSObject();
        r.put("usage", hasUsage());
        r.put("overlay", canOverlay());
        r.put("battery", ignoringBattery());
        r.put("notification", Build.VERSION.SDK_INT < 33 ||
                androidx.core.content.ContextCompat.checkSelfPermission(getContext(),
                        android.Manifest.permission.POST_NOTIFICATIONS) == PackageManager.PERMISSION_GRANTED);
        JSONObject rules = BlockStore.rules(getContext());
        r.put("rules", rules == null ? "{}" : rules.toString());
        r.put("today", BlockStore.today());
        call.resolve(r);
    }

    /** Opens the exact settings page for a permission. These are the only way
     *  to grant Usage Access and overlay -- there is no in-app dialog. */
    @PluginMethod
    public void open(PluginCall call) {
        String which = call.getString("which", "");
        Context c = getContext();
        Intent i = null;
        if ("usage".equals(which)) i = new Intent(Settings.ACTION_USAGE_ACCESS_SETTINGS);
        else if ("overlay".equals(which)) {
            i = new Intent(Settings.ACTION_MANAGE_OVERLAY_PERMISSION, Uri.parse("package:" + c.getPackageName()));
        } else if ("battery".equals(which)) {
            i = new Intent(Settings.ACTION_REQUEST_IGNORE_BATTERY_OPTIMIZATIONS, Uri.parse("package:" + c.getPackageName()));
        } else if ("settings".equals(which)) {
            // the page with "Allow restricted settings" on Android 13+
            i = new Intent(Settings.ACTION_APPLICATION_DETAILS_SETTINGS, Uri.parse("package:" + c.getPackageName()));
        } else if ("usageSettings".equals(which)) {
            i = new Intent(Settings.ACTION_SETTINGS);
        }
        JSObject r = new JSObject();
        if (i == null) { r.put("ok", false); call.resolve(r); return; }
        i.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        try {
            c.startActivity(i);
            r.put("ok", true);
        } catch (Exception e) {
            r.put("ok", false);
            r.put("error", String.valueOf(e.getMessage()));
        }
        call.resolve(r);
    }

    /** Saves the limit list. Shape is the same one the browser sends. */
    @PluginMethod
    public void save(PluginCall call) {
        String json = call.getString("json", "");
        BlockStore.saveRules(getContext(), json);
        boolean on = false;
        try { on = new JSONObject(json).optBoolean("on", false); } catch (Exception e) { /* off */ }
        Intent svc = new Intent(getContext(), AppBlockService.class);
        if (on) getContext().startForegroundService(svc);
        else getContext().stopService(svc);
        JSObject r = new JSObject();
        r.put("ok", true);
        r.put("on", on);
        r.put("usage", hasUsage());
        call.resolve(r);
    }

    /** Minutes used today, for the settings screen to show honestly. */
    @PluginMethod
    public void usage(PluginCall call) {
        String day = BlockStore.today();
        JSONObject out = new JSONObject();
        JSONObject rules = BlockStore.rules(getContext());
        try {
            JSONArray limits = rules == null ? null : rules.optJSONArray("limits");
            if (limits != null) {
                for (int i = 0; i < limits.length(); i++) {
                    JSONObject o = limits.optJSONObject(i);
                    if (o == null) continue;
                    String pkg = o.optString("pkg", "");
                    if (pkg.isEmpty()) continue;
                    out.put(pkg, BlockStore.minutesToday(getContext(), pkg, day));
                }
            }
        } catch (Exception e) { /* return what we have */ }
        JSObject r = new JSObject();
        r.put("day", day);
        r.put("minutes", out.toString());
        call.resolve(r);
    }

    /** Fills a package name from what the user typed, so "youtube" is enough. */
    @PluginMethod
    public void resolve(PluginCall call) {
        String q = call.getString("q", "").toLowerCase().trim();
        PackageManager pm = getContext().getPackageManager();
        JSONArray out = new JSONArray();
        if (!q.isEmpty()) {
            for (android.content.pm.ApplicationInfo ai : pm.getInstalledApplications(0)) {
                String label = String.valueOf(pm.getApplicationLabel(ai)).toLowerCase();
                String pkg = ai.packageName.toLowerCase();
                if (!label.contains(q) && !pkg.contains(q)) continue;
                try {
                    JSONObject o = new JSONObject();
                    o.put("pkg", ai.packageName);
                    o.put("label", String.valueOf(pm.getApplicationLabel(ai)));
                    out.put(o);
                } catch (Exception e) { /* skip */ }
                if (out.length() >= 12) break;
            }
        }
        JSObject r = new JSObject();
        r.put("apps", out.toString());
        call.resolve(r);
    }
}
