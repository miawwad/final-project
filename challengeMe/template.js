import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const APP_STORAGE_KEY = "quizData";

const questions = [
  {
    category: "History",
    difficulty: "Easy",
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Rome"],
    answer: 1, // Index of the correct answer in options array
  },
  {
    category: "Science",
    difficulty: "Medium",
    question: "What is the smallest planet in our solar system?",
    options: ["Earth", "Mercury", "Venus", "Mars"],
    answer: 1,
  },
  // Add more questions with different categories and difficulties
];

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [category, setCategory] = useState("All");
  const [difficulty, setDifficulty] = useState("All");
  const [quizData, setQuizData] = useState(questions);

  const loadQuizData = async () => {
    try {
      const dataString = await AsyncStorage.getItem(APP_STORAGE_KEY);
      if (dataString) {
        const data = JSON.parse(dataString);
        setQuizData(data);
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

  useEffect(() => {
    loadQuizData();
  }, []);

  useEffect(() => {
    saveQuizData();
  }, [quizData]);

  const handleOptionSelect = (index) => {
    // Handle option selection
    setSelectedAnswer(index);

    const isCorrect = index === quizData[currentQuestion].answer;
    setScore(score + (isCorrect ? 1 : 0));

    // Set a short delay before moving to the next question to allow the user to see the color change
    setTimeout(() => {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null); // Reset for the next question
    }, 1000); // 1000 milliseconds delay
  };

  const handleNextQuestion = () => {
    // Handle moving to the next question
    if (selectedAnswer !== null) {
      const isCorrect = selectedAnswer === quizData[currentQuestion].answer;
      setScore(score + (isCorrect ? 1 : 0));
      setSelectedAnswer(null);
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleCategoryChange = (newCategory) => {
    // Handle category change
    setCategory(newCategory);
    const filteredData = questions.filter(
      (q) => newCategory === "All" || q.category === newCategory,
    );
    setQuizData(filteredData);
    setCurrentQuestion(0);
    setScore(0);
  };

  const handleDifficultyChange = (newDifficulty) => {
    // Handle difficulty change
    setDifficulty(newDifficulty);
    const filteredData = questions.filter(
      (q) => newDifficulty === "All" || q.difficulty === newDifficulty,
    );
    setQuizData(filteredData);
    setCurrentQuestion(0);
    setScore(0);
  };

  const isQuizFinished = currentQuestion === quizData.length;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button
          title="Change Category"
          onPress={() => handleCategoryChange("NextCategory")}
        />
        <Button
          title="Change Difficulty"
          onPress={() => handleDifficultyChange("NextDifficulty")}
        />
      </View>
      <View style={styles.quizContainer}>
        {isQuizFinished ? (
          <>
            <Text style={styles.scoreText}>
              You finished the quiz! Your score is: {score} / {quizData.length}
            </Text>
            <TouchableOpacity
              style={styles.homeButton}
              onPress={() => {
                setCurrentQuestion(0); // Reset to the first question
                setScore(0); // Reset the score
                setSelectedAnswer(null); // Reset selected answer
                setCategory("All"); // Reset to initial category (if your quiz has this feature)
                setDifficulty("All"); // Reset to initial difficulty (if your quiz has this feature)
              }}
            >
              <Text style={styles.homeButtonText}>Restart Quiz</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
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
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5", // Light gray background
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
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
    fontSize: 22,
    color: "#333",
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
    width: "60%", // Adjust width as needed
    alignItems: "center",
  },
  homeButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default App;
