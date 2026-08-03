import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import { useDispatch } from 'react-redux';
import { useMutation } from '@tanstack/react-query';
import { login } from '../redux/authSlice';
import styles from "../styles/AppStyles";

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const loginMutation = useMutation({
    mutationFn: async (credentials) => {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      return credentials;
    },
    onSuccess: (data) => {
      dispatch(login(data));
    },
  });

  const handleLogin = () => {
    loginMutation.mutate({ username, email, password });
  };

  return (
    <View style={styles.loginContainer}>
      <Text style={styles.loginText}>Instagram</Text>

      <View style={styles.formContainer}>
        <TextInput
          placeholder="Username"
          style={styles.input}
          autoCapitalize="none"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="Email"
          style={styles.input}
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

        <Pressable
          style={[styles.loginButtonContainer, loginMutation.isPending && { opacity: 0.6 }]}
          onPress={handleLogin}
          disabled={loginMutation.isPending}
        >
          <Text style={styles.loginButtonText}>
            {loginMutation.isPending ? "Logging in..." : "Log In"}
          </Text>
        </Pressable>

        <Pressable>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </Pressable>
      </View>

      <View style={styles.signupContainer}>
        <Text>Don't have an account? </Text>
        <Pressable>
          <Text style={styles.signupText}>Sign up</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginScreen;