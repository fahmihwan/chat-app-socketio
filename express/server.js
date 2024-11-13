const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const router = require("./routes");
const app = express();

// const server = http.createServer(app);

// const io = new Server(server, {
//     cors: {
//         origin: "http://localhost:5173",
//         methods: ["GET", "POST"],
//     },
// });

app.use(cors({
    credentials: true,
    origin: "http://localhost:5173",
}));

app.use((req, res, next) => {
    // req.io = io;
    return next();
});
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', router)

app.listen(3000, () => {
    console.log("Server is running on port http://localhost:3000");
});
