package kar.sot.controllers;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import kar.sot.model.dao.JournalDAO;
import org.json.JSONArray;
import spark.Request;
import spark.Response;

import static spark.Spark.halt;

public class JournalController {
    public static String getJournals(Request req, Response res) {
        JournalDAO jDAO = new JournalDAO();
        res.type("application/json");
        JSONArray arr = jDAO.getAllJournals();
        if(arr != null)
        return arr.toString();
        return new JSONArray().toString();
    }

    public static String postJournal(Request req, Response res) {
        JournalDAO journalDAO = new JournalDAO();
        JsonObject obj = new Gson().fromJson(req.body(),JsonObject.class);
        if(obj.entrySet().size() == 0) {
            halt(400,"Malformed Request...");
        }
        journalDAO.postJournal(obj);
        return "The journal inserted successfully...";
    }

    public static String deleteJournal(Request req, Response res) {
        JournalDAO journalDAO = new JournalDAO();
        String jid = req.params(":jid");
        if(jid == null) {
            halt(400,"Malformed Request...");
        }
        journalDAO.deleteJournal(jid);
        return "The journal deleted successfully...";
    }

    public static String updateJournalWebPage(Request req, Response res) {
        JournalDAO journalDAO = new JournalDAO();
        JsonObject obj = new Gson().fromJson(req.body(),JsonObject.class);
        if(obj.entrySet().size() == 0) {
            halt(400,"Malformed Request...");
        }
        journalDAO.updJournalWebPage(obj);
        return "The journal web site updated successfully...";
    }

    public static String getJournalsForPublication(Request req, Response res) {
        JournalDAO journalDAO = new JournalDAO();
        String pid = req.params(":pid");
        if(pid == null) {
            halt(400,"Malformed Request...");
        }
        JSONArray arr = journalDAO.getJournalsForPublication(pid);
        res.type("application/json");
        if(arr != null)
            return arr.toString();
        return new JSONArray().toString();
    }
}
