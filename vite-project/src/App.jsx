import React, { useState, useEffect } from "react";
import { Route, Router, Routes } from "react-router-dom";
import FirstUser from "./view/FirstUser";
import SecondUser from "./view/SecondUser";
// import io from "socket.io-client";

// const socket = io("http://localhost:3000", {
//     withCredentials: true,
// });

function App() {
    return (
        <div>
            <Routes>
                <Route path="first" element={<FirstUser />} />
                <Route path="second" element={<SecondUser />} />
            </Routes>
        </div>
    );
}

export default App;
