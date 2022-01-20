package kar.sot.model.dao;

import com.google.gson.JsonObject;
import kar.sot.model.interfaces.AnnouncementDAOInterface;
import kar.sot.util.StatementCreator;
import org.json.JSONArray;
import org.json.JSONObject;

import java.sql.CallableStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;

public class AnnouncementDAO implements AnnouncementDAOInterface<JSONArray> {
    @Override
    public JSONArray getAllAnnouncements() {
        CallableStatement cs = null;
        ResultSet rs = null;
        JSONArray arr = new JSONArray();
        try {
            String sql = "CALL get_announcements(?)";
            cs = StatementCreator.create(sql);
            cs.setString(1,"all");
            rs = cs.executeQuery();

            while (rs.next()) {
                JSONObject obj = new JSONObject();
                obj.put("aid", rs.getString("aid"));
                obj.put("title", rs.getString("title"));
                obj.put("date", rs.getTimestamp("a_date"));
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
    public JSONArray getFiveRecentAnnouncements() {
        CallableStatement cs = null;
        ResultSet rs = null;
        JSONArray arr = new JSONArray();
        try {
            String sql = "CALL get_announcements(?)";
            cs = StatementCreator.create(sql);
            cs.setString(1,"five_recent_announcements");
            rs = cs.executeQuery();

            while (rs.next()) {
                JSONObject obj = new JSONObject();
                obj.put("aid", rs.getString("aid"));
                obj.put("title", rs.getString("title"));
                obj.put("date", rs.getTimestamp("a_date"));
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
    public JSONArray getAnnouncement(String aid) {
        CallableStatement cs = null;
        ResultSet rs = null;
        JSONArray arr = new JSONArray();
        try {
            String sql = "SELECT A.title, A.a_date, A.content\n" +
                    "FROM Announcement AS A\n" +
                    "WHERE A.aid = ? ";
            cs = StatementCreator.create(sql);
            cs.setString(1,aid);
            rs = cs.executeQuery();

            while (rs.next()) {
                JSONObject obj = new JSONObject();
                obj.put("title", rs.getString("title"));
                obj.put("date", rs.getTimestamp("a_date"));
                obj.put("content",rs.getString("content"));
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
    public void insertAnnouncement(JsonObject obj) {
        if (obj != null) {
            CallableStatement cs = null;
            String sql = "INSERT INTO Announcement VALUES(?,?,?,?,?)";

            try {
                cs = StatementCreator.create(sql);
                cs.setString(1, obj.get("aid").getAsString());
                cs.setString(2, obj.get("lid").getAsString());
                cs.setString(3, obj.get("title").getAsString());
                cs.setString(4, obj.get("content").getAsString());
                cs.setTimestamp(5, Timestamp.valueOf(obj.get("date").getAsString()));

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
    public void deleteAnnouncement(String aid) {
        if (aid != null) {
            CallableStatement cs = null;
            String sql = "DELETE FROM Announcement WHERE aid = ?";
            try {
                cs = StatementCreator.create(sql);
                cs.setString(1, aid);
                cs.execute();
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
            }
        }
    }

    @Override
    public void updateAnnouncementTitle(JsonObject obj) {
        if (obj != null) {
            CallableStatement cs = null;
            String sql = "UPDATE Announcement SET title = ? WHERE title = ?";
            try {
                cs = StatementCreator.create(sql);
                cs.setString(1, obj.get("newTitle").getAsString());
                cs.setString(2, obj.get("oldTitle").getAsString());
                cs.execute();
            } catch (SQLException e) {
                e.printStackTrace();
            } catch (ClassNotFoundException e) {
                e.printStackTrace();
            } finally {
                if (cs != null) {
                    try {
                        cs.close();
                        StatementCreator.closeConnection();
                    } catch (SQLException e) {
                        e.printStackTrace();
                    }
                }
            }
        }
    }

    @Override
    public void updateAnnouncementContent(JsonObject obj) {
        if (obj != null) {
            CallableStatement cs = null;
            String sql = "UPDATE Announcement SET content = ? WHERE title = ?";
            try {
                cs = StatementCreator.create(sql);
                cs.setString(1, obj.get("content").getAsString());
                cs.setString(2, obj.get("title").getAsString());
                cs.execute();
            } catch (SQLException e) {
                e.printStackTrace();
            } catch (ClassNotFoundException e) {
                e.printStackTrace();
            } finally {
                if (cs != null) {
                    try {
                        cs.close();
                        StatementCreator.closeConnection();
                    } catch (SQLException e) {
                        e.printStackTrace();
                    }
                }
            }
        }
    }
}
