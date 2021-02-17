'use strict'
const express = require('express');
const router = express.Router();
const response = require('../../../response');
const controller = require('./controller');
const middleware = require('./middleware');

router.post('/',middleware('pay'), async (req, res) => {
    let result
      try {
      result = await controller.home()
        res.render('layout', result)
      } catch (error) {
        response(res, 'Error Internal', '', 500)
        console.error(error)
      }
})
module.exports = router
