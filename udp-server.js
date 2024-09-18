import dgram from "dgram";
import { messaging } from "./firebase-сonfig.js";

const udpServer2 = dgram.createSocket("udp4");

udpServer2.on("message", (msg, rinfo) => {
  console.log(`Received message from Node.js service #1: ${msg}`);

  const parsedMsg = JSON.parse(msg);
  const { data, tokens } = parsedMsg;

  tokens.forEach(async (token) => {
    const message = {
      notification: {
        title: data.title,
        body: data.body,
      },
      token: token,
    };

    try {
      const response = await messaging.send(message);
      console.log("Message sent successfully:", response);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  });
});

udpServer2.bind(41235, () => {
  console.log("Node.js service #2 listening on port: 41235");
});
