const questions = [
    { 
        category: 'Movies',
        difficulty: 'Medium',
        question: 'Who directed the movie "Inception" (2010)?',
        options: ['Christopher Nolan', 'Quentin Tarantino', 'Steven Spielberg', 'Martin Scorsese'],
        answer: 0, // Index of the correct answer in options array
      },
      {
        category: 'Movies',
     difficulty: 'Easy',
     question: 'Which movie won the Academy Award for Best Picture in 2019?',
     options: ['La La Land', 'The Shape of Water', 'Green Book', 'Moonlight'],
     answer: 2,
      },
      {
        category: 'Movies',
        difficulty: 'Easy',
        question: 'Which actor played the lead role in the movie "The Godfather" (1972)?',
        options: ['Al Pacino', 'Marlon Brando', 'Robert De Niro', 'Jack Nicholson'],
        answer: 1 // Index of the correct answer in options array (Marlon Brando)
    },
    {
        category: 'Movies',
        difficulty: 'Easy',
        question: 'In the film "Forrest Gump" (1994), what is Forrest\'s favorite saying?',
        options: [
            '"Life is like a box of chocolates, you never know what you\'re gonna get."',
            '"Just keep swimming."',
            '"Here\'s looking at you, kid."',
            '"May the Force be with you."'
        ],
        answer: 0 // Index of the correct answer in options array ("Life is like a box of chocolates, you never know what you're gonna get.")
    },
    {
        category: 'Movies',
        difficulty: 'Easy',
        question: 'Who played the iconic character of Neo in "The Matrix" (1999)?',
        options: ['Keanu Reeves', 'Tom Cruise', 'Will Smith', 'Brad Pitt'],
        answer: 0 // Index of the correct answer in options array (Keanu Reeves)
    },
    {
        category: 'Movies',
        difficulty: 'Easy',
        question: 'Which movie features a talking pig named Babe?',
        options: ['Charlotte\'s Web', 'Babe', 'Animal Farm', 'The Secret Life of Pets'],
        answer: 1 // Index of the correct answer in options array (Babe)
    },
    {
        category: 'Movies',
        difficulty: 'Easy',
        question: 'Who directed the movie "Jurassic Park" (1993)?',
        options: ['James Cameron', 'Steven Spielberg', 'George Lucas', 'Ridley Scott'],
        answer: 1 // Index of the correct answer in options array (Steven Spielberg)
    },
    {
        category: 'Movies',
        difficulty: 'Easy',
        question: 'Which Disney movie features the song "Let It Go"?',
        options: ['Aladdin', 'Beauty and the Beast', 'Frozen', 'The Lion King'],
        answer: 2 // Index of the correct answer in options array (Frozen)
    },
    {
        category: 'Movies',
        difficulty: 'Easy',
        question: 'Who played the role of Jack Dawson in the movie "Titanic" (1997)?',
        options: ['Leonardo DiCaprio', 'Tom Hanks', 'Johnny Depp', 'Matt Damon'],
        answer: 0 // Index of the correct answer in options array (Leonardo DiCaprio)
    },
    {
        category: 'Movies',
        difficulty: 'Easy',
        question: 'Which actor portrayed the character of Iron Man in the Marvel Cinematic Universe?',
        options: ['Chris Evans', 'Chris Hemsworth', 'Robert Downey Jr.', 'Mark Ruffalo'],
        answer: 2 // Index of the correct answer in options array (Robert Downey Jr.)
    },
    {
        category: 'Movies',
        difficulty: 'Easy',
        question: 'Who directed the movie "Avatar" (2009)?',
        options: ['James Cameron', 'Peter Jackson', 'Christopher Nolan', 'George Lucas'],
        answer: 0 // Index of the correct answer in options array (James Cameron)
    },
    {
        category: 'Movies',
        difficulty: 'Easy',
        question: 'Which movie features the character of Harry Potter?',
        options: ['The Lord of the Rings', 'Harry Potter and the Sorcerer\'s Stone', 'The Hunger Games', 'Twilight'],
        answer: 1 // Index of the correct answer in options array (Harry Potter and the Sorcerer's Stone)
    },
    {
        category: 'Movies',
        difficulty: 'Easy',
        question: 'What is the name of the lion in Disney\'s "The Lion King" (1994)?',
        options: ['Simba', 'Mufasa', 'Scar', 'Nala'],
        answer: 0 // Index of the correct answer in options array (Simba)
    },
    {
        category: 'Movies',
        difficulty: 'Easy',
        question: 'Which movie features a shark named Bruce?',
        options: ['Jaws', 'Finding Nemo', 'Shark Tale', 'Deep Blue Sea'],
        answer: 1 // Index of the correct answer in options array (Finding Nemo)
    },
    {
        category: 'Movies',
        difficulty: 'Easy',
        question: 'Who played the role of Hermione Granger in the "Harry Potter" film series?',
        options: ['Emma Watson', 'Daniel Radcliffe', 'Rupert Grint', 'Bonnie Wright'],
        answer: 0 // Index of the correct answer in options array (Emma Watson)
    },
    {
        category: 'Movies',
        difficulty: 'Easy',
        question: 'Which movie features a character named "Ferris Bueller" skipping school?',
        options: ['The Breakfast Club', 'Ferris Bueller\'s Day Off', 'Sixteen Candles', 'Pretty in Pink'],
        answer: 1 // Index of the correct answer in options array (Ferris Bueller's Day Off)
    },
    {
        category: 'Movies',
        difficulty: 'Easy',
        question: 'Who directed the movie "The Shawshank Redemption" (1994)?',
        options: ['David Fincher', 'Quentin Tarantino', 'Frank Darabont', 'Steven Spielberg'],
        answer: 2 // Index of the correct answer in options array (Frank Darabont)
    },
    {
        category: 'Movies',
        difficulty: 'Easy',
        question: 'Which movie features a character named "E.T."?',
        options: ['Close Encounters of the Third Kind', 'Interstellar', 'E.T. the Extra-Terrestrial', 'Contact'],
        answer: 2 // Index of the correct answer in options array (E.T. the Extra-Terrestrial)
    },
    {
        category: 'Movies',
        difficulty: 'Easy',
        question: 'Who directed the movie "The Dark Knight" (2008)?',
        options: ['Christopher Nolan', 'Tim Burton', 'Zack Snyder', 'Joss Whedon'],
        answer: 0 // Index of the correct answer in options array (Christopher Nolan)
    },
    {
        category: 'Movies',
        difficulty: 'Easy',
        question: 'Which movie features the character of Captain Jack Sparrow?',
        options: ['Pirates of the Caribbean: The Curse of the Black Pearl', 'The Princess Bride', 'Hook', 'The Goonies'],
        answer: 0 // Index of the correct answer in options array (Pirates of the Caribbean: The Curse of the Black Pearl)
    },
];