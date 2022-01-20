package kar.sot.model.dao;

import com.google.gson.JsonObject;
import kar.sot.model.interfaces.CourseDAOInterface;
import kar.sot.util.StatementCreator;
import org.json.JSONArray;
import org.json.JSONObject;

import java.sql.CallableStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class CourseDAO implements CourseDAOInterface<JSONArray> {
    @Override
    public JSONArray getAllCourses() {
        CallableStatement cs = null;
        ResultSet rs = null;
        JSONArray arr = new JSONArray();
        String sql = "SELECT * FROM Course";

        try {
            cs = StatementCreator.create(sql);
            rs = cs.executeQuery();
            while (rs.next()) {
                JSONObject obj = new JSONObject();
                obj.put("cid", rs.getString("cid"));
                obj.put("academicId", rs.getString("academic_id"));
                obj.put("title", rs.getString("title"));
                obj.put("description", rs.getString("c_description"));
                obj.put("ects", rs.getInt("ects"));
                obj.put("studyLevel", rs.getString("study_level"));
                arr.put(obj);
            }
        } catch (SQLException ex) {
            ex.printStackTrace();
        } catch (ClassNotFoundException ex) {
            ex.printStackTrace();
        } finally {
            if (rs != null) {
                try {
                    rs.close();
                } catch (SQLException ex) {
                    ex.printStackTrace();
                }
            }

            if (cs != null) {
                try {
                    cs.close();
                    StatementCreator.closeConnection();
                } catch (SQLException ex) {
                    ex.printStackTrace();
                }
            }
        }

        return arr;
    }

    @Override
    public JSONArray getCourseByLevel(String level) {
        CallableStatement cs = null;
        ResultSet rs = null;
        JSONArray arr = new JSONArray();
        String sql = "SELECT C.title, C.study_level, C.ects\n" +
                    "FROM Course AS C\n" +
                    "WHERE study_level = ?";
        try {
            cs = StatementCreator.create(sql);
            cs.setString(1,level);
            rs = cs.executeQuery();
            while (rs.next()) {
                JSONObject obj = new JSONObject();
                obj.put("studyLevel",rs.getString("study_level"));
                obj.put("title", rs.getString("title"));
                obj.put("ects", rs.getInt("ects"));
                arr.put(obj);
            }
        } catch (SQLException ex) {
            ex.printStackTrace();
        } catch (ClassNotFoundException ex) {
            ex.printStackTrace();
        } finally {
            if (rs != null) {
                try {
                    rs.close();
                } catch (SQLException ex) {
                    ex.printStackTrace();
                }
            }

            if (cs != null) {
                try {
                    cs.close();
                    StatementCreator.closeConnection();
                } catch (SQLException ex) {
                    ex.printStackTrace();
                }
            }
        }

        return arr;
    }

    @Override
    public JSONArray getCourse(String cid) {
        CallableStatement cs = null;
        ResultSet rs = null;
        JSONArray arr = new JSONArray();
        String sql = "SELECT * \n" +
                "FROM Course \n" +
                "WHERE cid = ?";
        try {
            cs = StatementCreator.create(sql);
            cs.setString(1,cid);
            rs = cs.executeQuery();
            while (rs.next()) {
                JSONObject obj = new JSONObject();
                obj.put("title", rs.getString("title"));
                obj.put("ects", rs.getInt("ects"));
                obj.put("studyLevel", rs.getString("study_level"));
                obj.put("description",rs.getString("c_description"));
                arr.put(obj);
            }
        } catch (SQLException ex) {
            ex.printStackTrace();
        } catch (ClassNotFoundException ex) {
            ex.printStackTrace();
        } finally {
            if (rs != null) {
                try {
                    rs.close();
                } catch (SQLException ex) {
                    ex.printStackTrace();
                }
            }

            if (cs != null) {
                try {
                    cs.close();
                    StatementCreator.closeConnection();
                } catch (SQLException ex) {
                    ex.printStackTrace();
                }
            }
        }

        return arr;
    }

    @Override
    public void insertCourse(JsonObject obj) {
        if (obj != null) {
            CallableStatement cs = null;
            String sql = "INSERT INTO Course VALUES(?,?,?,?,?,?)";
            try {
                cs = StatementCreator.create(sql);
                cs.setString(1, obj.get("cid").getAsString());
                cs.setString(2, obj.get("academicId").getAsString());
                cs.setString(3, obj.get("title").getAsString());
                cs.setString(4, obj.get("description").getAsString());
                cs.setInt(5, obj.get("ects").getAsInt());
                cs.setString(6, obj.get("studyLevel").getAsString());
                cs.execute();
            } catch (SQLException ex) {
                ex.printStackTrace();
            } catch (ClassNotFoundException ex) {
                ex.printStackTrace();
            } finally {
                if (cs != null) {
                    try {
                        cs.close();
                        StatementCreator.closeConnection();
                    } catch (SQLException ex) {
                        ex.printStackTrace();
                    }
                }
            }
        }
    }

    @Override
    public void deleteCourse(String cid) {
        if(cid != null) {
            CallableStatement cs = null;
            String sql = "DELETE FROM Course WHERE cid = ?";
            try {
                cs = StatementCreator.create(sql);
                cs.setString(1,cid);
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

    @Override
    public void updateCourseTitle(JsonObject obj) {
        if(obj != null) {
            CallableStatement cs = null;
            String sql = "UPDATE Course SET title = ? WHERE title = ?";
            try {
                cs = StatementCreator.create(sql);
                cs.setString(2,obj.get("oldTitle").getAsString());
                cs.setString(1,obj.get("newTitle").getAsString());
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

    @Override
    public void updateCourseDesc(JsonObject obj) {
        if(obj != null){
            CallableStatement cs = null;
            String sql = "UPDATE Course SET c_description = ? WHERE cid = ?";
            try {
                cs = StatementCreator.create(sql);
                cs.setString(1,obj.get("description").getAsString());
                cs.setString(2,obj.get("cid").getAsString());
                cs.execute();
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
            }
        }
    }

    @Override
    public void updateCourseECTS(JsonObject obj) {
        if(obj != null) {
            CallableStatement cs = null;
            String sql = "UPDATE Course SET ects = ? WHERE cid = ?";
            try {
                cs = StatementCreator.create(sql);
                cs.setInt(1,obj.get("ects").getAsInt());
                cs.setString(2, obj.get("cid").getAsString());
                cs.execute();
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
            }
        }
    }
}
