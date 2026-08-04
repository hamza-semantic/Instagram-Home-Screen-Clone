import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AuthNavigator from './AuthNavigator';
import TabNavigator from './TabNavigator';
import { useSelector } from 'react-redux';

const Drawer = createDrawerNavigator();

function AppNavigator() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <NavigationContainer>
      {!isLoggedIn ? (
        <AuthNavigator />
      ) : (
        <Drawer.Navigator>
          <Drawer.Screen
            name="Home"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
}

export default AppNavigator;