var mysql = require("mysql");
exports.connect = function(sql, param, callback) {
    var connection = mysql.createConnection({
        host: "localhost", ///数据库URL
        port: "3306", //数据库端口，默认3306
        user: "root",
        password: "",
        database: "baidunews"
    });
    connection.connect();
    connection.query(sql, param, callback);
    connection.end();
};