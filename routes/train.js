var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
	res.sendFile('process.html');	
});

router.post('/', (req, res, next) => {
});

module.exports = router;
