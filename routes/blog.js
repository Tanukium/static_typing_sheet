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

module.exports = router;
