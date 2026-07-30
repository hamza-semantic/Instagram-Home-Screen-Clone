import React from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import { useState } from "react";
// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';

const LoginScreen = () => {

  const [username , setUsername] = useState('');
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  // const { login } = useContext(AuthContext);
  const dispatch = useDispatch();

  const handleLogin = async () => {
  dispatch(login({username , email , password}))
  await AsyncStorage.setItem('user', JSON.stringify({username, email, password}));
}
  
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
          value = {password}
          onChangeText={setPassword}
        />

        <Pressable style={styles.loginButtonContainer}
        // onPress ={() => login({ username, email, password })}
        // onPress={() => dispatch(login({ username, email, password }))}
        onPress = {handleLogin}
        >
          <Text style={styles.loginButtonText}>Log In</Text>
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

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 30,
  },

  loginText: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 40,
    color : "#9b0f0f"
  },

  formContainer: {
    width: "100%",
  },

  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#dbdbdb",
    borderRadius: 30,
    padding: 10,
    marginBottom: 12,
    backgroundColor: "#fafafa",
    fontSize: 14,
  },

  loginButtonContainer: {
    marginTop: 10,
    backgroundColor: "#9b0f0f",
    width: "100%",
    borderRadius: 30,
  },

  loginButtonText: {
    color: "white",
    padding: 12,
    textAlign: "center",
    fontWeight: "600",
    fontSize: 15,
  },

  forgotPassword: {
    color: "#9b0f0f",
    textAlign: "center",
    marginTop: 15,
    fontSize: 13,
  },

  signupContainer: {
    flexDirection: "row",
    marginTop: 30,
  },

  signupText: {
    color: "#9b0f0f",
    fontWeight: "600",
  },
});

export default LoginScreen;