import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Users from "./Users.json";

const APP_STORAGE_KEY = "SportsQuizData";

const questions = [
  {
    category: "Sports",
    difficulty: "Easy",
    question: 'What sport is known as the "King of Sports"?',
    options: ["Basketball", "Football (Soccer)", "Tennis", "Cricket"],
    answer: 1, // Index of the correct answer in options array
  },
  {
    category: "Sports",
    difficulty: "Easy",
    question: "Which country hosted the 2016 Summer Olympics?",
    options: ["China", "Brazil", "Russia", "United Kingdom"],
    answer: 1, // Index of the correct answer in options array
  },
  {
    category: "Sports",
    difficulty: "Easy",
    question:
      "Who is considered one of the greatest basketball players of all time and played for the Chicago Bulls during the 1990s?",
    options: [
      " LeBron James",
      "Kobe Bryant",
      "Michael Jordan",
      "Shaquille O'Neal",
    ],
    answer: 2, // Index of the correct answer in options array
  },
  {
    category: "Sports",
    difficulty: "Easy",
    question:
      "In golf, what name is given to a score of three under par on a single hole?",
    options: ["Eagle", "Birdie", "Albatross", " Bogey"],
    answer: 2, // Index of the correct answer in options array
  },
  {
    category: "Sports",
    difficulty: "Easy",
    question: "Which sport is played at Wimbledon?",
    options: ["Cricket", "Tennis", "Rugby", "Football"],
    answer: 1, // Index of the correct answer in options array
  },
  {
    category: "Sports",
    difficulty: "Easy",
    question:
      "What is the maximum score possible with a single throw in darts?",
    options: ["50", "60", "100", "180"],
    answer: 1, // Index of the correct answer in options array
  },
  {
    category: "Sports",
    difficulty: "Easy",
    question: "Which country won the FIFA World Cup in 2018?",
    options: ["Germany", "Brazil", "Argentina", " France"],
    answer: 3, // Index of the correct answer in options array
  },
  {
    category: "Sports",
    difficulty: "Easy",
    question:
      "What term is used in baseball when a player hits the ball out of the park?",
    options: ["Slam Dunk", "Touchdown", "Home Run", "Goal"],
    answer: 2, // Index of the correct answer in options array
  },
  {
    category: "Sports",
    difficulty: "Easy",
    question: "Which of these sports is primarily played on ice?",
    options: [" Curling", "Field Hockey", "Lacrosse", "Polo"],
    answer: 0, // Index of the correct answer in options array
  },
  {
    category: "Sports",
    difficulty: "Easy",
    question:
      "Who has won the most Grand Slam titles in men's singles tennis as of 2021?",
    options: [
      " Roger Federer",
      "Rafael Nadal",
      "Novak Djokovic",
      "Pete Sampras",
    ],
    answer: 2, // Index of the correct answer in options array
  },
  {
    category: "Sports",
    difficulty: "Easy",
    question: 'Which sport uses terms such as "stale fish" and "mctwist"?',
    options: ["Skateboarding", "Snowboarding", "Surfing", "BMX"],
    answer: 1, // Index of the correct answer in options array
  },
  {
    category: "Sports",
    difficulty: "Easy",
    question:
      "What is the only team sport played on horseback included in the Olympics?",
    options: ["Polo", "Equestrian Dressage", " Show Jumping", "Pentathlon"],
    answer: 0, // Index of the correct answer in options array
  },
  {
    category: "Sports",
    difficulty: "Easy",
    question:
      "What color jersey is worn by the winners of each stage of the Tour de France?",
    options: ["Yellow", "Green", "Polka Dot", "White"],
    answer: 0, // Index of the correct answer in options array
  },
  {
    category: "Sports",
    difficulty: "Easy",
    question: "Which country invented the sport of badminton?",
    options: ["China", "India", "England", "Japan"],
    answer: 2, // Index of the correct answer in options array
  },
  {
    category: "Sports",
    difficulty: "Easy",
    question: 'Which sport features a "scrum"?',
    options: ["Rugby", "Cricket", "Polo", "Lacrosse"],
    answer: 0, // Index of the correct answer in options array
  },
  {
    category: "Sports",
    difficulty: "Easy",
    question: 'In what sport would you find a "coxswain"?',
    options: ["Rowing", "Sailing", "Polo", "Archery"],
    answer: 0, // Index of the correct answer in options array
  },
  {
    category: "Sports",
    difficulty: "Easy",
    question: "Which American football team has won the most Super Bowls?",
    options: [
      "New England Patriots",
      "Pittsburgh Steelers",
      "Dallas Cowboys",
      "San Francisco 49ers",
    ],
    answer: 1, // Index of the correct answer in options array
  },
  {
    category: "Sports",
    difficulty: "Easy",
    question: "What is the diameter of a basketball hoop in inches?",
    options: ["16 inches", "18 inches", "20 inches", "22 inches"],
    answer: 1, // Index of the correct answer in options array
  },
  {
    category: "Sports",
    difficulty: "Easy",
    question:
      "Who was the first female gymnast to be awarded a perfect score of 10 at the Olympics?",
    options: [
      "Mary Lou Retton",
      "Nadia Comaneci",
      "Simone Biles",
      "Shannon Miller",
    ],
    answer: 1, // Index of the correct answer in options array
  },
  {
    category: "Sports",
    difficulty: "Easy",
    question:
      "Which sport did the ancient Greeks invent that involves throwing a disc?",
    options: ["Disc Golf", "Ultimate Frisbee", "Discus Throw", "Frisbee Golf"],
    answer: 2, // Index of the correct answer in options array
  },
];

const SportsCat = () => {
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
    Users.SportHighestScore += isCorrect ? 1 : 0; // Update the Score after each question
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
        Users.SportHighestScore = 0; // Reset Score to Zero
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
              Users.SportHighestScore = 0; // Reset Score to Zero
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

export default SportsCat;
