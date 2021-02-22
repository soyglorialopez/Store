'use strict'
const express = require('express');
const router = express.Router();
const controller = require('./controller.js');
const boom = require('@hapi/boom');



router.post('/signIn',  async (req, res) => {
    let result 
    try {
     result = await controller.signIn(req.body.email, req.body.password)
    } catch (error) {
      boom.badData(error)
    }
    })

module.exports = router