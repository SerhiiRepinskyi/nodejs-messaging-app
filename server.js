import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import dgram from "dgram";

const app = express();
const http = createServer(app);
const io = new Server(http);
const udpClient = dgram.createSocket("udp4");

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("User connected");

  socket.on("sendMessage", (data) => {
    console.log("Message received:", data);

    const message = JSON.stringify(data);
    udpClient.send(message, 0, message.length, 41235, "localhost", (err) => {
      if (err) {
        console.error("Error sending UDP message:", err);
      } else {
        console.log("Message sent to UDP server");
      }
    });
  });

  socket.emit("message", "User connected!");
});

http.listen(3000, () => {
  console.log("Node.js service #1 listening on port: 3000");
});
