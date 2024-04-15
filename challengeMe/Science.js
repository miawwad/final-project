import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const APP_STORAGE_KEY = 'quizData';

const questions = [
    {
      category: 'Science',
      difficulty: 'Easy',
      question: 'What is the chemical symbol for water?',
      options: ['H2O', 'CO2', 'NaCl', 'O2'],
      answer: 0, // Index of the correct answer in options array (H2O)
    },
    {
      category: 'Science',
      difficulty: 'Easy',
      question: 'What is the closest planet to the Sun?',
      options: ['Earth', 'Mars', 'Venus', 'Mercury'],
      answer: 3, // Index of the correct answer in options array (Mercury)
    },
    {
      category: 'Science',
      difficulty: 'Easy',
      question: 'What is the largest organ in the human body?',
      options: ['Brain', 'Liver', 'Heart', 'Skin'],
      answer: 3, // Index of the correct answer in options array (Skin)
    },
    {
      category: 'Science',
      difficulty: 'Easy',
      question: 'What is the process by which plants make their own food?',
      options: ['Respiration', 'Photosynthesis', 'Digestion', 'Fermentation'],
      answer: 1, // Index of the correct answer in options array (Photosynthesis)
    },
    {
      category: 'Science',
      difficulty: 'Easy',
      question: 'What is the chemical symbol for gold?',
      options: ['Ag', 'Au', 'Fe', 'Cu'],
      answer: 1, // Index of the correct answer in options array (Au)
    },
    {
      category: 'Science',
      difficulty: 'Easy',
      question: 'Which gas do plants use for photosynthesis?',
      options: ['Carbon dioxide', 'Oxygen', 'Nitrogen', 'Hydrogen'],
      answer: 0, // Index of the correct answer in options array (Carbon dioxide)
    },
    {
      category: 'Science',
      difficulty: 'Easy',
      question: 'What is the force that causes objects to fall to the ground?',
      options: ['Magnetism', 'Gravity', 'Friction', 'Buoyancy'],
      answer: 1, // Index of the correct answer in options array (Gravity)
    },
    {
      category: 'Science',
      difficulty: 'Easy',
      question: 'What is the chemical symbol for oxygen?',
      options: ['O2', 'O3', 'H2O', 'CO2'],
      answer: 0, // Index of the correct answer in options array (O2)
    },
    {
      category: 'Science',
      difficulty: 'Easy',
      question: 'What is the process by which liquid water becomes water vapor?',
      options: ['Condensation', 'Evaporation', 'Sublimation', 'Precipitation'],
      answer: 1, // Index of the correct answer in options array (Evaporation)
    },
    {
      category: 'Science',
      difficulty: 'Easy',
      question: 'What is the largest planet in our solar system?',
      options: ['Mars', 'Jupiter', 'Saturn', 'Neptune'],
      answer: 1, // Index of the correct answer in options array (Jupiter)
    },
    {
      category: 'Science',
      difficulty: 'Easy',
      question: 'What is the study of living organisms called?',
      options: ['Physics', 'Chemistry', 'Biology', 'Geology'],
      answer: 2, // Index of the correct answer in options array (Biology)
    },
    {
      category: 'Science',
      difficulty: 'Easy',
      question: 'What is the chemical symbol for carbon dioxide?',
      options: ['CO2', 'O2', 'H2O', 'N2'],
      answer: 0, // Index of the correct answer in options array (CO2)
    },
    {
      category: 'Science',
      difficulty: 'Easy',
      question: 'What is the powerhouse of the cell?',
      options: ['Nucleus', 'Mitochondria', 'Cell membrane', 'Endoplasmic reticulum'],
      answer: 1, // Index of the correct answer in options array (Mitochondria)
    },
    {
      category: 'Science',
      difficulty: 'Easy',
      question: 'What is the study of Earth\'s atmosphere called?',
      options: ['Meteorology', 'Geology', 'Astronomy', 'Ecology'],
      answer: 0, // Index of the correct answer in options array (Meteorology)
    },
    {
      category: 'Science',
      difficulty: 'Easy',
      question: 'What is the chemical symbol for sodium chloride?',
      options: ['NaCl', 'KCl', 'HCl', 'MgCl2'],
      answer: 0, // Index of the correct answer in options array (NaCl)
    },
    {
      category: 'Science',
      difficulty: 'Easy',
      question: 'What is the smallest unit of matter?',
      options: ['Atom', 'Molecule', 'Cell', 'Nucleus'],
      answer: 0, // Index of the correct answer in options array (Atom)
    },
    {
      category: 'Science',
      difficulty: 'Easy',
      question: 'What is the branch of science that deals with the study of rocks?',
      options: ['Geology', 'Meteorology', 'Astronomy', 'Biology'],
      answer: 0, // Index of the correct answer in options array (Geology)
    },
    {
      category: 'Science',
      difficulty: 'Easy',
      question: 'What is the process by which plants release water vapor through their leaves?',
      options: ['Transpiration', 'Photosynthesis', 'Evaporation', 'Respiration'],
      answer: 0, // Index of the correct answer in options array (Transpiration)
    },
    {
      category: 'Science',
      difficulty: 'Easy',
      question: 'What is the chemical symbol for helium?',
      options: ['He', 'H', 'Li', 'Ne'],
      answer: 0, // Index of the correct answer in options array (He)
    },
    {
      category: 'Science',
      difficulty: 'Easy',
      question: 'What is the process by which plants absorb water through their roots?',
      options: ['Photosynthesis', 'Transpiration', 'Respiration', 'Osmosis'],
      answer: 3,
    },
];