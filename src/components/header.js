import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { useFocusEffect } from '@react-navigation/native';
import styles from "../styles/AppStyles";
import { Heart, Plus } from "lucide-react-native";
import InstagramLogo from "../assets/instagram.png";

function Header({ navigation }) {
  const [isNotificationActive, setIsNotificationActive] = useState(false);
  const [isPlusActive, setIsPlusActive] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      setIsNotificationActive(false);
      setIsPlusActive(false);
    }, [])
  );

  
  return (
    <View style={styles.header}>
      <View style={styles.logo}>
        <Image source={InstagramLogo} style={styles.logoIcon} />
        <Text style={styles.textLogo}>Instagram</Text>
      </View>

      <View style={styles.iconsContainer}>
        <TouchableOpacity
          onPress={() => {
            setIsNotificationActive(true);
            navigation.navigate('Notification');
          }}
        >
          <Heart color={isNotificationActive ? '#E1306C' : 'black'} size={20} />
        </TouchableOpacity>

        <TouchableOpacity
                  onPress={() => {
                  setIsPlusActive(true);
                  setTimeout(() => {
                  navigation.navigate('Messages');
                  }, 100);
           }}
          >
         <Plus color={isPlusActive ? '#E1306C' : 'black'} size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Header;