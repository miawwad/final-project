import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
} from "react-native";

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
  button: {
    backgroundColor: "#2ea44f",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  loginText: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 13,
  },
  WelcomeText: {
    color: "pink",
    fontSize: 35,
    marginBottom: 10,
    fontWeight: "bold",
  },
  Welcome1Text: {
    // color: '#4fre60', The renderer could not recongnize it, so I replaced it with random color.
    color: "#1f4e60",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 50,
  },
});
