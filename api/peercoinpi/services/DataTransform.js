
class DataTransform {

    helper;

    constructor() {
        console.log('DataTransform initialization..');
        var PeercoinHelper = require("../services/PeercoinHelper");
        this.helper = new PeercoinHelper();
    }

    /**
     * Transform listminting RPC request
     * @param {Array} mints 
     */
    getMints(mints, difficulty) {

        let mature, immature, hashrate = 0;

        mints.forEach((value, index) => {
            let newMint = value;
            newMint['amount'] = newMint['amount'] / 1000000;
            hashrate = newMint['attempts'] + hashrate;
            
            if ( newMint['status'] === 'mature' ) {
                newMint['percentage'] = this.helper.getProbability(newMint['amount'], newMint['age-in-day'], difficulty);
            }

            mints[index] = newMint;
        });
        
        mature = mints.filter(mint => mint.status == 'mature');
        immature = mints.filter(mint => mint.status == 'immature');

        return {
            'mature': mature,
            'immature': immature,
            'hashrate': this.kFormatter(hashrate)
        };
    }

    getFormattedStatus(status, value = 0) {
        if ( status === 0 ) {
            return 'Ready to mint in ' + value + ' days';
        }

        if ( status === 1 ) {
            return 'Minting'
        } 

        return 'Ready to mint';
    }

    kFormatter(num) {
        return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
    }
}

module.exports = DataTransform;