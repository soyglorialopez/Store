'use strict'
const express = require('express');
const router = express.Router();
const boom = require('@hapi/boom');
const userValidation = require('../../utils/middleware/validationSchema');
const service = require('../../services/user');
const userService = new service();

router.get('/signIn', async (req, res, next) => {
  try {
    res.render('signIn');
  } catch (error) {
    next(boom.badImplementation(error));
  };
});

router.get('/signUp', async (req, res, next) => {
  try {
    res.render('signUp');
  } catch (error) {
    next(boom.badImplementation('Internal Error'));
  };
});

router.post('/signUp', userValidation(), async (req, res, next) => {
  let result
  try {
    result = await userService.insert(req.body);
    res.redirect('http://localhost:8000/user/signIn')
  } catch (error) {
    next(boom.badRequest(error));
  };
});


module.exports = router
