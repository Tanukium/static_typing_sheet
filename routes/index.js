let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'シュクの表計算Webアプリ開発ブログ' });
});

module.exports = router;
