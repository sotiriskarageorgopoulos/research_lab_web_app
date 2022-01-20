package kar.sot.model.dao;

import com.google.gson.JsonObject;
import kar.sot.model.interfaces.PublicationAcademicConfDAOInterface;
import kar.sot.util.StatementCreator;
import org.json.JSONArray;
import org.json.JSONObject;

import java.sql.CallableStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class PublicationAcademicConfDAO implements PublicationAcademicConfDAOInterface<JSONArray> {
    @Override
    public JSONArray getPublicationAcademicConfs() {
        JSONArray arr = new JSONArray();
        CallableStatement cs = null;
        ResultSet rs = null;
        String sql = "SELECT * FROM Publication_Academic_Conference";

        try {
            cs = StatementCreator.create(sql);
            rs = cs.executeQuery();

            while (rs.next()) {
                JSONObject obj = new JSONObject();
                obj.put("pid",rs.getString("pid"));
                obj.put("acid",rs.getString("acid"));
                arr.put(obj);
            }
        }catch (SQLException ex) {
            ex.printStackTrace();
        }catch (ClassNotFoundException ex) {
            ex.printStackTrace();
        }
        finally {
            if(rs != null) {
                try {
                    rs.close();
                }catch (SQLException ex) {
                    ex.printStackTrace();
                }
            }

            if(cs != null) {
                try {
                    StatementCreator.closeConnection();
                    cs.close();
                }catch (SQLException ex) {
                    ex.printStackTrace();
                }
            }
        }
        return arr;
    }

    @Override
    public JSONArray postPublicationAcademicConf(JsonObject obj) {
        if(obj != null) {
            CallableStatement cs = null;
            String sql = "INSERT INTO Publication_Academic_Conference VALUES(?,?)";
            try {
                cs = StatementCreator.create(sql);
                cs.setString(1,obj.get("pid").getAsString());
                cs.setString(2,obj.get("acid").getAsString());
                cs.execute();
            } catch (SQLException e) {
                e.printStackTrace();
            } catch (ClassNotFoundException e) {
                e.printStackTrace();
            }finally {
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
        return null;
    }
}
