import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const APP_STORAGE_KEY = "quizData";

const questions = [
  {
    category: "Music",
    difficulty: "Easy",
    question: "Who composed the 'Moonlight Sonata'?",
    options: [
      "Wolfgang Amadeus Mozart",
      "Ludwig van Beethoven",
      "Johann Sebastian Bach",
      "Franz Schubert",
    ],
    answer: 1, // Index of the correct answer in options array
  },
  {
    category: "Music",
    difficulty: "Easy",
    question:
      "Which instrument has six strings and is commonly used in rock music?",
    options: ["Violin", "Piano", "Guitar", "Saxophone"],
    answer: 2, // Index of the correct answer in options array
  },
  {
    category: "Music",
    difficulty: "Easy",
    question: "Who is known as the 'King of Pop'?",
    options: ["Elvis Presley", "Michael Jackson", "Prince", "David Bowie"],
    answer: 1, // Index of the correct answer in options array
  },
  {
    category: "Music",
    difficulty: "Easy",
    question: "In which city did jazz music originate?",
    options: ["Chicago", "Detroit", "New Orleans", "New York City"],
    answer: 2, // Index of the correct answer in options array
  },
  {
    category: "Music",
    difficulty: "Easy",
    question:
      "What musical period is known for composers like Bach, Handel, and Vivaldi?",
    options: ["Classical", "Romantic", "Baroque", "Modern"],
    answer: 2, // Index of the correct answer in options array
  },
  {
    category: "Music",
    difficulty: "Easy",
    question: "Which group released the album titled 'Abbey Road'?",
    options: [
      "The Rolling Stones",
      "The Beatles",
      "Led Zeppelin",
      "Pink Floyd",
    ],
    answer: 1, // Index of the correct answer in options array
  },
  {
    category: "Music",
    difficulty: "Easy",
    question: "What is the highest male voice type in opera?",
    options: ["Bass", "Baritone", "Tenor", "Alto"],
    answer: 2, // Index of the correct answer in options array
  },
  {
    category: "Music",
    difficulty: "Easy",
    question: "Which of these instruments is a woodwind?",
    options: ["Trumpet", "Violin", "Flute", "Cello"],
    answer: 2, // Index of the correct answer in options array
  },
  {
    category: "Music",
    difficulty: "Easy",
    question: "Who composed the music for 'The Nutcracker'?",
    options: [
      "Claude Debussy",
      "Pyotr Ilyich Tchaikovsky",
      "Sergei Prokofiev",
      "Igor Stravinsky",
    ],
    answer: 1, // Index of the correct answer in options array
  },
  {
    category: "Music",
    difficulty: "Easy",
    question:
      "What is the term for a piece of music where a violin soloist plays with an orchestra?",
    options: ["Sonata", "Concerto", "Symphony", "Opera"],
    answer: 1, // Index of the correct answer in options array
  },
  {
    category: "Music",
    difficulty: "Easy",
    question: "Which artist is famous for the song 'Like a Rolling Stone'?",
    options: ["Bob Dylan", "Bruce Springsteen", "Neil Young", "John Lennon"],
    answer: 0, // Index of the correct answer in options array
  },
  {
    category: "Music",
    difficulty: "Easy",
    question:
      "What genre of music did The Supremes contribute to during the 1960s?",
    options: ["Rock", "Jazz", "Pop", "Motown"],
    answer: 3, // Index of the correct answer in options array
  },
  {
    category: "Music",
    difficulty: "Easy",
    question: "Who composed 'Four Seasons'?",
    options: [
      "Antonio Vivaldi",
      "Johann Sebastian Bach",
      "Wolfgang Amadeus Mozart",
      "Ludwig van Beethoven",
    ],
    answer: 0, // Index of the correct answer in options array
  },
  {
    category: "Music",
    difficulty: "Easy",
    question:
      "Which music festival is known for a famous performance by Jimi Hendrix in 1969?",
    options: ["Lollapalooza", "Coachella", "Woodstock", "Glastonbury"],
    answer: 2, // Index of the correct answer in options array
  },
  {
    category: "Music",
    difficulty: "Easy",
    question: "What does the Italian musical term 'forte' mean?",
    options: ["Slowly", "Quietly", "Loudly", "Quickly"],
    answer: 2, // Index of the correct answer in options array
  },
  {
    category: "Music",
    difficulty: "Easy",
    question: "Who is credited with popularizing the solo electric guitar?",
    options: ["Eric Clapton", "B.B. King", "Jimi Hendrix", "Chuck Berry"],
    answer: 2, // Index of the correct answer in options array
  },
  {
    category: "Music",
    difficulty: "Easy",
    question: "What type of dance music became popular in the 1970s?",
    options: ["Disco", "Swing", "Rock", "Folk"],
    answer: 0, // Index of the correct answer in options array
  },
  {
    category: "Music",
    difficulty: "Easy",
    question: "Who was the lead singer of the band Queen?",
    options: ["Freddie Mercury", "David Bowie", "Elton John", "Mick Jagger"],
    answer: 0, // Index of the correct answer in options array
  },
  {
    category: "Music",
    difficulty: "Easy",
    question: "What is the name of the scale used in traditional Indian music?",
    options: ["Chromatic", "Pentatonic", "Raga", "Dorian"],
    answer: 2, // Index of the correct answer in options array
  },
  {
    category: "Music",
    difficulty: "Easy",
    question:
      "Which composer is known for his Fifth Symphony and 'Ode to Joy'?",
    options: [
      "Johann Sebastian Bach",
      "Ludwig van Beethoven",
      "Franz Schubert",
      "Wolfgang Amadeus Mozart",
    ],
    answer: 1, // Index of the correct answer in options array
  },
];

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [category, setCategory] = useState('All');
  const [difficulty, setDifficulty] = useState('All');
  const [quizData, setQuizData] = useState(questions);

  const loadQuizData = async () => {
    try {
        const dataString = await AsyncStorage.getItem(APP_STORAGE_KEY);
        if (dataString) {
          const data = JSON.parse(dataString);
          setQuizData(data);
        }
      } catch (error) {
        console.error('Error loading quiz data:', error);
      }
  };

  const saveQuizData = async () => {
    try {
        const dataString = JSON.stringify(quizData);
        await AsyncStorage.setItem(APP_STORAGE_KEY, dataString);
      } catch (error) {
        console.error('Error saving quiz data:', error);
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
      (q) => newCategory === 'All' || q.category === newCategory
    );
    setQuizData(filteredData);
    setCurrentQuestion(0);
    setScore(0);
  };

  const handleDifficultyChange = (newDifficulty) => {
    // Handle difficulty change
    setDifficulty(newDifficulty);
    const filteredData = questions.filter(
      (q) => newDifficulty === 'All' || q.difficulty === newDifficulty
    );
    setQuizData(filteredData);
    setCurrentQuestion(0);
    setScore(0)
  };

  const isQuizFinished = currentQuestion === quizData.length;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button
          title="Change Category"
          onPress={() => handleCategoryChange('NextCategory')}
        />
        <Button
          title="Change Difficulty"
          onPress={() => handleDifficultyChange('NextDifficulty')}
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
                setCategory('All'); // Reset to initial category (if your quiz has this feature)
                setDifficulty('All'); // Reset to initial difficulty (if your quiz has this feature)
              }}>
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
                        ? 'lightgreen'
                        : 'salmon',
                  },
                ]}
                onPress={() => handleOptionSelect(index)}
                disabled={selectedAnswer !== null}>
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5', // Light gray background
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '100%',
  },
  quizContainer: {
    width: '100%',
    alignItems: 'center',
  },
  questionText: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
  },
  scoreText: {
    fontSize: 22,
    color: '#333',
  },
  optionButton: {
    marginVertical: 10,
    backgroundColor: 'white',
    padding: 15,
    alignItems: 'center',
    borderRadius: 20,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  optionText: {
    fontSize: 16,
  },
  homeButton: {
    marginTop: 20,
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 20,
    width: '60%', // Adjust width as needed
    alignItems: 'center',
  },
  homeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default App;