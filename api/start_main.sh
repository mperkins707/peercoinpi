#!/bin/bash
echo 'Starting Peercoin Mainet';

cd /peercoinpi/config/main
bash refresh.sh &

cd /opt/peercoin/bin
peercoind \
-rpcpassword=1234 \
-rpcuser=peercoinpi \
-rpcport=9902 \
-rpcallowip=0.0.0.0/0 \
-conf=./peercoinpi/config/peercoin.conf \
-server=1 \
-rest \
-listen=1
