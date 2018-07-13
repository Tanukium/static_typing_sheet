let express = require('express');
let router = express.Router();

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

router.get('/180618', function(req, res) {
  res.render('blog/180618', { title: '開発日誌：180618' });
});

router.get('/180625', function(req, res) {
  res.render('blog/180625', { title: '開発日誌：180625' });
});

router.get('/180702', function(req, res) {
  res.render('blog/180702', { title: '開発日誌：180702' });
});

router.get('/180709', function(req, res) {
  res.render('blog/180709', { title: '開発日誌：180709' });
});

module.exports = router;
