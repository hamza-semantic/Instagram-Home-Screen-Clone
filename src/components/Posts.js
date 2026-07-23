import React from "react";
import { Text, View, Image, FlatList,  TouchableOpacity } from "react-native";
import styles from "../styles/AppStyles";
import { Heart, MessageCircle, Send } from "lucide-react-native";
import { postData } from "../constants/data";


function Posts() {
  return (
    <FlatList
      data={postData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.postContainer}>

          
          <View style={styles.postHeader}>
            <Image source={item.profilePic} style={styles.postProfilePic} />
            <Text style={styles.postUsername}>{item.username}</Text>
          </View>

          
          <Image source={item.postImage} style={styles.postImage} />

          
          <View style={styles.actionsRow}>
            
            <TouchableOpacity>
            <Heart color="black" size={23} />
            </TouchableOpacity>

            <TouchableOpacity>
            <MessageCircle color="black" size={23} style={{ marginLeft: 15 }} />
            </TouchableOpacity>

            <TouchableOpacity>
            <Send color="black" size={23} style={{ marginLeft: 15 }} />
            </TouchableOpacity>
          </View>

        
          <Text style={styles.likesText}>{item.likes} likes</Text>
          <Text style={styles.captionText}>{item.caption}</Text>

        </View>
      )}
    />
  );
}

export default Posts;