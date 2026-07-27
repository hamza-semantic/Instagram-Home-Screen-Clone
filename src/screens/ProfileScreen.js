import React, { useContext } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import PersonalImage from "../assets/personal-profile.png";


function ProfileScreen() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: isDarkMode ? '#000' : '#fff' }}>
      <Text style={{ color: isDarkMode ? '#fff' : '#000' , fontWeight : "bold" }}>My Profile</Text>

      <Image
        source={PersonalImage}
        style={{ width: 100, height: 100, borderRadius: 50, marginTop: 10 }}
      />

      <Pressable
        onPress={() => console.log('Edit Profile pressed')}
        style={{
          backgroundColor: '#E1306C',
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 8,
          marginTop: 15,
        }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Edit Profile</Text>
      </Pressable>
    </View>
  );
}

export default ProfileScreen;