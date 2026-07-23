import React from "react";
import { Text, View, Image, FlatList } from "react-native";
import styles from "../styles/AppStyles";
import ProfilePic from "../assets/profile.png";
import { storiesData } from "../constants/data";

function Stories() {
  return (
    <FlatList
      contentContainerStyle={{ marginTop: 10 }}
      data={storiesData}
      keyExtractor={(item) => item.id}
      horizontal={true}
      renderItem={({ item }) => (
        <View style={styles.storyContainer}>
          <Image source={ProfilePic} style={styles.storyImage} />
          <Text style={{ marginTop: 4, fontSize: 12 }}>{item.username}</Text>
        </View>
      )}
    />
  );
}

export default Stories;