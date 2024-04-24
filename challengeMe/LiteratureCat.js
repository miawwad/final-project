import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const APP_STORAGE_KEY = "LiteratureQuizData";

const questions = [
  {
    category: "Lit",
    difficulty: "Easy",
    question: 'Who wrote "Pride and Prejudice"?',
    options: [
      "Charlotte Brontë",
      "Emily Brontë",
      "Jane Austen",
      "Mary Shelley",
    ],
    answer: 2, // Index of the correct answer in options array
  },
  {
    category: "Lit",
    difficulty: "Easy",
    question: 'What is the main theme of "1984" by George Orwell?',
    options: ["Romance", "Adventure", "Totalitarianism", "Comedy"],
    answer: 2, // Index of the correct answer in options array
  },
  {
    category: "Lit",
    difficulty: "Easy",
    question:
      "Which Shakespeare play features the characters Rosalind and Orlando?",
    options: ["As You Like It", "The Tempest", "Romeo and Juliet", "Macbeth"],
    answer: 0, // Index of the correct answer in options array
  },
  {
    category: "Lit",
    difficulty: "Easy",
    question:
      'What novel is the source of the quote, "All animals are equal, but some animals are more equal than others"?',
    options: [
      "The Jungle Book",
      "Animal Farm",
      "Watership Down",
      "The Call of the Wild",
    ],
    answer: 1, // Index of the correct answer in options array
  },
  {
    category: "Lit",
    difficulty: "Easy",
    question: 'Who wrote "The Great Gatsby"?',
    options: [
      "F. Scott Fitzgerald",
      "Ernest Hemingway",
      "John Steinbeck",
      "William Faulkner",
    ],
    answer: 0, // Index of the correct answer in options array
  },
  {
    category: "Lit",
    difficulty: "Easy",
    question: '"The Catcher in the Rye" is a novel by which author?',
    options: ["J.D. Salinger", "Harper Lee", "Kurt Vonnegut", "Stephen King"],
    answer: 0, // Index of the correct answer in options array
  },
  {
    category: "Lit",
    difficulty: "Easy",
    question:
      'Which book begins with the line, "It was the best of times, it was the worst of times"?',
    options: [
      "War and Peace",
      "A Tale of Two Cities",
      "Great Expectations",
      "Les Misérables",
    ],
    answer: 1, // Index of the correct answer in options array
  },
  {
    category: "Lit",
    difficulty: "Easy",
    question: 'Who wrote "Moby-Dick"?',
    options: [
      "Herman Melville",
      "Nathaniel Hawthorne",
      "Mark Twain",
      "Henry James",
    ],
    answer: 0, // Index of the correct answer in options array
  },
  {
    category: "Lit",
    difficulty: "Easy",
    question: "Which novel features the character Atticus Finch?",
    options: [
      "To Kill a Mockingbird",
      "The Scarlet Letter",
      "East of Eden",
      "Catch-22",
    ],
    answer: 0, // Index of the correct answer in options array
  },
  {
    category: "Lit",
    difficulty: "Easy",
    question:
      '"One Hundred Years of Solitude" is a book written by which author?',
    options: [
      "Gabriel García Márquez",
      "Mario Vargas Llosa",
      " Julio Cortázar",
      "Jorge Luis Borges",
    ],
    answer: 0, // Index of the correct answer in options array
  },
  {
    category: "Lit",
    difficulty: "Easy",
    question: 'Who wrote the poem "The Raven"?',
    options: [
      "Edgar Allan Poe",
      "Walt Whitman",
      "Emily Dickinson",
      "Robert Frost",
    ],
    answer: 0, // Index of the correct answer in options array
  },
  {
    category: "Lit",
    difficulty: "Easy",
    question: "Which novel did Alice Walker write?",
    options: [
      "The Color Purple",
      "Beloved",
      "The Bluest Eye",
      "Their Eyes Were Watching God",
    ],
    answer: 0, // Index of the correct answer in options array
  },
  {
    category: "Lit",
    difficulty: "Easy",
    question:
      'What is the name of the fictional land where "The Lord of the Rings" is set?',
    options: ["Narnia", "Westeros", "Middle-earth", "Earthsea"],
    answer: 2, // Index of the correct answer in options array
  },
  {
    category: "Lit",
    difficulty: "Easy",
    question: 'Who wrote "Brave New World"?',
    options: [
      "George Orwell",
      "Aldous Huxley",
      "Philip K. Dick",
      "Isaac Asimov",
    ],
    answer: 1, // Index of the correct answer in options array
  },
  {
    category: "Lit",
    difficulty: "Easy",
    question: 'What is the primary genre of "Frankenstein" by Mary Shelley?',
    options: [
      "Romance",
      "Science Fiction",
      "Gothic Horror",
      "Historical Fiction",
    ],
    answer: 2, // Index of the correct answer in options array
  },
  {
    category: "Lit",
    difficulty: "Easy",
    question: 'Which poet wrote "Do not go gentle into that good night"?',
    options: [" Dylan Thomas", "T.S. Eliot", "Robert Frost", "Langston Hughes"],
    answer: 0, // Index of the correct answer in options array
  },
  {
    category: "Lit",
    difficulty: "Easy",
    question: 'Who is the author of "Les Misérables"?',
    options: [
      "Victor Hugo",
      "Alexandre Dumas",
      "Gustave Flaubert",
      "Honoré de Balzac",
    ],
    answer: 0, // Index of the correct answer in options array
  },
  {
    category: "Lit",
    difficulty: "Easy",
    question: '"Invisible Man" is a novel by which author?',
    options: [
      "Ralph Ellison",
      "Richard Wright",
      "James Baldwin",
      "Langston Hughes",
    ],
    answer: 0, // Index of the correct answer in options array
  },
  {
    category: "Lit",
    difficulty: "Easy",
    question: 'Who wrote "Love in the Time of Cholera"?',
    options: [
      "Isabel Allende",
      "Gabriel García Márquez",
      "Carlos Fuentes",
      "Pablo Neruda",
    ],
    answer: 1, // Index of the correct answer in options array
  },
  {
    category: "Lit",
    difficulty: "Easy",
    question: "Which work is a famous play by Tennessee Williams?",
    options: [
      "The Glass Menagerie",
      "Death of a Salesman",
      "Long Da's Journey Into Night",
      "The Crucible",
    ],
    answer: 0, // Index of the correct answer in options array
  },
];


const LiteratureCat = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizData, setQuizData] = useState(questions);

  useEffect(() => {
    loadQuizData();
  }, []);

  useEffect(() => {
    saveQuizData();
  }, [quizData]);  // This useEffect calls saveQuizData whenever quizData changes

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
            {(score < 10) ? "Try again To Imporve!" : "Good Job!"}
          </Text>
          <Text style={styles.scoreText}>
            Your Score is {score} / {quizData.length}
          </Text>
          <TouchableOpacity style={styles.homeButton} onPress={() => {
            setCurrentQuestion(0);
            setScore(0);
            setSelectedAnswer(null);
          }}>
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
    width: "100%"
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
    marginTop: 20
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

export default LiteratureCat;