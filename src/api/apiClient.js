import axios from 'axios';
import { getAccessToken, getRefreshToken, saveTokens, removeTokens } from '../utils/tokenStorage';
import { refreshAccessToken } from './refreshToken';

const apiClient = axios.create({
    baseURL: 'https://api.escuelajs.co/api/v1',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    },
});

apiClient.interceptors.request.use(
    async (config) => {
        const token = await getAccessToken();

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

apiClient.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        if (error.response && error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const refreshToken = await getRefreshToken();

                if (!refreshToken) {
                    await removeTokens();
                    return Promise.reject(error);
                }

                const newTokens = await refreshAccessToken(refreshToken);

                await saveTokens(newTokens.access_token, newTokens.refresh_token);

                originalRequest.headers.Authorization = `Bearer ${newTokens.access_token}`;
                return apiClient(originalRequest);

            } catch (refreshError) {
                await removeTokens();
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export default apiClient;