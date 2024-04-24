import React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Adjusted to use @expo/vector-icons if necessary
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import GeographyCat from "./GeographyCat.js";
import HistoryCat from "./HistoryCat.js";
import MusicCat from "./MusicCat.js";
import MoviesCat from "./MoviesCat.js";
import ScienceCat from "./ScienceCat.js";
import TechnologyCat from "./TechnologyCat.js";
import SportsCat from "./SportsCat.js";
import LiteratureCat from "./LiteratureCat.js";

const categoryIcons = {
  History: "book",
  Geography: "globe",
  Music: "music",
  Movies: "film",
  Science: "flask",
  Technology: "laptop",
  Sports: "soccer-ball-o",
  Literature: "pencil",
};

const categories = Object.keys(categoryIcons);

const MainScreen = ({ navigation }) => {
  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.container}
    >
        <TouchableOpacity
        style={styles.profileImageContainer}
          onPress={() => {
            navigation.navigate("ProfilePage");
          }}
        >
          <Image
            source={require("./kacem.jpg")}
            style={styles.profileImage}
          />
        </TouchableOpacity>
      <Text style={styles.title}>ChallengeMe</Text>
      <Image
        style={styles.image}
        //source={{ uri: "https://source.unsplash.com/random/800x600?q=quiz" }}
      />
      {categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => {
            navigation.navigate(`${category}Cat`);
            console.log(category);
            //console.log(navigation);
          }} // Just Added backteck.
        >
          <Icon
            name={categoryIcons[category]}
            size={24}
            color="white"
            style={styles.icon}
          />
          <Text style={styles.buttonText}>{category}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  scrollView: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  container: {
    alignItems: "center",
    paddingTop: 26, // Increased padding at the top
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    
  },
  image: {
    width: width - 40,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#007AFF",
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: width - 40,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
  profileImageContainer: {    
    position: "absolute",
    top: 15,
    right: 20,
  },
  profileImage: {
    width: 46,
    height: 46,
    borderRadius: 100, 
    borderWidth: 2.25,
    borderColor: "black",
  }
});

export default MainScreen;
