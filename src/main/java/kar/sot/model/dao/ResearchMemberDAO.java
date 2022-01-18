package kar.sot.model.dao;

import com.google.gson.JsonObject;
import kar.sot.model.interfaces.ResearchMemberDAOInterface;
import kar.sot.util.StatementCreator;
import org.json.JSONArray;
import org.json.JSONObject;

import java.sql.CallableStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class ResearchMemberDAO implements ResearchMemberDAOInterface<JSONArray> {
    @Override
    public JSONArray getAllMembers() {
        JSONArray arr = new JSONArray();
        String sql = "SELECT * FROM Research_Member";
        CallableStatement cs = null;
        ResultSet rs = null;

        try {
            cs = StatementCreator.create(sql);
            rs = cs.executeQuery();

            while (rs.next()) {
                JSONObject obj = new JSONObject();
                obj.put("academicId", rs.getString("academic_id"));
                obj.put("lid", rs.getString("lid"));
                obj.put("name",rs.getString("r_name"));
                obj.put("surname",rs.getString("r_surname"));
                obj.put("email",rs.getString("email"));
                obj.put("webPage",rs.getString("web_page"));
                obj.put("tel",rs.getString("tel"));
                obj.put("shortCV",rs.getString("short_cv"));
                obj.put("level",rs.getString("level"));
                obj.put("address",rs.getString("address"));
                obj.put("isExternalMember",rs.getBoolean("is_external_member"));
                obj.put("image",rs.getString("image"));
                arr.put(obj);
            }
        }catch (SQLException e) {
            e.printStackTrace();
        }catch (ClassNotFoundException e) {
            e.printStackTrace();
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
    public JSONArray getMembersWithAtLeastOneCourse() {
        JSONArray arr = new JSONArray();
        CallableStatement cs = null;
        ResultSet rs = null;
        String sql = "CALL get_research_members(?)";
        try {
            cs = StatementCreator.create(sql);
            cs.setString(1,"at_least_one_course");
            rs = cs.executeQuery();
            while (rs.next()) {
                String academicId = rs.getString("academic_id");
                String tel = rs.getString("tel");
                String email = rs.getString("email");
                String image = rs.getString("image");
                String name = rs.getString("r_name");
                String surname = rs.getString("r_surname");
                String level = rs.getString("level");
                JSONObject obj = new JSONObject();
                obj.put("academicId",academicId);
                obj.put("tel",tel);
                obj.put("email",email);
                obj.put("image",image);
                obj.put("name",name);
                obj.put("surname",surname);
                obj.put("level",level);
                arr.put(obj);
            }
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
    public JSONArray getMembersWithAtLeastOnePublication() {
        JSONArray arr = new JSONArray();
        CallableStatement cs = null;
        ResultSet rs = null;
        String sql = "CALL get_research_members(?)";
        try {
            cs = StatementCreator.create(sql);
            cs.setString(1,"at_least_one_publication");
            rs = cs.executeQuery();
            while (rs.next()) {
                String academicId = rs.getString("academic_id");
                String tel = rs.getString("tel");
                String email = rs.getString("email");
                String image = rs.getString("image");
                String name = rs.getString("r_name");
                String surname = rs.getString("r_surname");
                String level = rs.getString("level");
                JSONObject obj = new JSONObject();
                obj.put("academicId",academicId);
                obj.put("tel",tel);
                obj.put("email",email);
                obj.put("image",image);
                obj.put("name",name);
                obj.put("surname",surname);
                obj.put("level",level);
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
    public JSONArray getMembersWithoutProjects() {
        JSONArray arr = new JSONArray();
        CallableStatement cs = null;
        ResultSet rs = null;
        String sql = "CALL get_research_members(?)";
        try {
            cs = StatementCreator.create(sql);
            cs.setString(1,"not_have_projects");
            rs = cs.executeQuery();
            while (rs.next()) {
                String academicId = rs.getString("academic_id");
                String tel = rs.getString("tel");
                String email = rs.getString("email");
                String image = rs.getString("image");
                String name = rs.getString("r_name");
                String surname = rs.getString("r_surname");
                String level = rs.getString("level");
                JSONObject obj = new JSONObject();
                obj.put("academicId",academicId);
                obj.put("tel",tel);
                obj.put("email",email);
                obj.put("image",image);
                obj.put("name",name);
                obj.put("surname",surname);
                obj.put("level",level);
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
    public JSONArray getMembersWithoutPublications() {
        JSONArray arr = new JSONArray();
        CallableStatement cs = null;
        ResultSet rs = null;
        String sql = "CALL get_research_members(?)";
        try {
            cs = StatementCreator.create(sql);
            cs.setString(1,"not_have_publications");
            rs = cs.executeQuery();
            while (rs.next()) {
                String academicId = rs.getString("academic_id");
                String tel = rs.getString("tel");
                String email = rs.getString("email");
                String image = rs.getString("image");
                String name = rs.getString("r_name");
                String surname = rs.getString("r_surname");
                String level = rs.getString("level");
                JSONObject obj = new JSONObject();
                obj.put("academicId",academicId);
                obj.put("tel",tel);
                obj.put("email",email);
                obj.put("image",image);
                obj.put("name",name);
                obj.put("surname",surname);
                obj.put("level",level);
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
    public JSONArray getMemberWithMaxPublications() {
        JSONArray arr = new JSONArray();
        CallableStatement cs = null;
        ResultSet rs = null;
        String sql = "CALL get_research_member(?)";
        try {
            cs = StatementCreator.create(sql);
            cs.setString(1,"max_publications");
            rs = cs.executeQuery();
            while (rs.next()) {
                String academicId = rs.getString("academic_id");
                String tel = rs.getString("tel");
                String email = rs.getString("email");
                String image = rs.getString("image");
                String name = rs.getString("r_name");
                String surname = rs.getString("r_surname");
                String level = rs.getString("level");
                int publications = rs.getInt("publications");
                JSONObject obj = new JSONObject();
                obj.put("academicId",academicId);
                obj.put("tel",tel);
                obj.put("email",email);
                obj.put("image",image);
                obj.put("name",name);
                obj.put("surname",surname);
                obj.put("level",level);
                obj.put("publications",publications);
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
    public JSONArray getMemberWithMinPublications() {
        JSONArray arr = new JSONArray();
        CallableStatement cs = null;
        ResultSet rs = null;
        String sql = "CALL get_research_member(?)";
        try {
            cs = StatementCreator.create(sql);
            cs.setString(1,"min_publications");
            rs = cs.executeQuery();
            while (rs.next()) {
                String academicId = rs.getString("academic_id");
                String tel = rs.getString("tel");
                String email = rs.getString("email");
                String image = rs.getString("image");
                String name = rs.getString("r_name");
                String surname = rs.getString("r_surname");
                String level = rs.getString("level");
                int publications = rs.getInt("publications");
                JSONObject obj = new JSONObject();
                obj.put("academicId",academicId);
                obj.put("tel",tel);
                obj.put("email",email);
                obj.put("image",image);
                obj.put("name",name);
                obj.put("surname",surname);
                obj.put("level",level);
                obj.put("publications",publications);
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
    public JSONArray getMemberWithMinProjects() {
        JSONArray arr = new JSONArray();
        CallableStatement cs = null;
        ResultSet rs = null;
        String sql = "CALL get_research_member(?)";
        try {
            cs = StatementCreator.create(sql);
            cs.setString(1,"min_projects");
            rs = cs.executeQuery();
            while (rs.next()) {
                String academicId = rs.getString("academic_id");
                String tel = rs.getString("tel");
                String email = rs.getString("email");
                String image = rs.getString("image");
                String name = rs.getString("r_name");
                String surname = rs.getString("r_surname");
                String level = rs.getString("level");
                int projects = rs.getInt("projects");
                JSONObject obj = new JSONObject();
                obj.put("academicId",academicId);
                obj.put("tel",tel);
                obj.put("email",email);
                obj.put("image",image);
                obj.put("name",name);
                obj.put("surname",surname);
                obj.put("level",level);
                obj.put("projects",projects);
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
    public JSONArray getExternalMemberWithMaxProjects() {
        JSONArray arr = new JSONArray();
        CallableStatement cs = null;
        ResultSet rs = null;
        String sql = "CALL get_research_member(?)";
        try {
            cs = StatementCreator.create(sql);
            cs.setString(1,"external_max_projects");
            rs = cs.executeQuery();
            while (rs.next()) {
                String academicId = rs.getString("academic_id");
                String tel = rs.getString("tel");
                String email = rs.getString("email");
                String image = rs.getString("image");
                String name = rs.getString("r_name");
                String surname = rs.getString("r_surname");
                String level = rs.getString("level");
                int projects = rs.getInt("projects");
                JSONObject obj = new JSONObject();
                obj.put("academicId",academicId);
                obj.put("tel",tel);
                obj.put("email",email);
                obj.put("image",image);
                obj.put("name",name);
                obj.put("surname",surname);
                obj.put("level",level);
                obj.put("projects",projects);
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
    public JSONArray getResearcherByCourse(String courseId) {
        JSONArray arr = new JSONArray();
        CallableStatement cs = null;
        ResultSet rs = null;
        String sql = "CALL get_researcher_by_course(?)";
        try {
            cs = StatementCreator.create(sql);
            cs.setString(1,courseId);
            rs = cs.executeQuery();
            while (rs.next()) {
                String academicId = rs.getString("academic_id");
                String tel = rs.getString("tel");
                String email = rs.getString("email");
                String image = rs.getString("image");
                String name = rs.getString("r_name");
                String surname = rs.getString("r_surname");
                String level = rs.getString("level");
                JSONObject obj = new JSONObject();
                obj.put("academicId",academicId);
                obj.put("tel",tel);
                obj.put("email",email);
                obj.put("image",image);
                obj.put("name",name);
                obj.put("surname",surname);
                obj.put("level",level);
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
    public JSONArray getMembersOfProject(String rpid) {
        JSONArray arr = new JSONArray();
        CallableStatement cs = null;
        ResultSet rs = null;
        String sql = "CALL get_members_of_project(?)";
        try {
            cs = StatementCreator.create(sql);
            cs.setString(1,rpid);
            rs = cs.executeQuery();
            while (rs.next()) {
                String academicId = rs.getString("academic_id");
                String tel = rs.getString("tel");
                String email = rs.getString("email");
                String image = rs.getString("image");
                String name = rs.getString("r_name");
                String surname = rs.getString("r_surname");
                String level = rs.getString("level");
                JSONObject obj = new JSONObject();
                obj.put("academicId",academicId);
                obj.put("tel",tel);
                obj.put("email",email);
                obj.put("image",image);
                obj.put("name",name);
                obj.put("surname",surname);
                obj.put("level",level);
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
    public JSONArray getMemberBySurname(String surname) {
        JSONArray arr = new JSONArray();
        CallableStatement cs = null;
        ResultSet rs = null;
        String sql = "SELECT RM.academic_id, RM.r_name, RM.level, RM.email, RM.tel, RM.image\n" +
                    "FROM Research_Member AS RM\n" +
                    "WHERE RM.r_surname = ?;";
        try {
            cs = StatementCreator.create(sql);
            cs.setString(1,surname);
            rs = cs.executeQuery();
            while (rs.next()) {
                String academicId = rs.getString("academic_id");
                String tel = rs.getString("tel");
                String email = rs.getString("email");
                String image = rs.getString("image");
                String name = rs.getString("r_name");
                String level = rs.getString("level");
                JSONObject obj = new JSONObject();
                obj.put("academicId",academicId);
                obj.put("tel",tel);
                obj.put("email",email);
                obj.put("image",image);
                obj.put("name",name);
                obj.put("surname",surname);
                obj.put("level",level);
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
    public JSONArray getMember(String academicId) {
        JSONArray arr = new JSONArray();
        CallableStatement cs = null;
        ResultSet rs = null;
        String sql = "SELECT RM.r_name, RM.r_surname, RM.level, RM.email, RM.tel, RM.image\n" +
                "FROM Research_Member AS RM\n" +
                "WHERE RM.academic_id = ?;";
        try {
            cs = StatementCreator.create(sql);
            cs.setString(1,academicId);
            rs = cs.executeQuery();
            while (rs.next()) {
                String surname = rs.getString("r_surname");
                String tel = rs.getString("tel");
                String email = rs.getString("email");
                String image = rs.getString("image");
                String name = rs.getString("r_name");
                String level = rs.getString("level");
                JSONObject obj = new JSONObject();
                obj.put("academicId",academicId);
                obj.put("tel",tel);
                obj.put("email",email);
                obj.put("image",image);
                obj.put("name",name);
                obj.put("surname",surname);
                obj.put("level",level);
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
    public void postMember(JsonObject obj) {
        if(obj != null) {
            CallableStatement cs = null;
            String sql = "INSERT INTO Research_Member VALUES(?,?,?,?,?,?,?,?,?,?,?,?)";
            try {
                cs = StatementCreator.create(sql);
                cs.setString(1,obj.get("academicId").getAsString());
                cs.setString(2,obj.get("lid").getAsString());
                cs.setString(3,obj.get("name").getAsString());
                cs.setString(4,obj.get("surname").getAsString());
                cs.setString(5,obj.get("email").getAsString());
                cs.setString(6,obj.get("webPage").getAsString());
                cs.setString(7,obj.get("tel").getAsString());
                cs.setString(8,obj.get("shortCV").getAsString());
                cs.setString(9,obj.get("level").getAsString());
                cs.setString(10,obj.get("address").getAsString());
                cs.setBoolean(11,obj.get("isExternalMember").getAsBoolean());
                cs.setString(12,obj.get("image").getAsString());
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

    @Override
    public void deleteMember(JsonObject obj) {
        if(obj != null) {
            CallableStatement cs = null;
            String sql = "DELETE FROM Research_Member WHERE academic_id = ?";
            try {
                cs = StatementCreator.create(sql);
                cs.setString(1,obj.get("academicId").getAsString());
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

    @Override
    public void updateShortCV(JsonObject obj) {
        if(obj != null) {
            CallableStatement cs = null;
            String sql = "UPDATE Research_Member SET short_cv = ? WHERE academic_id = ?";
            try {
                cs = StatementCreator.create(sql);
                cs.setString(1,obj.get("shortCV").getAsString());
                cs.setString(2,obj.get("academicId").getAsString());
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
    public void updateLevel(JsonObject obj) {
        if(obj != null) {
            CallableStatement cs = null;
            String sql = "UPDATE Research_Member SET level = ? WHERE academic_id = ?";
            try {
                cs = StatementCreator.create(sql);
                cs.setString(1,obj.get("level").getAsString());
                cs.setString(2,obj.get("academicId").getAsString());
                cs.execute();
            } catch (SQLException e) {
                e.printStackTrace();
            } catch (ClassNotFoundException e) {
                e.printStackTrace();
            } finally {
                if (cs != null) {
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
    public void updateImage(JsonObject obj) {
        if(obj != null) {
            CallableStatement cs = null;
            String sql = "UPDATE Research_Member SET image = ? WHERE academic_id = ?";
            try {
                cs = StatementCreator.create(sql);
                cs.setString(1, obj.get("image").getAsString());
                cs.setString(2,obj.get("academicId").getAsString());
                cs.execute();
            } catch (SQLException throwables) {
                throwables.printStackTrace();
            } catch (ClassNotFoundException e) {
                e.printStackTrace();
            } finally {
                try {
                    if(cs != null) {
                        cs.close();
                    }
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
    }

    @Override
    public void updateAddress(JsonObject obj) {
        if(obj != null) {
            CallableStatement cs = null;
            String sql = "UPDATE Research_Member SET address = ? WHERE academic_id = ?";
            try {
                cs = StatementCreator.create(sql);
                cs.setString(1,obj.get("address").getAsString());
                cs.setString(2,obj.get("academicId").getAsString());
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

    @Override
    public void updateTel(JsonObject obj) {
        if(obj != null) {
            CallableStatement cs = null;
            String sql = "UPDATE Research_Member SET tel=? WHERE academic_id = ?";
            try {
                cs = StatementCreator.create(sql);
                cs.setString(1,obj.get("tel").getAsString());
                cs.setString(2,obj.get("academicId").getAsString());
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

    @Override
    public void updateWebPage(JsonObject obj) {
        if(obj != null) {
            CallableStatement cs = null;
            String sql = "UPDATE Research_Member SET web_page = ? WHERE academic_id = ?";
            try {
                cs = StatementCreator.create(sql);
                cs.setString(1,obj.get("webPage").getAsString());
                cs.setString(2,obj.get("academicId").getAsString());
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
