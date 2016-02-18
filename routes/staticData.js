'use strict';
var express = require('express');
var https = require('https');
var buffer = require('buffer');
var api_key = require('../api_key.json');
var staticData = express.Router();
var riotAPIVersions = require('./riotAPIVersions');

staticData.route('/:host/:region/:datatype')
.get(function(req, res) {

    var riotRequestURI = 'https://' + req.params.host +
        '/api/lol/static-data/' + req.params.region.toLowerCase() +
        '/' + riotAPIVersions.lolStaticData;

    if(req.params.datatype == 'champion')
      riotRequestURI += '/champion?champData=all&api_key=' + api_key.key;

    if(req.params.datatype == 'item')
      riotRequestURI += '/item?itemListData=all&api_key=' + api_key.key;

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
