package kar.sot.model.dao;

import java.sql.*;

import com.google.gson.JsonObject;
import kar.sot.model.interfaces.LabDAOInterface;
import kar.sot.util.StatementCreator;
import org.json.JSONArray;
import org.json.JSONObject;

import java.sql.SQLException;

public class LabDAO implements LabDAOInterface<JSONArray> {
    @Override
    public JSONArray getLabsOfMember(String academicId) {
        CallableStatement cs = null;
        ResultSet rs = null;
        JSONArray arr = new JSONArray();

        try{
            String sql = "CALL get_labs_of_member(?)";
            cs = StatementCreator.create(sql);
            cs.setString(1,academicId);
            rs = cs.executeQuery();
            while(rs.next()) {
                JSONObject obj = new JSONObject();
                obj.put("title",rs.getString("title"));
                obj.put("university",rs.getString("university"));
                obj.put("image", rs.getString("image"));
                obj.put("webPage",rs.getString("web_page"));
                arr.put(obj);
            }
        } catch (SQLException ex) {
            ex.printStackTrace();
        } catch (ClassNotFoundException ex) {
            ex.printStackTrace();
        }
        finally {
            if(rs != null) {
                try {
                    rs.close();
                } catch (SQLException ex) {
                    ex.printStackTrace();
                }
            }
            if(cs != null) {
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
    public JSONArray getLab(String lid) {
        CallableStatement cs = null;
        ResultSet rs = null;
        JSONArray arr = new JSONArray();

        try{
            String sql = "SELECT L.title, L.university, L.image, L.web_page\n" +
                        "FROM Lab AS L \n" +
                        "WHERE L.lid = ? ";
            cs = StatementCreator.create(sql);
            cs.setString(1,lid);
            rs = cs.executeQuery();
            while(rs.next()) {
                JSONObject obj = new JSONObject();
                obj.put("title",rs.getString("title"));
                obj.put("university",rs.getString("university"));
                obj.put("image", rs.getString("image"));
                obj.put("webPage",rs.getString("web_page"));
                arr.put(obj);
            }
        } catch (SQLException ex) {
            ex.printStackTrace();
        } catch (ClassNotFoundException ex) {
            ex.printStackTrace();
        }
        finally {
            if(rs != null) {
                try {
                    rs.close();
                } catch (SQLException ex) {
                    ex.printStackTrace();
                }
            }
            if(cs != null) {
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
    public void postLab(JsonObject obj) {
        if(obj != null) {
            CallableStatement cs = null;
            String sql = "INSERT INTO Lab VALUES(?,?,?,?,?,?)";
            try {
                cs = StatementCreator.create(sql);
                cs.setString(1,obj.get("lid").getAsString());
                cs.setString(2,obj.get("title").getAsString());
                cs.setString(3,obj.get("description").getAsString());
                cs.setString(4,obj.get("image").getAsString());
                cs.setString(5,obj.get("university").getAsString());
                cs.setString(6,obj.get("webPage").getAsString());
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
            }
        }
    }

    @Override
    public void deleteLab(JsonObject obj) {
        if (obj != null) {
            CallableStatement cs = null;
            String sql = "DELETE FROM Lab WHERE lid = ?";
            try {
                cs = StatementCreator.create(sql);
                cs.setString(1,obj.get("lid").getAsString());
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
    public JSONArray getLabs() {
        CallableStatement cs = null;
        ResultSet rs = null;
        JSONArray arr = new JSONArray();

        try{
            String sql = "SELECT * FROM Lab";
            cs = StatementCreator.create(sql);
            rs = cs.executeQuery();
            while(rs.next()) {
                JSONObject obj = new JSONObject();
                obj.put("lid",rs.getString("lid"));
                obj.put("title",rs.getString("title"));
                obj.put("description",rs.getString("l_description"));
                obj.put("university",rs.getString("university"));
                obj.put("image", rs.getString("image"));
                obj.put("webPage",rs.getString("web_page"));
                arr.put(obj);
            }
        } catch (SQLException ex) {
            ex.printStackTrace();
        } catch (ClassNotFoundException ex) {
            ex.printStackTrace();
        }
        finally {
           if(rs != null) {
               try {
                   rs.close();
               } catch (SQLException ex) {
                   ex.printStackTrace();
               }
           }
            if(cs != null) {
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
    public void updateLabTitle(JsonObject obj) {
        if(obj != null) {
            CallableStatement cs = null;
            String sql = "UPDATE Lab SET title = ? WHERE lid = ?";
            try {
                cs = StatementCreator.create(sql);
                cs.setString(1,obj.get("title").getAsString());
                cs.setString(2,obj.get("lid").getAsString());
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
    public void updateLabDesc(JsonObject obj) {
        if(obj != null) {
            CallableStatement cs = null;
            String sql = "UPDATE Lab SET l_description = ? WHERE lid = ?";
            try {
                cs = StatementCreator.create(sql);
                cs.setString(1,obj.get("description").getAsString());
                cs.setString(2,obj.get("lid").getAsString());
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
    public void updateLabWebPage(JsonObject obj) {
        if(obj != null) {
            CallableStatement cs = null;
            String sql = "UPDATE Lab SET web_page = ? WHERE lid = ?";
            try {
                cs = StatementCreator.create(sql);
                cs.setString(1,obj.get("web_page").getAsString());
                cs.setString(2,obj.get("lid").getAsString());
                cs.execute();
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
            }
        }
    }
}
