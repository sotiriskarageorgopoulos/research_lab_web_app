package kar.sot.controllers;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import kar.sot.model.dao.PublicationDAO;
import org.json.JSONArray;
import spark.Request;
import spark.Response;

import static spark.Spark.halt;

public class PublicationController {
    public static String getPublications(Request req, Response res) {
        PublicationDAO pDAO = new PublicationDAO();
        res.type("application/json");
        JSONArray arr = pDAO.getPublications();
        if(arr != null)
            return arr.toString();
        return new JSONArray().toString();
    }

    public static String postPublication(Request req, Response res) {
        PublicationDAO pDAO = new PublicationDAO();
        JsonObject obj = new Gson().fromJson(req.body(), JsonObject.class);
        if(obj.entrySet().size() == 0) {
            halt(400,"Malformed Request!");
        }
        pDAO.postPublication(obj);
        return "Publication inserted successfully...";
    }

    public static String delPublication(Request req, Response res) {
        PublicationDAO pDAO = new PublicationDAO();
        JsonObject obj = new Gson().fromJson(req.body(),JsonObject.class);
        if(obj.entrySet().size() == 0) {
            halt(400,"Malformed Request!");
        }
        pDAO.deletePublication(obj);
        return "Publication deleted successfully...";
    }

    public static String getPublicationsInJournal(Request req, Response res) {
        PublicationDAO pDAO = new PublicationDAO();
        JSONArray arr = pDAO.getPublicationsInJournal();
        res.type("application/json");
        if(arr != null)
            return arr.toString();
        return new JSONArray().toString();
    }

    public static String getPublicationsInAcademicConf(Request req, Response res) {
        PublicationDAO pDAO = new PublicationDAO();
        JSONArray arr = pDAO.getPublicationsInAcademicConf();
        res.type("application/json");
        if(arr != null)
            return arr.toString();
        return new JSONArray().toString();
    }

    public static String getPublicationsByResearcherInDescOrder(Request req, Response res) {
        PublicationDAO pDAO = new PublicationDAO();
        JsonObject obj = new Gson().fromJson(req.body(),JsonObject.class);
        if(obj.entrySet().size() == 0) {
            halt(400, "Malformed Request");
        }
        res.type("application/json");
        String academicId = obj.get("academicId").getAsString();
        JSONArray arr = pDAO.getPublicationsByResearcher(academicId,"desc");
        if (arr != null)
            return arr.toString();
        return new JSONArray().toString();
    }

    public static String getPublicationsByResearcherInAscOrder(Request req, Response res) {
        PublicationDAO pDAO = new PublicationDAO();
        JsonObject obj = new Gson().fromJson(req.body(),JsonObject.class);
        if(obj.entrySet().size() == 0) {
            halt(400, "Malformed Request");
        }
        res.type("application/json");
        String academicId = obj.get("academicId").getAsString();
        JSONArray arr = pDAO.getPublicationsByResearcher(academicId,"asc");
        if (arr != null)
            return arr.toString();
        return new JSONArray().toString();
    }

    public static String getPublicationsPerJournal(Request req, Response res) {
        PublicationDAO pDAO = new PublicationDAO();
        JsonObject obj = new Gson().fromJson(req.body(),JsonObject.class);
        if(obj.entrySet().size() == 0) {
            halt(400,"Malformed Request");
        }
        res.type("application/json");
        JSONArray arr = pDAO.getPublicationsPerJournal(obj.get("academicId").getAsString());
        if(arr != null)
            return arr.toString();
        return new JSONArray().toString();
    }

    public static String getCommonPublications(Request req, Response res) {
        PublicationDAO pDAO = new PublicationDAO();
        res.type("application/json");
        JsonObject obj = new Gson().fromJson(req.body(),JsonObject.class);
        if(obj.entrySet().size() == 0) {
            halt(400,"Malformed Request");
        }
        String firstAcademicId = obj.get("firstAcademicId").getAsString();
        String secondAcademicId = obj.get("secondAcademicId").getAsString();
        JSONArray arr = pDAO.getCommonPublications(firstAcademicId,secondAcademicId);
        if(arr != null)
            return arr.toString();
        return new JSONArray().toString();
    }

    public static String getPublication(Request req, Response res) {
        PublicationDAO pDAO = new PublicationDAO();
        JsonObject obj = new Gson().fromJson(req.body(),JsonObject.class);
        if(obj.entrySet().size() == 0) {
            halt(400,"Malformed Request");
        }
        res.type("application/json");
        JSONArray arr = pDAO.getPublication(obj.get("pid").getAsString());
        if(arr != null)
            return arr.toString();
        return new JSONArray().toString();
    }
}
