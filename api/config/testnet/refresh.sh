#!/bin/bash
while sleep 10; 
echo do "Refreshing Peercoin Deamon";
do /opt/peercoin/bin/peercoin-cli -testnet getblockchaininfo > /peercoinpi/peercoinpi/deamon/testnet/getblockchaininfo.json && /opt/peercoin/bin/peercoin-cli -testnet getbalances > /peercoinpi/peercoinpi/deamon/testnet/getbalances.json && /opt/peercoin/bin/peercoin-cli -testnet listtransactions "*" 50 0 > /peercoinpi/peercoinpi/deamon/testnet/listtransactions.json && /opt/peercoin/bin/peercoin-cli -testnet listminting > /peercoinpi/peercoinpi/deamon/testnet/listminting.json && /opt/peercoin/bin/peercoin-cli -testnet getwalletinfo > /peercoinpi/peercoinpi/deamon/testnet/getwalletinfo.json && /opt/peercoin/bin/peercoin-cli -testnet getdifficulty > /peercoinpi/peercoinpi/deamon/testnet/getdifficulty.json;
done;