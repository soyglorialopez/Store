'use strict'

const { Client } = require('pg');
const { Pg: dbConfig } = require('../config/index');
const debug = require('debug')('app:database');
class Postgres {
    constructor() { 
        this.client = new Client({
            user: dbConfig.user,
            host: dbConfig.host,
            database: dbConfig.database,
            password: dbConfig.password,
            port: dbConfig.port
        });
    }

   async connection() {
      try {
          await this.client.connect();
          debug('Database connected');

      } catch (error) {
          debug(error);
       }
    };

    insert(query) {
       return this.client
            .query(query)
    }

    get(query) {
        return this.client
        .query(query)
    }

}


module.exports = new Postgres()