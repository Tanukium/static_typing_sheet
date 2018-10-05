let express = require('express');
let router = express.Router();

router.post('/', function (req, res) {
  let tableToCsv = () => {
    let str = "";
    for (i = 0; i < req.body.row; i++) {
      let arr = [];
      for (j = 0; j < req.body.col; j++) {
        arr.push(req.body[i + ":" + j]);
      }
      str += arr.join(",") + "\n";
    }
    return (str);
  }
  res.set({
    'Content-disposition': 'attachment; filename=save.csv',
    'Content-Type': 'text/csv'
  });
  res.send(tableToCsv());
});

module.exports = router;
