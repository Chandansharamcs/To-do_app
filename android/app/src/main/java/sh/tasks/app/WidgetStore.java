package sh.tasks.app;

import android.content.Context;
import android.content.SharedPreferences;

import org.json.JSONArray;
import org.json.JSONObject;

/**
 * v78: the only thing the widget and the WebView share.
 *
 * The widget runs inside the launcher's process and cannot read localStorage,
 * so the app pushes a small JSON model here (a SharedPreferences file) and the
 * widget draws it. The ✓ button writes back to `queue`, which the app drains on
 * the next open. The queue is additive, so a double-tap on ✓ is harmless.
 */
final class WidgetStore {

    private static final String PREFS = "tasksh.widget.v1";
    private static final String KEY_MODEL = "model";
    private static final String KEY_QUEUE = "queue";
    private static final int QUEUE_MAX = 50;

    private WidgetStore() {}

    private static SharedPreferences prefs(Context c) {
        return c.getApplicationContext().getSharedPreferences(PREFS, Context.MODE_PRIVATE);
    }

    /**
     * Stores a model pushed by the app. Anything that is not a v1 model is
     * dropped rather than saved: an app from the future writing v2 into a v1
     * widget would otherwise make the widget draw nonsense for a day.
     */
    static void saveModel(Context c, String json) {
        if (json == null || json.trim().isEmpty()) return;
        try {
            JSONObject o = new JSONObject(json);
            if (o.optInt("v", 0) != 1) return;
            if (!o.has("day")) return;
            prefs(c).edit().putString(KEY_MODEL, json).apply();
        } catch (Exception e) {
            // a malformed push must never wipe the model already on screen
        }
    }

    /** The stored model, or null if there is nothing usable. */
    static String readModel(Context c) {
        String s = prefs(c).getString(KEY_MODEL, null);
        if (s == null || s.isEmpty()) return null;
        return s;
    }

    /** Queues a completion for the app to apply. Add-only, capped. */
    static void queueAction(Context c, String id, String day) {
        if (id == null || id.isEmpty() || day == null || day.isEmpty()) return;
        SharedPreferences p = prefs(c);
        JSONArray arr;
        try {
            arr = new JSONArray(p.getString(KEY_QUEUE, "[]"));
        } catch (Exception e) {
            arr = new JSONArray();
        }
        try {
            JSONObject a = new JSONObject();
            a.put("id", id);
            a.put("day", day);
            a.put("at", System.currentTimeMillis());
            arr.put(a);
        } catch (Exception e) {
            return;
        }
        while (arr.length() > QUEUE_MAX) arr.remove(0);
        p.edit().putString(KEY_QUEUE, arr.toString()).apply();
    }

    /** Hands the queued actions to the app and empties the queue. */
    static String takeActions(Context c) {
        SharedPreferences p = prefs(c);
        String s = p.getString(KEY_QUEUE, "[]");
        p.edit().putString(KEY_QUEUE, "[]").apply();
        return s;
    }

    /**
     * Reflects a ✓ in the stored model straight away, so the widget stops
     * offering the same routine while the app is still closed. The app remains
     * the source of truth and will push a fresh model when it next opens.
     */
    static void markDoneLocally(Context c, String id, String day) {
        String s = readModel(c);
        if (s == null) return;
        try {
            JSONObject o = new JSONObject(s);
            JSONObject next = o.optJSONObject("next");
            if (next == null) return;
            if (!id.equals(next.optString("id", ""))) return;   // a stale ✓
            if (!next.optBoolean("doneToday", false)) {
                next.put("doneToday", true);
                o.put("done", Math.min(o.optInt("total", 1), o.optInt("done", 0) + 1));
            }
            o.put("updatedAt", System.currentTimeMillis());
            prefs(c).edit().putString(KEY_MODEL, o.toString()).apply();
        } catch (Exception e) {
            // leave the model alone; the next real push fixes it
        }
    }
}
