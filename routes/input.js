var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
	res.sendFile('input.html');
});

router.post('/', (req, res, next) => {
	//callback
});

module.exports = router;
