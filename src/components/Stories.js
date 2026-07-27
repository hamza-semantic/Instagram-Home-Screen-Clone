import React, { useContext } from "react";
import { Text, View, Image, FlatList } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import styles from "../styles/AppStyles";
import ProfilePic from "../assets/profile.png";
import { storiesData } from "../constants/data";

function Stories() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <FlatList
      contentContainerStyle={{ marginTop: 10 }}
      data={storiesData}
      keyExtractor={(item) => item.id}
      horizontal={true}
      renderItem={({ item }) => (
        <View style={styles.storyContainer}>
          <Image source={item.profilePic || ProfilePic} style={styles.storyImage} />
          <Text style={{ marginTop: 4, fontSize: 12, color: isDarkMode ? '#fff' : '#000' }}>
            {item.username}
          </Text>
        </View>
      )}
    />
  );
}

export default Stories;