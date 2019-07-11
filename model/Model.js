const connection = require('../db/config/DB');
const _          = require('lodash');


class Model {
    constructor(tableName) {
        this.tableName = tableName;
    }
    define({}) {

        const query = `CREATE TABLE ${this.tableName} (name VARCHAR(255))`
        new connection().exec(query);
    }
    findAll() {
        const query = `SELECT * FROM ${this.tableName}`
        return new connection().exec(query);
    }
    merge(table1, table2) {

    }
}


module.exports = Model;



// Graph Sechma For CREATE TABLE

{
    id; Number;
    name; Number;
    email; String;

}

