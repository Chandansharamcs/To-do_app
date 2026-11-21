package sh.tasks.app;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

/**
 * v78: the widget bridge. pushWidget sends the model the widget should draw,
 * takeWidgetActions collects what was ticked while the app was closed. Both are
 * pure data in and out; the widget never runs web code.
 */
@CapacitorPlugin(name = "WidgetBridge")
public class WidgetPushPlugin extends Plugin {

    @PluginMethod
    public void pushWidget(PluginCall call) {
        String json = call.getString("json", "");
        WidgetStore.saveModel(getContext(), json);
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
