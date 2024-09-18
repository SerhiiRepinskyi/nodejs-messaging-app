import dgram from "dgram";

const udpServer2 = dgram.createSocket("udp4");

udpServer2.on("message", (msg, rinfo) => {
  console.log(
    `Received message from Node.js service #1 ${rinfo.address}:${rinfo.port}: ${msg}`
  );
});

udpServer2.bind(41235, () => {
  console.log("Node.js service #2 listening on port: 41235");
});
