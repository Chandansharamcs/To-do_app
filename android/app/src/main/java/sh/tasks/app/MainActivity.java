package sh.tasks.app;

import android.content.Intent;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {

    @Override
    public void onCreate(android.os.Bundle savedInstanceState) {
        // v77: the share plugin has to exist before the bridge renders the web
        // layer, because the app reads the shared text on first mount.
        registerPlugin(SharePlugin.class);
        // v78: the widget bridge. Nothing draws without it.
        registerPlugin(WidgetPushPlugin.class);
        super.onCreate(savedInstanceState);
    }

    @Override
    public void onNewIntent(Intent intent) {
        // singleTask means a second share arrives here, not in onCreate. Hand it
        // to the Activity so SharePlugin.getShared() sees the new intent rather
        // than the one the app was launched with.
        super.onNewIntent(intent);
        setIntent(intent);
    }
}
