var express = require('express');
var router = express.Router();

const fs = require('fs');
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

    let transactions = api.getTransactions().reverse();
    let mints = transformer.getMints(api.getListMinting(), meta.difficulty, transactions);

    if ( mints.mature.length >= 1 ) {
      status = 1;
    }


    return res.json({
      'testnetMode': meta.chain == 'main' ? false : true,
      'balances': api.getBalances(),
      'meta': api.getBlockchaininfo(),
      'difficulties': api.getDifficulty(),
      'progress': progress,
      "finished": progress === 100 ? true : false,
      'mb': Math.ceil(meta.size_on_disk / 1024 / 1024),
      'transactions': api.getTransactions().reverse(),
      'mints': mints,
      'status': transformer.getFormattedStatus(status, helper.getFutureMint(mints.immature), meta.chain)
    }, 200);
});

module.exports = router;
