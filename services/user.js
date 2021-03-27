'use strict'

const db = require('../lib/pg');
const bcrypt = require('bcrypt');


class User {
    constructor() {
        this.db = db;
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