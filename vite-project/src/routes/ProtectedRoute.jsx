import { Navigate, Outlet } from "react-router-dom"
import Cookies from 'js-cookie';

export const ProtectedRoute = ({ element }) => {
    const user = Cookies.get('token')

    return user ? element : <Navigate to="/chat-room" />
}

export const ProtectedRouteisNotAuth = ({ element }) => {
    const user = Cookies.get('token')

    return !user ? element : <Navigate to="/" />
}