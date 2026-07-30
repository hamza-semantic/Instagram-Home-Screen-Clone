import 'react-native-gesture-handler';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from './src/context/ThemeContext';
import { AuthProvider } from './src/context/AuthContext';
import AppNavigator from './src/navigation/AppNavigator';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';

const queryClient = new QueryClient();


function App() {
  return (
    <QueryClientProvider
    client = {queryClient}>
    <Provider store={store}>
      <AuthProvider>
        <ThemeProvider>
          <AppNavigator />
        </ThemeProvider>
      </AuthProvider>
    </Provider>
    </QueryClientProvider>
  );
}

export default App;