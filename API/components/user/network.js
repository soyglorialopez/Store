const express = require('express');
const router = express.Router()
const controller = require('./controller.js');
const response = require('../../../response.js');


router.get('/' , async (req, res)=> {
   let data = 
   await controller.list('users');
   response(res, 'lista de usuarios', data, 200)
    
});

router.post('/create', async (req, res) => {
let result 
try {
 result = await controller.add(req.body)
  response(res,'your user was create', result, 200 )
} catch (error) {
  response(res, 'Error Internal', '', 500)
  console.error(error)
}
});


module.exports = router
