#!/bin/bash
while sleep 10; 
echo do "Refreshing Peercoin Deamon Mainnet";
do /opt/peercoin/bin/peercoin-cli getblockchaininfo > /peercoinpi/peercoinpi/deamon/main/getblockchaininfo.json && /opt/peercoin/bin/peercoin-cli getbalances > /peercoinpi/peercoinpi/deamon/main/getbalances.json && /opt/peercoin/bin/peercoin-cli listtransactions > /peercoinpi/peercoinpi/deamon/main/listtransactions.json && /opt/peercoin/bin/peercoin-cli listminting > /peercoinpi/peercoinpi/deamon/main/listminting.json;
done;