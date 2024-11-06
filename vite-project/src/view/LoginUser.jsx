import { useState } from "react";
import { InputLogin } from "../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { authenticated } from "../api/authenticated";
import { useDispatch } from "react-redux";
import { setUserSlice } from "../redux/features/userSlice";
// import io from "socket.io-client";
// const socket = io.connect("http://localhost:3000");

export const LoginUser = () => {

    const dispatch = useDispatch()
    const [username, setUsername] = useState('fahmihwan');
    const [password, setPassword] = useState('qweqwe123');
    const navigate = useNavigate();

    const sendUser = async () => {

        const isAuth = await authenticated({
            username: username,
            password: password
        });

        if (isAuth[1] === true) {

            dispatch(setUserSlice({
                id: isAuth[2].id,
                fullname: isAuth[2].fullname,
                username: isAuth[2].username,
            }))

            navigate("/chat-room", { replace: true });
        } else {
            // setToastError({
            //     isError: true,
            //     message: "Username or password Invalid",
            // });
        }
    }



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
                        type="password"

                        label="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    // placeholder="Ketik sesuatu dan tekan Enter"
                    />
                    <div className="card-actions justify-end mt-4">
                        <button onClick={sendUser} className="btn btn-primary">Login</button>
                        <Link to="/register" className="btn btn-warning">Reister</Link>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default LoginUser;
