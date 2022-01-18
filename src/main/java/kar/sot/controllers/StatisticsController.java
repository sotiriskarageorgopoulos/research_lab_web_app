package kar.sot.controllers;

import kar.sot.model.dao.StatisticsDAO;
import org.json.JSONArray;
import spark.Request;
import spark.Response;

public class StatisticsController {
    public static String getPublicationsPerYear(Request req, Response res) {
        StatisticsDAO statisticsDAO = new StatisticsDAO();
        JSONArray arr = statisticsDAO.getPublicationsPerYear();
        res.type("application/json");
        if(arr != null)
            return arr.toString();
        return new JSONArray().toString();
    }

    public static String getTotalPublications(Request req, Response res) {
        StatisticsDAO statisticsDAO = new StatisticsDAO();
        JSONArray arr = statisticsDAO.getTotalPublications();
        res.type("application/json");
        if(arr != null)
            return arr.toString();
        return new JSONArray().toString();
    }

    public static String getTotalIncome(Request req, Response res) {
        StatisticsDAO statisticsDAO = new StatisticsDAO();
        JSONArray arr = statisticsDAO.getTotalIncome();
        res.type("application/json");
        if(arr != null)
            return arr.toString();
        return new JSONArray().toString();
    }

    public static String getIncomePerYear(Request req, Response res) {
        StatisticsDAO statisticsDAO = new StatisticsDAO();
        JSONArray arr = statisticsDAO.getIncomePerYear();
        res.type("application/json");
        if(arr != null)
            return arr.toString();
        return new JSONArray().toString();
    }

    public static String getYearWithMinIncome(Request req, Response res){
        StatisticsDAO statisticsDAO = new StatisticsDAO();
        JSONArray arr = statisticsDAO.getYearWithMinIncome();
        res.type("application/json");
        if(arr != null)
            return arr.toString();
        return new JSONArray().toString();
    }

    public static String getYearWithMaxIncome(Request req, Response res){
        StatisticsDAO statisticsDAO = new StatisticsDAO();
        JSONArray arr = statisticsDAO.getYearWithMaxIncome();
        res.type("application/json");
        if(arr != null)
            return arr.toString();
        return new JSONArray().toString();
    }

    public static String getTotalMembers(Request req, Response res){
        StatisticsDAO statisticsDAO = new StatisticsDAO();
        JSONArray arr = statisticsDAO.getTotalMembers();
        res.type("application/json");
        if(arr != null)
            return arr.toString();
        return new JSONArray().toString();
    }

    public static String getTotalMembersPerLevel(Request req, Response res) {
        StatisticsDAO statisticsDAO = new StatisticsDAO();
        JSONArray arr = statisticsDAO.getTotalMembersPerLevel();
        res.type("application/json");
        if(arr != null)
            return arr.toString();
        return new JSONArray().toString();
    }

    public static String getUniversityBenefits(Request req, Response res) {
        StatisticsDAO statisticsDAO = new StatisticsDAO();
        JSONArray arr = statisticsDAO.getUniversityBenefits();
        res.type("application/json");
        if(arr != null)
            return arr.toString();
        return new JSONArray().toString();
    }

    public static String getUniversityBenefitsPerYear(Request req, Response res) {
        StatisticsDAO statisticsDAO = new StatisticsDAO();
        JSONArray arr = statisticsDAO.getUniversityBenefitsPerYear();
        res.type("application/json");
        if(arr != null)
            return arr.toString();
        return new JSONArray().toString();
    }

    public static String getTotalExternalMembers(Request req, Response res) {
        StatisticsDAO statisticsDAO = new StatisticsDAO();
        JSONArray arr = statisticsDAO.getTotalExternalMembers();
        res.type("application/json");
        if(arr != null)
            return arr.toString();
        return new JSONArray().toString();
    }
}
