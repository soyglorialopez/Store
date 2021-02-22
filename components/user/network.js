'use strict'
const express = require('express');
const router = express.Router();
const boom = require('@hapi/boom');
const validation = require('../../../utils/middleware/validationSchema');
const controller = require('./controller.js');

router.get('signIn', async (req, res) => {
  try {
    res.render('singIn.pug');
  } catch (error) {
    boom.badImplementation(error);
  };
});

router.get('/signUp', async (req, res) => {
  try {
    res.render('signUp');
  } catch (error) {
    boom.badImplementation('Internal Error')
  };
});

router.post('/signUp', validation(), async (req, res) => {
  let result
  try {
    result = await controller.add(req.body);
    res.redirect('http://localhost:8000/signIn')
  } catch (error) {
    boom.badRequest(error);
  };
});


module.exports = router
