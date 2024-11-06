import { useEffect, useState } from "react";
import apiClient from "../api/api.js";
import { allContact } from "../api/chatRoom.js";
import Cookies from 'js-cookie';
// import { useSelector } from "react-redux";

export const useEffectAllContact = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    // const senderId = useSelector((state) => state.id);

    // console.log(Cookies.get('user_id'));

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await apiClient.post(`/login`, payload)
                const response = await allContact(Cookies.get('user_id'));
                setData(response.data);
            } catch (error) {
                setError(error);
            }
        };
        fetchData();
    }, [])


    return { data, error, };
};

