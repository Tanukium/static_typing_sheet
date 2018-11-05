let express = require('express');
let router = express.Router();
let iconv = require('iconv-lite');

router.post('/', (req, res) => {
  let tableToCsv = () => {
    let str = '';
    str += req.body.index + `\n`;
    for (i = 0; i < req.body.row; i++) {
      let arr = [];
      for (j = 0; j < req.body.col; j++) {
        arr.push(req.body[i+':'+j]);
      }
      str += arr.join(',') + `\n`;
    }
    return(str);
  }

  let buf = iconv.encode(tableToCsv(), 'sjis');
  res.set({
    'Content-disposition': 'attachment; filename=save.csv',
    'Content-Type': 'text/csv; encoding=Shift_JIS'
  });
  res.send(buf);
});

module.exports = router;
