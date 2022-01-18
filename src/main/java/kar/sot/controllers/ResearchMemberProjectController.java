package kar.sot.controllers;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import kar.sot.model.dao.ResearchMemberProjectDAO;
import org.json.JSONArray;
import spark.Request;
import spark.Response;

import static spark.Spark.halt;

public class ResearchMemberProjectController {
    public static String getAllResearchMemberProjects(Request req, Response res) {
        ResearchMemberProjectDAO rmpDAO = new ResearchMemberProjectDAO();
        res.type("application/json");
        JSONArray arr = rmpDAO.getAllResearchMemberProjects();
        if(arr != null)
        return arr.toString();
        return new JSONArray().toString();
    }

    public static String postResearchMemberProject(Request req, Response res) {
        ResearchMemberProjectDAO rmpDAO = new ResearchMemberProjectDAO();
        JsonObject obj = new Gson().fromJson(req.body(),JsonObject.class);
        if(obj.entrySet().size() == 0) {
            halt(400,"Malformed Request!");
        }
        rmpDAO.postResearchMemberProject(obj);
        return "Research Member and Project id inserted successfully...";
    }
}
