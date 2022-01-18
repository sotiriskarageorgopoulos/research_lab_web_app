package kar.sot.model.interfaces;

import com.google.gson.JsonObject;

public interface ResearchMemberPublicationDAOInterface<T> {
    public T getResearchMemberPublications();
    public void postResearchMemberPublication(JsonObject obj);
}
