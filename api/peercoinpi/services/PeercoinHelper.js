class PeercoinHelper {

    constructor() { }

    /**
     * Will find for the next future mint
     * 
     * @return Mint
     */
    getFutureMint(immatures) {
        return this.getNextMintDays(immatures.map(x => x['age-in-day'])[0]);
    }

    // p = (coins * weight) / ( difficulty * 2 * 32)
    /**
     * Will calculate probability of minting based
     * on amount, weight and current difficulty
     * 
     * Thank for Nagalim about the calculation!
     * @param {Integer} amount 
     * @param {Integer} daysweight 
     * @param {Float} difficulty 
     * @returns String as percentage
     */
    getProbability(amount, daysweight, difficulty) {
        return ( amount * daysweight ) / ( difficulty * 2 * 32);
    }

    /**
     * Will return the number of days before
     * the next mint
     * @param Integer age 
     * @returns Integer
     */
    getNextMintDays(age, chain = 'main') {
        if ( chain === 'main' ) {
            return 30 - age;
        }

        return 2 - age;
    }

}

module.exports = PeercoinHelper;