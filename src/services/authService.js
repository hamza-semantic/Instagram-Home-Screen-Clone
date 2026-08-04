import apiClient from '../api/apiClient';
import { removeTokens } from '../utils/tokenStorage';

export const registerUser = async (name, email, password) => {
    try {
        const response = await apiClient.post('/users/', {
            name: name,
            email: email,
            password: password,
            avatar: 'https://picsum.photos/800',
        });

        return response.data;
    } catch (error) {
        throw error;
    }
};

export const loginUser = async (email, password) => {
    try {
        const response = await apiClient.post('/auth/login', {
            email: email,
            password: password,
        });

        return response.data;
    } catch (error) {
        throw error;
    }
};

export const logoutUser = async () => {
    try {
        await removeTokens();
    } catch (error) {
    }
};

export const getUserProfile = async () => {
    try {
        const response = await apiClient.get('/auth/profile');
        return response.data;
    } catch (error) {
        throw error;
    }
};