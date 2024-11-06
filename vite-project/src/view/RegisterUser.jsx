import { useEffect, useState } from "react";
import { InputLogin } from "../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { registrasiUser } from "../api/authenticated";

// import io from "socket.io-client";
// const socket = io.connect("http://localhost:3000");

export const RegisterUser = () => {
    const [username, setUsername] = useState('');
    const [fullName, setFullname] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegis = () => {

        registrasiUser({
            username: username,
            fullname: fullName,
            password: password,
        }).then((res) => {
            alert('registrasi is successfully')
            navigate("/", { replace: true });
        }).catch((err) => alert('regis failed'))


        // return navigate("/chat-room");

        // const room = 100;
        // socket.emit("join_room", room);
        // socket.emit('send_message', { username: username, password: password });

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
            <div className="card bg-neutral text-neutral-content w-96 h-[470px] border border-info">
                <div className="card-body items-center text-center">
                    <h1 className="text-[20px]">Registerasi</h1>
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
                        label="Full name"
                        value={fullName}
                        onChange={(e) => setFullname(e.target.value)}
                    />

                    <InputLogin
                        type="text"
                        label="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    // placeholder="Ketik sesuatu dan tekan Enter"
                    />

                    <div className="card-actions justify-end mt-4">
                        {/* <button onClick={handleRegis} className="btn btn-primary">Accept</button> */}
                        <button onClick={handleRegis} className="btn btn-primary">Regis</button>
                        <Link to="/" className="btn btn-warning">Cancel</Link>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default RegisterUser;
