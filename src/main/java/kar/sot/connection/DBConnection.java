package kar.sot.connection;

import java.sql.*;

public class DBConnection {
    private String user;
    private String password;
    private String jbcDriver;

    public DBConnection(String user, String password) {
        this.jbcDriver = "com.mysql.cj.jdbc.Driver";
        this.user = user;
        this.password = password;
    }

    public Connection connect() throws SQLException, ClassNotFoundException {
        Class.forName(jbcDriver);
        String url = "jdbc:mysql://localhost:3306/dblab?autoReconnect=false&useSSL=false&allowPublicKeyRetrieval=true";
        return  DriverManager.getConnection(url,user,password);
    }

    public String getJbcDriver() {
        return jbcDriver;
    }

    public void setJbcDriver(String jbcDriver) {
        this.jbcDriver = jbcDriver;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
