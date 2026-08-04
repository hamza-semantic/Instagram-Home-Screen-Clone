import axios from 'axios';

export const refreshAccessToken = async (refreshToken) => {
    const response = await axios.post(
        'https://api.escuelajs.co/api/v1/auth/refresh-token',
        { refreshToken: refreshToken }
    );

    return response.data; 
};