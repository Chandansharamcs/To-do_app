package sh.tasks.app;

import android.app.Activity;
import android.os.Bundle;
import android.view.Gravity;
import android.view.View;
import android.view.WindowManager;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.TextView;

/**
 * v81: the wall.
 *
 * Drawn in code rather than XML because it is a single screen with five views
 * and this way there is no layout to get out of step with the copy. It is not
 * dismissible by tapping elsewhere -- that is the point -- so the only exits
 * are the back gesture, home, or opening tasks.sh.
 */
public class BlockWallActivity extends Activity {

    @Override
    public void onCreate(Bundle b) {
        super.onCreate(b);
        // show over the lock screen too: a limit that pauses when the phone is
        // locked for a second would be trivially bypassed
        if (android.os.Build.VERSION.SDK_INT >= 27) {
            setShowWhenLocked(true);
            setTurnScreenOn(true);
        }
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);

        String label = getIntent().getStringExtra("label");
        long used = getIntent().getLongExtra("usedMin", 0);
        long limit = getIntent().getLongExtra("limitMin", 0);
        int bg = 0xFF070A0E, ink = 0xFFEAF6FF, dim = 0xFF8FA3B0, accent = 0xFF5EEAD4;

        LinearLayout root = new LinearLayout(this);
        root.setOrientation(LinearLayout.VERTICAL);
        root.setGravity(Gravity.CENTER);
        root.setBackgroundColor(bg);
        int pad = (int) (28 * getResources().getDisplayMetrics().density);
        root.setPadding(pad, pad, pad, pad);

        root.addView(text("LIMIT REACHED", 11, accent, 0.22f));
        root.addView(text(label == null ? "this app" : label, 30, ink, 0f), gap(14));
        root.addView(text(used + " of " + limit + " minutes used", 13, dim, 0f), gap(6));
        root.addView(text("closed until tomorrow · resets at 3:00 AM", 12, dim, 0f), gap(26));

        Button open = new Button(this);
        open.setText("open tasks.sh");
        open.setAllCaps(false);
        open.setTextColor(accent);
        open.setBackgroundColor(0x1A5EEAD4);
        open.setOnClickListener(v -> {
            android.content.Intent i = new android.content.Intent(this, MainActivity.class);
            startActivity(i);
            finish();
        });
        root.addView(open, gap(18));

        Button home = new Button(this);
        home.setText("go home");
        home.setAllCaps(false);
        home.setTextColor(dim);
        home.setBackgroundColor(0x00000000);
        home.setOnClickListener(v -> {
            android.content.Intent i = new android.content.Intent(android.content.Intent.ACTION_MAIN);
            i.addCategory(android.content.Intent.CATEGORY_HOME);
            i.addFlags(android.content.Intent.FLAG_ACTIVITY_NEW_TASK);
            startActivity(i);
            finish();
        });
        root.addView(home);

        setContentView(root);
    }

    private TextView text(String s, int sp, int colour, float spacing) {
        TextView t = new TextView(this);
        t.setText(s);
        t.setTextSize(sp);
        t.setTextColor(colour);
        t.setGravity(Gravity.CENTER);
        t.setLetterSpacing(spacing);
        t.setTypeface(android.graphics.Typeface.MONOSPACE);
        return t;
    }

    private LinearLayout.LayoutParams gap(int dp) {
        LinearLayout.LayoutParams p = new LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.WRAP_CONTENT, LinearLayout.LayoutParams.WRAP_CONTENT);
        p.topMargin = (int) (dp * getResources().getDisplayMetrics().density);
        return p;
    }

    @Override
    public void onBackPressed() {
        // back is allowed: trapping someone on a wall with no exit is a bug,
        // not a feature. Home works too, and the service raises it again.
        super.onBackPressed();
    }

    @Override
    public void onPause() {
        super.onPause();
        finish();   // never linger over whatever they open next
    }
}
