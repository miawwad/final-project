import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet, Image, Text } from "react-native";

export default function SignUpPage({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

return (
    <View style={styles.container}>

    
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