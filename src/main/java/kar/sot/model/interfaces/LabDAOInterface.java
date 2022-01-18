package kar.sot.model.interfaces;

import com.google.gson.JsonObject;

import java.sql.SQLException;

public interface LabDAOInterface<T> {
    public T getLabsOfMember(String academicId);
    public T getLab(String lid);
    public void postLab(JsonObject obj);
    public void deleteLab(JsonObject obj) throws SQLException, ClassNotFoundException;
    public T getLabs() throws SQLException, ClassNotFoundException;
    public void updateLabTitle(JsonObject obj);
    public void updateLabDesc(JsonObject obj);
    public void updateLabWebPage(JsonObject obj);
}
