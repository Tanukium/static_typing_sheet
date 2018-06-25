let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('sand/index', { title: '実験場' });
});

router.get('/form', function(req, res) {
  res.render('sand/form', { title: 'ポスト・レスポンス' });
});

module.exports = router;
