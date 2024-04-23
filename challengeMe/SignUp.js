import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet, Image, Text } from "react-native";

export default function SignUpPage({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSignUp = () => {
    console.log("Signing up");
    // Sign-up logic to add later on
  };

  const handleLoginRedirect = () => {
    navigation.navigate("LoginPage");
  };

return (
    <View style={styles.container}>
       {/* Header */}
       <Text style={styles.WelcomeText}>Sign Up for</Text>
      <Text style={styles.Welcome1Text}>ChallengeME</Text>

    {/* Input fields */}
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
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

        {/* SignUp redirection */}
      <TouchableOpacity onPress={handleSignUp} style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

        {/* Login redirection */}
      <Text style={styles.loginText}>Already have an account?</Text>
      <TouchableOpacity onPress={handleLoginRedirect} style={styles.button}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
});