const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const router = require("./routes");
const app = express();

app.use(cors({
    credentials: true,
    origin: "http://localhost:5173",
}));


app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// mount api before csrf is appended to the app stack
app.use('/api', router)



// const server = http.createServer(app);

// const io = new Server(server, {
//     cors: {
//         origin: "http://localhost:3000",
//         methods: ["GET", "POST"],
//     },
// });

// io.on("connection", (socket) => {

//     console.log('connect ==', socket.io);
//     socket.join("join_room", (data) => {
//         socket.join(data);
//     });

//     socket.on("send_message", (data) => {
//         console.log(data);
//         socket.to(data.room).emit("receive_message", data);
//     });
// });
// server.listen(3000, () => {
//     console.log("Server is running on port http://localhost:3000");
// });

app.listen(3000, () => {
    console.log("Server is running on port http://localhost:3000");
});
