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
    question: "____ is a brief statement about purpose and principles of constitution ",

    answer: "The preamble",
    options: [
      "Syllabus",
      "Module",
      "The preamble",
      "Unit"
    ]
  },
  {
    numb: 9,
    question: "Identify the improper term...",

    answer: "green pollution",
    options: [
      "green pollution",
      "water pollution",
      "air pollution",
      "sound pollution"
    ]
  },
 {
    numb: 10,
    question: "People from all religions or no religions are treated equally means.... ",

    answer: "Secular Country",
    options: [
      "democratic",
      "religious",
      "Non secular",
      "Secular Country"
    ]
  },
     {
    numb: 11,
    question: "........... is major changes takes place in manufacturing",

    answer: "Industry Revolution",
    options: [
      "Green Revolution",
      "Industry Revolution",
      "Water revolution",
      "Food revolution"
    ]
  },
     {
    numb: 12,
    question: "1st industrial revolution started in?",

    answer: "18th century",
    options: [
      "18th century",
      "19th century",
      "20th century",
      "21st century"
    ]
  },
     {
    numb: 13,
    question: "Hard Skill....",

    answer: "60 WPM typing speed",
    options: [
      "quick learner",
      "time management",
      "60 WPM typing speed",
      "spoken English"
    ]
  },
     {
    numb: 14,
    question: "To grow yourself you must............. ",

    answer: "know your self",
    options: [
      "know your office",
      "know your self",
      "know your institute",
      "know your country"
    ]
  },
     {
    numb: 15,
    question: "Time management....",

    answer: "Complete your task on time",
    options: [
      "Complete your task on time",
      "managing time",
      "hard skill",
      "problem solving"
    ]
  },

     {
    numb: 16,
    question: "Where does the pinned applications stayed in Windows OS? ",

    answer: "Taskbar",
    options: [
      "Desktop",
      "Notification Area",
      "Start Button",
      "Taskbar"
    ]
  },
     {
    numb: 17,
    question: "What is the extension of notepad file? ",

    answer: ".txt",
    options: [
      ".fil",
      ".dll",
      ".doc",
      ".txt"
    ]
  },
     {
    numb: 18,
    question: "Name the tool in control panel which is used to adjust your computer setting with voice command? ",

    answer: "Ease of access",
    options: [
      "Ease of access",
      "System and Security",
      "Appearance and personalization",
      "Hardware and sound"
    ]
  },
     {
    numb: 19,
    question: "Name the shortcut key used to open start menu? ",

    answer: "Windows Logo",
    options: [
      "Windows Logo",
      "Ctrl",
      "Shift",
      "Alt"
    ]
  },
     {
    numb: 20,
    question: "Which type of device is a printer? ",

    answer: "Output Device",
    options: [
      "Input device",
      "Output Device",
      "Processing Device",
      "Calcuating Device"
    ]
  },
     {
    numb: 21,
    question: "What is the function of operating system? ",

    answer: "Process and memory management",
    options: [
      "Word processing",
      "Calculation",
      "Process and memory management",
      "Drawing Pictures"
    ]
  },
     {
    numb: 22,
    question: "Name the ICON in which deleted files and folder are found",

    answer: "Recycle Bin",
    options: [
      "My Computer",
      "Recycle Bin",
      "Microsoft Edge",
      "Google Chrome"
    ]
  },
     {
    numb: 23,
    question: "Name the tool in control panel which we can change the system date?",

    answer: "Date and Time",
    options: [
      "User Account",
      "System",
      "Date and Time",
      "Fonts"
    ]

         
  },
     {
    numb: 24,
    question: "Fill in the blank with correct future tense of verb. We ___________ to the zoo after Breakfast  ",

    answer: "will go",
    options: [
      "went",
      "are going",
      "had gone",
      "will go"
    ]
  },
     {
    numb: 25,
    question: "Which type of device is a scanner? ",

    answer: "Input device",
    options: [
      "Processing Device",
      "Internal Device",
      "Output Device",
      "Input device"
    ]
  },
  {
    numb: 26,
    question: "A Resume shoudl be____ ",

    answer: "Short and Precise",
    options: [
      "Short and Precise",
      "Fancy and Colourful",
      "Having long and detailed information",
      "Having acronyms and abbreviations"
    ]
  },  
     {
    numb: 27,
    question: "A written description of duties and responsibilities to be carried out in a job is called __________",

    answer: "job description",
    options: [
      "CV",
      "job description",
      "resume",
      "job applications"
    ]
  },  
      {
    numb: 28,
    question: "After receiving interview call, what is the next step?",

    answer: "Appear at interview",
    options: [
      "Send application letter",
      "Prepare the resume",
      "Appear at interview",
      "Send Resume"
    ]
  },  

     {
    numb: 29,
    question: "Choose suitable wh word for the given sentence. ___________ animal do you like?",

    answer: "Which",
    options: [
      "Which",
      "Why",
      "Where",
      "When"
    ]
  },  
     {
    numb: 30,
    question: "Choose the correct punctuation mark after the word Rohan in the given sentence. Rohan David and Ram are playing hide and seek",

    answer: "Comma (,)",
    options: [
      "Comma (,)",
      "Period (_)",
      "Slash (/)",
      "Hyphen (-)"
    ]
  },  
 {
    numb: 31,
    question: "Choose the correct response for the given question. How have you been?",

    answer: "Very well, And you?",
    options: [
      "Very well, And you?",
      "Thank you_ And you?",
      "Same to you",
      "On vacation_ And you?"
    ]
  },  
     {
    numb: 32,
    question: "Choose the correct response of the given question. When did the accident happen?",

    answer: "At 10:30 last night",
    options: [
      "in the hotel",
      "during travelling",
      "At 10:30 last night",
      "On the table"
    ]
  },  
     {
    numb: 33,
    question: "Choose the correct tense of the verb. I __________ music when I was child",

    answer: "had learnt",
    options: [
      "learn",
      "am learning",
      "will learn",
      "had learnt"
    ]
  },  
     {
    numb: 34,
    question: "Curriculum vitae is also known as ___________ .",

    answer: "resume",
    options: [
      "circular",
      "resume",
      "job application form",
      "leave application"
    ]
  },  
        {
    numb: 35,
    question: "Fill in the blank with comparative adjective. Your pencil is __________ than mine",

    answer: "sharper",
    options: [
      "sharp",
      "sharper",
      "blunt",
      "thick"
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
