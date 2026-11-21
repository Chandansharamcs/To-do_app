package sh.tasks.app;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;

/**
 * v78: the widget's tick button.
 *
 * Tapping it must not open the app, so the completion is written to the store
 * and the widget redraws itself. The app picks the queue up on its next open or
 * resume and applies it as a normal completion, which is what makes streaks and
 * XP correct.
 */
public class CompleteReceiver extends BroadcastReceiver {

    static final String ACTION_COMPLETE = "sh.tasks.app.WIDGET_COMPLETE";

    @Override
    public void onReceive(Context context, Intent intent) {
        if (intent == null) return;
        String action = intent.getAction();
        if (!ACTION_COMPLETE.equals(action) && !WidgetProvider.ACTION_TICK.equals(action)) return;

        String id = intent.getStringExtra("id");
        String day = intent.getStringExtra("day");
        if (id == null || id.isEmpty() || day == null || day.isEmpty()) return;

        WidgetStore.queueAction(context, id, day);
        WidgetStore.markDoneLocally(context, id, day);
        WidgetProvider.refreshAll(context);
    }
}
