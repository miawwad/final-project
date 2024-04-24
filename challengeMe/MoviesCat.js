import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Users from "./Users.json";

const APP_STORAGE_KEY = "MoviesQuizData";

const questions = [
  {
    category: "Movies",
    difficulty: "Medium",
    question: 'Who directed the movie "Inception" (2010)?',
    options: [
      "Christopher Nolan",
      "Quentin Tarantino",
      "Steven Spielberg",
      "Martin Scorsese",
    ],
    answer: 0, // Index of the correct answer in options array
  },
  {
    category: "Movies",
    difficulty: "Easy",
    question: "Which movie won the Academy Award for Best Picture in 2019?",
    options: ["La La Land", "The Shape of Water", "Green Book", "Moonlight"],
    answer: 2,
  },
  {
    category: "Movies",
    difficulty: "Easy",
    question:
      'Which actor played the lead role in the movie "The Godfather" (1972)?',
    options: ["Al Pacino", "Marlon Brando", "Robert De Niro", "Jack Nicholson"],
    answer: 1, // Index of the correct answer in options array (Marlon Brando)
  },
  {
    category: "Movies",
    difficulty: "Easy",
    question:
      'In the film "Forrest Gump" (1994), what is Forrest\'s favorite saying?',
    options: [
      '"Life is like a box of chocolates, you never know what you\'re gonna get."',
      '"Just keep swimming."',
      '"Here\'s looking at you, kid."',
      '"May the Force be with you."',
    ],
    answer: 0, // Index of the correct answer in options array ("Life is like a box of chocolates, you never know what you're gonna get.")
  },
  {
    category: "Movies",
    difficulty: "Easy",
    question: 'Who played the iconic character of Neo in "The Matrix" (1999)?',
    options: ["Keanu Reeves", "Tom Cruise", "Will Smith", "Brad Pitt"],
    answer: 0, // Index of the correct answer in options array (Keanu Reeves)
  },
  {
    category: "Movies",
    difficulty: "Easy",
    question: "Which movie features a talking pig named Babe?",
    options: [
      "Charlotte's Web",
      "Babe",
      "Animal Farm",
      "The Secret Life of Pets",
    ],
    answer: 1, // Index of the correct answer in options array (Babe)
  },
  {
    category: "Movies",
    difficulty: "Easy",
    question: 'Who directed the movie "Jurassic Park" (1993)?',
    options: [
      "James Cameron",
      "Steven Spielberg",
      "George Lucas",
      "Ridley Scott",
    ],
    answer: 1, // Index of the correct answer in options array (Steven Spielberg)
  },
  {
    category: "Movies",
    difficulty: "Easy",
    question: 'Which Disney movie features the song "Let It Go"?',
    options: ["Aladdin", "Beauty and the Beast", "Frozen", "The Lion King"],
    answer: 2, // Index of the correct answer in options array (Frozen)
  },
  {
    category: "Movies",
    difficulty: "Easy",
    question:
      'Who played the role of Jack Dawson in the movie "Titanic" (1997)?',
    options: ["Leonardo DiCaprio", "Tom Hanks", "Johnny Depp", "Matt Damon"],
    answer: 0, // Index of the correct answer in options array (Leonardo DiCaprio)
  },
  {
    category: "Movies",
    difficulty: "Easy",
    question:
      "Which actor portrayed the character of Iron Man in the Marvel Cinematic Universe?",
    options: [
      "Chris Evans",
      "Chris Hemsworth",
      "Robert Downey Jr.",
      "Mark Ruffalo",
    ],
    answer: 2, // Index of the correct answer in options array (Robert Downey Jr.)
  },
  {
    category: "Movies",
    difficulty: "Easy",
    question: 'Who directed the movie "Avatar" (2009)?',
    options: [
      "James Cameron",
      "Peter Jackson",
      "Christopher Nolan",
      "George Lucas",
    ],
    answer: 0, // Index of the correct answer in options array (James Cameron)
  },
  {
    category: "Movies",
    difficulty: "Easy",
    question: "Which movie features the character of Harry Potter?",
    options: [
      "The Lord of the Rings",
      "Harry Potter and the Sorcerer's Stone",
      "The Hunger Games",
      "Twilight",
    ],
    answer: 1, // Index of the correct answer in options array (Harry Potter and the Sorcerer's Stone)
  },
  {
    category: "Movies",
    difficulty: "Easy",
    question:
      'What is the name of the lion in Disney\'s "The Lion King" (1994)?',
    options: ["Simba", "Mufasa", "Scar", "Nala"],
    answer: 0, // Index of the correct answer in options array (Simba)
  },
  {
    category: "Movies",
    difficulty: "Easy",
    question: "Which movie features a shark named Bruce?",
    options: ["Jaws", "Finding Nemo", "Shark Tale", "Deep Blue Sea"],
    answer: 1, // Index of the correct answer in options array (Finding Nemo)
  },
  {
    category: "Movies",
    difficulty: "Easy",
    question:
      'Who played the role of Hermione Granger in the "Harry Potter" film series?',
    options: [
      "Emma Watson",
      "Daniel Radcliffe",
      "Rupert Grint",
      "Bonnie Wright",
    ],
    answer: 0, // Index of the correct answer in options array (Emma Watson)
  },
  {
    category: "Movies",
    difficulty: "Easy",
    question:
      'Which movie features a character named "Ferris Bueller" skipping school?',
    options: [
      "The Breakfast Club",
      "Ferris Bueller's Day Off",
      "Sixteen Candles",
      "Pretty in Pink",
    ],
    answer: 1, // Index of the correct answer in options array (Ferris Bueller's Day Off)
  },
  {
    category: "Movies",
    difficulty: "Easy",
    question: 'Who directed the movie "The Shawshank Redemption" (1994)?',
    options: [
      "David Fincher",
      "Quentin Tarantino",
      "Frank Darabont",
      "Steven Spielberg",
    ],
    answer: 2, // Index of the correct answer in options array (Frank Darabont)
  },
  {
    category: "Movies",
    difficulty: "Easy",
    question: 'Which movie features a character named "E.T."?',
    options: [
      "Close Encounters of the Third Kind",
      "Interstellar",
      "E.T. the Extra-Terrestrial",
      "Contact",
    ],
    answer: 2, // Index of the correct answer in options array (E.T. the Extra-Terrestrial)
  },
  {
    category: "Movies",
    difficulty: "Easy",
    question: 'Who directed the movie "The Dark Knight" (2008)?',
    options: ["Christopher Nolan", "Tim Burton", "Zack Snyder", "Joss Whedon"],
    answer: 0, // Index of the correct answer in options array (Christopher Nolan)
  },
  {
    category: "Movies",
    difficulty: "Easy",
    question: "Which movie features the character of Captain Jack Sparrow?",
    options: [
      "Pirates of the Caribbean: The Curse of the Black Pearl",
      "The Princess Bride",
      "Hook",
      "The Goonies",
    ],
    answer: 0, // Index of the correct answer in options array (Pirates of the Caribbean: The Curse of the Black Pearl)
  },
];

