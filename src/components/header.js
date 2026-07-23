import React from "react";
import { Text, View, Image , TouchableOpacity} from "react-native";
import styles from "../styles/AppStyles";
import { Heart, Plus } from "lucide-react-native";
import InstagramLogo from "../assets/instagram.png";

function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.logo}>
        <Image source = {InstagramLogo} style = {styles.logoIcon} />
        <Text style={styles.textLogo}>Instagram</Text>
      </View>

      <View style={styles.iconsContainer}>
        <TouchableOpacity>
        <Heart color="black" size={20} />
        </TouchableOpacity>

        <TouchableOpacity>
        <Plus color="black" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Header;