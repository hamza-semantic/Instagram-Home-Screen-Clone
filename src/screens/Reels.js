import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

function ReelsScreen() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: isDarkMode ? '#000' : '#fff' }}>
      <Text style={{ color: isDarkMode ? '#fff' : '#000' }}>Reels feature coming soon...</Text>
    </View>
  );
}

export default ReelsScreen;