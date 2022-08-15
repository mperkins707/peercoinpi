# Peercoin PI - ASIC of Proof-Of-Stake

The Peercoin Minting Station (PMS) is a device that can stake your funds securely.

![](https://cdn.discordapp.com/attachments/426340191259852801/1004598744639098900/Peercoint_Mint.png)

##### How does it works ?

Peercoin network is a decentralized network. Relying of full nodes like the Peercoin PI or computers to run. 
By running a node with Peercoin PI you're contributing to the good health of the network and are able to be rewarded for this work.

##### State of the network

Currently the network is allowing anyone with at least 1 PPC to contribute.
By leaving your full node always connected to the network you can be rewarded up to 5% off your stakes.
Alternating on and off of the device will get you up to 3%. 

The more amount you've own the more minting power you get. 
Age of your funds also take into account when calculating minting power. 
It's means that a 100 PPC mint will after some more time equals to a 1,000 mint in term of minting power.
**Simple as that.**

##### Why should I run a full node ?

There are many advantages by running a full node

- Energy consumption will be at the lowest instead of running a full and intensive computer.
- You can leave your device and be rewarded up to 5%
- You'll be able to vote for the future of the network from the device itself
- You can get statistics about your harvesting mints
- Peercoin is a sustainable cryptocurrency eco-system and by running a node you're also part of a bigger and stronger community. 

Our core values and principle needs to remain the same with a small or larger network.
By running a node you're accepting the principles that:

- You'll be part of a different economics system ruled by you and their users
- You're making a vote to use a decentralized system
- You'll be part of the world best intent to decentralize power

_Remember that a decentralized system should always be out of centralized group that can corrupt the network._

----

##### Advanced Technical Details

Peercoin PI can be run on Raspberry PI device. 

It serve a web server which communicate with the `peercoind` RPC command-line.
Local is using Docker-compose to run and build frontend. 

Everything is runs on the device. Only UI is served to the user with a web server.

##### Difference between base and production Docker-Compose

You will note there a difference between docker-compose files. In fact one should be used for development and as it names implies to production for the other one. This ensure that development environment can replicate the production (peercoind on the device itself) correctly.

#### Version 1.0.0 (not released)

- Switch between testnet and mainnet for users to be able to test Peercoin PI with test coins beforehand.
- Web UI connected to the Peercoind RPC command-line.
- View of balances and mints
- Settings with network information
- Warning of use (non-production version: own risks)

##### Roadmap

- [ ] Automatic clam of 1,000 TEST PPC to try out
- [ ] Automatic node discovery when first use. Peercoin PI Discovery Node on local.
- [ ] Setup a website for it
- [ ] Update of latest software with only a click ( Automatic ? ).
- [ ] Adding community based project inside the Dashboard ( Immutable Place, Christmas messages )