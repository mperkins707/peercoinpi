const fs = require('fs');
var path = require('path');

class PeercoinAPI {

    chain = 'testnet';

    constructor() {
        console.log('Peercoin RPC initialization..');

        let settings = fs.readFileSync(path.resolve('config/peercoinpi.json'));
        settings = JSON.parse(settings);

        // update chain settings
        this.chain = settings.mode;
    }

    getBlockchaininfo() {
        let rawdata = fs.readFileSync('./deamon/'+ this.chain +'/getblockchaininfo.json');
        return JSON.parse(rawdata);
    }

    getBalances() {
        let rawdata = fs.readFileSync('./deamon/' + this.chain +'/getbalances.json');
        return JSON.parse(rawdata);
    }

    getTransactions() {
        let rawdata = fs.readFileSync('./deamon/' + this.chain + '/listtransactions.json');
        return JSON.parse(rawdata);
    }

    getListMinting() {
        let rawdata = fs.readFileSync('./deamon/' + this.chain + '/listminting.json');
        return JSON.parse(rawdata);
    }

    getDifficulty() {
        let rawdata = fs.readFileSync('./deamon/' + this.chain + '/getdifficulty.json');
        return JSON.parse(rawdata); 
    }

}

module.exports = PeercoinAPI;