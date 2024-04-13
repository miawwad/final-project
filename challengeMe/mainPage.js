import React from 'react';
import { ScrollView, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Adjusted to use @expo/vector-icons if necessary

const categoryIcons = {
  History: 'book',
  Geography: 'globe',
  Music: 'music',
  Movies: 'film',
  Science: 'flask',
  Technology: 'laptop',
  Sports: 'soccer-ball-o',
  Literature: 'pencil',
};

const categories = Object.keys(categoryIcons);

const MainScreen = ({ navigation }) => {
  return (
    <p>hI,....</p> // This is just a template :) 
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  container: {
    alignItems: 'center',
    paddingTop: 50, // Increased padding at the top
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    marginBottom: 20,
  },
  image: {
    width: width - 40,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: width - 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default MainScreen;