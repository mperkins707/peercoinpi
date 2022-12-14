#!/bin/bash
echo 'Starting Peercoin Testnet';

cd /peercoinpi/config/testnet
bash refresh.sh &

cd /opt/peercoin/bin
peercoind \
-testnet=1 \
-rpcpassword=1234 \
-rpcuser=peercoinpi \
-rpcport=9904 \
-rpcallowip=0.0.0.0/0 \
-conf=./peercoinpi/config/peercoin_testnet.conf \
-server=1 \
-rest \
-listen=1



