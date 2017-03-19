"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var http = require("http");
var mosca = require("mosca");
var app = express();
app.use(express.static(path.dirname(require.resolve('mosca')) + "/public"));
app.use(express.static('./public'));
app.get('/', function (req, res) {
    res.sendFile('index.html');
});
var server = http.createServer(app);
var broker = new mosca.Server({
    backend: {
        type: 'mongo',
        url: 'mongodb://localhost:27017/mqtt',
        pubsubCollection: 'demo',
        mongo: {}
    }
});
broker.attachHttpServer(server);
server.listen(3000);
