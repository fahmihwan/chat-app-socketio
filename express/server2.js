const express = require("express");
const { createServer } = require("node:http");
const { join } = require("node:path");
const { Server } = require("socket.io");

const app = express();
const server = createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
    res.sendFile(join(__dirname, "index.html"));
});

io.on("connection", (socket) => {
    socket.on("userJoined", (msg) => {
        io.emit("userJoined", msg);
    });

    socket.on("disconnect", () => {
        console.log("User disconnected");
    });
    socket.broadcast.emit("hi");
});
server.listen(3000, () => {
    console.log("server running at http://localhost:3000");
});
