package kar.sot.model.dao;

import kar.sot.model.interfaces.StatisticsInterfaceDAO;
import kar.sot.util.StatementCreator;
import org.json.JSONArray;
import org.json.JSONObject;

import java.sql.CallableStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class StatisticsDAO implements StatisticsInterfaceDAO<JSONArray> {
    @Override
    public JSONArray getPublicationsPerYear() {
        JSONArray arr = new JSONArray();
        CallableStatement cs = null;
        String sql = "CALL get_statistics(?)";
        ResultSet rs = null;
        try {
            cs = StatementCreator.create(sql);
            cs.setString(1,"publications_per_year");
            rs = cs.executeQuery();
            while (rs.next()) {
                JSONObject obj = new JSONObject();
                obj.put("year",rs.getString("year"));
                obj.put("publications",rs.getInt("publications"));
                arr.put(obj);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } finally {
            if(rs != null) {
                try {
                    rs.close();
                    StatementCreator.closeConnection();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }

            if(cs != null) {
                try {
                    cs.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
        return arr;
    }

    @Override
    public JSONArray getTotalPublications() {
        JSONArray arr = new JSONArray();
        CallableStatement cs = null;
        String sql = "CALL get_statistics(?)";
        ResultSet rs = null;
        try {
            cs = StatementCreator.create(sql);
            cs.setString(1,"total_publications");
            rs = cs.executeQuery();
            while (rs.next()) {
                JSONObject obj = new JSONObject();
                obj.put("publications",rs.getInt("publications"));
                arr.put(obj);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } finally {
            if(rs != null) {
                try {
                    rs.close();
                    StatementCreator.closeConnection();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }

            if(cs != null) {
                try {
                    cs.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
        return arr;
    }

    @Override
    public JSONArray getTotalIncome() {
        JSONArray arr = new JSONArray();
        CallableStatement cs = null;
        String sql = "CALL get_statistics(?)";
        ResultSet rs = null;
        try {
            cs = StatementCreator.create(sql);
            cs.setString(1,"total_income");
            rs = cs.executeQuery();
            while (rs.next()) {
                JSONObject obj = new JSONObject();
                obj.put("income",rs.getInt("total_income"));
                arr.put(obj);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } finally {
            if(rs != null) {
                try {
                    StatementCreator.closeConnection();
                    rs.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }

            if(cs != null) {
                try {
                    cs.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
        return arr;
    }

    @Override
    public JSONArray getIncomePerYear() {
        JSONArray arr = new JSONArray();
        CallableStatement cs = null;
        String sql = "CALL get_statistics(?)";
        ResultSet rs = null;
        try {
            cs = StatementCreator.create(sql);
            cs.setString(1,"income_per_year");
            rs = cs.executeQuery();
            while (rs.next()) {
                JSONObject obj = new JSONObject();
                obj.put("year",rs.getString("assignment_year"));
                obj.put("income",rs.getInt("income_each_year"));
                arr.put(obj);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } finally {
            if(rs != null) {
                try {
                    StatementCreator.closeConnection();
                    rs.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }

            if(cs != null) {
                try {
                    cs.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
        return arr;
    }

    @Override
    public JSONArray getYearWithMinIncome() {
        JSONArray arr = new JSONArray();
        CallableStatement cs = null;
        String sql = "CALL get_statistics(?)";
        ResultSet rs = null;
        try {
            cs = StatementCreator.create(sql);
            cs.setString(1,"year_with_min_income");
            rs = cs.executeQuery();
            while (rs.next()) {
                JSONObject obj = new JSONObject();
                obj.put("year",rs.getString("assignment_year"));
                obj.put("income",rs.getInt("income_each_year"));
                arr.put(obj);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } finally {
            if(rs != null) {
                try {
                    StatementCreator.closeConnection();
                    rs.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }

            if(cs != null) {
                try {
                    cs.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
        return arr;
    }

    @Override
    public JSONArray getYearWithMaxIncome() {
        JSONArray arr = new JSONArray();
        CallableStatement cs = null;
        String sql = "CALL get_statistics(?)";
        ResultSet rs = null;
        try {
            cs = StatementCreator.create(sql);
            cs.setString(1,"year_with_max_income");
            rs = cs.executeQuery();
            while (rs.next()) {
                JSONObject obj = new JSONObject();
                obj.put("year",rs.getString("assignment_year"));
                obj.put("income",rs.getInt("income_each_year"));
                arr.put(obj);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } finally {
            if(rs != null) {
                try {
                    StatementCreator.closeConnection();
                    rs.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }

            if(cs != null) {
                try {
                    cs.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
        return arr;
    }

    @Override
    public JSONArray getTotalMembers() {
        JSONArray arr = new JSONArray();
        CallableStatement cs = null;
        String sql = "CALL get_statistics(?)";
        ResultSet rs = null;
        try {
            cs = StatementCreator.create(sql);
            cs.setString(1,"total_members");
            rs = cs.executeQuery();
            while (rs.next()) {
                JSONObject obj = new JSONObject();
                obj.put("members",rs.getInt("members"));
                arr.put(obj);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } finally {
            if(rs != null) {
                try {
                    StatementCreator.closeConnection();
                    rs.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }

            if(cs != null) {
                try {
                    cs.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
        return arr;
    }

    @Override
    public JSONArray getTotalMembersPerLevel() {
        JSONArray arr = new JSONArray();
        CallableStatement cs = null;
        String sql = "CALL get_statistics(?)";
        ResultSet rs = null;
        try {
            cs = StatementCreator.create(sql);
            cs.setString(1,"members_per_level");
            rs = cs.executeQuery();
            while (rs.next()) {
                JSONObject obj = new JSONObject();
                obj.put("members",rs.getInt("members"));
                obj.put("level",rs.getString("level"));
                arr.put(obj);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } finally {
            if(rs != null) {
                try {
                    StatementCreator.closeConnection();
                    rs.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }

            if(cs != null) {
                try {
                    cs.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
        return arr;
    }

    @Override
    public JSONArray getUniversityBenefits() {
        JSONArray arr = new JSONArray();
        CallableStatement cs = null;
        String sql = "CALL get_statistics(?)";
        ResultSet rs = null;
        try {
            cs = StatementCreator.create(sql);
            cs.setString(1,"university_benefits");
            rs = cs.executeQuery();
            while (rs.next()) {
                JSONObject obj = new JSONObject();
                obj.put("benefits",rs.getInt("university_benefits"));
                arr.put(obj);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } finally {
            if(rs != null) {
                try {
                    StatementCreator.closeConnection();
                    rs.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }

            if(cs != null) {
                try {
                    cs.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
        return arr;
    }

    @Override
    public JSONArray getUniversityBenefitsPerYear() {
        JSONArray arr = new JSONArray();
        CallableStatement cs = null;
        String sql = "CALL get_statistics(?)";
        ResultSet rs = null;
        try {
            cs = StatementCreator.create(sql);
            cs.setString(1,"university_benefits_per_year");
            rs = cs.executeQuery();
            while (rs.next()) {
                JSONObject obj = new JSONObject();
                obj.put("year",rs.getString("assignment_year"));
                obj.put("benefits",rs.getInt("university_benefits"));
                arr.put(obj);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } finally {
            if(rs != null) {
                try {
                    StatementCreator.closeConnection();
                    rs.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }

            if(cs != null) {
                try {
                    cs.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
        return arr;
    }

    @Override
    public JSONArray getTotalExternalMembers() {
        JSONArray arr = new JSONArray();
        CallableStatement cs = null;
        String sql = "CALL get_statistics(?)";
        ResultSet rs = null;
        try {
            cs = StatementCreator.create(sql);
            cs.setString(1,"count_external_members");
            rs = cs.executeQuery();
            while (rs.next()) {
                JSONObject obj = new JSONObject();
                obj.put("members",rs.getInt("members"));
                arr.put(obj);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } finally {
            if(rs != null) {
                try {
                    StatementCreator.closeConnection();
                    rs.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }

            if(cs != null) {
                try {
                    cs.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
        return arr;
    }
}
