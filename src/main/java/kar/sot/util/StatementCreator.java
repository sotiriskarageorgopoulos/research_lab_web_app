package kar.sot.util;

import kar.sot.connection.DBConnection;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.SQLException;

public class StatementCreator {
    public static CallableStatement create(String sql) throws SQLException, ClassNotFoundException {
        DBConnection dbCon = new DBConnection("root","02121999");
        Connection con = dbCon.connect();
        return con.prepareCall(sql);
    }
}
