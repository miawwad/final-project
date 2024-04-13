import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
// Import LogIn Page
import LoginPage from "./login.js";

export default function App() {
  return (
    <View style={styles.container}>
      <LoginPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // Just edited the style.
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
