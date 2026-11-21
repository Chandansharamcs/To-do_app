package sh.tasks.app;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;

/**
 * v79: updates without reinstalling the app.
 *
 * The app in the APK is a small shell that loads `bundle.js`. That file is the
 * app itself, and it is 1.1 MB instead of the APK's 3.5 MB -- and unlike an
 * APK it can be replaced from inside the app.
 *
 * Two rules make this safe:
 *   * a downloaded bundle only replaces the shipped one if it is a normal 200
 *     with a non-trivial body -- a captive-portal login page is not an app;
 *   * it is written to a temp file first and only renamed into place once the
 *     whole body arrived, so a dropped connection cannot leave a half bundle.
 *
 * Whatever goes wrong, the shipped copy inside the APK is still there, and
 * index.html only ever points at the downloaded copy when it exists and parses.
 */
@CapacitorPlugin(name = "Bundle")
public class BundlePlugin extends Plugin {

    /** Where a downloaded bundle lives. WebViewAssetLoader serves this path. */
    static final String OTA_DIR = "tasksh-bundle";
    static final String OTA_FILE = "bundle.js";
    private static final int MIN_BYTES = 200_000;      // the real bundle is ~1.1 MB
    private static final int MAX_BYTES = 8_000_000;

    private static File dir(android.content.Context c) { return new File(c.getFilesDir(), OTA_DIR); }

    static File current(android.content.Context c) {
        File f = new File(dir(c), OTA_FILE);
        return f.isFile() ? f : null;
    }

    @PluginMethod
    public void info(PluginCall call) {
        File f = current(getContext());
        JSObject r = new JSObject();
        r.put("path", f == null ? "" : f.getAbsolutePath());
        r.put("bytes", f == null ? 0 : f.length());
        call.resolve(r);
    }

    /** Downloads `url` and, if it looks like a real bundle, installs it.
     *  Returns {ok, bytes} or {ok:false, error}. Never throws at the caller. */
    @PluginMethod
    public void download(PluginCall call) {
        final String url = call.getString("url", "");
        final String wantSha = call.getString("sha256", "");
        final String wantBytes = call.getString("bytes", "");
        JSObject r = new JSObject();
        if (url.isEmpty()) {
            r.put("ok", false);
            r.put("error", "no url");
            call.resolve(r);
            return;
        }

        HttpURLConnection conn = null;
        File tmp = null;
        try {
            conn = (HttpURLConnection) new URL(url).openConnection();
            conn.setConnectTimeout(15000);
            conn.setReadTimeout(30000);
            conn.setInstanceFollowRedirects(true);
            conn.setRequestProperty("Accept", "application/javascript, text/javascript, */*");
            int code = conn.getResponseCode();
            if (code != 200) {
                r.put("ok", false);
                r.put("error", "http " + code);
                call.resolve(r);
                return;
            }
            long len = conn.getContentLengthLong();
            if (len > MAX_BYTES) {
                r.put("ok", false);
                r.put("error", "too large");
                call.resolve(r);
                return;
            }
            // expected size from the feed, when it is known
            long want = 0;
            try { want = Long.parseLong(wantBytes); } catch (Exception e) { want = 0; }

            File d = dir(getContext());
            if (!d.isDirectory() && !d.mkdirs()) {
                r.put("ok", false);
                r.put("error", "no storage");
                call.resolve(r);
                return;
            }
            tmp = new File(d, OTA_FILE + ".part");

            long total = 0;
            byte[] buf = new byte[64 * 1024];
            InputStream in = conn.getInputStream();
            OutputStream out = new FileOutputStream(tmp);
            try {
                int n;
                while ((n = in.read(buf)) > 0) {
                    total += n;
                    if (total > MAX_BYTES) throw new IllegalStateException("too large");
                    out.write(buf, 0, n);
                }
                out.flush();
            } finally {
                try { out.close(); } catch (Exception ignored) {}
                try { in.close(); } catch (Exception ignored) {}
            }

            if (total < MIN_BYTES) {
                tmp.delete();
                r.put("ok", false);
                r.put("error", "too small: " + total);
                call.resolve(r);
                return;
            }
            if (want > 0 && total != want) {
                tmp.delete();
                r.put("ok", false);
                r.put("error", "size mismatch: " + total + " != " + want);
                call.resolve(r);
                return;
            }
            // A bundle that is not JavaScript would break the app on next
            // launch; check the first bytes look like the IIFE esbuild emits.
            String head = headOf(tmp, 64);
            if (!head.contains("function") && !head.contains("=>") && !head.contains("var ")) {
                tmp.delete();
                r.put("ok", false);
                r.put("error", "not a bundle");
                call.resolve(r);
                return;
            }
            String sha = sha256(tmp);
            if (!wantSha.isEmpty() && !wantSha.equalsIgnoreCase(sha)) {
                tmp.delete();
                r.put("ok", false);
                r.put("error", "checksum mismatch");
                call.resolve(r);
                return;
            }

            File dest = new File(d, OTA_FILE);
            if (dest.exists() && !dest.delete()) {
                tmp.delete();
                r.put("ok", false);
                r.put("error", "could not replace");
                call.resolve(r);
                return;
            }
            if (!tmp.renameTo(dest)) {
                tmp.delete();
                r.put("ok", false);
                r.put("error", "could not install");
                call.resolve(r);
                return;
            }
            r.put("ok", true);
            r.put("bytes", total);
            r.put("sha256", sha);
            call.resolve(r);
        } catch (Exception e) {
            if (tmp != null) tmp.delete();
            r.put("ok", false);
            r.put("error", String.valueOf(e.getMessage()));
            call.resolve(r);
        } finally {
            if (conn != null) conn.disconnect();
        }
    }

    /** Back to the copy shipped inside the APK. */
    @PluginMethod
    public void clear(PluginCall call) {
        File f = new File(dir(getContext()), OTA_FILE);
        boolean gone = !f.exists() || f.delete();
        JSObject r = new JSObject();
        r.put("ok", gone);
        call.resolve(r);
    }

    private static String headOf(File f, int n) throws Exception {
        FileInputStream in = new FileInputStream(f);
        try {
            byte[] b = new byte[n];
            int read = in.read(b);
            if (read <= 0) return "";
            return new String(b, 0, read, StandardCharsets.UTF_8);
        } finally {
            in.close();
        }
    }

    /** SHA-256 of the file, the same value CI records in version.json. */
    static String sha256(File f) throws Exception {
        java.security.MessageDigest md = java.security.MessageDigest.getInstance("SHA-256");
        FileInputStream in = new FileInputStream(f);
        try {
            byte[] buf = new byte[64 * 1024];
            int n;
            while ((n = in.read(buf)) > 0) md.update(buf, 0, n);
        } finally {
            in.close();
        }
        StringBuilder sb = new StringBuilder();
        for (byte b : md.digest()) sb.append(String.format("%02x", b));
        return sb.toString();
    }
}
