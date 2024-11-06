import { useEffect, useState } from "react";
import apiClient from "../api/api.js";

export const useEffectRegister = (payload) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await apiClient.post(`/login`, payload)
            setData(response.data);
        } catch (error) {
            setError(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { data, error, fetchData };
};

