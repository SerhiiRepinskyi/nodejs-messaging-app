import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const http = createServer(app);
const io = new Server(http);

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("User connected!");

  socket.on("sendMessage", (data) => {
    console.log("Message received:", data);
  });

  socket.emit("message", "User connected!");
});

http.listen(3000, () => {
  console.log("Node.js service #1 listening on port: 3000");
});
