const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');
mongoose
	.connect('mongodb://localhost:27017/testDB', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	})
	.then(() => console.log('MongoDB Connected...'))
	.catch((err) => console.log(err));

app.get('/', (req, res) => {
	res.send('Hdkss!');
});

app.listen(port, () =>
	console.log(`Example app listening on port http://127.0.0.1:${port}`)
);
