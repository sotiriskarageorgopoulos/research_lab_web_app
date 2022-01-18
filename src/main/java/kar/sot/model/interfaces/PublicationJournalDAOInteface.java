package kar.sot.model.interfaces;

import com.google.gson.JsonObject;

public interface PublicationJournalDAOInteface<T> {
    public T getPublicationJournals();
    public void postPublicationJournal(JsonObject obj);
}
