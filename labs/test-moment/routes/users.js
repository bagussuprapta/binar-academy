var express = require('express');
var router = express.Router();
const moment = require("moment");
const dateNow = moment().format();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({
    data1: "Hello",
    data2: dateNow,
    data3: require("path").basename(__filename)
  });
});

module.exports = router;
