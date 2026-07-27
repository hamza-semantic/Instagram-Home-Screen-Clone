import 'react-native-gesture-handler';
import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from './src/context/ThemeContext';
import { ThemeProvider } from './src/context/ThemeContext';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Film, Home, MessageCircle, User } from 'lucide-react-native';
import HomeScreen from './src/screens/HomeScreen.js';
import MessagesScreen from './src/screens/MessagesScreen.js';
import ProfileScreen from './src/screens/ProfileScreen.js';
import PostDetailScreen from './src/screens/PostDetailScreen.js';
import NotificationScreen from './src/screens/Notifications.js';
import ReelsScreen from './src/screens/Reels.js';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="PostDetails" component={PostDetailScreen} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#E1306C',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: isDarkMode ? '#000' : '#fff',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Reels"
        component={ReelsScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Film color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MessageCircle color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => <User color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
}


function App() {
  return (
    <ThemeProvider>
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;