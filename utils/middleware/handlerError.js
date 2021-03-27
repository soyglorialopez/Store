'use strict'

const boom = require('@hapi/boom');
const debug = require('debug')('app:HandlerError');
const { site } = require('../../config');

function errorLog (err, req, res, next) {
    debug(err);
   next(err);
};

function wrapError(err, req, res, next) {
    if (boom.isBoom(err)) {
        boom.internal(err);
    };
    next(err);
}

function responseToError(err, req, res, next) {

    const {
        output: { statusCode, payload }
    } = err;

    if (site.dev) {
        return res.status(statusCode).json({
            payload,
            stack: err.stack
        }); 
    };

  res.render('error',
    { message: payload, statusCode: statusCode });
    };
   


module.exports = {
    errorLog,
    wrapError,
    responseToError
}