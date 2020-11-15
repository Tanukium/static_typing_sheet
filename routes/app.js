let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('app/index', {
     title: '静的型付け表を作成しよう', row: `${req.query.row}`
  });
});

module.exports = router;
