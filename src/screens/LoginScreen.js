import React, { useState } from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';
import {  getUserProfile } from '../services/authService';
import { useDispatch } from 'react-redux';
import { useMutation } from '@tanstack/react-query';
import { login } from '../redux/authSlice';
import { loginUser } from '../services/authService';
import { saveTokens, getAccessToken } from '../utils/tokenStorage';
import styles from '../styles/AppStyles';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();

  const loginMutation = useMutation({
    mutationFn: async ({ email, password }) => {
      const data = await loginUser(email, password);
      return data;
    },
    onSuccess: async (data) => {
  setErrorMessage('');

  await saveTokens(data.access_token, data.refresh_token);

  const savedToken = await getAccessToken();

  try {
    const profile = await getUserProfile();
  } catch (err) {
  }

  dispatch(login({ user: { email }, token: data.access_token }));
},
    onError: (error) => {
  if (!error.response) {
    // Server tak pahunchi hi nahi request — internet ka masla
    setErrorMessage('Network error. Please check your internet connection.');
  } else if (error.response.status === 401) {
    // Server ne reject kiya — galat credentials
    setErrorMessage('Invalid email or password');
  } else {
    // Koi aur server error
    setErrorMessage('Something went wrong. Please try again.');
  }
},
  });

  const handleLogin = () => {
    loginMutation.mutate({ email, password });
  };

  return (
    <View style={styles.loginContainer}>
      <Text style={styles.loginText}>Instagram</Text>

      <View style={styles.formContainer}>
        <TextInput
          placeholder="Email"
          style={styles.input}
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />

        {errorMessage ? (
          <Text style={{ color: 'red', marginBottom: 10 }}>{errorMessage}</Text>
        ) : null}

        <Pressable
          style={[
            styles.loginButtonContainer,
            loginMutation.isPending && { opacity: 0.6 },
          ]}
          onPress={handleLogin}
          disabled={loginMutation.isPending}
        >
          <Text style={styles.loginButtonText}>
            {loginMutation.isPending ? 'Logging in...' : 'Log In'}
          </Text>
        </Pressable>

        <Pressable>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </Pressable>
      </View>

      <View style={styles.signupContainer}>
        <Text>Don't have an account? </Text>
        <Pressable onPress={() => navigation.navigate('Register')}>
          <Text style={styles.signupText}>Sign up</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginScreen;