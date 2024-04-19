import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const APP_STORAGE_KEY = "TechnologyQuizData";

const questions = [
  {
    category: "Technology",
    difficulty: "Medium",
    question: "Who is the CEO of Tesla, Inc.?",
    options: ["Jeff Bezos", "Elon Musk", "Tim Cook", "Mark Zuckerberg"],
    answer: 1, // Index of the correct answer in options array (Elon Musk)
  },
  {
    category: "Technology",
    difficulty: "Easy",
    question: 'What does "CPU" stand for in computing?',
    options: [
      "Central Processing Unit",
      "Computer Processing Unit",
      "Core Processing Unit",
      "Central Power Unit",
    ],
    answer: 0, // Index of the correct answer in options array (Central Processing Unit)
  },
  {
    category: "Technology",
    difficulty: "Easy",
    question: "Which company developed the Android operating system?",
    options: ["Apple", "Google", "Microsoft", "Samsung"],
    answer: 1, // Index of the correct answer in options array (Google)
  },
  {
    category: "Technology",
    difficulty: "Easy",
    question: "What is the primary function of a router in a computer network?",
    options: [
      "Filtering spam emails",
      "Providing internet access",
      "Displaying web pages",
      "Connecting multiple devices",
    ],
    answer: 3, // Index of the correct answer in options array (Connecting multiple devices)
  },
  {
    category: "Technology",
    difficulty: "Easy",
    question:
      "Which programming language is commonly used for web development?",
    options: ["Java", "C++", "Python", "JavaScript"],
    answer: 3, // Index of the correct answer in options array (JavaScript)
  },
  {
    category: "Technology",
    difficulty: "Easy",
    question: 'What does "URL" stand for in web technology?',
    options: [
      "Universal Resource Locator",
      "Uniform Resource Locator",
      "Universal Reference Locator",
      "Uniform Reference Locator",
    ],
    answer: 1, // Index of the correct answer in options array (Uniform Resource Locator)
  },
  {
    category: "Technology",
    difficulty: "Easy",
    question: "Which company developed the Windows operating system?",
    options: ["Apple", "Google", "Microsoft", "Samsung"],
    answer: 2, // Index of the correct answer in options array (Microsoft)
  },
  {
    category: "Technology",
    difficulty: "Easy",
    question:
      "What is the standard protocol used for secure communication over the internet?",
    options: ["HTTP", "SMTP", "FTP", "HTTPS"],
    answer: 3, // Index of the correct answer in options array (HTTPS)
  },
  {
    category: "Technology",
    difficulty: "Easy",
    question: "What is the name of the virtual assistant developed by Amazon?",
    options: ["Google Assistant", "Siri", "Cortana", "Alexa"],
    answer: 3, // Index of the correct answer in options array (Alexa)
  },
  {
    category: "Technology",
    difficulty: "Easy",
    question: 'What does "HTML" stand for in web development?',
    options: [
      "Hyperlinks and Text Markup Language",
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyper Text Makeup Language",
    ],
    answer: 1, // Index of the correct answer in options array (Hyper Text Markup Language)
  },
  {
    category: "Technology",
    difficulty: "Easy",
    question: "Which company developed the iPhone?",
    options: ["Apple", "Google", "Microsoft", "Samsung"],
    answer: 0, // Index of the correct answer in options array (Apple)
  },
  {
    category: "Technology",
    difficulty: "Easy",
    question:
      "What is the term used for a small piece of code that is able to run within a larger program?",
    options: ["Microprocessor", "Subroutine", "Script", "Algorithm"],
    answer: 1, // Index of the correct answer in options array (Subroutine)
  },
  {
    category: "Technology",
    difficulty: "Easy",
    question: "Which company developed the macOS operating system?",
    options: ["Apple", "Google", "Microsoft", "Samsung"],
    answer: 0, // Index of the correct answer in options array (Apple)
  },
  {
    category: "Technology",
    difficulty: "Easy",
    question:
      "What is the term used to describe a program that replicates itself and spreads to other computers?",
    options: ["Virus", "Malware", "Spyware", "Phishing"],
    answer: 0, // Index of the correct answer in options array (Virus)
  },
  {
    category: "Technology",
    difficulty: "Easy",
    question: 'What does "WWW" stand for in web addresses?',
    options: [
      "World Wide Web",
      "Web World Wide",
      "Wide Web World",
      "World Web Wide",
    ],
    answer: 0, // Index of the correct answer in options array (World Wide Web)
  },
  {
    category: "Technology",
    difficulty: "Easy",
    question:
      "What is the term used for a software program that displays web pages?",
    options: ["Browser", "Search Engine", "Server", "Firewall"],
    answer: 0, // Index of the correct answer in options array (Browser)
  },
  {
    category: "Technology",
    difficulty: "Easy",
    question: 'What does "LAN" stand for in computer networking?',
    options: [
      "Local Area Network",
      "Large Area Network",
      "Longshot Area Network",
      "Language Access Network",
    ],
    answer: 0, // Index of the correct answer in options array (Local Area Network)
  },
  {
    category: "Technology",
    difficulty: "Easy",
    question:
      "What is the term used for a device that connects multiple computers together in a network?",
    options: ["Modem", "Router", "Switch", "Hub"],
    answer: 2, // Index of the correct answer in options array (Switch)
  },
  {
    category: "Technology",
    difficulty: "Easy",
    question:
      "Which programming language is commonly used for creating mobile applications?",
    options: ["Java", "C++", "Python", "Swift"],
    answer: 3, // Index of the correct answer in options array (Swift)
  },
  {
    category: "Technology",
    difficulty: "Easy",
    question:
      "What is the term used for a type of malware that encrypts files and demands payment for their release?",
    options: ["Virus", "Spyware", "Ransomware", "Trojan Horse"],
    answer: 2, // Index of the correct answer in options array (Ransomware)
  },
];

const TechnologyCat = () => {
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
          //onPress={() => handleCategoryChange("NextCategory")}
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

export default TechnologyCat;
