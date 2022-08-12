#!/bin/bash
while sleep 10; 
echo do "Refreshing Peercoin Deamon";
do /opt/peercoin/bin/peercoin-cli -testnet getblockchaininfo > /peercoinpi/peercoinpi/deamon/testnet/getblockchaininfo.json && /opt/peercoin/bin/peercoin-cli -testnet getbalances > /peercoinpi/peercoinpi/deamon/testnet/getbalances.json && /opt/peercoin/bin/peercoin-cli -testnet listtransactions > /peercoinpi/peercoinpi/deamon/testnet/listtransactions.json;
done;