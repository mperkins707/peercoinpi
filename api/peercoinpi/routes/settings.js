
var express = require('express');
var path = require('path');
var router = express.Router();

const fs = require('fs');

router.post('/chain/:mode', function(req, res, next) {

    let mode = req.params.mode;

    // default values
    let settings = {
        mode: 'testnet'
    };

    if ( mode === 'main' ) {
        settings = {
            mode: 'main'
        };
    }

    if ( mode === 'testnet' ) {
        settings = {
            mode: 'testnet'
        };
    }
        
    fs.writeFileSync(path.resolve('config/peercoinpi.json'), JSON.stringify(settings));

    return res.json(settings);
});

module.exports = router;
