import EncryptedStorage from 'react-native-encrypted-storage';

// Dono tokens ek sath save karna (login ke baad use hoga)
export const saveTokens = async (accessToken, refreshToken) => {
    try {
        await EncryptedStorage.setItem('accessToken', accessToken);
        await EncryptedStorage.setItem('refreshToken', refreshToken);
    } catch (error) {
        console.log('Error saving tokens:', error);
    }
};

// Access token nikalna
export const getAccessToken = async () => {
    try {
        const token = await EncryptedStorage.getItem('accessToken');
        return token;
    } catch (error) {
        console.log('Error getting access token:', error);
        return null;
    }
};

// Refresh token nikalna
export const getRefreshToken = async () => {
    try {
        const token = await EncryptedStorage.getItem('refreshToken');
        return token;
    } catch (error) {
        console.log('Error getting refresh token:', error);
        return null;
    }
};

// Dono tokens delete karna (logout ke waqt use hoga)
export const removeTokens = async () => {
    try {
        await EncryptedStorage.removeItem('accessToken');
        await EncryptedStorage.removeItem('refreshToken');
    } catch (error) {
        console.log('Error removing tokens:', error);
    }
};