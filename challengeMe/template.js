import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const APP_STORAGE_KEY = 'quizData';

const questions = [
    { 
        category: 'History',
        difficulty: 'Easy',
        question: 'What is the capital of France?',
        options: ['London', 'Paris', 'Berlin', 'Rome'],
        answer: 1, // Index of the correct answer in options array
      },
      {
        category: 'Science',
        difficulty: 'Medium',
        question: 'What is the smallest planet in our solar system?',
        options: ['Earth', 'Mercury', 'Venus', 'Mars'],
        answer: 1,
      },
      // Add more questions with different categories and difficulties
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
  };

  // Keep the return statement here for context
};