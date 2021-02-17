const express = require('express');
const app = express();
const config = require('../config.js');
const user = require('./components/user/network.js');
const auth = require('./components/auth/network');
const home = require('./components/home/network');
const products = require('./components/products/network');
const shoppingCart = require('./components/cart/network.js');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/user', user);
app.use('/auth', auth);
app.use('/products', products);
app.use('/shopping-cart', shoppingCart);
app.use('/home', home);

app.use('/', (req, res) => {
    res.redirect('/home')
});

app.listen(config.api.port, () => {
    console.log(`Api escuchando en http://${config.api.host}/${config.api.port}`)
})