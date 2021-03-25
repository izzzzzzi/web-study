// app.js
const express = require('express');
const app = express();

const hostname = '127.0.0.1';
const port = 3000;

app.get('/', (req, res) => {
	res.send('<h1>Hello World!!<h1>');
});

app.get('/sayhello/:name', (req, res) => {
	res.status(200);
	let name = req.params.name;
	res.send(`Hello, ${name}`);
});

// app.get('/', (req, res) => {
// 	res.send('Hello World!!');
// });

// app.listen(port, () => {
//     console.log(`Express is running on localhost:3000`);
// } );
app.listen(port, () => {
	console.log(`Express is running on http://${hostname}:${port}/`);
});
