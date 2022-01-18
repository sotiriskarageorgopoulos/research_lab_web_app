package kar.sot.model.dao;

import com.google.gson.JsonObject;
import kar.sot.model.interfaces.ResearchMemberProjectDAOInterface;
import kar.sot.util.StatementCreator;
import org.json.JSONArray;
import org.json.JSONObject;

import java.sql.CallableStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class ResearchMemberProjectDAO implements ResearchMemberProjectDAOInterface<JSONArray> {
    @Override
    public JSONArray getAllResearchMemberProjects() {
        JSONArray arr = new JSONArray();
        ResultSet rs = null;
        CallableStatement cs = null;
        String sql = "SELECT * FROM Research_Member_Project";
        try {
            cs = StatementCreator.create(sql);
            rs = cs.executeQuery();
            while (rs.next()) {
                JSONObject obj = new JSONObject();
                obj.put("academicId",rs.getString("academic_id"));
                obj.put("rpid",rs.getString("rpid"));
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
                }catch (SQLException ex) {
                    ex.printStackTrace();
                }
            }
        }
        return arr;
    }

    @Override
    public void postResearchMemberProject(JsonObject obj) {
        if(obj != null) {
            CallableStatement cs = null;
            String sql = "INSERT INTO Research_Member_Project VALUES(?,?)";
            try {
                cs = StatementCreator.create(sql);
                cs.setString(1,obj.get("academicId").getAsString());
                cs.setString(2,obj.get("rpid").getAsString());
                cs.execute();
            } catch (SQLException e) {
                e.printStackTrace();
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
