import { useState, useEffect } from "react";
import { InputMessage } from "../components/Input";
import Nav from "../components/Nav";
import { ChatBubleLeft, ChatBubleRight } from "../components/Other";
import Sidebar from "../components/Sidebar";



import io from "socket.io-client";
const socket = io.connect("http://localhost:3000");



export const ChatRoom = () => {
    const [room, setRoom] = useState("22");

    const [inputValue, setInputValue] = useState("");
    const [message, setMessage] = useState("");

    const handleKeyPress = (event) => {

        if (event.key === "Enter") {
            socket.emit("send_message", { message, room });
            setMessage(`Anda mengetik: ${inputValue}`);
            setInputValue(""); // Bersihkan input setelah menekan Enter
        }
    };

    useEffect(() => {
        socket.on("receive_message", (data) => {
            console.log(data);
            // setMessage(data);
        });
    }, [socket]);

    // useEffect(() => {}, []);
    return (
        <div className="px-16  py-4">
            <div className="w-full flex  h-[880px] ">
                <div className="w-4/12">
                    <Sidebar />
                </div>

                {/* section chat */}
                <div className="w-8/12">
                    <div className="h-full bg-neutral w-full ">
                        <Nav />
                        <div className=" relative h-[800px]">
                            <div className="h-[700px] overflow-y-scroll px-10">
                                <ChatBubleLeft />
                                <ChatBubleLeft />
                                <ChatBubleLeft />
                                <ChatBubleLeft />

                                <ChatBubleRight />
                                <ChatBubleRight />

                                <ChatBubleRight />
                                <ChatBubleRight />
                                <ChatBubleRight />
                                <ChatBubleRight />
                                <ChatBubleRight />
                                <ChatBubleRight />
                                {message}
                            </div>
                            <div className="px-14 absolute bottom-0 w-full">
                                <InputMessage
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Ketik sesuatu dan tekan Enter"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatRoom;
