package kar.sot.model.dao;

import com.google.gson.JsonObject;
import kar.sot.model.interfaces.AcademicConferenceDAOInterface;
import kar.sot.util.StatementCreator;
import org.json.JSONArray;
import org.json.JSONObject;

import java.sql.CallableStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;

public class AcademicConferenceDAO implements AcademicConferenceDAOInterface<JSONArray> {
    @Override
    public JSONArray getConferencesForPublication(String pid) {
        JSONArray arr = new JSONArray();
        CallableStatement cs = null;
        ResultSet rs = null;
        String sql = "CALL get_conferences_for_publication(?)";
        try {
            cs = StatementCreator.create(sql);
            cs.setString(1,pid);
            rs = cs.executeQuery();
            while(rs.next()){
                JSONObject obj = new JSONObject();
                obj.put("title",rs.getString("title"));
                obj.put("description",rs.getString("ac_description"));
                obj.put("date",Timestamp.valueOf(rs.getString("ac_date")));
                obj.put("city",rs.getString("city"));
                obj.put("country",rs.getString("country"));
                obj.put("scientific_subject",rs.getString("scientific_subject"));
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
                    StatementCreator.closeConnection();
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
    public void insertAcademicConference(JsonObject ac) {
        if(ac != null) {
            CallableStatement cs = null;
            String sql = "INSERT INTO Academic_Conference VALUES(?,?,?,?,?,?,?)";
            boolean inserted = false;
            try {
                cs = StatementCreator.create(sql);
                cs.setString(1, ac.get("acid").getAsString());
                cs.setString(2,ac.get("title").getAsString());
                cs.setString(3,ac.get("description").getAsString());
                cs.setTimestamp(4, Timestamp.valueOf(ac.get("date").getAsString()));
                cs.setString(5,ac.get("city").getAsString());
                cs.setString(6,ac.get("country").getAsString());
                cs.setString(7,ac.get("scientificSubject").getAsString());
                inserted = cs.execute();
            }catch (SQLException ex) {
                ex.printStackTrace();
            }catch (ClassNotFoundException ex) {
                ex.printStackTrace();
            }finally {
                if(cs != null) {
                    try {
                        cs.close();
                        StatementCreator.closeConnection();
                    }catch (SQLException ex) {
                        ex.printStackTrace();
                    }
                }
            }
        }
    }

    @Override
    public void deleteAcademicConference(String aid) {
        if(aid != null) {
            CallableStatement cs = null;
            String sql = "DELETE FROM Academic_Conference WHERE acid = ?";
            try {
                cs = StatementCreator.create(sql);
                cs.setString(1,aid);
                cs.execute();
            } catch (SQLException throwables) {
                throwables.printStackTrace();
            } catch (ClassNotFoundException e) {
                e.printStackTrace();
            } finally {
                try {
                    cs.close();
                    StatementCreator.closeConnection();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
    }

    @Override
    public JSONArray getAllAcademicConfs() {
        JSONArray arr = new JSONArray();
        CallableStatement cs = null;
        ResultSet rs = null;
        String sql = "SELECT * FROM Academic_Conference";

        try {
            cs = StatementCreator.create(sql);
            rs = cs.executeQuery();

            while (rs.next()) {
                JSONObject obj = new JSONObject();
                obj.put("acid",rs.getString("acid"));
                obj.put("title",rs.getString("title"));
                obj.put("description",rs.getString("ac_description"));
                obj.put("date",rs.getTimestamp("ac_date"));
                obj.put("city",rs.getString("city"));
                obj.put("country",rs.getString("country"));
                obj.put("scientificSubject",rs.getString("scientific_subject"));
                arr.put(obj);
            }
        }catch (SQLException ex) {
            ex.printStackTrace();
        }catch (ClassNotFoundException ex) {
            ex.printStackTrace();
        }finally {
             if(rs != null) {
                 try {
                     rs.close();
                 }catch (SQLException ex) {
                     ex.printStackTrace();
                 }
             }
             if(cs != null) {
                 try {
                     cs.close();
                     StatementCreator.closeConnection();
                 }catch (SQLException ex) {
                     ex.printStackTrace();
                 }
             }
        }
        return arr;
    }
}
