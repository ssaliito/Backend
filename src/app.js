const express = require('express');
const cors = require('cors');
const config = require('./config');
const routes = require('./routes');
const app = express();

// config
app.set('port', config.port);

// Midlewares
app.use(cors());
app.use(express.urlencoded({ extended:true}));
app.use(express.json({ limit: '25mb'}));

app.options('*', (req, res)=>{
    res.sendStatus(200);
})

// Routes
app.use(routes);

module.exports = app;