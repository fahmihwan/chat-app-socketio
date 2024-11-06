import { useState, useEffect } from "react";
import { InputMessage } from "../components/Input";
import Nav from "../components/Nav";
import { ChatBubleLeft, ChatBubleRight } from "../components/Other";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";
import { getMessageHistory, storeMessage } from "../api/chatRoom";
import { useEffectMessageHistories } from "../hooks/useEffectAllContact";




export const ChatRoom = () => {
    const receiveUser = useSelector((state) => state.chooseUser);
    const senderUser = useSelector((state) => state.user);
    const [valueMessage, setValueMessage] = useState("");


    const [listMessage, setListMessage] = useState([]);

    const fetchData = async () => {
        try {
            const response = await getMessageHistory(senderUser.id, receiveUser.id);
            console.log(response);
            setListMessage(response.data);
        } catch (error) {
            console.log(error);

        }
    };

    useEffect(() => {
        fetchData();
    }, [])






    const handleKeyPress = async (event) => {
        if (event.key === "Enter" && valueMessage != '') {
            const cek = await storeMessage({
                sender_id: senderUser.id,
                content: valueMessage,
                receive_id: receiveUser.id
            });
            console.log(cek);
            setValueMessage('')
            fetchData()
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
                                {listMessage?.length > 0 && listMessage.map((d, index) => (
                                    // <UserEl key={index} fullname={d?.fullname} username={d?.username} onClick={() => handleChooseUser(d)} />
                                    // <ChatBubleLeft  />
                                    <ChatBubleRight key={index} content={d?.content} createdAt={d.createdAt} />
                                ))}


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
