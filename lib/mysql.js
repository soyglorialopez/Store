const mysql = require('mysql');
const config = require('../config');

const dbconf = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
}

let connection

function handle(){
    connection = mysql.createConnection(dbconf);

    connection.connect((err) => {
        if(err){
            console.error('error connection: '+ err.stack);
            return
        }
        console.log('connected as id ' + connection.threadId)
    })

    connection.on('error', (err) => {
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            handle()
        }else{
            throw err;
        }
    })
}

handle()

async function list(table){
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * fROM ${table}`, (err, result) => {
            if(err) reject(err)
          resolve(result)
            
        });
    })   
}
async function add(table, data){
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO ${table} set ? `, data, (err, result) => {
            if(err) reject(err)
          resolve(result)
            
        });
    })   
}
async function query(table, data){
    console.log(table,data)
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${table} WHERE ? `, data, (err, result) => {
            if(err) reject(err)
          resolve(result)
            
        });
    })   
}
async function update(table, data, ){
    return new Promise((resolve, reject) => {
        connection.query(`UPDATE  ${table} set ? where id = ? `,[data, data.id], (err, result) => {
            if(err) reject(err)
          resolve(result)
            
        });
    }) 
}

module.exports = {
    list,
    add,
    query,
    update
}