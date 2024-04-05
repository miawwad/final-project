import { View, TextInput, TouchableOpacity, Button, StyleSheet, Text } from 'react-native';
import React, { useState } from 'react';

export default function LoginPage(){
  //ADDED THE USESTATE CODE INSIDE.
  const [username, setUsername] = useState(''); //descriptive names
  const [password, setPassword] = useState(''); // descriptive names

  const CodeTestingDefaultUserName = 'Ayham'; //Names should describe side-effects clearly
  const CodeTestingDefaultPassword = 'Ayham123';


  const handleLogin = () => {
    // redirection after Loging in
    console.log('Username:', username);
    console.log('Password:', password);

    if ((username !== CodeTestingDefaultUserName) || (password !== CodeTestingDefaultPassword)){
      console.log(`You don't have an account. Please Create One!`);
    }
  };

  const handleSignUpToPage = () => { //appropriate level of abstraction
    // redirection to the Sign up page
    console.log('Navigate to sign up page');
  };


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
        <TouchableOpacity onPress={handleSignUpToPage} style={styles.button} >
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>
    
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 0.75,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#2ea44f',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  signUpText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 13,
  },
  WelcomeText: {
    color: 'pink',
    fontSize: 35,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  Welcome1Text: {
    // color: '#4fre60', The renderer could not recongnize it, so I replaced it with random color.
    color: '#1f4e60',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 50,
  },
});