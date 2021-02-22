'use strict'
const express = require('express');
const router = express.Router();
// const debug = require('debug')('route/home');
const boom = require('@hapi/boom');
// const controller = require('./controller');
// const middleware = require('./middleware');

router.get('/', async (req, res) => {
  let result
  try {
    // result = await controller.home()
    res.render("home")
  } catch (error) {
    boom.badImplementation('Internal Error')
  };
});

module.exports = router
