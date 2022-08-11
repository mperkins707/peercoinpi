const fs = require('fs');


class PeercoinAPI {

    chain = 'testnet';

    constructor() {
        console.log('Peercoin RPC initialization..');
    }

    /**
     * Create usable API host
     * @returns String
     */
    buildHost() {
        return "http://localhost:9904";
    }

    getBlockchaininfo() {
        let rawdata = fs.readFileSync('./deamon/'+ this.chain +'/getblockchaininfo.json');
        return JSON.parse(rawdata);
    }

    getBalances() {
        let rawdata = fs.readFileSync('./deamon/' + this.chain +'/getbalances.json');
        return JSON.parse(rawdata);
    }

}

module.exports = PeercoinAPI;