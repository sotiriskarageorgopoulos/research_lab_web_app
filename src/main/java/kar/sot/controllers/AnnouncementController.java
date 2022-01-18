package kar.sot.controllers;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import kar.sot.model.dao.AnnouncementDAO;
import org.json.JSONArray;
import spark.Request;
import spark.Response;

import static spark.Spark.halt;

public class AnnouncementController {

    public static String getAllAnnouncements(Request req, Response res) {
        AnnouncementDAO announcementDAO = new AnnouncementDAO();
        res.type("application/json");
        JSONArray arr = announcementDAO.getAllAnnouncements();
        if(arr != null)
        return arr.toString();
        return new JSONArray().toString();
    }

    public static String postAnnouncement(Request req,Response res) {
        AnnouncementDAO announcementDAO = new AnnouncementDAO();
        JsonObject obj = new Gson().fromJson(req.body(),JsonObject.class);
        if(obj.entrySet().size() == 0) {
            halt(400,"Malformed Request!");
        }
        announcementDAO.insertAnnouncement(obj);

        return "The announcement inserted successfully...";
    }

    public static String delAnnouncement(Request req,Response res) {
        AnnouncementDAO announcementDAO = new AnnouncementDAO();
        JsonObject obj = new Gson().fromJson(req.body(),JsonObject.class);
        if(obj.entrySet().size() == 0) {
            halt(400,"Malformed Request!");
        }
        announcementDAO.deleteAnnouncement(obj);
        return "The announcement deleted successfully...";
    }

    public static String updAnnouncementTitle(Request req, Response res) {
        AnnouncementDAO announcementDAO = new AnnouncementDAO();
        JsonObject obj = new Gson().fromJson(req.body(),JsonObject.class);
        if(obj.entrySet().size() == 0) {
            halt(400,"Malformed Request!");
        }
        announcementDAO.updateAnnouncementTitle(obj);
        return "The announcement title updated successfully...";
    }

    public static String updAnnouncementContent(Request req, Response res) {
        AnnouncementDAO announcementDAO = new AnnouncementDAO();
        JsonObject obj = new Gson().fromJson(req.body(),JsonObject.class);
        if(obj.entrySet().size() == 0) {
            halt(400,"Malformed Request!");
        }
        announcementDAO.updateAnnouncementContent(obj);
        return "The announcement content updated successfully...";
    }

    public static String getFiveRecentAnnouncements(Request req, Response res) {
        AnnouncementDAO announcementDAO = new AnnouncementDAO();
        JSONArray arr = announcementDAO.getFiveRecentAnnouncements();
        res.type("application/json");
        if(arr != null)
            return arr.toString();
        return new JSONArray().toString();
    }

    public static String getAnnouncement(Request req, Response res) {
        AnnouncementDAO announcementDAO = new AnnouncementDAO();
        JsonObject obj = new Gson().fromJson(req.body(),JsonObject.class);
        if(obj.entrySet().size() == 0) {
            halt(400,"Malformed Request");
        }
        res.type("application/json");
        JSONArray arr = announcementDAO.getAnnouncement(obj.get("aid").getAsString());
        if(arr != null)
            return arr.toString();
        return new JSONArray().toString();
    }
}
