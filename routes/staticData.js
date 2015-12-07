'use strict';
var express = require('express');
var https = require('https');
var buffer = require('buffer');
var api_key = require('../api_key.json');
var staticData = express.Router();
var riotAPIVersions = require('./riotAPIVersions');

staticData.route('/:host/:region')
.get(function(req, res) {

    var riotRequestURI = 'https://' + req.params.host + 
        '/api/lol/static-data/' + req.params.region.toLowerCase() +
        '/' + riotAPIVersions.lolStaticData + '/champion?champData=all&api_key=' + api_key.key;

    
    https.get(riotRequestURI, function(riotRes) {
        riotRes.setEncoding('utf8');
        var data = "";
        riotRes.on('data', function(chunk) {
            data += chunk;
        });

        riotRes.on('end', function() {
            res.json(JSON.parse(data));
        });
    });

});


module.exports = staticData;