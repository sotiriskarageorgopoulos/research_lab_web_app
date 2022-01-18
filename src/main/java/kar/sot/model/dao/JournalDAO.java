package kar.sot.model.dao;

import com.google.gson.JsonObject;
import kar.sot.model.interfaces.JournalDAOInterface;
import kar.sot.util.StatementCreator;
import org.json.JSONArray;
import org.json.JSONObject;

import java.sql.CallableStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;

public class JournalDAO implements JournalDAOInterface<JSONArray> {
    @Override
    public JSONArray getJournalsForPublication(String pid) {
        JSONArray arr = new JSONArray();
        CallableStatement cs = null;
        ResultSet rs = null;
        String sql = "CALL get_journals_of_publication(?)";
        try {
            cs = StatementCreator.create(sql);
            cs.setString(1,pid);
            rs = cs.executeQuery();
            while(rs.next()){
                JSONObject obj = new JSONObject();
                obj.put("title",rs.getString("title"));
                obj.put("description",rs.getString("j_description"));
                obj.put("webPage",rs.getString("web_page"));
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
    public void postJournal(JsonObject obj) {
        if(obj != null) {
            CallableStatement cs = null;
            String sql = "INSERT INTO Journal VALUES(?,?,?,?,?)";
            try {
                cs = StatementCreator.create(sql);
                cs.setString(1,obj.get("jid").getAsString());
                cs.setString(2,obj.get("title").getAsString());
                cs.setString(3,obj.get("description").getAsString());
                cs.setString(4,obj.get("webPage").getAsString());
                cs.setString(5,obj.get("scientificSubject").getAsString());
                cs.execute();
            }catch (SQLException ex) {
                ex.printStackTrace();
            }catch (ClassNotFoundException ex) {
                ex.printStackTrace();
            }finally {
                try {
                    if(cs != null) {
                        cs.close();
                    }
                }catch (SQLException ex) {
                    ex.printStackTrace();
                }
            }
        }
    }

    @Override
    public void deleteJournal(JsonObject obj) {
        if(obj != null) {
            CallableStatement cs = null;
            String sql = "DELETE FROM Journal WHERE jid = ?";
            try {
                cs = StatementCreator.create(sql);
                cs.setString(1,obj.get("jid").getAsString());
                cs.execute();
            } catch (SQLException throwables) {
                throwables.printStackTrace();
            } catch (ClassNotFoundException e) {
                e.printStackTrace();
            } finally {
                try {
                    cs.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
    }

    @Override
    public void updJournalWebPage(JsonObject obj) {
        if(obj != null) {
            CallableStatement cs = null;
            String sql = "UPDATE Journal SET web_page = ? WHERE jid = ?";
            try {
                cs = StatementCreator.create(sql);
                cs.setString(1,obj.get("webPage").getAsString());
                cs.setString(2,obj.get("jid").getAsString());
                cs.execute();
            } catch (SQLException throwables) {
                throwables.printStackTrace();
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
            }
        }
    }

    @Override
    public JSONArray getAllJournals() {
        JSONArray arr = new JSONArray();
        CallableStatement cs = null;
        ResultSet rs = null;
        String sql = "SELECT * FROM Journal";
        try {
            cs = StatementCreator.create(sql);
            rs = cs.executeQuery();

            while(rs.next()) {
                JSONObject obj = new JSONObject();
                obj.put("jid",rs.getString("jid"));
                obj.put("title",rs.getString("title"));
                obj.put("description",rs.getString("j_description"));
                obj.put("webPage",rs.getString("web_page"));
                obj.put("scientificSubject",rs.getString("scientific_subject"));
                arr.put(obj);
            }
        }catch (SQLException ex) {
            ex.printStackTrace();
        }catch (ClassNotFoundException ex) {
            ex.printStackTrace();
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
                    rs.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
        return arr;
    }
}
