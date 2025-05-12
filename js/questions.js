// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Fill in the blank with correct word. They _________ good friends",
   
    answer: "are",
    options: [
      "is",
      "am",
      "are",
      "was"
    ]
  },
    {
    numb: 2,
    question: "Fill in the blank with present progressive tense of the verb. The train __________ through the tunnel",
    answer: "is passing",
    options: [
      "passed",
      "is passing",
      "had passed", 
      "was passing"
    ]
  },
    {
    numb: 3,
    question: "Fill in the blank with proper interrogative adjective. ___________ are you going?",
    
    answer: "where",
    options: [
      "where",
      "who",
      "which",
      "what"
    ]
  },
    {
    numb: 4,
    question: "Fill in the blank with proper pronoun. I made this cake ___________",
    answer: "myself",
    options: [
      "myself",
      "yourself",
      "himself",
      "itself"
    ]
  },
    {
    numb: 5,
    question: "Fill in the blank with proper pronoun. She made this cake ___________",
    answer: "herself",
    options: [
      "Myself",
      "himself",
      "herself",
      "itself"
    ]
  },
  {
    numb: 6,
    question: "Fill in the blank with proper reflexive pronoun. She has hurt___________",
    answer: "herself",
    options: [
      "myself",
      "herself",
      "himself",
      "itself"
    ]
  },
  {
    numb: 7,
    question: "Fill in the blank with suitable adjective for the given sentence The little girl s…… eyes revealed her mischief",
    answer: "twinkling",
    options: [
      "chubby",
      "weak",
      "shor sighted",
      "twinkling"
    ]
  },
  {
    numb: 8,
    question: "Fill in the blank with suitable place preposition. My house is ___________ the third floor",

    answer: "on",
    options: [
      "at",
      "in",
      "on",
      "under"
    ]
  },
  {
    numb: 9,
    question: "Fill in the correct question word. _______________ is the speaker at the function?",

    answer: "who",
    options: [
      "what",
      "when",
      "why",
      "who"
    ]
  },
 {
    numb: 10,
    question: "Low level language is also called------",

    answer: "machine language",
    options: [
      "source code",
      "middle ware",
      "machine language",
      "assembly language"
    ]
  },
     {
    numb: 11,
    question: "Pronunciation refers to___________",

    answer: "Production of sound",
    options: [
      "dipthong",
      "consonant",
      "punctuation",
      "Production of sound"
    ]
  },
     {
    numb: 12,
    question: "Re-arrange the following set of words into meaningful sentence. teacher / school / worked / she / a / as",

    answer: "She worked as a school teacher",
    options: [
      "School worked a she teacher",
      "She worked as a school teacher",
      "She teacher worked as a school",
      "worked she as a school teacher"
    ]
  },
     {
    numb: 13,
    question: "Rise and fall of pitch of voice is called.....",

    answer: "intonation",
    options: [
      "vowel",
      "consonant",
      "intonation",
      "pronunciation"
    ]
  },
     {
    numb: 14,
    question: "Thew word that express a sudden and storng feeling is called..... ",

    answer: "know your self",
    options: [
      "punctuation",
      "interjection",
      "conjuction",
      "apostrophe"
    ]
  },
     {
    numb: 15,
    question: "When you greet higher official’s such as Teacher, Instructor or Supervisor, you should use ___________",

    answer: "Good morning",
    options: [
      "Good morning",
      "Hello",
      "Hey",
      "Hi"
    ]
  },

     {
    numb: 16,
    question: "Which is a silent letter in the word ANSWER?",

    answer: "W",
    options: [
      "R",
      "E",
      "S",
      "W"
    ]
  },
     {
    numb: 17,
    question: "Which one is a Do s of discussion etiquettes?",

    answer: "listen to others",
    options: [
      "loose your temper",
      "listen to others",
      "Talk about irrelevant details",
      "use impolite or rude language"
    ]
  },
     {
    numb: 18,
    question: "Which one is a Dont of discussion etiquette?",

    answer: "Argue unnecessary",
    options: [
      "Be open minded",
      "use moderate tone",
      "listen to others",
      "Argue unnecessary"
    ]
  },
     {
    numb: 19,
    question: "Which one is a brain of computer?",

    answer: "CPU",
    options: [
      "Keyboard",
      "CPU",
      "Monitor",
      "Hard disk"
    ]
  },
     {
    numb: 20,
    question: "Which one is an exclamatory sentence?",

    answer: "What ia beutiful house it is!",
    options: [
      "What ia beutiful house it is!",
      "It is beautiful house",
      "Is it beautiful house?",
      "Your house is beautiful"
    ]
  },
     {
    numb: 21,
    question: "Which one is in active voice?",

    answer: "Ram has passed the exam",
    options: [
      "Ram has passed the exam",
      "The ball was caught by him",
      "The book was being read by her",
      "We were driven home by dad."
    ]
  },
     {
    numb: 22,
    question: "Which one is in passive voice?",

    answer: "Her birthday was celebrated by us",
    options: [
      "Mohan is painting a house.",
      "she was reading a book",
      "Her birthday was celebrated by us",
      "I have seen that movie"
    ]
  },
     {
    numb: 23,
    question: "Which one is NOT a conjuction?",

    answer: "On",
    options: [
      "And",
      "Or",
      "But",
      "On"
    ]

         
  },
     {
    numb: 24,
    question: "Which one is NOT a benefit of the role playing",

    answer: "Develops boredom",
    options: [
      "Builds confidence",
      "Develops listening skill",
      "Develops creative problem solving skill",
      "Develops boredom"
    ]
  },
     {
    numb: 25,
    question: "Which one is NOT a vowel?",

    answer: "f",
    options: [
      "a",
      "e",
      "f",
      "i"
    ]
  },
 
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];
