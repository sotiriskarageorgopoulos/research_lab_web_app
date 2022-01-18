package kar.sot.controllers;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import kar.sot.model.dao.ResearchMemberDAO;
import org.json.JSONArray;
import spark.Request;
import spark.Response;

import static spark.Spark.halt;

public class ResearchMemberController {
    public static String getAllResMembers(Request req, Response res) {
        ResearchMemberDAO rmDAO = new ResearchMemberDAO();
        res.type("application/json");
        JSONArray arr = rmDAO.getAllMembers();
        if (arr != null)
            return arr.toString();
        return new JSONArray().toString();
    }

    public static String postResMember(Request req, Response res) {
        ResearchMemberDAO rmDAO = new ResearchMemberDAO();
        JsonObject obj = new Gson().fromJson(req.body(), JsonObject.class);
        if (obj.entrySet().size() == 0) {
            halt(400, "Malformed Request");
        }
        rmDAO.postMember(obj);
        return "Research Member inserted successfully...";
    }

    public static String delResMember(Request req, Response res) {
        ResearchMemberDAO rmDAO = new ResearchMemberDAO();
        String academicId = req.params(":academicId");
        if(academicId == null) {
            halt(400, "Malformed Request");
        }
        rmDAO.deleteMember(academicId);
        return "Research Member deleted successfully...";
    }

    public static String updShortCV(Request req, Response res) {
        ResearchMemberDAO rmDAO = new ResearchMemberDAO();
        JsonObject obj = new Gson().fromJson(req.body(), JsonObject.class);
        if(obj.entrySet().size() == 0) {
            halt(400, "Malformed Request");
        }
        rmDAO.updateShortCV(obj);
        return "Short CV updated successfully...";
    }

    public static String updLevel(Request req, Response res) {
        ResearchMemberDAO rmDAO = new ResearchMemberDAO();
        JsonObject obj = new Gson().fromJson(req.body(), JsonObject.class);
        if(obj.entrySet().size() == 0) {
            halt(400, "Malformed Request");
        }
        rmDAO.updateLevel(obj);
        return "Level updated successfully...";
    }

    public static String updImage(Request req, Response res) {
        ResearchMemberDAO rmDAO = new ResearchMemberDAO();
        JsonObject obj = new Gson().fromJson(req.body(),JsonObject.class);
        if(obj.entrySet().size() == 0) {
            halt(400, "Malformed Request");
        }
        rmDAO.updateImage(obj);
        return "Image updated successfully...";
    }

    public static String updAddress(Request req, Response res) {
        ResearchMemberDAO rmDAO = new ResearchMemberDAO();
        JsonObject obj = new Gson().fromJson(req.body(),JsonObject.class);
        if(obj.entrySet().size() == 0) {
            halt(400, "Malformed Request");
        }
        rmDAO.updateAddress(obj);
        return "Address updated successfully...";
    }

    public static String updTel(Request req, Response res) {
        ResearchMemberDAO rmDAO = new ResearchMemberDAO();
        JsonObject obj = new Gson().fromJson(req.body(),JsonObject.class);
        if(obj.entrySet().size() == 0) {
            halt(400, "Malformed Request");
        }
        rmDAO.updateTel(obj);
        return "Tel updated successfully...";
    }

    public static String updWebPage(Request req, Response res) {
        ResearchMemberDAO rmDAO = new ResearchMemberDAO();
        JsonObject obj = new Gson().fromJson(req.body(),JsonObject.class);
        if(obj.entrySet().size() == 0) {
            halt(400, "Malformed Request");
        }
        rmDAO.updateWebPage(obj);
        return "Web Page updated successfully...";
    }

    public static String getMembersWithAtLeastOneCourse(Request req, Response res) {
        ResearchMemberDAO rmDAO = new ResearchMemberDAO();
        JSONArray arr = rmDAO.getMembersWithAtLeastOneCourse();
        res.type("application/json");
        if(arr != null)
            return arr.toString();
        return new JSONArray().toString();
    }

    public static String getMembersWithAtLeastOnePublication(Request req, Response res) {
        ResearchMemberDAO rmDAO = new ResearchMemberDAO();
        JSONArray arr = rmDAO.getMembersWithAtLeastOnePublication();
        res.type("application/json");
        if(arr != null)
            return arr.toString();
        return new JSONArray().toString();
    }

