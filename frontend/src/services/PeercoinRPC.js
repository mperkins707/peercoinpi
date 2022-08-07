class PeercoinRPC {

    /**
     * RPC Username
     */
    username;

    /**
     * RPC Password
     */
    password;

    /**
     * RPC Port
     */
    port;

    construct() {
        console.log('PeercoinRPC initialization..');
    }

    /**
     * Build RPC URL
     * @returns String
     */
    buildUri() {
        return this.username + this.password + this.port;
    }

    /**
     * Get balances
     * 
     * Imported from RPC getbalances
     * @returns JSON Object
     */
    getBalances() {
        return {
            "mine": {
                "trusted": 70.0,
                "untrusted_pending": 0.0000,
                "immature": 0.000
            }
        };
    }

    /**
     * Get NetworkInfo
     * 
     * Imported from RPC getnetworkinfo
     * @returns JSON Object
     */
    getNetworkInfo() {
        return {
            "version": "v0.11.8ppc Tardigrade",
            "subversion": "/Satoshi:0.20.2/Peercoin:0.11.8(v0.11.8ppc Tardigrade)/",
            "protocolversion": 70016,
            "localservices": "0000000000000409",
            "localservicesnames": [
              "NETWORK",
              "WITNESS",
              "NETWORK_LIMITED"
            ],
            "localrelay": true,
            "timeoffset": 0,
            "networkactive": true,
            "connections": 6,
            "networks": [
              {
                "name": "ipv4",
                "limited": false,
                "reachable": true,
                "proxy": "",
                "proxy_randomize_credentials": false
              },
              {
                "name": "ipv6",
                "limited": false,
                "reachable": true,
                "proxy": "",
                "proxy_randomize_credentials": false
              },
              {
                "name": "onion",
                "limited": true,
                "reachable": false,
                "proxy": "",
                "proxy_randomize_credentials": false
              }
            ],
            "localaddresses": [
            ],
            "warnings": ""
          };
    }



    /**
     * List Mintings
     * 
     * Imported from RPC listminting
     * @returns JSON Objecct
     */
    getListMintings() {
        return [
            {
              "address": "mgWfigDdcqv8iRB2tRCyBowKdX9StPXRpZ",
              "input-txid": "98034eb4e09634b3b125ab5a3574372b9a5448232260fa859a9b010703e58613",
              "time": "1659832423",
              "amount": "10000000",
              "status": "immature",
              "age-in-day": "0",
              "coin-day-weight": "0",
              "proof-of-stake-difficulty": 28.00687778575363,
              "minting-probability-10min": 0,
              "minting-probability-24h": 0,
              "minting-probability-30d": 0.002911938049294793,
              "minting-probability-90d": 0.02773565116199106,
              "search-interval-in-sec": 0,
              "attempts": 0
            },
            {
              "address": "mgWfigDdcqv8iRB2tRCyBowKdX9StPXRpZ",
              "input-txid": "d4e3e5d064b28552d62e3ee1faebb22a358a9f205017fbc06ecdcbd8edb04754",
              "time": "1659838898",
              "amount": "10000000",
              "status": "immature",
              "age-in-day": "0",
              "coin-day-weight": "0",
              "proof-of-stake-difficulty": 28.00687778575363,
              "minting-probability-10min": 0,
              "minting-probability-24h": 0,
              "minting-probability-30d": 0.002911938049294793,
              "minting-probability-90d": 0.02773565116199106,
              "search-interval-in-sec": 0,
              "attempts": 0
            },
            {
              "address": "mgWfigDdcqv8iRB2tRCyBowKdX9StPXRpZ",
              "input-txid": "06a2f65235115e707fc4f4afb6a0c64b5ceb81d7a146d5519e7ff5b706d3fb61",
              "time": "1659838878",
              "amount": "10000000",
              "status": "immature",
              "age-in-day": "0",
              "coin-day-weight": "0",
              "proof-of-stake-difficulty": 28.00687778575363,
              "minting-probability-10min": 0,
              "minting-probability-24h": 0,
              "minting-probability-30d": 0.002911938049294793,
              "minting-probability-90d": 0.02773565116199106,
              "search-interval-in-sec": 0,
              "attempts": 0
            },
            {
              "address": "mgWfigDdcqv8iRB2tRCyBowKdX9StPXRpZ",
              "input-txid": "0e9614bf39bebf194253bc75d863bde5fbc478c92e560fbfdc6da6c3e3433e6f",
              "time": "1659832423",
              "amount": "10000000",
              "status": "immature",
              "age-in-day": "0",
              "coin-day-weight": "0",
              "proof-of-stake-difficulty": 28.00687778575363,
              "minting-probability-10min": 0,
              "minting-probability-24h": 0,
              "minting-probability-30d": 0.002911938049294793,
              "minting-probability-90d": 0.02773565116199106,
              "search-interval-in-sec": 0,
              "attempts": 0
            },
            {
              "address": "mgWfigDdcqv8iRB2tRCyBowKdX9StPXRpZ",
              "input-txid": "f40d538ba7f4b19e2d4a6ecc36e03b0282785948ce88dc7ae95ed0fe3c2a778a",
              "time": "1659832423",
              "amount": "10000000",
              "status": "immature",
              "age-in-day": "0",
              "coin-day-weight": "0",
              "proof-of-stake-difficulty": 28.00687778575363,
              "minting-probability-10min": 0,
              "minting-probability-24h": 0,
              "minting-probability-30d": 0.002911938049294793,
              "minting-probability-90d": 0.02773565116199106,
              "search-interval-in-sec": 0,
              "attempts": 0
            },
            {
              "address": "mgWfigDdcqv8iRB2tRCyBowKdX9StPXRpZ",
              "input-txid": "29eba70988c8823cced1e3a195c8e1ca9eefdd77bca7334491fefc5c5539c9b1",
              "time": "1659832423",
              "amount": "10000000",
              "status": "immature",
              "age-in-day": "0",
              "coin-day-weight": "0",
              "proof-of-stake-difficulty": 28.00687778575363,
              "minting-probability-10min": 0,
              "minting-probability-24h": 0,
              "minting-probability-30d": 0.002911938049294793,
              "minting-probability-90d": 0.02773565116199106,
              "search-interval-in-sec": 0,
              "attempts": 0
            },
            {
              "address": "mgWfigDdcqv8iRB2tRCyBowKdX9StPXRpZ",
              "input-txid": "db7f651a2b59f2be77cd288e5ba92f10d1fd134c01dc5db950af663bae77b3e2",
              "time": "1659832423",
              "amount": "10000000",
              "status": "immature",
              "age-in-day": "0",
              "coin-day-weight": "0",
              "proof-of-stake-difficulty": 28.00687778575363,
              "minting-probability-10min": 0,
              "minting-probability-24h": 0,
              "minting-probability-30d": 0.002911938049294793,
              "minting-probability-90d": 0.02773565116199106,
              "search-interval-in-sec": 0,
              "attempts": 0
            }
          ];
    }
}

export default PeercoinRPC;