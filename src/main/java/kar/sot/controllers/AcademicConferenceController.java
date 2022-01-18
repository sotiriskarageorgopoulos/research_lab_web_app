package kar.sot.controllers;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import kar.sot.model.dao.AcademicConferenceDAO;
import org.json.JSONArray;
import spark.Request;
import spark.Response;

import static spark.Spark.halt;

public class AcademicConferenceController {
    public static String getAllAcademicConfs(Request request, Response res) {
        AcademicConferenceDAO acDAO = new AcademicConferenceDAO();
        res.type("application/json");
        JSONArray arr = acDAO.getAllAcademicConfs();
        if(arr != null)
            return arr.toString();
        return new JSONArray().toString();
    }

    public static String postAcademicConf(Request req, Response res) {
        AcademicConferenceDAO acDAO = new AcademicConferenceDAO();
        res.type("application/json");
        JsonObject obj = new Gson().fromJson(req.body(),JsonObject.class);
        if(obj.entrySet().size() == 0) {
            halt(400,"Malformed Request!");
        }
        acDAO.insertAcademicConference(obj);

        return "The academic conference inserted successfully...";
    }

    public static String delAcademicConf(Request req, Response res) {
        AcademicConferenceDAO acDAO = new AcademicConferenceDAO();
        JsonObject obj = new Gson().fromJson(req.body(),JsonObject.class);
        if(obj.entrySet().size() == 0) {
            halt(400, "Malformed Request");
        }
        acDAO.deleteAcademicConference(obj);
        return "Academic conference is deleted successfully...";
    }

    public static String getConferencesForPublication(Request req, Response res) {
        AcademicConferenceDAO acDAO = new AcademicConferenceDAO();
        JsonObject obj = new Gson().fromJson(req.body(),JsonObject.class);
        if(obj.entrySet().size() == 0) {
            halt(400, "Malformed Request");
        }
        JSONArray arr = acDAO.getConferencesForPublication(obj.get("pid").getAsString());
        res.type("application/json");
        if(arr != null)
            return arr.toString();
        return new JSONArray().toString();
    }

}
