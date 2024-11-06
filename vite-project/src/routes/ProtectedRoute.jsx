import { Navigate, Outlet } from "react-router-dom"
import Cookies from 'js-cookie';

export const ProtectedRoute = ({ element }) => {
    const token = Cookies.get('token')
    return token ? element : <Navigate to="/" />
}

export const ProtectedRouteisNotAuth = ({ element }) => {
    const token = Cookies.get('token')
    return !token ? element : <Navigate to="/chat-room" />
}