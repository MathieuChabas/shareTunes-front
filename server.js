var path = require('path');
var express = require('express');
var app = express();
var port = process.env.PORT || 8000;


require('./app/app.route.js')(app);

app.use('/',express.static(path.join(__dirname, '/')));
var server = app.listen(port);
console.log('App listening on '+port);

var io = require('socket.io').listen(server);