const express = require('express');
const app = express();
const config = require('../config.js');
const routes = require('./network.js');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/',  routes);

app.listen(config.db.port, () => {
    console.log(`DB escuchando en http://${config.db.host}/${config.db.port}`)
})