import React, { useState, useContext } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { ThemeContext } from '../context/ThemeContext';
import styles from '../styles/AppStyles';
import { Heart, Plus, Moon, Sun } from 'lucide-react-native';
import InstagramLogo from '../assets/instagram.png';

function Header({ navigation }) {
  const [isNotificationActive, setIsNotificationActive] = useState(false);
  const [isPlusActive, setIsPlusActive] = useState(false);
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  // useFocusEffect(
  //   React.useCallback(() => {
  //     setIsNotificationActive(false);
  //     setIsPlusActive(false);
  //   }, []),
  // );

  return (
  <View style={[styles.header, { backgroundColor: isDarkMode ? '#000' : '#fff' }]}>
    <View style={styles.logo}>
      <Image source={InstagramLogo} style={styles.logoIcon} />
      <Text style={[styles.textLogo, { color: isDarkMode ? '#fff' : '#000' }]}>
        Instagram
      </Text>
    </View>

    <View style={styles.iconsContainer}>
      <TouchableOpacity
        onPress={() => {
          setIsNotificationActive(true);
          navigation.navigate('Notification');
        }}
      >
        <Heart color={isNotificationActive ? '#E1306C' : (isDarkMode ? '#fff' : '#000')} size={20} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setIsPlusActive(true);
          setTimeout(() => {
            navigation.navigate('Messages');
          }, 100);
        }}
      >
        <Plus color={isPlusActive ? '#E1306C' : (isDarkMode ? '#fff' : '#000')} size={20} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setIsDarkMode(!isDarkMode);
        }}
      >
        {isDarkMode ? <Sun color="#fff" size={20} /> : <Moon color="#000" size={20} />}
      </TouchableOpacity>
    </View>
  </View>
);
}

export default Header;
