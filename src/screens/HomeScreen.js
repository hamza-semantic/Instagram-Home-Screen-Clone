import React, { useContext } from 'react';
import { View } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import Header from '../components/header';
import Stories from '../components/Stories';
import Posts from '../components/Posts';

function HomeScreen({ navigation }) {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <View style={{ flex: 1, backgroundColor: isDarkMode ? '#000' : '#fff' }}>
      <Header navigation={navigation} />
      <Stories />
      <Posts navigation={navigation} />
    </View>
  );
}

export default HomeScreen;