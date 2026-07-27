import React from 'react';
import { View } from 'react-native';
import Header from '../components/header';
import Stories from '../components/Stories';
import Posts from '../components/Posts';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header navigation={navigation} />
      <Stories />
      <Posts navigation={navigation} />
    </View>
  );
}

export default HomeScreen;