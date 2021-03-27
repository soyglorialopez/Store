'use strict'
require('dotenv').config();

const site = {
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.PAGE_PORT ,
    host: process.env.PAGE_HOST 
}

const Pg = {
    user: process.env.DB_USER, 
    database: process.env.DATABASE,  
    password: process.env.DB_PASSWORD, 
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
}


const jwt = {
    key : process.env.AUTH_SECRET_KEY
}



module.exports = {
    site,
    Pg,
    jwt

}
