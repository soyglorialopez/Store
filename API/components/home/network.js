'use strict'
const express = require('express');
const router = express.Router();
// const debug = require('debug')('route/home');
const boom = require('@hapi/boom');
const controller = require('./controller');
// const middleware = require('./middleware');

router.post('/', async (req, res) => {
  let result
  try {
    result = await controller.home()
    res.render('layout', result)
  } catch (error) {
    boom.badImplementation('Internal Error')
  };
});

module.exports = router
