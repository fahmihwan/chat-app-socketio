import { Route, Routes } from "react-router-dom";
import ChatRoom from "./view/ChatRoom";
import Login from "./view/LoginUser";

function App() {
    return (
        <div>
            <Routes>
                <Route path="" element={<Login />} />
                <Route path="chat-room" element={<ChatRoom />} />
            </Routes>
        </div>
    );
}

export default App;
