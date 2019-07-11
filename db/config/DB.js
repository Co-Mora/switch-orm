const mysql = require('mysql');
const con   = undefined;

export class DB {
    constructor() {

    }
    constructor(dbName, username, password) {
        this.dbName = dbName;
        this.username = username;
        this.password = password
    }
    init() {
        con = mysql.createConnection({
            host: "localhost",
            user: username,
            password: password,
            database: dbName
        });
        con.connect(function (err) {
            if (err) throw err;
            console.log("Connected...");
        });
    }

    exec(query) {
        con.query(query, (err, rows) => {
            if (err) throw err;
            console.log('Data received from Db:\n');
            console.log(rows);
        });
    }




}
