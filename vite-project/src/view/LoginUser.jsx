import { useEffect, useState } from "react";
import { InputLogin } from "../components/Input";
import { useNavigate } from "react-router-dom";

import io from "socket.io-client";
const socket = io.connect("http://localhost:3000");

export const LoginUser = () => {
    const [username, setUsername] = useState('');
    const [fullName, setFullname] = useState('');
    const navigate = useNavigate();

    const sendUser = () => {


        let localData = localStorage.getItem('users')

        if (localData) {
            let users = JSON.parse(localData);
            users.push({ username: username, fullName: fullName })
            localStorage.setItem('users', JSON.stringify(JSON.stringify(users)))
        } else {
            localStorage.setItem('users', JSON.stringify([{ username: username, fullName: fullName }]))
        }

        return navigate("/chat-room");




        // const room = 100;
        // socket.emit("join_room", room);
        // socket.emit('send_message', { username: username, fullName: fullName });

        // if (socket.connected) {
        //     // return 
        //     return navigate("/chat-room");
        // }
    }

    // useEffect(() => {
    //     socket.on("receive_message", (data) => {
    //         console.log(data);
    //     });
    //     console.log(socket);

    // }, [socket]);

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="card bg-neutral text-neutral-content w-96 h-[350px] border border-info">
                <div className="card-body items-center text-center">
                    <h1 className="text-[20px]">Chat with random people</h1>
                    <hr className="border w-full border-t-[0px] border-info" />

                    <InputLogin
                        type="text"
                        label="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    // placeholder="Ketik sesuatu dan tekan Enter"
                    />

                    <InputLogin
                        type="text"
                        label="Full Name"
                        value={fullName}
                        onChange={(e) => setFullname(e.target.value)}
                    // placeholder="Ketik sesuatu dan tekan Enter"
                    />

                    <div className="card-actions justify-end mt-4">
                        <button onClick={sendUser} className="btn btn-primary">Accept</button>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default LoginUser;
