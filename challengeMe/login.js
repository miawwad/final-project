import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Button, StyleSheet, Text } from 'react-native';

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
    
    </View>
  );
}