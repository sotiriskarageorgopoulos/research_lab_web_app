package kar.sot.controllers;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import kar.sot.model.dao.PublicationAcademicConfDAO;
import org.json.JSONArray;
import spark.Request;
import spark.Response;

import static spark.Spark.halt;

public class PublicationAcademicConfController {
    public static String getPublicationAcademicConfs(Request req, Response res) {
        PublicationAcademicConfDAO pacDAO = new PublicationAcademicConfDAO();
        res.type("application/json");
        JSONArray arr = pacDAO.getPublicationAcademicConfs();
        if(arr != null)
            return arr.toString();
        return arr.toString();
    }

    public static String postPublicationAcademicConfs(Request req, Response res) {
        PublicationAcademicConfDAO pacDAO = new PublicationAcademicConfDAO();
        JsonObject obj = new Gson().fromJson(req.body(),JsonObject.class);
        if(obj.entrySet().size() == 0) {
            halt(403,"Malformed Request");
        }
        pacDAO.postPublicationAcademicConf(obj);
        return "Publication and Academic Conference id inserted successfully...";
    }

}
