var express = require('express');
var router = express.Router();

var PeercoinAPI = require('../services/PeercoinAPI');

/* GET home page. */
router.get('/', function(req, res, next) {

    let api = new PeercoinAPI();
    let meta = api.getBlockchaininfo();
    let progress = Math.ceil(meta.verificationprogress * 100);

    return res.json({
      'balances': api.getBalances(),
      'meta': api.getBlockchaininfo(),
      'progress': progress,
      "finished": progress === 100 ? true : false,
      'mb': Math.ceil(meta.size_on_disk / 1024 / 1024)
    }, 200);
});

module.exports = router;
