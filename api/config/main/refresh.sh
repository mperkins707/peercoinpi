#!/bin/bash
while sleep 10; 
echo do "Refreshing Peercoin Deamon Mainnet";
do /opt/peercoin/bin/peercoin-cli getblockchaininfo > /peercoinpi/peercoinpi/deamon/main/getblockchaininfo.json && /opt/peercoin/bin/peercoin-cli getbalances > /peercoinpi/peercoinpi/deamon/main/getbalances.json;
done;