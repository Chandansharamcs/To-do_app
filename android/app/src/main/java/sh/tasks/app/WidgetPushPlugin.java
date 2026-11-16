package sh.tasks.app;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

/**
 * v78: the bridge the web layer talks to.
 *
 * pushWidget      the app sends the model the widget should draw
 * takeWidgetActions   the app collects what ✓ queued while it was closed
 *
 * Both are pure data in and out; the widget never runs web code.
 */
@CapacitorPlugin(name = "WidgetBridge")
public class WidgetPushPlugin extends Plugin {

    @PluginMethod
    public void pushWidget(PluginCall call) {
        String json = call.getString("json", "");
        WidgetStore.saveModel(getContext(), json);
        // Redraw now so a ✓ or an edit shows up without waiting for the minute.
        WidgetProvider.refreshAll(getContext());
        JSObject r = new JSObject();
        r.put("ok", true);
        call.resolve(r);
    }

    @PluginMethod
    public void takeWidgetActions(PluginCall call) {
        JSObject r = new JSObject();
        r.put("actions", WidgetStore.takeActions(getContext()));
        call.resolve(r);
    }
}
