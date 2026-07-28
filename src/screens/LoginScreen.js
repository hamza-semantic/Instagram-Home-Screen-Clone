import React from "react";
import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const LoginScreen = () => {
  const [email , setEmail] = useState('');
  const [username , setUsername] = useState('');
  const [password , setPassword] = useState('');
  const { login } = useContext(AuthContext);
  
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
        onPress ={() => login({ username, email, password })}
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
  },

  formContainer: {
    width: "100%",
  },

  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#dbdbdb",
    borderRadius: 5,
    padding: 10,
    marginBottom: 12,
    backgroundColor: "#fafafa",
    fontSize: 14,
  },

  loginButtonContainer: {
    marginTop: 10,
    backgroundColor: "#3897f0",
    width: "100%",
    borderRadius: 5,
  },

  loginButtonText: {
    color: "white",
    padding: 12,
    textAlign: "center",
    fontWeight: "600",
    fontSize: 15,
  },

  forgotPassword: {
    color: "#3897f0",
    textAlign: "center",
    marginTop: 15,
    fontSize: 13,
  },

  signupContainer: {
    flexDirection: "row",
    marginTop: 30,
  },

  signupText: {
    color: "#3897f0",
    fontWeight: "600",
  },
});

export default LoginScreen;