'use strict'
require('dotenv').config();

const site = {
    port: process.env.PAGE_PORT,
    host: process.env.PAGE_HOST 
}

const Pg = {
    user: process.env.DB_USER, 
    database: process.env.DATABASE,  
    password: process.env.DB_PASSWORD, 
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
}

const db = {
    port: process.env.PORT,
    host: process.env.HOST
}

const jwt = {
    key : process.env.AUTH_SECRET_KEY
}



module.exports = {
    site,
    Pg,
    db,
    jwt

}
