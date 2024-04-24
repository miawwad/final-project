// Import necessary modules
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import Users from "./Users.json";

// Initial component setup with state
const UserProfile = ({ navigation }) => {
  const [user, setUser] = useState({
    name: Users.Name,
    email: Users.Email,
    imgPath: Users.imgPath,
    quizStats: {
      History: { icon: "book", score: Users.HistoryHighestScore, maxScore: 20 },
      Geography: {
        icon: "globe",
        score: Users.GeographyHighestScore,
        maxScore: 20,
      },
      Music: { icon: "music", score: Users.MusicHighestScore, maxScore: 20 },
      Movies: { icon: "film", score: Users.MoviesHighestScore, maxScore: 20 },
      Science: {
        icon: "flask",
        score: Users.ScienceHighestScore,
        maxScore: 20,
      },
      Technology: {
        icon: "laptop",
        score: Users.TechnologyHighestScore,
        maxScore: 20,
      },
      Sports: {
        icon: "soccer-ball-o",
        score: Users.SportHighestScore,
        maxScore: 20,
      },
      Literature: {
        icon: "pencil",
        score: Users.LiteratureHighestScore,
        maxScore: 20,
      },
    },
  });

  const handleLogout = () => {
    console.log("User logged out");
    navigation.navigate("Login"); // Assuming 'Login' is the login screen route name
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.logoutButton}>
        {/* Logout button functionality will be added in the next merge */}
        <Icon name="sign-out" size={24} color="#fff" />
      </TouchableOpacity>
      <Image source={require("./TeamPhoto.jpeg")} style={styles.profileImage} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>
      <Text style={styles.highScoresTitle}>Scores</Text>
      <View style={styles.statsContainer}>
        {Object.entries(user.quizStats).map(
          ([key, { icon, score, maxScore }]) => (
            <View style={styles.statRow} key={key}>
              <Icon name={icon} size={20} style={styles.icon} />
              <Text style={styles.category}>{key}</Text>
              <View
                style={[
                  styles.scoreBarContainer,
                  { width: `${100 - (score / maxScore) * 100}%` },
                ]}
              >
                <View
                  style={[
                    styles.scoreBar,
                    { width: `${(score / maxScore) * 100}%` },
                  ]}
                />
              </View>
              <Text style={styles.score}>
                {score}/{maxScore}
              </Text>
            </View>
          ),
        )}
      </View>
      {/* Statistics mapping will be added here */}
    </ScrollView>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: 80,
  },
  logoutButton: {
    position: "absolute",
    top: 0,
    right: 20,
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 20,
    zIndex: 1,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: "center",
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  email: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
  },
  highScoresTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  statsContainer: {
    paddingHorizontal: 20,
  },
  statRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  icon: {
    marginRight: 10,
  },
  category: {
    fontSize: 16,
    flexShrink: 1,
    minWidth: 100,
    textAlign: "left",
  },
  scoreBarContainer: {
    flex: 1,
    height: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    overflow: "hidden",
    marginLeft: 5,
    position: "relative",
  },
  scoreBar: {
    height: "100%",
    backgroundColor: "#007BFF",
    position: "absolute",
    left: 0,
  },
  score: {
    minWidth: 50,
    textAlign: "right",
    marginLeft: 10,
  },
});
