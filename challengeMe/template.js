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
};