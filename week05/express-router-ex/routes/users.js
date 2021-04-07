var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function (req, res, next) {
// 	res.send('respond with a resource');
// });

router.get('/:id', (req, res, next) => {
	res.send('사용자 정보 가져오기');
});

router.post('/', (req, res, next) => {
	res.send('회원가입');
});

router.put('/:id', (req, res, next) => {
	res.send('사용자 정보 수정');
});

router.delete('/:id', (req, res, next) => {
	res.send('회원탈퇴');
});

module.exports = router;
