const express = require('express');
const router = express.Router()
const controller = require('./controller.js');
const response = require('../../../response');


router.post('/login',  async (req, res) => {
    let result 
    try {
     result = await controller.login(req.body.email, req.body.password)
      response(res,'', result, 200 )
    } catch (error) {
      response(res, 'Error Internal', '', 500)
      console.error(error)
    }
    })

module.exports = router