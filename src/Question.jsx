const questions = [
  /*  1 */ {
    question: "What is the capital city of France?",
    options: ["Paris", "Berlin", "Madrid", "Rome"],
    answer: "Paris",
  },
  /*  2 */ {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
  },
  /*  3 */ {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: [
      "William Shakespeare",
      "Leo Tolstoy",
      "Oscar Wilde",
      "Charles Dickens",
    ],
    answer: "William Shakespeare",
  },
  /*  4 */ {
    question: "What is H2O commonly known as?",
    options: ["Hydrogen", "Water", "Salt", "Oxygen"],
    answer: "Water",
  },
  /*  5 */ {
    question: "Which ocean is the largest?",
    options: ["Indian", "Atlantic", "Pacific", "Arctic"],
    answer: "Pacific",
  },
  /*  6 */ {
    question: "What does CPU stand for in computing?",
    options: [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Peripheral Unit",
      "Central Power Utility",
    ],
    answer: "Central Processing Unit",
  },
  /*  7 */ {
    question: "Which element has the chemical symbol ‘O’?",
    options: ["Oxygen", "Gold", "Iron", "Silver"],
    answer: "Oxygen",
  },
  /*  8 */ {
    question: "How many continents are there on Earth?",
    options: ["5", "6", "7", "8"],
    answer: "7",
  },
  /*  9 */ {
    question: "Who painted the Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Claude Monet",
    ],
    answer: "Leonardo da Vinci",
  },
  /* 10 */ {
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    answer: "Carbon Dioxide",
  },
  /* 11 */ {
    question: "What is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    answer: "2",
  },
  /* 12 */ {
    question: "In which year did World War II end?",
    options: ["1942", "1945", "1948", "1950"],
    answer: "1945",
  },
  /* 13 */ {
    question: "Which country gifted the Statue of Liberty to the USA?",
    options: ["France", "Italy", "Germany", "Spain"],
    answer: "France",
  },
  /* 14 */ {
    question: "What is the capital of Nigeria?",
    options: ["Lagos", "Abuja", "Kano", "Port Harcourt"],
    answer: "Abuja",
  },
  /* 15 */ {
    question: "Which instrument measures atmospheric pressure?",
    options: ["Barometer", "Thermometer", "Hygrometer", "Altimeter"],
    answer: "Barometer",
  },
  /* 16 */ {
    question: "How many players are on a soccer team on the field?",
    options: ["9", "10", "11", "12"],
    answer: "11",
  },
  /* 17 */ {
    question: "Which organ pumps blood through the human body?",
    options: ["Lungs", "Heart", "Liver", "Kidneys"],
    answer: "Heart",
  },
  /* 18 */ {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Gd", "Go"],
    answer: "Au",
  },
  /* 19 */ {
    question: "Which planet is closest to the Sun?",
    options: ["Venus", "Mercury", "Mars", "Earth"],
    answer: "Mercury",
  },
  /* 20 */ {
    question: "What is the largest mammal on Earth?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    answer: "Blue Whale",
  },
  /* 21 */ {
    question: "Who invented the telephone?",
    options: [
      "Thomas Edison",
      "Alexander Graham Bell",
      "Nikola Tesla",
      "Guglielmo Marconi",
    ],
    answer: "Alexander Graham Bell",
  },
  /* 22 */ {
    question: "Which language is primarily spoken in Brazil?",
    options: ["Spanish", "Portuguese", "French", "English"],
    answer: "Portuguese",
  },
  /* 23 */ {
    question: "How many bones are in the adult human body?",
    options: ["196", "206", "216", "226"],
    answer: "206",
  },
  /* 24 */ {
    question: "What is the tallest mountain in the world?",
    options: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
    answer: "Mount Everest",
  },
  /* 25 */ {
    question: "Who is the author of '1984'?",
    options: [
      "George Orwell",
      "Aldous Huxley",
      "Ray Bradbury",
      "Kurt Vonnegut",
    ],
    answer: "George Orwell",
  },
  /* 26 */ {
    question: "Which city is known as the Big Apple?",
    options: ["Los Angeles", "Chicago", "New York City", "Miami"],
    answer: "New York City",
  },
  /* 27 */ {
    question: "Which blood type is the universal donor?",
    options: ["O Negative", "O Positive", "AB Positive", "A Negative"],
    answer: "O Negative",
  },
  /* 28 */ {
    question: "What process allows plants to make food from sunlight?",
    options: ["Respiration", "Photosynthesis", "Transpiration", "Osmosis"],
    answer: "Photosynthesis",
  },
  /* 29 */ {
    question: "What is the freezing point of water in Celsius?",
    options: ["0 °C", "32 °C", "-10 °C", "100 °C"],
    answer: "0 °C",
  },
  /* 30 */ {
    question: "Which desert is the largest in the world?",
    options: ["Sahara", "Gobi", "Kalahari", "Arabian"],
    answer: "Sahara",
  },
  /* 31 */ {
    question: "How many colors are there in a rainbow?",
    options: ["5", "6", "7", "8"],
    answer: "7",
  },
  /* 32 */ {
    question: "Which continent is the Amazon rainforest located on?",
    options: ["Africa", "South America", "Asia", "Australia"],
    answer: "South America",
  },
  /* 33 */ {
    question: "What is the chemical formula for table salt?",
    options: ["NaCl", "KCl", "MgSO₄", "CaCO₃"],
    answer: "NaCl",
  },
  /* 34 */ {
    question: "Who discovered penicillin?",
    options: [
      "Louis Pasteur",
      "Alexander Fleming",
      "Marie Curie",
      "Gregor Mendel",
    ],
    answer: "Alexander Fleming",
  },
  /* 35 */ {
    question: "Which animal is known as the 'Ship of the Desert'?",
    options: ["Camel", "Horse", "Llama", "Donkey"],
    answer: "Camel",
  },
  /* 36 */ {
    question: "What is the main language spoken in Canada apart from English?",
    options: ["Spanish", "French", "German", "Italian"],
    answer: "French",
  },
  /* 37 */ {
    question: "Who painted 'The Starry Night'?",
    options: [
      "Pablo Picasso",
      "Vincent van Gogh",
      "Claude Monet",
      "Salvador Dalí",
    ],
    answer: "Vincent van Gogh",
  },
  /* 38 */ {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    answer: "Canberra",
  },
  /* 39 */ {
    question: "Which metal is liquid at room temperature?",
    options: ["Mercury", "Gallium", "Sodium", "Aluminium"],
    answer: "Mercury",
  },
  /* 40 */ {
    question: "Which scientist proposed the theory of relativity?",
    options: [
      "Isaac Newton",
      "Albert Einstein",
      "Nikola Tesla",
      "Galileo Galilei",
    ],
    answer: "Albert Einstein",
  },
  /* 41 */ {
    question: "In which sport is the term 'love' used?",
    options: ["Football", "Basketball", "Cricket", "Tennis"],
    answer: "Tennis",
  },
  /* 42 */ {
    question: "Which river is the longest in the world?",
    options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
    answer: "Nile",
  },
  /* 43 */ {
    question: "Who was the first person to walk on the Moon?",
    options: [
      "Yuri Gagarin",
      "Neil Armstrong",
      "Buzz Aldrin",
      "Michael Collins",
    ],
    answer: "Neil Armstrong",
  },
  /* 44 */ {
    question: "What does ATM stand for?",
    options: [
      "Automated Teller Machine",
      "Automatic Transfer Machine",
      "Any Time Money",
      "Advanced Transaction Machine",
    ],
    answer: "Automated Teller Machine",
  },
  /* 45 */ {
    question: "Which vitamin is produced when a person is exposed to sunlight?",
    options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
    answer: "Vitamin D",
  },
  /* 46 */ {
    question: "Which city hosted the 2016 Summer Olympics?",
    options: ["Beijing", "London", "Rio de Janeiro", "Tokyo"],
    answer: "Rio de Janeiro",
  },
  /* 47 */ {
    question: "Which continent contains the most countries?",
    options: ["Asia", "Africa", "Europe", "South America"],
    answer: "Africa",
  },
  /* 48 */ {
    question: "Who is known as the 'Father of Computers'?",
    options: [
      "Alan Turing",
      "Charles Babbage",
      "Tim Berners-Lee",
      "Bill Gates",
    ],
    answer: "Charles Babbage",
  },
  /* 49 */ {
    question: "Which gas is most abundant in the Earth's atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
    answer: "Nitrogen",
  },
  /* 50 */ {
    question: "What is the square root of 81?",
    options: ["7", "8", "9", "10"],
    answer: "9",
  },
  /* 51 */ {
    question:
      "Which Shakespeare play features the characters Rosencrantz and Guildenstern?",
    options: ["Hamlet", "Macbeth", "Othello", "King Lear"],
    answer: "Hamlet",
  },
  /* 52 */ {
    question: "Which country is the origin of the car brand BMW?",
    options: ["France", "Germany", "Italy", "United States"],
    answer: "Germany",
  },
  /* 53 */ {
    question: "What is the smallest planet in our solar system?",
    options: ["Pluto", "Mercury", "Mars", "Venus"],
    answer: "Mercury",
  },
  /* 54 */ {
    question: "What is the boiling point of water at sea level in Celsius?",
    options: ["90 °C", "95 °C", "100 °C", "105 °C"],
    answer: "100 °C",
  },
  /* 55 */ {
    question: "Which author created Sherlock Holmes?",
    options: [
      "Agatha Christie",
      "Arthur Conan Doyle",
      "Edgar Allan Poe",
      "Dorothy L. Sayers",
    ],
    answer: "Arthur Conan Doyle",
  },
  /* 56 */ {
    question: "Which African country is the most populous?",
    options: ["Egypt", "Ethiopia", "Nigeria", "South Africa"],
    answer: "Nigeria",
  },
  /* 57 */ {
    question: "Which is the longest bone in the human body?",
    options: ["Femur", "Tibia", "Fibula", "Humerus"],
    answer: "Femur",
  },
  /* 58 */ {
    question: "In which city can you find the Colosseum?",
    options: ["Athens", "Rome", "Istanbul", "Paris"],
    answer: "Rome",
  },
  /* 59 */ {
    question: "Which gas is released by plants during photosynthesis?",
    options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    answer: "Oxygen",
  },
  /* 60 */ {
    question: "What is the hardest natural substance known?",
    options: ["Quartz", "Diamond", "Gold", "Corundum"],
    answer: "Diamond",
  },
  /* 61 */ {
    question: "Which continent has the smallest land area?",
    options: ["Antarctica", "Europe", "Australia", "South America"],
    answer: "Australia",
  },
  /* 62 */ {
    question: "Which chess piece can move any number of squares diagonally?",
    options: ["Bishop", "Rook", "Knight", "Queen"],
    answer: "Bishop",
  },
  /* 63 */ {
    question: "What is the capital of Japan?",
    options: ["Tokyo", "Osaka", "Kyoto", "Nagoya"],
    answer: "Tokyo",
  },
  /* 64 */ {
    question: "Who discovered gravity by observing a falling apple?",
    options: [
      "Albert Einstein",
      "Galileo Galilei",
      "Isaac Newton",
      "Johannes Kepler",
    ],
    answer: "Isaac Newton",
  },
  /* 65 */ {
    question: "Which natural satellite orbits the Earth?",
    options: ["Phobos", "Deimos", "The Moon", "Europa"],
    answer: "The Moon",
  },
  /* 66 */ {
    question: "Which continent is home to the Amazon River?",
    options: ["Africa", "South America", "Asia", "North America"],
    answer: "South America",
  },
  /* 67 */ {
    question: "What is the currency of the United Kingdom?",
    options: ["Euro", "Dollar", "Pound Sterling", "Yen"],
    answer: "Pound Sterling",
  },
  /* 68 */ {
    question: "In what year did the Titanic sink?",
    options: ["1904", "1912", "1920", "1931"],
    answer: "1912",
  },
  /* 69 */ {
    question: "Which country is famous for the Eiffel Tower?",
    options: ["Italy", "Spain", "France", "Belgium"],
    answer: "France",
  },
  /* 70 */ {
    question: "Which vitamin is known as ascorbic acid?",
    options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
    answer: "Vitamin C",
  },
  /* 71 */ {
    question: "Which planet has a prominent ring system?",
    options: ["Saturn", "Mars", "Jupiter", "Uranus"],
    answer: "Saturn",
  },
  /* 72 */ {
    question: "Which blood vessel carries blood away from the heart?",
    options: ["Vein", "Artery", "Capillary", "Venule"],
    answer: "Artery",
  },
  /* 73 */ {
    question: "Who is the author of 'Pride and Prejudice'?",
    options: [
      "Emily Brontë",
      "Jane Austen",
      "Mary Shelley",
      "Charlotte Brontë",
    ],
    answer: "Jane Austen",
  },
  /* 74 */ {
    question: "What is the process of cell division in body cells called?",
    options: ["Mitosis", "Meiosis", "Fusion", "Fission"],
    answer: "Mitosis",
  },
  /* 75 */ {
    question: "Which continent does the River Nile flow through?",
    options: ["Asia", "Africa", "Europe", "South America"],
    answer: "Africa",
  },
  /* 76 */ {
    question: "Who painted the ceiling of the Sistine Chapel?",
    options: ["Raphael", "Michelangelo", "Donatello", "Caravaggio"],
    answer: "Michelangelo",
  },
  /* 77 */ {
    question: "Which island country lies to the southeast of India?",
    options: ["Maldives", "Sri Lanka", "Indonesia", "Madagascar"],
    answer: "Sri Lanka",
  },
  /* 78 */ {
    question: "Which organ in the human body produces insulin?",
    options: ["Liver", "Pancreas", "Kidney", "Stomach"],
    answer: "Pancreas",
  },
  /* 79 */ {
    question: "Which is the deepest oceanic trench in the world?",
    options: [
      "Tonga Trench",
      "Puerto Rico Trench",
      "Mariana Trench",
      "Java Trench",
    ],
    answer: "Mariana Trench",
  },
  /* 80 */ {
    question: "Which instrument has keys, pedals, and strings?",
    options: ["Guitar", "Violin", "Piano", "Saxophone"],
    answer: "Piano",
  },
  /* 81 */ {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["Japan", "China", "Thailand", "South Korea"],
    answer: "Japan",
  },
  /* 82 */ {
    question: "Which layer of Earth lies directly below the crust?",
    options: ["Inner Core", "Outer Core", "Mantle", "Lithosphere"],
    answer: "Mantle",
  },
  /* 83 */ {
    question: "Which branch of mathematics deals with shapes and space?",
    options: ["Algebra", "Geometry", "Calculus", "Arithmetic"],
    answer: "Geometry",
  },
  /* 84 */ {
    question: "Which country hosted the 2018 FIFA World Cup?",
    options: ["Germany", "Brazil", "Russia", "Qatar"],
    answer: "Russia",
  },
  /* 85 */ {
    question: "Which famous structure is located in Agra, India?",
    options: ["Qutub Minar", "Taj Mahal", "Red Fort", "Charminar"],
    answer: "Taj Mahal",
  },
  /* 86 */ {
    question: "Which gas is commonly used to inflate balloons?",
    options: ["Helium", "Hydrogen", "Oxygen", "Nitrogen"],
    answer: "Helium",
  },
  /* 87 */ {
    question: "What is the longest bone in the human arm?",
    options: ["Ulna", "Radius", "Humerus", "Scapula"],
    answer: "Humerus",
  },
  /* 88 */ {
    question: "Which U.S. state is known as the Sunshine State?",
    options: ["California", "Florida", "Texas", "Arizona"],
    answer: "Florida",
  },
  /* 89 */ {
    question: "Which famous scientist introduced the three laws of motion?",
    options: [
      "Galileo Galilei",
      "Isaac Newton",
      "Albert Einstein",
      "Johannes Kepler",
    ],
    answer: "Isaac Newton",
  },
  /* 90 */ {
    question: "Which part of the plant conducts photosynthesis?",
    options: ["Root", "Stem", "Leaf", "Flower"],
    answer: "Leaf",
  },
  /* 91 */ {
    question: "Which Italian city is famous for its canals?",
    options: ["Rome", "Venice", "Milan", "Florence"],
    answer: "Venice",
  },
  /* 92 */ {
    question: "Which planet has the Great Red Spot?",
    options: ["Mars", "Jupiter", "Saturn", "Neptune"],
    answer: "Jupiter",
  },
  /* 93 */ {
    question: "Which continent has the largest landmass?",
    options: ["Africa", "Asia", "Europe", "North America"],
    answer: "Asia",
  },
  /* 94 */ {
    question: "What is the scientific study of weather called?",
    options: ["Geology", "Meteorology", "Astronomy", "Oceanography"],
    answer: "Meteorology",
  },
  /* 95 */ {
    question: "Which is the only mammal capable of true flight?",
    options: ["Flying Squirrel", "Bat", "Colugo", "Sugar Glider"],
    answer: "Bat",
  },
  /* 96 */ {
    question: "Which Greek god is the ruler of the seas?",
    options: ["Zeus", "Hades", "Poseidon", "Apollo"],
    answer: "Poseidon",
  },
  /* 97 */ {
    question: "Which city is known as the City of Love?",
    options: ["Venice", "Paris", "Barcelona", "Vienna"],
    answer: "Paris",
  },
  /* 98 */ {
    question: "Which metal is most abundant in the Earth's crust?",
    options: ["Iron", "Aluminium", "Copper", "Gold"],
    answer: "Aluminium",
  },
  /* 99 */ {
    question: "In which country did the Olympic Games originate?",
    options: ["Italy", "Greece", "France", "United Kingdom"],
    answer: "Greece",
  },
  /*100 */ {
    question: "Which blood cells help in clotting of blood?",
    options: ["Red Blood Cells", "White Blood Cells", "Platelets", "Plasma"],
    answer: "Platelets",
  },
];

export default questions;
