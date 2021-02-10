const express = require('express');
const router = express.Router();
const response = require('../../../response');
const controller = require('./controller');
const middleware = require('./middleware');

router.post('/',middleware('pay'), async (req, res) => {
    let result
      try {
      result = await controller.add(req.body)
        response(res,'', result, 200 )
      } catch (error) {
        response(res, 'Error Internal', '', 500)
        console.error(error)
      }
})
module.exports = router
