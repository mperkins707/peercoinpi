FROM arm32v7/ubuntu:latest

RUN apt-get update -y && apt-get upgrade -y
RUN apt-get install wget -y

WORKDIR /app

RUN wget https://github.com/peercoin/peercoin/releases/download/v0.11.8ppc/peercoin-0.11.8-arm-linux-gnueabihf.tar.gz
RUN tar -xzf peercoin-0.11.8-arm-linux-gnueabihf.tar.gz

CMD ["/app/peercoin-0.11.8/bin/peercoind"]