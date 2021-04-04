'use strict'

const db = require('../lib/pg');
const bcrypt = require('bcrypt');


class User {
    constructor() {
        this.db = db;
    }
    async getUser(data) {
        const key = Object.keys(data);

        const query = {
            text: `SELECT * FROM users WHERE ${key[0]} =  '${data[key[0]]}'`
        };
        return await this.db.get(query);
    }
    
    async insert(data) {
        const encryptedPassword = await bcrypt.hash(data.password, 5);
        const query = {
            text: `INSERT INTO users (name, email, password) VALUES($1, $2, $3) RETURNING *`,
            values: [data.name, data.email, encryptedPassword]
        };      
        return await this.db.insert(query);
    }
};



module.exports = User;