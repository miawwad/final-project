import { View, TextInput, TouchableOpacity, Button, StyleSheet, Text } from 'react-native';
import React, { useState } from 'react';

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

  const handleLogin = () => {
    // redirection after Loging in
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const handleSignUp = () => {
    // redirection to the Sign up page
    console.log('Navigate to sign up page');
  };

export default function LoginPage(){

  return (
    <View style={styles.container}>

      <Text  style={styles.WelcomeText}> Welcome Back To </Text>
      <Text  style={styles.Welcome1Text}> ChallengeME ! </Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
        <Text  style={styles.signUpText}> Don't have an account? </Text>
        <TouchableOpacity onPress={handleSignUp} style={styles.button} >
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>
    
    </View>
  );
}