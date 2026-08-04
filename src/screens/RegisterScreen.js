import React, { useState } from "react";
import { View, Text, Pressable, TextInput, ActivityIndicator } from "react-native";
import styles from "../styles/AppStyles";
import { registerUser } from "../services/authService";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = async () => {

    if (!name || !email || !password) {
      setErrorMessage('Please fill all fields');
      return;
    }

    setErrorMessage('');
    setLoading(true);

    try {
      const user = await registerUser(name, email.trim(), password);

      setLoading(false);
  
      navigation.navigate('Login');
    }  catch (error) {
  setLoading(false);
  
  if (!error.response) {
    setErrorMessage('Network error. Please check your internet connection.');
  } else if (error.response.data) {
    setErrorMessage(error.response.data.message || 'Registration failed');
  } else {
    setErrorMessage('Something went wrong. Please try again.');
  }
}
  };

  return (
    <View style={styles.loginContainer}>
      <Text style={styles.loginText}>Sign Up</Text>

      <View style={styles.formContainer}>
        <TextInput
          placeholder="Name"
          style={styles.input}
          autoCapitalize="none"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          placeholder="Email"
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
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
          <Text style={{ color: 'red', textAlign: 'center', marginBottom: 10 }}>
            {errorMessage}
          </Text>
        ) : null}

        <Pressable
          style={styles.loginButtonContainer}
          onPress={handleRegister}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="white" style={{ padding: 12 }} />
          ) : (
            <Text style={styles.loginButtonText}>Sign Up</Text>
          )}
        </Pressable>
      </View>

      <View style={styles.signupContainer}>
        <Text>Already have an account? </Text>
        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text style={styles.signupText}>Log In</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default RegisterScreen;