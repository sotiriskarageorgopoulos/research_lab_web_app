package kar.sot.model.dao;

import com.google.gson.JsonObject;
import kar.sot.model.interfaces.PublicationJournalDAOInteface;
import kar.sot.util.StatementCreator;
import org.json.JSONArray;
import org.json.JSONObject;

import java.sql.CallableStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class PublicationJournalDAO implements PublicationJournalDAOInteface<JSONArray> {

    @Override
    public JSONArray getPublicationJournals() {
        JSONArray arr = new JSONArray();
        CallableStatement cs = null;
        ResultSet rs = null;
        String sql = "SELECT * FROM Publication_Journal";
        try {
            cs = StatementCreator.create(sql);
            rs = cs.executeQuery();

            while (rs.next()) {
                JSONObject obj = new JSONObject();
                obj.put("jid", rs.getString("jid"));
                obj.put("pid", rs.getString("pid"));
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
    public void postPublicationJournal(JsonObject obj) {
        if(obj != null) {
            CallableStatement cs = null;
            String sql = "INSERT INTO Publication_Journal VALUES(?,?)";
            try {
                cs = StatementCreator.create(sql);
                cs.setString(1,obj.get("jid").getAsString());
                cs.setString(2,obj.get("pid").getAsString());
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
