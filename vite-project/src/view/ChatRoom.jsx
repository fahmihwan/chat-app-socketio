import { useState, useEffect, useRef } from "react";
import { InputMessage } from "../components/Input";
import Nav from "../components/Nav";
import { ChatBuble } from "../components/Other";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";
import { getMessageHistory, storeMessage } from "../api/chatRoom";

import Cookies from 'js-cookie';
import io from 'socket.io-client';
const socket = io.connect("http://localhost:3001");


export const ChatRoom = () => {
    const receiveUser = useSelector((state) => state.chooseUser);
    const senderUser = useSelector((state) => state.user);
    const [valueMessage, setValueMessage] = useState("");
    const user_id = Cookies.get('user_id')
    const chatEndRef = useRef(null);


    const [listMessage, setListMessage] = useState([]);

    const fetchData = async () => {
        try {
            const response = await getMessageHistory(senderUser.id, receiveUser.id);
            await setListMessage(response.data);
            await chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        if (receiveUser?.id != undefined && senderUser?.id != undefined) {
            fetchData();
        }
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [senderUser.id, receiveUser.id])

    useEffect(() => {
        socket.emit("join_room", "myroom");
    }, [])

    useEffect(() => {
        socket.on("receive_message", async (data) => {
            await fetchData()
            // console.log(tes);
        });
    }, [socket]);



    const handleKeyPress = async (event) => {
        if (event.key === "Enter" && valueMessage != '') {
            await storeMessage({
                sender_id: senderUser.id,
                content: valueMessage,
                receive_id: receiveUser.id
            });

            socket.emit("send_message", valueMessage);
            setValueMessage('')
            fetchData()
        }
    };


    return (

        <div className="px-16  py-4 bg-[#212121]">
            <div className="w-full flex  h-[880px] ">
                <div className="w-4/12">
                    <Sidebar />
                </div>

                {/* section chat */}
                <div className="w-8/12 border  border-gray-700 bg-[#1d232a]">
                    <div className="h-full  w-full ">
                        <Nav />
                        <div className=" relative h-[800px]">
                            <div className="h-[700px] overflow-y-scroll px-10" >
                                {listMessage?.length > 0 && listMessage.map((d, index) => (
                                    <ChatBuble key={index} content={d?.content} createdAt={d.createdAt} isRight={d.sender_id == user_id ? true : false} />
                                ))}

                                <div ref={chatEndRef} />
                            </div>
                            <div className="px-14 absolute bottom-0 w-full">
                                <InputMessage
                                    type="text"
                                    value={valueMessage}
                                    onChange={(e) => setValueMessage(e.target.value)}
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
