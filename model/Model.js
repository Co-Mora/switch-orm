const connection = require('../db/config/DB');
const _          = require('lodash');


export class Model {
    constructor(tableName) {
        this.tableName = tableName;
    }
    create({}) {

        const query = `CREATE TABLE ${this.tableName} (name VARCHAR(255))`
        new connection().exec(query);
    }
    findAll() {
        const query = `SELECT * FROM ${this.tableName}`
        new connection().exec(query);
    }
    merge(table1, table2) {

    }
}




// Graph Sechma For CREATE TABLE

const graph = {
    name: Number,
    caprakID: String,
    operatorID: Number,
    addressData1: String,

}


// Graph For operator
{
    id; Number;
    name; Number;
    email; String;

}

// function a() {
//     return function() {
//         console.log("Hello");
//     }
// }

// a()();
