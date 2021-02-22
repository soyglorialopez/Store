'use strict'

const boom = require('@hapi/boom');
const debug = require('debug')('app/HandlerError');

function errorLog (err, res, req, next) {
    debug('[ERROR], err');
    next(err)
};

function wrapError(err, res, req, next) {
    if (boom.isBoom(err)) {
        boom.internal(err)
    }
    next(err)
}

function responseToError(err, res, req, next) {
    if
}

module.exports = {
    errorLog,
    wrapError,
    responseToError
}