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