const MoviesCat = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizData, setQuizData] = useState(questions);

  useEffect(() => {
    loadQuizData();
  }, []);

  useEffect(() => {
    saveQuizData();
  }, [quizData]); // This useEffect calls saveQuizData whenever quizData changes

  const handleOptionSelect = (index) => {
    setSelectedAnswer(index);
    const isCorrect = index === quizData[currentQuestion].answer;
    setScore(score + (isCorrect ? 1 : 0));
    Users.MoviesHighestScore += isCorrect ? 1 : 0; // Update the Score after each question
    setTimeout(() => {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    }, 1000);
  };

  const loadQuizData = async () => {
    try {
      const dataString = await AsyncStorage.getItem(APP_STORAGE_KEY);
      if (dataString) {
        const data = JSON.parse(dataString);
        setQuizData(data);
        Users.MoviesHighestScore = 0; // Reset Score to Zero
      }
    } catch (error) {
      console.error("Error loading quiz data:", error);
    }
  };

  const saveQuizData = async () => {
    try {
      const dataString = JSON.stringify(quizData);
      await AsyncStorage.setItem(APP_STORAGE_KEY, dataString);
    } catch (error) {
      console.error("Error saving quiz data:", error);
    }
  };

  const isQuizFinished = currentQuestion === quizData.length;

  return (
    <View style={styles.container}>
      {isQuizFinished ? (
        <View style={styles.resultsContainer}>
          <Text style={styles.feedbackText}>
            {score < 10 ? "Try again To Imporve!" : "Good Job!"}
          </Text>
          <Text style={styles.scoreText}>
            Your Score is {score} / {quizData.length}
          </Text>
          <TouchableOpacity
            style={styles.homeButton}
            onPress={() => {
              setCurrentQuestion(0);
              setScore(0);
              setSelectedAnswer(null);
              Users.MoviesHighestScore = 0; // Reset Score to Zero
            }}
          >
            <Text style={styles.homeButtonText}>Restart Quiz</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.quizContainer}>
          <Text style={styles.questionText}>
            Question: {quizData[currentQuestion].question}
          </Text>
          {quizData[currentQuestion].options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionButton,
                selectedAnswer === index && {
                  backgroundColor:
                    index === quizData[currentQuestion].answer
                      ? "lightgreen"
                      : "salmon",
                },
              ]}
              onPress={() => handleOptionSelect(index)}
              disabled={selectedAnswer !== null}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  resultsContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  quizContainer: {
    width: "100%",
    alignItems: "center",
  },
  questionText: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: "center",
  },
  scoreText: {
    fontSize: 24,
    color: "#333",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  feedbackText: {
    fontSize: 18,
    color: "#333",
    textAlign: "center",
    marginTop: 20,
  },
  optionButton: {
    marginVertical: 10,
    backgroundColor: "white",
    padding: 15,
    alignItems: "center",
    borderRadius: 20,
    width: "100%",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  optionText: {
    fontSize: 16,
  },
  homeButton: {
    marginTop: 20,
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 20,
    width: "60%",
    alignItems: "center",
  },
  homeButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default MoviesCat;
