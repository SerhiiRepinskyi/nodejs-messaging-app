import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import dgram from "dgram";

const app = express();
const http = createServer(app);
const io = new Server(http);
const udpClient = dgram.createSocket("udp4");

let clientTokens = []; // Для зберігання токенів

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("User connected");

  socket.on("registerToken", (token) => {
    clientTokens.push(token);
    console.log("Registered FCM Token:", token);
  });

  socket.on("sendMessage", (data) => {
    console.log("Message received from client:", data);

    const message = JSON.stringify({ data, tokens: clientTokens });
    udpClient.send(message, 41235, "localhost", (err) => {
      if (err) console.error("Error sending UDP message:", err);
      else console.log("Message sent to Node.js service #2");
    });
  });

  socket.emit("message", "User connected!");
});

http.listen(3000, () => {
  console.log("Node.js service #1 listening on port: 3000");
});
