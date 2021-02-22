'use strict'
const { config } = require('dotenv/types');
const { Client } = require('pg');
const debug = require('debug')('app/database');
const { Pg: dbConfig, db } =require('../config/index');
const client = new Client({
    user: dbConfig.user,
    host: dbConfig.host,
    database: dbConfig.database,
    password: dbConfig.password,
    port: dbConfig.port
});

async function connect() {
    try {
        await client.connect();
        debug('[DB] Connected Database');
    } catch (error) {
        debug(`[ERROR] ${error}`);
    };
};