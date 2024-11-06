import { useEffect, useState } from "react";
import apiClient from "../api/api.js";
import { allContact, getMessageHistory } from "../api/chatRoom.js";
import Cookies from 'js-cookie';
// import { useSelector } from "react-redux";

export const useEffectAllContact = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
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

export const useEffectMessageHistories = (senderId, receiveId) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getMessageHistory(senderId, receiveId);
                setData(response.data);
            } catch (error) {
                setError(error);
            }
        };
        fetchData();
    }, [receiveId, senderId])
    return { data, error, };
}


