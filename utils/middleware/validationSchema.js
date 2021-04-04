'use strict'

const Joi = require('joi');
const boom = require('@hapi/boom');

const userSchema = Joi.object({
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
function userValidation(schema = userSchema) {
    return function (req, res, next) {
        try {
            const { error, value } = schema.validate(req.body);
            if (error) {
                next({
                    output: {
                        statusCode: 422,
                        payload: {
                            error: error.details,
                            message: error.details[0].message
                        }
                    }
                });
            }
            next()
        } catch (error) {
            next(error)
        }
    }
}

module.exports = userValidation
