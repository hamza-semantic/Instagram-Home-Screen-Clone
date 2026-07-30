import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from '../screens/LoginScreen';
import TabNavigator from './TabNavigator';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login } from '../redux/authSlice';


const Drawer = createDrawerNavigator();

function AppNavigator() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkLoginStatus = async () => {
      const userData = await AsyncStorage.getItem('user');
      if (userData) {
        const { username, email, password } = JSON.parse(userData);
        dispatch(login({ username, email, password }));
      }
    }
    checkLoginStatus();
  }, [])

  if (!isLoggedIn) {
    return <LoginScreen />;
  }
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;