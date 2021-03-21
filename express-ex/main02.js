var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send('<h1><u>Hello world!<u></h1>');
});

app.listen(3000, () => {
	console.log('Example App listening on port 3000');
});

app.get('/user/:id', (req, res) => {
	res.send('Received a GET request, param:' + req.params.id);
});

app.post('/user', (req, res) => {
	res.json({ success: true });
});

app.put('/user', (req, res) => {
	res.status(400).json({ message: 'Hey, yo. Bad Reqeust!' });
});

app.delete('/user', (req, res) => {
	res.send('Received a DELETE request');
});

app.get('/download', (req, res, next) => {
	res.download('./test.txt');
});
