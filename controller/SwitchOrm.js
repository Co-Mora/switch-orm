var connection = require('../db/config/DB');

export class SwitchOrm {

    constructor(dbName, username, password, {dialect}) {
        this.dbName   = dbName;
        this.username = username;
        this.password = password;
        this.dialect = dialect;
    }
    exec() {
        new connection(this.dbName, this.username, this.password).init();
    }
}