var express = require('express');
var app = express();

var index = require('./routes');
var user = require('./routes/user');
var boards = require('./routes/boards');

app.get('/', function (req, res) {
	res.send('Hello World!');
});

app.use('/', index);
app.use('/user', user);
app.use('/boards', boards);

app.use((req, res, next) => {
	res.status(404).send('File Not Found');
});

module.exports = app;
