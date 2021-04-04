'use strict'
const express = require('express');
const router = express.Router();
const boom = require('@hapi/boom');
const services = require('../../services/product');
const products = new services();


router.get('/all', async (req, res, next) => {
    let result
    try {
        result = await products.getAllProducts();
        res.render('products', {
             user: req.cookies.name,
            products: result['rows']
        })
    
    } catch (error) {
        next(boom.badImplementation(error));
    }
});


module.exports = router