    public static String getMembersWithoutProjects(Request req, Response res) {
        ResearchMemberDAO rmDAO = new ResearchMemberDAO();
        JSONArray arr = rmDAO.getMembersWithoutProjects();
        res.type("application/json");
        if(arr != null)
            return arr.toString();
        return new JSONArray().toString();
    }

    public static String getMembersWithoutPublications(Request req, Response res) {
        ResearchMemberDAO rmDAO = new ResearchMemberDAO();
        JSONArray arr = rmDAO.getMembersWithoutPublications();
        res.type("application/json");
        if(arr != null)
            return arr.toString();
        return new JSONArray().toString();
    }

    public static String getMemberWithMaxPublications(Request req, Response res) {
        ResearchMemberDAO rmDAO = new ResearchMemberDAO();
        JSONArray arr = rmDAO.getMemberWithMaxPublications();
        res.type("application/json");
        if(arr != null)
            return arr.toString();
        return new JSONArray().toString();
    }

    public static String getMemberWithMinPublications(Request req, Response res) {
        ResearchMemberDAO rmDAO = new ResearchMemberDAO();
        JSONArray arr = rmDAO.getMemberWithMinPublications();
        res.type("application/json");
        if(arr != null)
            return arr.toString();
        return new JSONArray().toString();
    }

    public static String getMemberWithMinProjects(Request req, Response res) {
        ResearchMemberDAO rmDAO = new ResearchMemberDAO();
        JSONArray arr = rmDAO.getMemberWithMinProjects();
        res.type("application/json");
        if(arr != null)
            return arr.toString();
        return new JSONArray().toString();
    }

    public static String getExternalMemberWithMaxProjects(Request req, Response res) {
        ResearchMemberDAO rmDAO = new ResearchMemberDAO();
        JSONArray arr = rmDAO.getExternalMemberWithMaxProjects();
        res.type("application/json");
        if(arr != null)
            return arr.toString();
        return new JSONArray().toString();
    }

    public static String getResearcherByCourse(Request req, Response res) {
        ResearchMemberDAO rmDAO = new ResearchMemberDAO();
        String cid = req.params(":cid");
        if(cid == null) {
            halt(400,"Malformed Request");
        }
        JSONArray arr = rmDAO.getResearcherByCourse(cid);
        res.type("application/json");
        if(arr != null)
            return arr.toString();
        return new JSONArray().toString();
    }

    public static String getMembersOfProject(Request req, Response res) {
        ResearchMemberDAO rmDAO = new ResearchMemberDAO();
        String rpid = req.params(":rpid");
        if(rpid == null) {
            halt(400,"Malformed Request");
        }
        JSONArray arr = rmDAO.getMembersOfProject(rpid);
        res.type("application/json");
        if(arr != null)
            return arr.toString();
        return new JSONArray().toString();
    }

    public static String getMemberBySurname(Request req, Response res) {
        ResearchMemberDAO rmDAO = new ResearchMemberDAO();
        String surname = req.params(":surname");
        if(surname == null) {
            halt(400,"Malformed Request");
        }
        JSONArray arr = rmDAO.getMemberBySurname(surname);
        res.type("application/json");
        if(arr != null)
            return arr.toString();
        return new JSONArray().toString();
    }

    public static String getMember(Request req, Response res) {
        ResearchMemberDAO rmDAO = new ResearchMemberDAO();
        String academicId = req.params(":academicId");
        if(academicId == null) {
            halt(400,"Malformed Request");
        }
        JSONArray arr = rmDAO.getMember(academicId);
        res.type("application/json");
        if(arr != null)
            return arr.toString();
        return new JSONArray().toString();
    }

    public static String getMembersByLevel(Request req, Response res) {
        ResearchMemberDAO rmDAO = new ResearchMemberDAO();
        String level = req.params(":level");
        if(level == null) {
            halt(400,"Malformed Request");
        }
        JSONArray arr = rmDAO.getMembersByLevel(level);
        res.type("application/json");
        if(arr != null)
            return arr.toString();
        return new JSONArray().toString();
    }
}
