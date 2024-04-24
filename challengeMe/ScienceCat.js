import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const APP_STORAGE_KEY = "ScienceQuizData";

const questions = [
  {
    category: "Science",
    difficulty: "Easy",
    question: "What is the chemical symbol for water?",
    options: ["H2O", "CO2", "NaCl", "O2"],
    answer: 0, // Index of the correct answer in options array (H2O)
  },
  {
    category: "Science",
    difficulty: "Easy",
    question: "What is the closest planet to the Sun?",
    options: ["Earth", "Mars", "Venus", "Mercury"],
    answer: 3, // Index of the correct answer in options array (Mercury)
  },
  {
    category: "Science",
    difficulty: "Easy",
    question: "What is the largest organ in the human body?",
    options: ["Brain", "Liver", "Heart", "Skin"],
    answer: 3, // Index of the correct answer in options array (Skin)
  },
  {
    category: "Science",
    difficulty: "Easy",
    question: "What is the process by which plants make their own food?",
    options: ["Respiration", "Photosynthesis", "Digestion", "Fermentation"],
    answer: 1, // Index of the correct answer in options array (Photosynthesis)
  },
  {
    category: "Science",
    difficulty: "Easy",
    question: "What is the chemical symbol for gold?",
    options: ["Ag", "Au", "Fe", "Cu"],
    answer: 1, // Index of the correct answer in options array (Au)
  },
  {
    category: "Science",
    difficulty: "Easy",
    question: "Which gas do plants use for photosynthesis?",
    options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    answer: 0, // Index of the correct answer in options array (Carbon dioxide)
  },
  {
    category: "Science",
    difficulty: "Easy",
    question: "What is the force that causes objects to fall to the ground?",
    options: ["Magnetism", "Gravity", "Friction", "Buoyancy"],
    answer: 1, // Index of the correct answer in options array (Gravity)
  },
  {
    category: "Science",
    difficulty: "Easy",
    question: "What is the chemical symbol for oxygen?",
    options: ["O2", "O3", "H2O", "CO2"],
    answer: 0, // Index of the correct answer in options array (O2)
  },
  {
    category: "Science",
    difficulty: "Easy",
    question: "What is the process by which liquid water becomes water vapor?",
    options: ["Condensation", "Evaporation", "Sublimation", "Precipitation"],
    answer: 1, // Index of the correct answer in options array (Evaporation)
  },
  {
    category: "Science",
    difficulty: "Easy",
    question: "What is the largest planet in our solar system?",
    options: ["Mars", "Jupiter", "Saturn", "Neptune"],
    answer: 1, // Index of the correct answer in options array (Jupiter)
  },
  {
    category: "Science",
    difficulty: "Easy",
    question: "What is the study of living organisms called?",
    options: ["Physics", "Chemistry", "Biology", "Geology"],
    answer: 2, // Index of the correct answer in options array (Biology)
  },
  {
    category: "Science",
    difficulty: "Easy",
    question: "What is the chemical symbol for carbon dioxide?",
    options: ["CO2", "O2", "H2O", "N2"],
    answer: 0, // Index of the correct answer in options array (CO2)
  },
  {
    category: "Science",
    difficulty: "Easy",
    question: "What is the powerhouse of the cell?",
    options: [
      "Nucleus",
      "Mitochondria",
      "Cell membrane",
      "Endoplasmic reticulum",
    ],
    answer: 1, // Index of the correct answer in options array (Mitochondria)
  },
  {
    category: "Science",
    difficulty: "Easy",
    question: "What is the study of Earth's atmosphere called?",
    options: ["Meteorology", "Geology", "Astronomy", "Ecology"],
    answer: 0, // Index of the correct answer in options array (Meteorology)
  },
  {
    category: "Science",
    difficulty: "Easy",
    question: "What is the chemical symbol for sodium chloride?",
    options: ["NaCl", "KCl", "HCl", "MgCl2"],
    answer: 0, // Index of the correct answer in options array (NaCl)
  },
  {
    category: "Science",
    difficulty: "Easy",
    question: "What is the smallest unit of matter?",
    options: ["Atom", "Molecule", "Cell", "Nucleus"],
    answer: 0, // Index of the correct answer in options array (Atom)
  },
  {
    category: "Science",
    difficulty: "Easy",
    question:
      "What is the branch of science that deals with the study of rocks?",
    options: ["Geology", "Meteorology", "Astronomy", "Biology"],
    answer: 0, // Index of the correct answer in options array (Geology)
  },
  {
    category: "Science",
    difficulty: "Easy",
    question:
      "What is the process by which plants release water vapor through their leaves?",
    options: ["Transpiration", "Photosynthesis", "Evaporation", "Respiration"],
    answer: 0, // Index of the correct answer in options array (Transpiration)
  },
  {
    category: "Science",
    difficulty: "Easy",
    question: "What is the chemical symbol for helium?",
    options: ["He", "H", "Li", "Ne"],
    answer: 0, // Index of the correct answer in options array (He)
  },
  {
    category: "Science",
    difficulty: "Easy",
    question:
      "What is the process by which plants absorb water through their roots?",
    options: ["Photosynthesis", "Transpiration", "Respiration", "Osmosis"],
    answer: 3,
  },
];

const ScienceCat = () => {
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

export default ScienceCat;
