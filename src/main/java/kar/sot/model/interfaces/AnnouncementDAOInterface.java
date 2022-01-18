package kar.sot.model.interfaces;

import com.google.gson.JsonObject;

import java.sql.SQLException;

public interface AnnouncementDAOInterface<T> {
    public T getAllAnnouncements() throws SQLException;
    public T getFiveRecentAnnouncements();
    public T getAnnouncement(String aid);
    public void insertAnnouncement(JsonObject obj);
    public void deleteAnnouncement(String aid);
    public void updateAnnouncementTitle(JsonObject obj);
    public void updateAnnouncementContent(JsonObject obj);
}
