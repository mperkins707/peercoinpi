var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(
    {
        "testmode": false,
        "balance": 70,
        "mints": 5,
        "hashrate": 12
    }
, 200);
});

module.exports = router;
