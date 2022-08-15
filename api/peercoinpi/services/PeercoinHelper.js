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