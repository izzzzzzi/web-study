var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send('Hello World main.js');
});

app.listen(3000, function () {
	console.log('Example App listening on port 3000');
});
