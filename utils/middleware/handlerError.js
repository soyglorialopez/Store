'use strict'

const boom = require('@hapi/boom');
const debug = require('debug')('errorsHandlers');

function errorLog (err, res, req, next) {
    debug('[ERROR], err');
    next(err)
};

function responseToError(err, res, req, next) {
    
}