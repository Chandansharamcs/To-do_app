package sh.tasks.app;

import android.appwidget.AppWidgetManager;
import android.content.Context;
import android.content.Intent;
import android.view.View;
import android.widget.RemoteViews;
import android.widget.RemoteViewsService;

import org.json.JSONArray;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

/**
 * v81: the scrollable quest list inside the widget.
 *
 * A ListView in a widget cannot be filled by the widget itself: the launcher
 * asks a RemoteViewsService for the rows, at its own pace, and the widget only
 * hands over a factory. That is also why the list stays scrollable while the
 * app is closed -- nothing here runs app code, it only reads the model the app
 * pushed into WidgetStore.
 *
 * Service context is the only signal that a row was tapped, so the row's own
 * position is the key: it is looked up in the same array it was built from.
 */
public class WidgetQuestService extends RemoteViewsService {

    @Override
    public RemoteViewsFactory onGetViewFactory(Intent intent) {
        return new QuestFactory(getApplicationContext());
    }

    private static class QuestFactory implements RemoteViewsFactory {
        private final Context ctx;
        private List<JSONObject> rows = new ArrayList<>();

        QuestFactory(Context ctx) { this.ctx = ctx; }

        @Override
        public void onCreate() { load(); }

        /** Called when the widget asks for a refresh: the only place the data
         *  is re-read, so a tick and a reconcile both end up here. */
        @Override
        public void onDataSetChanged() { load(); }

        private void load() {
            rows = new ArrayList<>();
            String raw = WidgetStore.readModel(ctx);
            if (raw == null) return;
            try {
                JSONObject m = new JSONObject(raw);
                JSONArray q = m.optJSONArray("quests");
                if (q == null) return;
                for (int i = 0; i < q.length(); i++) {
                    JSONObject o = q.optJSONObject(i);
                    if (o != null) rows.add(o);
                }
            } catch (Exception e) {
                rows = new ArrayList<>();
            }
        }

        @Override
        public int getCount() { return rows.size(); }

        @Override
        public RemoteViews getViewAt(int position) {
            if (position < 0 || position >= rows.size()) return null;
            JSONObject q = rows.get(position);

            RemoteViews v = new RemoteViews(ctx.getPackageName(), R.layout.widget_quest_row);
            boolean done = q.optBoolean("done", false);

            v.setTextViewText(R.id.quest_dot, done ? "●" : "○");
            v.setTextViewText(R.id.quest_text, q.optString("label", "quest"));
            int coins = q.optInt("coins", 0);
            v.setTextViewText(R.id.quest_coins, coins > 0 ? "+" + coins : "");

            // A finished quest is dimmed rather than removed: the list is also
            // the day's scoreboard, and a row that vanishes is confusing.
            v.setTextColor(R.id.quest_text, done ? 0xFF6E8598 : 0xFFE4F2FA);
            v.setTextColor(R.id.quest_dot, done ? 0xFF4D7C8C : 0xFF5EEAD4);

            // The row itself is the tap target.
            Intent fill = new Intent();
            fill.putExtra(WidgetProvider.EXTRA_QUEST_ID, q.optString("id", ""));
            fill.putExtra(WidgetProvider.EXTRA_QUEST_NAME, q.optString("label", ""));
            v.setOnClickFillInIntent(R.id.quest_row, fill);
            return v;
        }

        @Override
        public RemoteViews getLoadingView() { return null; }
        @Override
        public int getViewTypeCount() { return 1; }
        @Override
        public long getItemId(int position) { return position; }
        @Override
        public boolean hasStableIds() { return false; }
        @Override
        public void onDestroy() { rows = new ArrayList<>(); }
    }
}
