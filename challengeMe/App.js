import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginPage from "./login.js";
import MainScreen from "./mainPage.js";
import HistoryCat from "./HistoryCat.js";
import GeographyCat from "./GeographyCat.js";
import MusicCat from "./MusicCat.js";
import MoviesCat from "./MoviesCat.js";
import ScienceCat from "./ScienceCat.js";
import TechnologyCat from "./TechnologyCat.js";
import SportsCat from "./SportsCat.js";
import LiteratureCat from "./LiteratureCat.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{ title: "Change Category" }}
        />
        <Stack.Screen
          name="HistoryCat"
          component={HistoryCat}
          options={{ title: "History Quiz" }}
        />
        <Stack.Screen
          name="GeographyCat"
          component={GeographyCat}
          options={{ title: "Geography Quiz" }}
        />
        <Stack.Screen
          name="MusicCat"
          component={MusicCat}
          options={{ title: "Music Quiz" }}
        />
        <Stack.Screen
          name="MoviesCat"
          component={MoviesCat}
          options={{ title: "Movies Quiz" }}
        />
        <Stack.Screen
          name="ScienceCat"
          component={ScienceCat}
          options={{ title: "Science Quiz" }}
        />
        <Stack.Screen
          name="TechnologyCat"
          component={TechnologyCat}
          options={{ title: "Technology Quiz" }}
        />
        <Stack.Screen
          name="SportsCat"
          component={SportsCat}
          options={{ title: "Sports Quiz" }}
        />
        <Stack.Screen
          name="LiteratureCat"
          component={LiteratureCat}
          options={{ title: "Literature Quiz" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
