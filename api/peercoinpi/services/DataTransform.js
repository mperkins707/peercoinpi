
class DataTransform {

    constructor() {
        console.log('DataTransform initialization..');
    }

    /**
     * Transform listminting RPC request
     * @param {Array} mints 
     */
    getMints(mints) {

        let mature, immature, hashrate = 0;

        mints.forEach((value, index) => {
            let newMint = value;
            newMint['amount'] = newMint['amount'] / 1000000;
            hashrate = newMint['attempts'] + hashrate;

            let age = parseInt(newMint['age-in-day']);
            
            // auto calculate minting luckiness
            if ( age <= 1 ) {
                newMint['percentage'] = Math.ceil(newMint['minting-probability-24h'] * 100);
            } else if ( age > 1 && age <= 30 ) {
                newMint['percentage'] = Math.ceil(newMint['minting-probability-30d'] * 100);
            } else if ( age >= 90 ) {
                newMint['percentage'] = Math.ceil(newMint['minting-probability-90d'] * 100);
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

    kFormatter(num) {
        return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
    }
}

module.exports = DataTransform;