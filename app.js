'use strict'
const express = require('express');
const app = express();
const { api: apiConfig } = require('../config/index');
const debug = require('debug')('app/server')
// const user = require('./components/user/network.js');
// const auth = require('./components/auth/network');
const home = require('./components/home/network');
// const products = require('./components/products/network');
// const shoppingCart = require('./components/cart/network.js');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'pug');

// app.use('/user', user);
// app.use('/auth', auth);
// app.use('/products', products);
// app.use('/shopping-cart', shoppingCart);
app.use('/home', home);

app.use('/', (req, res) => {
    res.redirect('/home')
});

app.listen(8000, () => {
  debug(`Server listening in http://${apiConfig.host}/${apiConfig.port}`);
});