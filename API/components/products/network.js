const express = require('express');
const router = express.Router();
const response = require('../../../response');
const controller = require('./controller');

  router.post('/insert', async(req, res) => {
      let result 
      try {
      result = await controller.add(req.body)
        response(res,'ok', result, 200 )
      } catch (error) {
        response(res, 'Error Internal', '', 500)
        console.error(error)
      }
  });
  
  router.get('/list', async(req, res) => {
      let result 
      try {
      result = await controller.list('products')
        response(res,'', result, 200 )
      } catch (error) {
        response(res, 'Error Internal', '', 500)
        console.error(error)
      }
  });
    
  //traemos productos especificos
  router.get('/:product', async(req, res) => {
      let result 
      try {
      result = await controller.query(req.params.product)
        response(res,'', result, 200 )
      } catch (error) {
        response(res, 'Error Internal', '', 500)
        console.error(error)
      }
  })

    router.post('/upsert/:product', async(req, res) => {
      let result 
      try {
      result = await controller.upsert(req.params.product)
        response(res,'', result, 200 )
      } catch (error) {
        response(res, 'Error Internal', '', 500)
        console.error(error)
      }
    })


module.exports = router