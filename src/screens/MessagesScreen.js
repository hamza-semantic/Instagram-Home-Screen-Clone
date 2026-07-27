import React, { useContext } from 'react';
import { View, Text, Pressable, Image} from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import PersonalMesseges from "../assets/msg.png";

function MessagesScreen() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: isDarkMode ? '#000' : '#fff' }}>
      <Text style={{ color: isDarkMode ? '#fff' : '#000' , fontWeight : "bold" }}>My Messeges</Text>


      <Image
              source={PersonalMesseges}
              style={{ width: 50, height: 50, borderRadius: 50, marginTop: 10 }}
            />

      <Pressable
        onPress={() => console.log('Send Message pressed')}
        style={{
          backgroundColor: '#E1306C',
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 8,
          marginTop: 15,
        }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Send Message</Text>
      </Pressable>
    </View>
  );
}

export default MessagesScreen;