package kar.sot.model.interfaces;

import com.google.gson.JsonObject;

public interface ResearchMemberProjectDAOInterface<T> {
    public T getAllResearchMemberProjects();
    public void postResearchMemberProject(JsonObject obj);
}
