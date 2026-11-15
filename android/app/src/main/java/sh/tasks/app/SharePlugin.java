package sh.tasks.app;

import android.content.Intent;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

/**
 * v77: "share to tasks.sh".
 *
 * The manifest has declared an ACTION_SEND text/plain intent filter since v76,
 * but nothing read the intent, so sharing a paragraph into the app did nothing
 * at all. This plugin is the missing half: it hands the shared text to the web
 * layer, exactly once.
 *
 * Exactly once matters: the intent stays attached to the Activity, so without
 * clearing an action the app would re-fill the editor with the same paragraph
 * every time it resumed.
 */
@CapacitorPlugin(name = "Share")
public class SharePlugin extends Plugin {

    @PluginMethod
    public void getShared(PluginCall call) {
        JSObject ret = new JSObject();
        Intent intent = getActivity().getIntent();
        String text = null;

        if (intent != null && Intent.ACTION_SEND.equals(intent.getAction())) {
            String type = intent.getType();
            if (type != null && type.startsWith("text/")) {
                text = intent.getStringExtra(Intent.EXTRA_TEXT);
            }
            // consume it: the next cold start must not repeat this share
            intent.setAction(null);
            intent.removeExtra(Intent.EXTRA_TEXT);
            getActivity().setIntent(intent);
        }

        ret.put("text", text == null ? "" : text);
        call.resolve(ret);
    }
}
