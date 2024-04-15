import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const APP_STORAGE_KEY = "quizData";

const questions = [
  {
    category: "Geo",
    difficulty: "Easy",
    question: "What is the capital city of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    answer: 2, // Index of the correct answer in options array
  },
  {
    category: "Geo",
    difficulty: "Easy",
    question: "Which country has the largest land area?",
    options: ["China", "United States", "Canada", "Russia"],
    answer: 3, // Index of the correct answer in options array
  },
  {
    category: "Geo",
    difficulty: "Easy",
    question:
      "The Great Barrier Reef is located off the coast of which Australian state?",
    options: ["New South Wales", "Western Australia", "Queensland", "Victoria"],
    answer: 2, // Index of the correct answer in options array
  },
  {
    category: "Geo",
    difficulty: "Easy",
    question: "Mount Everest is located in which mountain range?",
    options: ["Alps", "Himalayas", "Andes", "Rockies"],
    answer: 1, // Index of the correct answer in options array
  },
  {
    category: "Geo",
    difficulty: "Easy",
    question: "Which river is the longest in the world?",
    options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
    answer: 1, // Index of the correct answer in options array
  },
  {
    category: "Geo",
    difficulty: "Easy",
    question: "What is the smallest country in the world by land area?",
    options: ["Monaco", "Nauru", "Vatican City", "San Marino"],
    answer: 2, // Index of the correct answer in options array
  },
  {
    category: "Geo",
    difficulty: "Easy",
    question: "Which desert is the largest in the world?",
    options: ["Sahara", "Arabian", "Gobi", "Kalahari"],
    answer: 0, // Index of the correct answer in options array
  },
  {
    category: "Geo",
    difficulty: "Easy",
    question: "The Panama Canal connects which two bodies of water?",
    options: [
      "Atlantic Ocean and Indian Ocean",
      "Atlantic Ocean and Pacific Ocean",
      "Pacific Ocean and Indian Ocean",
      "Red Sea and Mediterranean Sea",
    ],
    answer: 1, // Index of the correct answer in options array
  },
  {
    category: "Geo",
    difficulty: "Easy",
    question: "What is the capital city of Japan?",
    options: ["Kyoto", "Osaka", "Tokyo", "Hiroshima"],
    answer: 2, // Index of the correct answer in options array
  },
  {
    category: "Geo",
    difficulty: "Easy",
    question: "Which country is not part of Scandinavia?",
    options: ["Norway", "Sweden", "Finland", "Denmark"],
    answer: 2, // Index of the correct answer in options array
  },
  {
    category: "Geo",
    difficulty: "Easy",
    question: 'Which U.S. state is known as the "Sunshine State"?',
    options: ["California", "Florida", "Arizona", "Texas"],
    answer: 1, // Index of the correct answer in options array
  },
  {
    category: "Geo",
    difficulty: "Easy",
    question: "What is the longest river in the United States?",
    options: [
      "Colorado River",
      "Rio Grande",
      "Mississippi River",
      "Missouri River",
    ],
    answer: 3, // Index of the correct answer in options array
  },
  {
    category: "Geo",
    difficulty: "Easy",
    question: 'Which city is known as the "City of Love"',
    options: ["Rome", "Paris", "Venice", "Vienna"],
    answer: 1, // Index of the correct answer in options array
  },
  {
    category: "Geo",
    difficulty: "Easy",
    question:
      "The island of Madagascar is located off the coast of which continent?",
    options: ["Asia", "Africa", "Australia", "South America"],
    answer: 1, // Index of the correct answer in options array
  },
  {
    category: "Geo",
    difficulty: "Easy",
    question: "Which country is completely landlocked by South Africa?",
    options: ["Botswana", "Zimbabwe", "Mozambique", "Lesotho"],
    answer: 3, // Index of the correct answer in options array
  },
  {
    category: "Geo",
    difficulty: "Easy",
    question:
      "Which lake is the largest freshwater lake in the world by volume?",
    options: ["Lake Superior", "Lake Victoria", "Lake Baikal", "Lake Michigan"],
    answer: 2, // Index of the correct answer in options array
  },
  {
    category: "Geo",
    difficulty: "Easy",
    question:
      "The ancient city of Petra is located in which modern-day country?",
    options: ["Egypt", "Jordan", "Syria", "Lebanon"],
    answer: 1, // Index of the correct answer in options array
  },
  {
    category: "Geo",
    difficulty: "Easy",
    question: "What is the capital of Brazil?",
    options: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
    answer: 2, // Index of the correct answer in options array
  },
  {
    category: "Geo",
    difficulty: "Easy",
    question: "Which country does Greenland belong to?",
    options: ["Norway", "Denmark", "Canada", "Iceland"],
    answer: 1, // Index of the correct answer in options array
  },
  {
    category: "Geo",
    difficulty: "Easy",
    question: "Which of these cities is not a national capital?",
    options: ["Bangkok", "Geneva", "Cairo", "Helsinki"],
    answer: 1, // Index of the correct answer in options array
  },
];
