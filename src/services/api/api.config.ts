import axios from 'axios';

const baseURL = 'https://dummyapi.online/api';
export const api = axios.create({ baseURL });

api.interceptors.request.use(
    (config: any) => {
        try {
            config.headers.Accept = 'application/json';
            return config;
        } catch { }
    },
    error => Promise.reject(error),
);
