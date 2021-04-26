const express = require('express');
const router = express.Router();
const boom = require("@hapi/boom");
const services = require('../services/product');
const productServices = new services();

router.post('/product', async (req, res, next) => {
    let result
    try {
        result = await productServices.add(req.body);
        res.status(201).json({
           'results': result['rows']
        })
    } catch (error) {
        next(boom.badImplementation(error));
    }
});


router.put('/product/:id', async (req, res, next) => {
    let result
    try {
        result = await productServices.upsert(req.params.id, req.body)
        res.status(201).json({
            'results': result['rows']
         })
     } catch (error) {
         next(boom.badImplementation(error));
    };
});

router.get('/product/all', async (req, res) => {
    let result
    try {
        result = await productServices.getAllProducts();
        res.status(200).json(
         result['rows']
        )
    } catch (error) {
        next(boom.badImplementation(error));
    }
});


router.get('/product/:id', async (req, res, next) => {
    let result
    try {
        result = await productServices.getSpecificProduct(req.params.id);
        res.status(200).json(
            result['rows'][0]
        )
    } catch (error) {
        next(boom.badImplementation(error));
    } 
});

router.get('/product', async (req, res, next) => {
    let result
    try {
        result = await productServices.getProducts(req.query);
        res.status(200).json({
           'results': result['rows']
        })
    } catch (error) {
        next(boom.badImplementation(error));
    } 
});

router.get('/product/last/:quantity', async (req, res) => {
    let result
    try {
        result = await productServices.getLastProducts(req.params.quantity);
        res.status(200).json({
            'results': result['rows']
        })
    } catch (error) {
        next(boom.badImplementation(error));
    }
});





module.exports = router