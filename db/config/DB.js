const mysql = require('mysql');
const con   = undefined;

class DB {
    constructor(dbName, username, password) {
        this.dbName = dbName;
        this.username = username;
        this.password = password
    }
    init() {
        con = mysql.createConnection({
            host: "localhost",
            user: this.username,
            password: this.password,
            database: this.dbName,
            insecureAuth: true
        });
        var _delegateError = con._protocol._delegateError;

        con._protocol._delegateError = function (err, sequence) {
            if (err.fatal)
                console.trace('MySQL fatal error: ' + err.message);

            return _delegateError.call(this, err, sequence);
        };

        con.connect(function (err) {
            if (err) throw err;
        });
        return true;

    }

    exec(query) {
        const rows = con.query(query, (err, rows) => {
            if (err) throw err;
            return rows;
        });
        return rows;
    }




}


module.exports = DB;