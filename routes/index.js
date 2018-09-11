var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/serve', (req, res, next) => {
	res.send("Serve Route");
});

module.exports = router;
