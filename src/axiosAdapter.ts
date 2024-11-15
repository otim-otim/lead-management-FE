import axios from 'axios';

export const axiosAdapter = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL as string,
    withCredentials: true,
});


