package kar.sot.controllers;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import kar.sot.model.dao.ResearchProjectDAO;
import org.json.JSONArray;
import spark.Request;
import spark.Response;

import static spark.Spark.halt;

public class ResearchProjectController {
    public static String getAllProjects(Request req, Response res) {
        ResearchProjectDAO rpDao = new ResearchProjectDAO();
        res.type("application/json");
        JSONArray arr = rpDao.getAllProjects();
        if(arr != null)
            return  arr.toString();
        return new JSONArray().toString();
    }

    public static String getProjectWithMaxIncome(Request req, Response res) {
        ResearchProjectDAO rpDao = new ResearchProjectDAO();
        res.type("application/json");
        JSONArray arr = rpDao.getProjectWithMaxIncome();
        if(arr != null)
            return  arr.toString();
        return new JSONArray().toString();
    }

    public static String getProjectWithMinIncome(Request req, Response res) {
        ResearchProjectDAO rpDao = new ResearchProjectDAO();
        res.type("application/json");
        JSONArray arr = rpDao.getProjectWithMinIncome();
        if(arr != null)
            return  arr.toString();
        return new JSONArray().toString();
    }

    public static String getProject(Request req, Response res) {
        ResearchProjectDAO rpDao = new ResearchProjectDAO();
        res.type("application/json");
        String rpid = req.params(":rpid");
        JSONArray arr = rpDao.getProject(rpid);
        if(arr != null)
            return  arr.toString();
        return new JSONArray().toString();
    }

    public static String postProject(Request req, Response res) {
        ResearchProjectDAO rpDao = new ResearchProjectDAO();
        JsonObject obj = new Gson().fromJson(req.body(),JsonObject.class);
        if(obj.entrySet().size() == 0) {
            halt(400,"Malformed Request!");
        }
        rpDao.postProject(obj);
        return "Project inserted successfully...";
    }

    public static String deleteProject(Request req, Response res) {
        ResearchProjectDAO rpDao = new ResearchProjectDAO();
        String rpid = req.params(":rpid");
        if(rpid == null) {
            halt(400,"Malformed Request!");
        }
        rpDao.deleteProject(rpid);
        return "Project deleted successfully...";
    }

    public static String updProjectProgress(Request req, Response res) {
        ResearchProjectDAO rpDAO = new ResearchProjectDAO();
        JsonObject obj = new Gson().fromJson(req.body(),JsonObject.class);
        if(obj.entrySet().size() == 0) {
            halt(400,"Malformed Request!");
        }
        rpDAO.updateProjectProgress(obj);
        return "Project progress updated successfully...";
    }

    public static String getActiveProjects(Request req, Response res) {
        ResearchProjectDAO rpDAO = new ResearchProjectDAO();
        JSONArray arr = rpDAO.getActiveProjects();
        res.type("application/json");
        if(arr != null)
            return arr.toString();
        return new JSONArray().toString();
    }

    public static String orderProjectsByIncomeDescOrder(Request req, Response res) {
        ResearchProjectDAO rpDAO = new ResearchProjectDAO();
        JSONArray arr = rpDAO.getProjectsOrderByIncome("desc_order_by_income");
        res.type("application/json");
        if(arr != null)
            return arr.toString();
        return new JSONArray().toString();
    }

    public static String orderProjectsByIncomeAscOrder(Request req, Response res) {
        ResearchProjectDAO rpDAO = new ResearchProjectDAO();
        JSONArray arr = rpDAO.getProjectsOrderByIncome("asc_order_by_income");
        res.type("application/json");
        if(arr != null)
            return arr.toString();
        return new JSONArray().toString();
    }

    public static String getProjectByResearcher(Request req, Response res) {
        ResearchProjectDAO rpDAO = new ResearchProjectDAO();
        String academicId = req.params(":academicId");
        if(academicId == null) {
            halt(400,"Malformed Request!");
        }
        JSONArray arr = rpDAO.getProjectByResearcher(academicId);
        res.type("application/json");
        if(arr != null)
            return arr.toString();
        return new JSONArray().toString();
    }

    public static String getProjectByResearcherPerDate(Request req, Response res) {
       ResearchProjectDAO rpDAO = new ResearchProjectDAO();
       String academicId = req.params(":academicId");
       if(academicId == null) {
           halt(400,"Malformed Request!");
       }
       JSONArray arr = rpDAO.getProjectByResearcherPerDate(academicId);
       res.type("application/json");
       if(arr != null)
           return arr.toString();
       return new JSONArray().toString();
   }
}