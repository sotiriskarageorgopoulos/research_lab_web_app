package kar.sot.model.dao;

import com.google.gson.JsonObject;
import kar.sot.model.interfaces.ResearchProjectDAOInterface;
import kar.sot.util.StatementCreator;
import org.json.JSONArray;
import org.json.JSONObject;

import java.sql.*;

public class ResearchProjectDAO implements ResearchProjectDAOInterface<JSONArray> {
    @Override
    public JSONArray getActiveProjects() {
        JSONArray arr = new JSONArray();
        CallableStatement cs = null;
        ResultSet rs = null;
        String sql = "CALL get_research_projects(?)";
        try {
            cs = StatementCreator.create(sql);
            cs.setString(1, "active_projects");
            rs = cs.executeQuery();
            while (rs.next()) {
                JSONObject obj = new JSONObject();
                String rpid = rs.getString("rpid");
                String title = rs.getString("title");
                boolean isActive = rs.getBoolean("is_active");
                Date assignmentDate = rs.getDate("assignment_date");
                obj.put("title",title);
                obj.put("rpid",rpid);
                obj.put("isActive",isActive);
                obj.put("assignmentDate",assignmentDate);
                arr.put(obj);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } finally {
            if(cs != null) {
                try {
                    StatementCreator.closeConnection();
                    cs.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
            if(rs != null) {
                try {
                    rs.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }

        return arr;
    }

    @Override
    public JSONArray getProjectsOrderByIncome(String order) {
        CallableStatement cs = null;
        ResultSet rs = null;
        String sql = "CALL get_research_projects(?)";
        JSONArray arr = new JSONArray();
        try {
            cs = StatementCreator.create(sql);
            cs.setString(1,order);
            rs = cs.executeQuery();
            while (rs.next()) {
                JSONObject obj = new JSONObject();
                obj.put("rpid",rs.getString("rpid"));
                obj.put("title", rs.getString("title"));
                obj.put("isActive", rs.getBoolean("is_active"));
                obj.put("assignmentDate", rs.getString("assignment_date"));
                arr.put(obj);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } finally {
            if(cs != null) {
                try {
                    StatementCreator.closeConnection();
                    cs.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
            if(rs != null) {
                try {
                    rs.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
        return arr;
    }

    @Override
    public JSONArray getProjectByResearcher(String academicId) {
        JSONArray arr = new JSONArray();
        CallableStatement cs = null;
        ResultSet rs = null;
        String sql = "CALL get_project_by_researcher(?,?)";
        try {
            cs = StatementCreator.create(sql);
            cs.setString(1,academicId);
            cs.setString(2,"desc");
            rs = cs.executeQuery();
            while (rs.next()) {
                Date assignmentDate = rs.getDate("assignment_date");
                String title = rs.getString("title");
                JSONObject obj = new JSONObject();
                obj.put("title",title);
                obj.put("assignmentDate",assignmentDate);
                arr.put(obj);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } finally {
            if(cs != null) {
                try {
                    StatementCreator.closeConnection();
                    cs.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
            if(rs != null) {
                try {
                    rs.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
        return arr;
    }

    @Override
    public JSONArray getProjectByResearcherPerDate(String academicId) {
        JSONArray arr = new JSONArray();
        CallableStatement cs = null;
        String sql = "CALL get_project_by_researcher(?,?)";
        ResultSet rs = null;
        try {
            cs = StatementCreator.create(sql);
            cs.setString(1,academicId);
            cs.setString(2,"per_assignment_date");
            rs = cs.executeQuery();
            while (rs.next()) {
                Date assignmentDate = rs.getDate("assignment_date");
                String title = rs.getString("title");
                boolean isActive = rs.getBoolean("is_active");
                JSONObject obj = new JSONObject();
                obj.put("title",title);
                obj.put("assignmentDate",assignmentDate);
                obj.put("isActive",isActive);
                arr.put(obj);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } finally {
            if(cs != null) {
                try {
                    StatementCreator.closeConnection();
                    cs.close();
                } catch (SQLException e) {
                   e.printStackTrace();
                }
            }
            if(rs != null) {
                try {
                    rs.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
        return arr;
    }

    @Override
    public JSONArray getAllProjects() {
        JSONArray arr = new JSONArray();
        String sql = "SELECT * FROM Research_Project";
        CallableStatement cs = null;
        ResultSet rs = null;
        try {
            cs = StatementCreator.create(sql);
            rs = cs.executeQuery();
            while (rs.next()) {
                JSONObject obj = new JSONObject();
                obj.put("rpid", rs.getString("rpid"));
                obj.put("title", rs.getString("title"));
                obj.put("description", rs.getString("rp_description"));
                obj.put("assignmentDate", rs.getDate("assignment_date"));
                obj.put("isActive", rs.getBoolean("is_active"));
                obj.put("income", rs.getBigDecimal("income"));
                arr.put(obj);
            }
        } catch (SQLException ex) {
            ex.printStackTrace();
        } catch (ClassNotFoundException ex) {
            ex.printStackTrace();
        } finally {
            if (rs != null) {
                try {
                    StatementCreator.closeConnection();
                    rs.close();
                } catch (SQLException ex) {
                    ex.printStackTrace();
                }
            }
            if (cs != null) {
                try {
                    cs.close();
                } catch (SQLException ex) {
                    ex.printStackTrace();
                }
            }
        }
        return arr;
    }

    @Override
    public JSONArray getProjectWithMaxIncome() {
        JSONArray arr = new JSONArray();
        String sql = "CALL get_statistics(?)";
        CallableStatement cs = null;
        ResultSet rs = null;
        try {
            cs = StatementCreator.create(sql);
            cs.setString(1,"project_with_max_income");
            rs = cs.executeQuery();
            while (rs.next()) {
                JSONObject obj = new JSONObject();
                obj.put("rpid", rs.getString("rpid"));
                obj.put("title", rs.getString("title"));
                obj.put("description", rs.getString("rp_description"));
                obj.put("assignmentDate", rs.getDate("assignment_date"));
                obj.put("isActive", rs.getBoolean("is_active"));
                obj.put("income", rs.getBigDecimal("income"));
                arr.put(obj);
            }
        } catch (SQLException ex) {
            ex.printStackTrace();
        } catch (ClassNotFoundException ex) {
            ex.printStackTrace();
        } finally {
            if (rs != null) {
                try {
                    StatementCreator.closeConnection();
                    rs.close();
                } catch (SQLException ex) {
                    ex.printStackTrace();
                }
            }
            if (cs != null) {
                try {
                    cs.close();
                } catch (SQLException ex) {
                    ex.printStackTrace();
                }
            }
        }
        return arr;
    }

    @Override
    public JSONArray getProjectWithMinIncome() {
        JSONArray arr = new JSONArray();
        String sql = "CALL get_statistics(?)";
        CallableStatement cs = null;
        ResultSet rs = null;
        try {
            cs = StatementCreator.create(sql);
            cs.setString(1,"project_with_min_income");
            rs = cs.executeQuery();
            while (rs.next()) {
                JSONObject obj = new JSONObject();
                obj.put("rpid", rs.getString("rpid"));
                obj.put("title", rs.getString("title"));
                obj.put("description", rs.getString("rp_description"));
                obj.put("assignmentDate", rs.getDate("assignment_date"));
                obj.put("isActive", rs.getBoolean("is_active"));
                obj.put("income", rs.getBigDecimal("income"));
                arr.put(obj);
            }
        } catch (SQLException ex) {
            ex.printStackTrace();
        } catch (ClassNotFoundException ex) {
            ex.printStackTrace();
        } finally {
            if (rs != null) {
                try {
                    StatementCreator.closeConnection();
                    rs.close();
                } catch (SQLException ex) {
                    ex.printStackTrace();
                }
            }
            if (cs != null) {
                try {
                    cs.close();
                } catch (SQLException ex) {
                    ex.printStackTrace();
                }
            }
        }
        return arr;
    }

    @Override
    public JSONArray getProject(String rpid) {
        JSONArray arr = new JSONArray();
        String sql = "SELECT * FROM Research_Project\n" +
                    "WHERE rpid = ? ;";
        CallableStatement cs = null;
        ResultSet rs = null;
        try {
            cs = StatementCreator.create(sql);
            cs.setString(1,rpid);
            rs = cs.executeQuery();
            while (rs.next()) {
                JSONObject obj = new JSONObject();
                obj.put("rpid", rs.getString("rpid"));
                obj.put("title", rs.getString("title"));
                obj.put("description", rs.getString("rp_description"));
                obj.put("assignmentDate", rs.getDate("assignment_date"));
                obj.put("isActive", rs.getBoolean("is_active"));
                obj.put("income", rs.getBigDecimal("income"));
                arr.put(obj);
            }
        } catch (SQLException ex) {
            ex.printStackTrace();
        } catch (ClassNotFoundException ex) {
            ex.printStackTrace();
        } finally {
            if (rs != null) {
                try {
                    StatementCreator.closeConnection();
                    rs.close();
                } catch (SQLException ex) {
                    ex.printStackTrace();
                }
            }
            if (cs != null) {
                try {
                    cs.close();
                } catch (SQLException ex) {
                    ex.printStackTrace();
                }
            }
        }
        return arr;
    }

    @Override
    public void postProject(JsonObject obj) {
        if (obj != null) {
            CallableStatement cs = null;
            String sql = "INSERT INTO Research_Project VALUES(?,?,?,?,?,?)";
            try {
                cs = StatementCreator.create(sql);
                cs.setString(1, obj.get("rpid").getAsString());
                cs.setString(2, obj.get("title").getAsString());
                cs.setString(3, obj.get("description").getAsString());
                cs.setDate(4, Date.valueOf(obj.get("assignmentDate").getAsString()));
                cs.setBoolean(5, obj.get("isActive").getAsBoolean());
                cs.setBigDecimal(6, obj.get("income").getAsBigDecimal());
                cs.execute();
            } catch (SQLException e) {
                e.printStackTrace();
            } catch (ClassNotFoundException e) {
                e.printStackTrace();
            } finally {
                try {
                    StatementCreator.closeConnection();
                    cs.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
    }

    @Override
    public void updateProjectProgress(JsonObject obj) {
        if (obj != null) {
            CallableStatement cs = null;
            String sql = "UPDATE Research_Project SET is_active = ? WHERE rpid = ?";
            try {
                cs = StatementCreator.create(sql);
                cs.setBoolean(1, obj.get("isActive").getAsBoolean());
                cs.setString(2, obj.get("rpid").getAsString());
                cs.execute();
            } catch (SQLException e) {
                e.printStackTrace();
            } catch (ClassNotFoundException e) {
                e.printStackTrace();
            } finally {
                if (cs != null) {
                    try {
                        StatementCreator.closeConnection();
                        cs.close();
                    } catch (SQLException e) {
                        e.printStackTrace();
                    }
                }
            }
        }
    }

    @Override
    public void deleteProject(String rpid) {
        if (rpid != null) {
            CallableStatement cs = null;
            String sql = "DELETE FROM Research_Project WHERE rpid = ?";
            try {
                cs = StatementCreator.create(sql);
                cs.setString(1, rpid);
                cs.execute();
            } catch (SQLException e) {
                e.printStackTrace();
            } catch (ClassNotFoundException e) {
                e.printStackTrace();
            } finally {
                if (cs != null) {
                    try {
                        StatementCreator.closeConnection();
                        cs.close();
                    } catch (SQLException e) {
                        e.printStackTrace();
                    }
                }
            }
        }
    }
}
