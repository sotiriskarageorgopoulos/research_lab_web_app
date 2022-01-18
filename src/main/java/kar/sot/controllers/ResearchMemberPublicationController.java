package kar.sot.controllers;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import kar.sot.model.dao.ResearchMemberPublicationDAO;
import org.json.JSONArray;
import spark.Request;
import spark.Response;

import static spark.Spark.halt;

public class ResearchMemberPublicationController {
    public static String getResearchMemberPublications(Request req, Response res) {
        ResearchMemberPublicationDAO rmpDAO = new ResearchMemberPublicationDAO();
        res.type("application/json");
        JSONArray arr = rmpDAO.getResearchMemberPublications();
        if(arr != null)
            return arr.toString();
        return new JSONArray().toString();
    }

    public static String postResearchMemberPublication(Request req, Response res) {
        ResearchMemberPublicationDAO rmpDAO = new ResearchMemberPublicationDAO();
        JsonObject obj = new Gson().fromJson(req.body(),JsonObject.class);
        if(obj.entrySet().size() == 0) {
            halt(400, "Malformed Request");
        }
        rmpDAO.postResearchMemberPublication(obj);
        return "Member and Publication inserted successfully...";
    }
}
