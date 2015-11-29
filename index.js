var config = require('./config');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var fs = require('fs');

var app = express();

// REGISTER OUR ROUTES
app.use(express.static('build'));

app.use(favicon(__dirname + '/favicon.ico'));

// START THE SERVER
app.listen(config.port);
console.log('Magic happens on port ' + config.port);