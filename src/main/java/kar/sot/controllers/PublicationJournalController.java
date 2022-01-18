package kar.sot.controllers;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import kar.sot.model.dao.PublicationJournalDAO;
import org.json.JSONArray;
import spark.Request;
import spark.Response;

import static spark.Spark.halt;

public class PublicationJournalController {
    public static String getPublicationJournal(Request req, Response res) {
        PublicationJournalDAO pjDAO = new PublicationJournalDAO();
        res.type("application/json");
        JSONArray arr = pjDAO.getPublicationJournals();
        if(arr != null)
            return arr.toString();
        return new JSONArray().toString();
    }

    public static String postPublicationJournal(Request req, Response res) {
        PublicationJournalDAO pjDAO = new PublicationJournalDAO();
        JsonObject obj = new Gson().fromJson(req.body(),JsonObject.class);
        if(obj.entrySet().size() == 0) {
            halt(400,"Malformed Request!");
        }
        pjDAO.postPublicationJournal(obj);
        return "Publication and Journal id inserted successfully...";
    }
}
