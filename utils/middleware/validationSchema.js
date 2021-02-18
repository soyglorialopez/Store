'use strict'

const Joi = require('joi');
const boom = require('@hapi/boom');

const schema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(10)
        .required(),
    email: Joi.string()
        .email()
        .required(),
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]'))
        .min(8)
        .max(12)
        .required()
});
 function userValidation(req, res, next) {
    try {
    schema.validate(req.body)
    } catch (error) {
        boom.badRequest(error)
    }
}

module.exports = {
    userValidation
}