import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const APP_STORAGE_KEY = 'quizData';

const questions = [
    { 
        category: 'Hist',
        difficulty: 'Easy',
        question: 'What year did the Titanic sink in the Atlantic Ocean on its maiden voyage?',
        options: ['1905', '1912', '1923', '1931'],
        answer: 1, // Index of the correct answer in options array
    },
    { 
        category: 'Hist',
        difficulty: 'Easy',
        question: 'Which empire was known as the "Land of the Rising Sun"?',
        options: ['Ottoman Empire', 'British Empire', 'Roman Empire', 'Japanese Empire'],
        answer: 3, // Index of the correct answer in options array
    },
    { 
        category: 'Hist',
        difficulty: 'Easy',
        question: 'Who was the first President of the United States?',
        options: ['Abraham Lincoln', 'George Washington', 'Thomas Jefferson', 'John Adams'],
        answer: 1, // Index of the correct answer in options array
    },
    { 
        category: 'Hist',
        difficulty: 'Easy',
        question: 'Where did the ancient Olympic Games originate?',
        options: ['Rome, Italy', 'Athens, Greece', 'Olympia, Greece', 'Sparta, Greece'],
        answer: 2, // Index of the correct answer in options array
    },
    { 
        category: 'Hist',
        difficulty: 'Easy',
        question: 'Which document, signed in 1215, limited the powers of the king of England and is considered a cornerstone of modern democracy?',
        options: ['The Magna Carta', 'The Declaration of Independence', 'The Constitution', 'The Bill of Rights'],
        answer: 0, // Index of the correct answer in options array
    },
    { 
        category: 'Hist',
        difficulty: 'Easy',
        question: 'During which war was the Battle of Gettysburg fought?',
        options: ['World War I', 'World War II', 'The American Revolutionary War', 'The American Civil War'],
        answer: 3, // Index of the correct answer in options array
    },
    { 
        category: 'Hist',
        difficulty: 'Easy',
        question: 'Who discovered the sea route to India by rounding the Cape of Good Hope?',
        options: ['Christopher Columbus', 'Marco Polo', 'Vasco da Gama', 'Ferdinand Magellan'],
        answer: 2, // Index of the correct answer in options array
    },
    { 
        category: 'Hist',
        difficulty: 'Easy',
        question: 'Which invention is associated with Johannes Gutenberg?',
        options: ['The telescope', 'The printing press', 'The steam engine', 'The light bulb'],
        answer: 1, // Index of the correct answer in options array
    },
    { 
        category: 'Hist',
        difficulty: 'Easy',
        question: 'Who was the Russian leader during the Cuban Missile Crisis?',
        options: ['Vladimir Lenin', 'Joseph Stalin', 'Mikhail Gorbachev', 'Nikita Khrushchev'],
        answer: 3, // Index of the correct answer in options array
    },
    { 
        category: 'Hist',
        difficulty: 'Easy',
        question: 'What was the main reason for the construction of the Berlin Wall?',
        options: ['To attract tourists', 'To stop East Germans from fleeing to West Germany', 'To beautify the city', 'To prevent Western spies from entering East Germany'],
        answer: 1, // Index of the correct answer in options array
    },
    { 
        category: 'Hist',
        difficulty: 'Easy',
        question: 'Which civilization is known for building pyramids as tombs for pharaohs?',
        options: ['Greek', 'Roman', 'Egyptian', 'Mesopotamian'],
        answer: 2, // Index of the correct answer in options array
    },
    { 
        category: 'Hist',
        difficulty: 'Easy',
        question: 'Which treaty ended the First World War?',
        options: ['Treaty of Paris', 'Treaty of Versailles', 'Treaty of Tordesillas', 'Treaty of Westphalia'],
        answer: 1, // Index of the correct answer in options array
    },
    { 
        category: 'Hist',
        difficulty: 'Easy',
        question: 'What is the Renaissance considered a rebirth of?',
        options: ['Art and learning', 'Religion and spirituality', 'Economics and politics', 'Science and technology'],
        answer: 0, // Index of the correct answer in options array
    },
    { 
        category: 'Hist',
        difficulty: 'Easy',
        question: 'Who wrote the famous document known as the 95 Theses?',
        options: ['John Calvin', 'Henry VIII', 'Martin Luther', 'Leonardo da Vinci'],
        answer: 2, // Index of the correct answer in options array
    },
    { 
        category: 'Hist',
        difficulty: 'Easy',
        question: 'What ancient city was destroyed in AD 79 by the eruption of Mount Vesuvius?',
        options: ['Rome', 'Athens', 'Pompeii', 'Sparta'],
        answer: 2, // Index of the correct answer in options array
    },
    { 
        category: 'Hist',
        difficulty: 'Easy',
        question: 'Who was the first woman to fly solo across the Atlantic Ocean?',
        options: ['Bessie Coleman', 'Amelia Earhart', 'Harriet Quimby', 'Jacqueline Cochran'],
        answer: 1, // Index of the correct answer in options array
    },
    { 
        category: 'Hist',
        difficulty: 'Easy',
        question: 'What historical event do the French celebrate on Bastille Day?',
        options: ['The capture of Louis XVI', 'The start of the French Revolution', 'The end of the French Revolution', 'The storming of the Bastille'],
        answer: 3, // Index of the correct answer in options array
    },
    { 
        category: 'Hist',
        difficulty: 'Easy',
        question: 'Who was the British Prime Minister at the start of World War II?',
        options: ['Winston Churchill', 'Neville Chamberlain', 'Clement Attlee', 'Anthony Eden'],
        answer: 1, // Index of the correct answer in options array
    },
    { 
        category: 'Hist',
        difficulty: 'Easy',
        question: 'Which country was formerly known as Persia?',
        options: ['Iraq', 'Oman', 'Saudi Arabia', 'Iran'],
        answer: 3, // Index of the correct answer in options array
    },
    { 
        category: 'Hist',
        difficulty: 'Easy',
        question: 'What was the main trade route between the Eastern and Western worlds during the Middle Ages?',
        options: ['The Silk Road', 'The Amber Road', 'The Spice Route', 'The Gold Road'],
        answer: 0, // Index of the correct answer in options array
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