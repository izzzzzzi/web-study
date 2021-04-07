// ./fs/readfile.js

const fs = require('fs');

// const callback = (err, file) => {
// 	console.log(file);
// };

const file = fs.readFile(
	'readme.txt',
	{
		encoding: 'utf8',
	},
	(err, file) => console.log(file)
);
