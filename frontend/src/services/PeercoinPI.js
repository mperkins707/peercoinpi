import axios from 'axios'
import config from '../config/peercoinpi';

class PeercoinPI {

    construct() {
        console.log('PeercoinPI API initialization..');
    }

    /**
     * Create usable API host
     * @returns String
     */
    buildHost() {
        return 'http://' + config.PEERCOINPI_HOST + ':' + config.PEERCOINPI_PORT;
    }

    /**
     * Perform an axios API POST
     * 
     * @param Object data 
     * @returns 
     */
    post(data) {
        return axios.post(this.buildHost(), data);
    }

    /**
     * Perform an axios API GET
     * 
     * @param Object data 
     * @returns 
     */
    get(url) {
        return axios.get(this.buildHost() + '/' + url);
    }

    getTransactions() {
        return this.get('transactions');
    }

    getDashboard() {
        return this.get('dashboard');
    }

    /**
     * Set the settings mode for the chain
     * 
     * @param {String} mode 
     * @returns Promise
     */
    setSettingsMode(mode) {
        return axios.post(this.buildHost() + '/settings/chain/' + mode);
    }

}

export default PeercoinPI;