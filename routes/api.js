var express = require('express');

var api = express.Router();

var staticData = require('./staticData');

api.use(function(req, res, next) {
    console.log('routes/api.js: Some request was made');
    next();
});

api.use('/staticData', staticData);

module.exports = api;