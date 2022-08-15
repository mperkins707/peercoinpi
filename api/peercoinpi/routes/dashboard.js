var express = require('express');
var router = express.Router();

var PeercoinAPI = require('../services/PeercoinAPI');
var DataTransform = require('../services/DataTransform');
var PeercoinHelper = require("../services/PeercoinHelper");

router.get('/', function(req, res, next) {

    let api = new PeercoinAPI();
    let transformer = new DataTransform();
    let meta = api.getBlockchaininfo();
    let helper = new PeercoinHelper();
    let progress = Math.ceil(meta.verificationprogress * 100);
    let status = 0;
    let mints = transformer.getMints(api.getListMinting());

    if ( mints.mature.length >= 1 ) {
      status = 1;
    }

    return res.json({
      'balances': api.getBalances(),
      'meta': api.getBlockchaininfo(),
      'progress': progress,
      "finished": progress === 100 ? true : false,
      'mb': Math.ceil(meta.size_on_disk / 1024 / 1024),
      'transactions': api.getTransactions().reverse(),
      'mints': mints,
      'status': transformer.getFormattedStatus(status, helper.getFutureMint(mints.immature), meta.chain)
    }, 200);
});

module.exports = router;
