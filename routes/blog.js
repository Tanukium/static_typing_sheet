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

router.get('/180716', function(req, res) {
  res.render('blog/180716', { title: '開発日誌：180716' });
});

router.get('/180924', function(req, res) {
  res.render('blog/180924', { title: '開発日誌：180924' });
});

router.get('/181008', function(req, res) {
  res.render('blog/181008', { title: '開発日誌：181008' });
});

router.get('/181029', function(req, res) {
  res.render('blog/181029', { title: '開発日誌：181029' });
});

router.get('/181112', function(req, res) {
  res.render('blog/181112', { title: '開発日誌：181112' });
});

module.exports = router;
