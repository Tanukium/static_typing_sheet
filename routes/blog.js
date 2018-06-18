var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('blog/index', { title: '開発日誌' });
});

/* GET date page. */
router.get('/180521', function(req, res) {
  res.render('blog/180521', { title: '開発日誌：180521' });
});

router.get('/180604', function(req, res) {
  res.render('blog/180604', { title: '開発日誌：180604' });
});

module.exports = router;
