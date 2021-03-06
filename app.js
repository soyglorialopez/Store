'use strict'
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const dbConnection = require("./lib/pg");
const { site, cookie } = require('./config/index');
const debug = require('debug')('app:server');
const boom = require("@hapi/boom");
const path = require('path');
const user = require('./components/user/network.js');
const auth = require('./components/auth/network');
const home = require('./components/home/network');
const products = require('./components/products/network');
const shoppingCart = require('./components/cart/network.js');
const api = require('./api/network');
const setCache = require('./utils/cache');
const {
  errorLog,
  wrapError,
  responseToError
} = require('./utils/middleware/handlerError');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cookieSession({
  secret: cookie.secret,
  maxAge: 24 * 60 * 60 * 1000
}));
app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'pug');
app.use(setCache);
app.use('/static',express.static(path.join(__dirname, 'public')))

app.use('/user', user);
app.use('/auth', auth);
app.use('/products', products);
app.use('/shopping-cart', shoppingCart);
app.use('/home', home);
app.use('/api', api);

app.get('/', (req, res) => {
    res.redirect('/home')
});

app.use((req, res, next) => {
  const {
    output: { statusCode, payload }
  } = boom.notFound();
  if (!req.xhr || !req.accepts('html')) {
    return res.status(statusCode).json({
      payload
    });
  };

  res.render('404');
  
});



app.use(errorLog);
app.use(wrapError);
app.use(responseToError);


const dbConnected = () => dbConnection.connection();
dbConnected();

app.set("port", site.port || 8000);
app.set("host", site.host || "localhost");

app.listen(app.get("port"), () => {
  debug(`Server listening in http://localhost:${app.get("port")}`);
});