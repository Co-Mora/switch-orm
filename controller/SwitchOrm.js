var connection = require('../db/config/DB');

class SwitchOrm {

    constructor(dbName, username, password, {dialect}) {
        this.dbName   = dbName;
        this.username = username;
        this.password = password;
        this.dialect = dialect;
    }
    exec() {
        return new connection(this.dbName, this.username, this.password).init();
    }
}


module.exports = SwitchOrm;