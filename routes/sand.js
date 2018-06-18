var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('sand/index', { title: '実験場' });
});

module.exports = router;
