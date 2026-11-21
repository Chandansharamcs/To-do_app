package sh.tasks.app;

import android.content.Intent;
import android.webkit.WebView;

import androidx.webkit.WebViewAssetLoader;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.BridgeWebViewClient;

import java.io.File;

public class MainActivity extends BridgeActivity {

    @Override
    public void onCreate(android.os.Bundle savedInstanceState) {
        // v77: the share plugin has to exist before the bridge renders the web
        // layer, because the app reads the shared text on first mount.
        registerPlugin(SharePlugin.class);
        // v78: the widget bridge. Nothing draws without it.
        registerPlugin(WidgetPushPlugin.class);
        // v79: updates without reinstalling. Downloads bundle.js, nothing else.
        registerPlugin(BundlePlugin.class);
        super.onCreate(savedInstanceState);

        // v79: the app inside the APK is a shell that loads bundle.js. If a
        // newer bundle was downloaded, serve it in place of the shipped one.
        // Same origin, same assets, same filesystem APIs -- only the app
        // bundle differs, which is exactly what an OTA update should be.
        installBundleInterceptor();
    }

    private void installBundleInterceptor() {
        WebView wv = getBridge() == null ? null : getBridge().getWebView();
        if (wv == null) return;

        final WebViewAssetLoader loader = new WebViewAssetLoader.Builder()
                .addPathHandler("/assets/", new WebViewAssetLoader.AssetsPathHandler(this))
                .addPathHandler("/bundle/", new WebViewAssetLoader.InternalStoragePathHandler(
                        this, new File(getFilesDir(), BundlePlugin.OTA_DIR + File.separator)))
                .build();

        wv.setWebViewClient(new BridgeWebViewClient(getBridge()) {
            @Override
            public android.webkit.WebResourceResponse shouldInterceptRequest(WebView view, android.webkit.WebResourceRequest request) {
                android.webkit.WebResourceResponse r = super.shouldInterceptRequest(view, request);
                String url = request.getUrl() == null ? "" : request.getUrl().toString();
                // Only the app bundle is ever taken from disk.
                if (!url.endsWith("/bundle.js") && !url.endsWith("://localhost/assets/public/bundle.js")) {
                    return r;
                }
                if (BundlePlugin.current(MainActivity.this) == null) return r;   // nothing downloaded
                android.net.Uri u = android.net.Uri.parse("https://appassets.androidplatform.net/bundle/bundle.js");
                return loader.shouldInterceptRequest(u);
            }
        });
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
