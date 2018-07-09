let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('sand/index', { title: '実験場', rowNum: 5, colNum: 6});
});

module.exports = router;
