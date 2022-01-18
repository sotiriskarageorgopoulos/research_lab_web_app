package kar.sot.model.dao;

import com.google.gson.JsonObject;
import kar.sot.model.interfaces.ResearchMemberPublicationDAOInterface;
import kar.sot.util.StatementCreator;
import org.json.JSONArray;
import org.json.JSONObject;

import java.sql.CallableStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class ResearchMemberPublicationDAO implements ResearchMemberPublicationDAOInterface<JSONArray> {
    @Override
    public JSONArray getResearchMemberPublications() {
        JSONArray arr = new JSONArray();
        CallableStatement cs = null;
        ResultSet rs = null;
        String sql = "SELECT * FROM Research_Member_Publication";
        try {
            cs = StatementCreator.create(sql);
            rs = cs.executeQuery();
            while (rs.next()) {
                JSONObject obj = new JSONObject();
                obj.put("pid",rs.getString("pid"));
                obj.put("academicId",rs.getString("academic_id"));
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
                }
                catch (SQLException ex) {
                    ex.printStackTrace();
                }
            }

            if(cs != null) {
                try {
                    cs.close();
                }catch (SQLException ex) {
                    ex.printStackTrace();
                }
            }
        }

        return arr;
    }

    @Override
    public void postResearchMemberPublication(JsonObject obj) {
        if(obj != null) {
            CallableStatement cs = null;
            String sql = "INSERT INTO Research_Member_Publication VALUES(?,?)";
            try {
                cs = StatementCreator.create(sql);
                cs.setString(2,obj.get("academicId").getAsString());
                cs.setString(1,obj.get("pid").getAsString());
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
}
