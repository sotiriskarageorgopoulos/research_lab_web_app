package kar.sot.model.dao;

import com.google.gson.JsonObject;
import kar.sot.model.interfaces.PublicationDAOInterface;
import kar.sot.util.StatementCreator;
import org.json.JSONArray;
import org.json.JSONObject;

import java.sql.CallableStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;

public class PublicationDAO implements PublicationDAOInterface<JSONArray> {
    @Override
    public JSONArray getPublicationsInJournal() {
        CallableStatement cs = null;
        String sql = "CALL get_publications(?)";
        JSONArray arr = new JSONArray();
        ResultSet rs = null;
        try {
            cs = StatementCreator.create(sql);
            cs.setString(1,"journal");
            rs = cs.executeQuery();

            while (rs.next()) {
                JSONObject obj = new JSONObject();
                obj.put("title",rs.getString("title"));
                obj.put("date",Timestamp.valueOf(rs.getString("p_date")));
                arr.put(obj);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }finally {
            if(cs != null) {
                try {
                    cs.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
            if(rs != null) {
                try {
                    StatementCreator.closeConnection();
                    rs.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
        return arr;
    }

    @Override
    public JSONArray getPublicationsInAcademicConf() {
        CallableStatement cs = null;
        String sql = "CALL get_publications(?)";
        JSONArray arr = new JSONArray();
        ResultSet rs = null;
        try {
            cs = StatementCreator.create(sql);
            cs.setString(1,"academic_conference");
            rs = cs.executeQuery();

            while (rs.next()) {
                JSONObject obj = new JSONObject();
                obj.put("title",rs.getString("title"));
                obj.put("date",Timestamp.valueOf(rs.getString("p_date")));
                arr.put(obj);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }finally {
            if(cs != null) {
                try {
                    cs.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
            if(rs != null) {
                try {
                    StatementCreator.closeConnection();
                    rs.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
        return arr;
    }

    @Override
    public JSONArray getPublicationsByResearcher(String academicId, String order) {
        JSONArray arr = new JSONArray();
        CallableStatement cs = null;
        ResultSet rs = null;
        String sql = "CALL get_publications_of_member(?,?)";
        try {
            cs = StatementCreator.create(sql);
            cs.setString(1,academicId);
            cs.setString(2,order);
            rs = cs.executeQuery();
            while (rs.next()) {
                JSONObject obj = new JSONObject();
                Timestamp date = Timestamp.valueOf(rs.getString("p_date"));
                String title = rs.getString("title");
                String pid = rs.getString("pid");
                obj.put("title",title);
                obj.put("date",date);
                obj.put("pid",pid);
                arr.put(obj);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } finally {
            if(cs != null) {
                try {
                    cs.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }

            if(rs != null) {
                try {
                    StatementCreator.closeConnection();
                    rs.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
        return arr;
    }

    @Override
    public JSONArray getPublicationsPerJournal(String academicId) {
        CallableStatement cs = null;
        ResultSet rs = null;
        String sql = "CALL get_publications_per_journal(?)";
        JSONArray arr = new JSONArray();
        try {
            cs = StatementCreator.create(sql);
            cs.setString(1,academicId);
            rs = cs.executeQuery();
            while (rs.next()) {
                JSONObject obj = new JSONObject();
                String title = rs.getString("title");
                String pid = rs.getString("pid");
                int publications = rs.getInt("publications");
                obj.put("title",title);
                obj.put("publications",publications);
                obj.put("pid",pid);
                arr.put(obj);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } finally {
            if(cs != null) {
                try {
                    cs.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
            if(rs != null) {
                try {
                    StatementCreator.closeConnection();
                    rs.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
        return arr;
    }

    @Override
    public JSONArray getCommonPublications(String firstAcademicId, String secondAcademicId) {
        JSONArray arr = new JSONArray();
        CallableStatement cs = null;
        ResultSet rs = null;
        String sql = "CALL get_common_publications(?,?)";
        try {
            cs = StatementCreator.create(sql);
            cs.setString(1,firstAcademicId);
            cs.setString(2,secondAcademicId);
            rs = cs.executeQuery();
            while (rs.next()) {
                String title = rs.getString("title");
                Timestamp date = Timestamp.valueOf(rs.getString("p_date"));
                String pid = rs.getString("pid");
                JSONObject obj = new JSONObject();
                obj.put("pid",pid);
                obj.put("title",title);
                obj.put("date",date);
                arr.put(obj);
            }
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } finally {
            if(cs != null){
                try {
                    cs.close();
                    StatementCreator.closeConnection();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }

            if (rs != null) {
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
    public JSONArray getPublication(String pid) {
        JSONArray arr = new JSONArray();
        CallableStatement cs = null;
        ResultSet rs = null;
        try {
            String sql = "SELECT P.p_date, P.title, P.content, P.city\n" +
                    "FROM Publication AS P\n" +
                    "WHERE P.pid = ? ";
            cs = StatementCreator.create(sql);
            cs.setString(1,pid);
            rs = cs.executeQuery();
            while (rs.next()) {
                JSONObject obj = new JSONObject();
                obj.put("date",rs.getString("p_date"));
                obj.put("title",rs.getString("title"));
                obj.put("content",rs.getString("content"));
                obj.put("city",rs.getString("city"));
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
    public JSONArray getPublications() {
        JSONArray arr = new JSONArray();
        CallableStatement cs = null;
        ResultSet rs = null;
        String sql = "SELECT * FROM Publication";

        try {
            cs = StatementCreator.create(sql);
            rs = cs.executeQuery();

            while (rs.next()) {
                JSONObject obj = new JSONObject();
                obj.put("pid",rs.getString("pid"));
                obj.put("title",rs.getString("title"));
                obj.put("content",rs.getString("content"));
                obj.put("date",rs.getString("p_date"));
                obj.put("city",rs.getString("city"));
                arr.put(obj);
            }
        }
        catch (SQLException ex) {
            ex.printStackTrace();
        }
        catch (ClassNotFoundException ex) {
            ex.printStackTrace();
        }
        finally {
            if(cs != null) {
                try {
                    StatementCreator.closeConnection();
                    cs.close();
                }catch (SQLException ex) {
                    ex.printStackTrace();
                }
            }

            if(rs != null) {
                try {
                    rs.close();
                }catch (SQLException ex) {
                    ex.printStackTrace();
                }
            }
        }
        return arr;
    }

    @Override
    public void postPublication(JsonObject obj) {
        if(obj != null) {
            CallableStatement cs = null;
            String sql = "INSERT INTO Publication VALUES(?,?,?,?,?)";
            try {
                cs = StatementCreator.create(sql);
                cs.setString(1,obj.get("pid").getAsString());
                cs.setString(2,obj.get("title").getAsString());
                cs.setString(3,obj.get("content").getAsString());
                cs.setString(4,obj.get("date").getAsString());
                cs.setString(5,obj.get("city").getAsString());
                cs.execute();
            } catch (SQLException throwables) {
                throwables.printStackTrace();
            } catch (ClassNotFoundException e) {
                e.printStackTrace();
            } finally {
                try {
                    StatementCreator.closeConnection();
                    cs.close();
                } catch (SQLException ex) {
                    ex.printStackTrace();
                }
            }
        }
    }

    @Override
    public void deletePublication(String pid) {
        if(pid != null) {
            CallableStatement cs = null;
            String sql = "DELETE FROM Publication WHERE pid = ?";
            try {
                cs = StatementCreator.create(sql);
                cs.setString(1,pid);
                cs.execute();
            } catch (SQLException throwables) {
                throwables.printStackTrace();
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
            }
        }
    }
}
