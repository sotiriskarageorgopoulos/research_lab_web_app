package kar.sot.controllers;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import kar.sot.model.dao.CourseDAO;
import org.json.JSONArray;
import spark.Request;
import spark.Response;

import static spark.Spark.halt;

public class CourseController {
    public static String getAllCourses(Request req, Response res) {
        CourseDAO courseDAO = new CourseDAO();
        JSONArray arr = courseDAO.getAllCourses();
        res.type("application/json");
        if(arr != null)
            return arr.toString();
        return new JSONArray().toString();
    }

    public static String postCourse(Request req,Response res) {
        CourseDAO courseDAO = new CourseDAO();
        JsonObject obj = new Gson().fromJson(req.body(),JsonObject.class);
        if(obj.entrySet().size() == 0) {
            halt(400,"Malformed Request!");
        }
        courseDAO.insertCourse(obj);

        return "Course inserted sucessfully...";
    }

    public static String delCourse(Request req, Response res) {
        CourseDAO courseDAO = new CourseDAO();
        String cid = req.params(":cid");
        if(cid == null) {
            halt(400,"Malformed Request!");
        }
        courseDAO.deleteCourse(cid);
        return "Course deleted successfully...";
    }

    public static String updateCourse(Request req, Response res) {
        CourseDAO courseDAO = new CourseDAO();
        JsonObject obj = new Gson().fromJson(req.body(),JsonObject.class);
        if(obj.entrySet().size() == 0) {
            halt(400,"Malformed Request!");
        }
        courseDAO.updateCourseTitle(obj);
        return "Course title updated successfully...";
    }

    public static String updateCourseDesc(Request req, Response res) {
        CourseDAO courseDAO = new CourseDAO();
        JsonObject obj = new Gson().fromJson(req.body(),JsonObject.class);
        if(obj.entrySet().size() == 0) {
            halt(400,"Malformed Request!");
        }
        courseDAO.updateCourseDesc(obj);
        return "Course description updated successfully...";
    }

    public static String updateCourseECTS(Request req, Response res) {
        CourseDAO courseDAO = new CourseDAO();
        JsonObject obj = new Gson().fromJson(req.body(),JsonObject.class);
        if(obj.entrySet().size() == 0) {
            halt(400,"Malformed Request!");
        }
        courseDAO.updateCourseECTS(obj);
        return "Course ECTS updated successfully...";
    }

    public static String getCourseByLevel(Request req, Response res) {
        CourseDAO courseDAO = new CourseDAO();
        String level = req.params(":level");
        if(level == null) {
            halt(400,"Malformed Request!");
        }
        res.type("application/json");
        JSONArray arr = courseDAO.getCourseByLevel(level);
        if(arr != null)
            return arr.toString();
        return new JSONArray().toString();
    }

    public static String getCourse(Request req, Response res) {
        CourseDAO courseDAO = new CourseDAO();
        String cid = req.params(":cid");
        if(cid == null) {
            halt(400,"Malformed Request!");
        }
        res.type("application/json");
        JSONArray arr = courseDAO.getCourse(cid);
        if(arr != null)
            return arr.toString();
        return new JSONArray().toString();
    }

}
