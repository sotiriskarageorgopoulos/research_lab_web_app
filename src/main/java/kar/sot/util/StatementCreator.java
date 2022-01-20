package kar.sot.util;

import kar.sot.connection.DBConnection;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.SQLException;

public class StatementCreator {
    private static Connection con = null;

    public static CallableStatement create(String sql) throws SQLException, ClassNotFoundException {
        DBConnection dbCon = new DBConnection("root","02121999");
        con = dbCon.connect();
        return con.prepareCall(sql);
    }

    public static void closeConnection() throws SQLException {
        con.close();
    }
}
