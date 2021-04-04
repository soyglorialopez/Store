'use strict'
const express = require('express');
const router = express.Router();
const boom = require('@hapi/boom');
const services = require('../../services/auth');
const authServices = new services();


router.post('/signIn', async (req, res, next) => {
  let result
  try {
    result = await authServices.login(req.body);
    res
      .cookie('name', result.name)
      .cookie('email', req.body.email, {
        expires: new Date(Date.now() + 900000)
      })
      .redirect('/home');
  } catch (error) {
    next(boom.badData(error));
  }
});

module.exports = router