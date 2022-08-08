#!/bin/bash
echo 'Starting Peercoin Testnet';

cd /opt/peercoin/bin
peercoind \
-testnet=1 \
-rpcpassword=1234 \
-rpcuser=peercoinpi \
-rpcport=9904 \
-rpcallowip=0.0.0.0/0 \
-conf=./peercoinpi/peercoin_testnet.conf \
-rest &


