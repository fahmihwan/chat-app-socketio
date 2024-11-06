import { useState, useEffect } from "react";
import { InputMessage } from "../components/Input";
import Nav from "../components/Nav";
import { ChatBubleLeft, ChatBubleRight } from "../components/Other";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";
import { storeMessage } from "../api/chatRoom";




export const ChatRoom = () => {
    const receiveUser = useSelector((state) => state.chooseUser);
    const senderUser = useSelector((state) => state.user);
    const [valueMessage, setValueMessage] = useState("");

    const [listMessage, setListMessage] = useState([]);

    useEffect(() => {

    }, [receiveUser])







    const handleKeyPress = async (event) => {
        if (event.key === "Enter" && valueMessage != '') {
            const cek = await storeMessage({
                sender_id: senderUser.id,
                content: valueMessage,
                receive_id: receiveUser.id
            });
            console.log(cek);
            setValueMessage('')
        }
    };

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
