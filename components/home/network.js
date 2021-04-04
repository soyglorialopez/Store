'use strict'
const express = require('express');
const router = express.Router();
const boom = require('@hapi/boom');
const controller = require('./controller');

router.get('/', async (req, res, next) => {
  try {
    let sales = await controller.sale();
    let newProducts = await controller.sale();
   
    res.render("home", {
      user: req.cookies.name,
      sales: sales.rows,
      newProducts: newProducts.rows
    })
  } catch (error) {
    next(boom.badImplementation(error))
  };
});

module.exports = router
