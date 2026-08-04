import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, Image, Pressable } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import PersonalImage from "../assets/personal-profile.png";
import { logout } from '../redux/authSlice';
import { logoutUser } from '../services/authService';

function ProfileScreen() {
  const { isDarkMode } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['userProfile', token],
    queryFn: async () => {
      const response = await fetch('https://api.escuelajs.co/api/v1/auth/profile', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      return data;
    },
    enabled: !!token,
  });

  const handleLogout = async () => {
    await logoutUser();
    dispatch(logout());
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: isDarkMode ? '#000' : '#fff' }}>
      <Text style={{ color: isDarkMode ? '#fff' : '#000', fontWeight: "bold" }}>My Profile</Text>

      <Image
        source={data?.avatar ? { uri: data.avatar } : PersonalImage}
        style={{ width: 100, height: 100, borderRadius: 50, marginTop: 10 }}
      />

      {isLoading && <Text style={{ color: isDarkMode ? '#fff' : '#000', marginTop: 10 }}>Loading...</Text>}
      {isError && <Text style={{ color: 'red', marginTop: 10 }}>Error loading profile</Text>}
      {data && (
        <View style={{ marginTop: 10, alignItems: 'center' }}>
          <Text style={{ color: isDarkMode ? '#fff' : '#000', fontWeight: 'bold' }}>{data.name}</Text>
          <Text style={{ color: isDarkMode ? '#fff' : '#000' }}>{data.email}</Text>
        </View>
      )}

      <Pressable
        onPress={handleLogout}
        style={{
          backgroundColor: '#E1306C',
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 8,
          marginTop: 15,
        }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Logout</Text>
      </Pressable>
    </View>
  );
}

export default ProfileScreen;