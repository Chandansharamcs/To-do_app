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
        // v81: a tapped quest row arrives through a fill-in intent, which puts
        // its extras under different names. Both end up in the same queue.
        String kind = intent.getStringExtra("kind");
        if (kind == null) kind = "routine";
        if ("quest".equals(kind)) {
            id = intent.getStringExtra(WidgetProvider.EXTRA_QUEST_ID);
            if (id == null) id = intent.getStringExtra("questId");
        }
        if (id == null || id.isEmpty() || day == null || day.isEmpty()) return;

        // The tap is harmless when the routine is already ticked: markDoneLocally
        // is idempotent and the app de-duplicates by day. Feedback still matters
        // -- a tap that produces nothing at all reads as a broken widget -- so
        // the panel always redraws and the app is never opened from here.
        WidgetStore.queueAction(context, id, day, kind);
        if ("quest".equals(kind)) WidgetStore.markQuestDoneLocally(context, id);
        else WidgetStore.markDoneLocally(context, id, day);
        WidgetProvider.refreshAll(context);
    }
}
