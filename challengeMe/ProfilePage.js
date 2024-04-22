// Import necessary modules
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

// Initial component setup with state
const UserProfile = ({ navigation }) => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    quizStats: {
      History: { icon: "book", score: 8, maxScore: 20 },
      Geography: { icon: "globe", score: 10, maxScore: 20 },
      Music: { icon: "music", score: 11, maxScore: 20 },
      Movies: { icon: "film", score: 15, maxScore: 20 },
      Science: { icon: "flask", score: 14, maxScore: 20 },
      Technology: { icon: "laptop", score: 17, maxScore: 20 },
      Sports: { icon: "soccer-ball-o", score: 12, maxScore: 20 },
      Literature: { icon: "pencil", score: 9, maxScore: 20 },
    },
  });

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.logoutButton}>
        {/* Logout button functionality will be added in the next merge */}
        <Icon name="sign-out" size={24} color="#fff" />
      </TouchableOpacity>
      <Image
        source={{ uri: "https://source.unsplash.com/random/300x300?profile" }}
        style={styles.profileImage}
      />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>
      <Text style={styles.highScoresTitle}>HighScores</Text>
      {/* Statistics mapping will be added here */}
    </ScrollView>
  );
};

export default UserProfile;

const styles = StyleSheet.create({});
