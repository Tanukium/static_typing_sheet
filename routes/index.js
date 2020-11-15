let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: '静的型付け表作成アプリ' });
});

module.exports = router;
