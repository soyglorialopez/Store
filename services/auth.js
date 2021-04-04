'use strict'
const services = require('../services/user');
const userServices = new services();
const bcrypt = require('bcrypt');
const token = require('../token/index');

class Auth {
    constructor() {}

    async login(data) {
        const { rows: user } = await userServices.getUser({ email: data.email });
        const passwordComparison = await bcrypt.compare(data.password, user[0].password);
        if (passwordComparison) {
            return {
                name: user[0].name,
               toke: token.sing(passwordComparison)
            }
        }
        throw new Error("Unauthorized, wrong password or email.")
    }
}

module.exports = Auth;