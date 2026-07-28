import React, { useContext } from "react";
import { Text, View, Image, FlatList, TouchableOpacity } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import styles from "../styles/AppStyles";
import { Heart, MessageCircle, Send } from "lucide-react-native";
import { postData } from "../constants/data";


function Posts({ navigation }) {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <FlatList
      data={postData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={[styles.postContainer, { backgroundColor: isDarkMode ? '#000' : '#fff' }]}>

          <View style={styles.postHeader}>
            <Image source={item.profilePic} style={styles.postProfilePic} />
            <Text style={[styles.postUsername, { color: isDarkMode ? '#fff' : '#000' }]}>
              {item.username}
            </Text>
          </View>

          {/* <TouchableOpacity onPress={() => navigation.navigate('PostDetails')}> */}
            <Image source={item.postImage} style={styles.postImage} />
          {/* </TouchableOpacity> */}

          <View style={styles.actionsRow}>

            <TouchableOpacity>
              <Heart color={isDarkMode ? '#fff' : '#000'} size={23} />
            </TouchableOpacity>

            <TouchableOpacity>
              <MessageCircle color={isDarkMode ? '#fff' : '#000'} size={23} style={{ marginLeft: 15 }} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Send color={isDarkMode ? '#fff' : '#000'} size={23} style={{ marginLeft: 15 }} />
            </TouchableOpacity>
          </View>

          <Text style={[styles.likesText, { color: isDarkMode ? '#fff' : '#000' }]}>
            {item.likes} likes
          </Text>
          <Text style={[styles.captionText, { color: isDarkMode ? '#fff' : '#000' }]}>
            {item.caption}
          </Text>

        </View>
      )}
    />
  );
}

export default Posts;