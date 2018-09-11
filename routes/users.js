var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.get('/serve', (req, res, next) => {
	res.send('User Route Serve');
});

module.exports = router;
