let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  function inputValueCheck() {
    let obj = req.query.row;
    if (!obj || !isNumber(obj)) {
      obj = 0;
    }
    return obj;
  }
  
  function isNumber(str) {
    let rul = /^[0-9]$|^[1-9][0-9]$|^100$/; 
    return rul.test(str);
  }

  req.query.row = inputValueCheck(req.query.row);
  res.render('app/index', {
     title: '静的型付け表を作成しよう', row: `${req.query.row}`
  });
});

module.exports = router;
