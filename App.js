import React from 'react';
import { View } from 'react-native';
import Header from './src/components/header';
import Stories from './src/components/Stories';
import Posts from './src/components/Posts';


function App() {
  return (
    <View style = {{flex : 1 , backgroundColor : "white"}}>
      <Header />
      <Stories />
      <Posts />
    </View>
  );
}

export default App;