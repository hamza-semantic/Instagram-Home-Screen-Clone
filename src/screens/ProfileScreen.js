import React, { useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useQuery } from '@tanstack/react-query';
import { View, Text, Image, Pressable } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
// import { AuthContext } from '../context/AuthContext';
import PersonalImage from "../assets/personal-profile.png";
import { useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';


function ProfileScreen() {
  const { isDarkMode } = useContext(ThemeContext);
  // const { logout } = useContext(AuthContext);
  const dispatch = useDispatch();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['userProfile'],
    queryFn: async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      const data = await response.json();
      return data;
    },
  });

  const handleLogout = async () => {
    dispatch(logout());
    await AsyncStorage.removeItem('user');
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: isDarkMode ? '#000' : '#fff' }}>
      <Text style={{ color: isDarkMode ? '#fff' : '#000', fontWeight: "bold" }}>My Profile</Text>

      <Image
        source={PersonalImage}
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