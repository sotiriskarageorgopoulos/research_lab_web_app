package kar.sot.controllers;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import kar.sot.model.dao.LabDAO;
import org.json.JSONArray;
import spark.Request;
import spark.Response;

import static spark.Spark.halt;

public class LabController {
    public static String getAllLabs(Request req, Response res) {
        LabDAO labDAO = new LabDAO();
        res.type("application/json");
        JSONArray arr = labDAO.getLabs();
        if(arr != null)
        return arr.toString();
        return new JSONArray().toString();
    }

    public static String postLab(Request req, Response res) {
        LabDAO labDAO = new LabDAO();
        JsonObject obj = new Gson().fromJson(req.body(),JsonObject.class);
        if(obj.entrySet().size() == 0) {
            halt(400,"Malformed Request!");
        }
        labDAO.postLab(obj);
        return "Lab inserted successfully...";
    }

    public static String deleteLab(Request req, Response res) {
        LabDAO labDAO = new LabDAO();
        String lid = req.params(":lid");
        if(lid == null) {
            halt(400,"Malformed Request!");
        }
        labDAO.deleteLab(lid);
        return "Lab deleted successfully...";
    }

    public static String updateLabTitle(Request req, Response res) {
        LabDAO labDAO = new LabDAO();
        JsonObject obj = new Gson().fromJson(req.body(),JsonObject.class);
        if(obj.entrySet().size() == 0) {
            halt(400,"Malformed Request!");
        }
        labDAO.updateLabTitle(obj);
        return "Lab title updated successfully...";
    }

    public static String updateLabDesc(Request req, Response res) {
        LabDAO labDAO = new LabDAO();
        JsonObject obj = new Gson().fromJson(req.body(),JsonObject.class);
        if(obj.entrySet().size() == 0) {
            halt(400,"Malformed Request!");
        }
        labDAO.updateLabDesc(obj);
        return "Lab description updated successfully...";
    }

    public static String updateLabWebPage(Request req, Response res) {
        LabDAO labDAO = new LabDAO();
        JsonObject obj = new Gson().fromJson(req.body(),JsonObject.class);
        if(obj.entrySet().size() == 0) {
            halt(400,"Malformed Request!");
        }
        labDAO.updateLabWebPage(obj);
        return "Lab web page updated successfully...";
    }

    public static String getLabOfMember(Request req, Response res) {
        LabDAO labDAO = new LabDAO();
        String academicId = req.params(":academicId");
        if(academicId == null) {
            halt(400,"Malformed Request");
        }
        JSONArray arr = labDAO.getLabOfMember(academicId);
        res.type("application/json");
        if(arr != null)
            return arr.toString();
        return new JSONArray().toString();
    }

    public static String getLab(Request req, Response res) {
        LabDAO labDAO = new LabDAO();
        String lid = req.params(":lid");
        if(lid == null) {
            halt(400, "Malformed Request");
        }
        JSONArray arr = labDAO.getLab(lid);
        res.type("application/json");
        if(arr != null)
            return arr.toString();
        return new JSONArray().toString();
    }
}
