import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import { ProtectedRoute, ProtectedRouteisNotAuth } from "./ProtectedRoute";
// import ChatRoom from "../view/ChatRoom";
// const ListTransactionHistory = lazy(() => import('../view/profile/ListTransactionHistory'))
// import ProtectedRoute from "./ProtectedRoute";


// Lazy load komponen
// const Home = lazy(() => import("../view/home/Home"));
const LoginUser = lazy(() => import("../view/LoginUser"));
const RegisterUser = lazy(() => import("../view/RegisterUser"))
const ChatRoom = lazy(() => import('../view/ChatRoom'))
// const ListForRent = lazy(() => import("../view/home/ListForRent"));
// const DetailForRent = lazy(() => import("../view/home/DetailForRent"));
// const Profile = lazy(() => import("../view/profile/Profile"));
// const ListCarProfile = lazy(() => import("../view/profile/ListCarProfile"));
// const Summary = lazy(() => import("../view/home/Summary"));

const routes = createBrowserRouter([
    // {
    //     path: "/",
    //     element: <LoginUser />
    // },
    // {
    //     path: "/register",
    //     element: <RegisterUser />
    // },
    // {
    //     path: "/chat-room",
    //     element: <ChatRoom />,
    // }
    {
        path: "/",
        element: <ProtectedRouteisNotAuth element={<LoginUser />} />
    },
    {
        path: "/register",
        element: <ProtectedRouteisNotAuth element={<RegisterUser />} />
    },
    {
        path: "/chat-room",
        element: <ProtectedRoute element={<ChatRoom />} />,
    }
    // {
    //     path: "/home",
    //     element: <ProtectedRoute element={<Home />} />,
    // },
    // {
    //     path: "/listcar",
    //     element: <ProtectedRoute element={<ListForRent />} />,
    // },
    // {
    //     path: "/listcar/:id/detailforrent",
    //     element: <ProtectedRoute element={<DetailForRent />} />
    // },
    // {
    //     path: "/listcar/summary",
    //     element: <ProtectedRoute element={<Summary />} />
    // },
    // {
    //     path: '/home/profile',
    //     element: <ProtectedRoute element={<Profile />} />
    // },
    // {
    //     path: "/home/listcar",
    //     element: <ProtectedRoute element={<ListCarProfile />} />
    // },
    // {
    //     path: "/home/listtransactionhistory",
    //     element: <ProtectedRoute element={<ListTransactionHistory />} />
    // }
])

export default routes