const { Server } = require('socket.io')


const io = new Server({ cors: "http://localhost:5173" })

io.on("connection", (socket) => {
    socket.on("join_room", (data) => {
        socket.join(data);
    });

    socket.on("send_message", (data) => {
        // console.log(data);
        socket.to("myroom").emit("receive_message", data);
    });
});


io.listen(3001, () => {
    console.log('Server is running on port http://localhost:3001');
})

