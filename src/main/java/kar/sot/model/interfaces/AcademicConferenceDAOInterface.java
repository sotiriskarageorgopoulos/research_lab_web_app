package kar.sot.model.interfaces;

import com.google.gson.JsonObject;
import org.json.JSONObject;

public interface AcademicConferenceDAOInterface<T> {
    public T getConferencesForPublication(String pid);
    public void insertAcademicConference(JsonObject ac);
    public void deleteAcademicConference(JsonObject obj);
    public T getAllAcademicConfs();
}
