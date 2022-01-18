package kar.sot.model.interfaces;

import com.google.gson.JsonObject;
import org.json.JSONArray;

public interface JournalDAOInterface<T> {
    public T getJournalsForPublication(String pid);
    public T getAllJournals();
    public void postJournal(JsonObject obj);
    public void deleteJournal(JsonObject obj);
    public void updJournalWebPage(JsonObject obj);
}
