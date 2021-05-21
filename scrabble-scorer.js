// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
  word = word.toUpperCase();
  let letterPoints = "";

  for (let i = 0; i < word.length; i++) {

    for (const pointValue in oldPointStructure) {

      if (oldPointStructure[pointValue].includes(word[i])) {
        letterPoints += `Points for '${word[i]}': ${pointValue}\n`
      }

    }
  }
  return letterPoints;
}

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
  console.clear();
  // 1. modify the provided initialPrompt to ask user to enter a word

  console.log(vowelBonusScore(input.question("Let's play some Scrabble!\nEnter a word to score: ")));

  // 2. use the oldScrabbleScorer to score word
};
// Add and Organize Scoring Algorithms
// 1. define a function that takes a word as a parameter and returns a score. Each letter worth one point
let simpleScore = function(word) {
  word = word.toUpperCase();
  // this will list the scores
  let letterPoints = word.length;
  // let pointValue = 1;

  // for (let i = 0; i < word.length; i++) {
  //   letterPoints += 1
  //   }
  return letterPoints;
}

// 2.define function that takes a word as a paramater
// give a score of 3 for vowels and 1 for consonants

let vowelBonusScore = function(word) {
  word = word.toUpperCase();
  let vowels = ['A', 'E', 'I', 'O', 'U'];
  let vowelValue = 3;
  let consonantValue = 1;
  let letterPoints = 0;
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      letterPoints += vowelValue
      // `Points for '${word[i]}': ${vowelValue}\n`;
    }
    else letterPoints += consonantValue
    // `Points for '${word[i]}': ${consonantValue}\n`;
  }
  return letterPoints;
}
let scrabbleScore = function(word) {
  word = word.toLowerCase();
  //need to assign points to word and give a new sum score
  //how to give word the points from the key's value
  //
  let letterPoints = 0;

  for (let i = 0; i < word.length; i++) {
    // console.log(word[i]);
    letterPoints = letterPoints + newPointStructure[word[i]];
    // console.log(newPointStructure[word[i]]);
  }
  return letterPoints;
}

const scoringAlgorithms = [
  {
    name: "Simple Score",
    description: "Each letter is worth 1 point.",
    scoringFunction: simpleScore
  },
  {
    name: "Bonus Vowels",
    description: "Vowels are 3 pts, consonants are 1 pt.",
    scoringFunction: vowelBonusScore
  },
  {
    name: "Scrabble",
    description: "The traditional scoring algorithm.",
    scoringFunction: scrabbleScore
  }
];

function scorerPrompt() {
  word = input.question("Let's play some Scrabble!\nEnter a word to score: ");
  console.log(`Which scoring algorithm would you like to use?\n`);
  for (let i = 0; i < scoringAlgorithms.length; i++) {
    console.log(`${i} - ${scoringAlgorithms[i].name}: ${scoringAlgorithms[i].description}`)
  }
  console.log(`Score for '${word}': ${scoringAlgorithms[Number(input.question("Please select 0, 1, or 2: "))].scoringFunction(word)}`);
}
//write function to transform oldPointStructure
// i want to change the letters into keys to give values as Points
function transform(object) {
  let pointList = {};

  for (let point in oldPointStructure) {
    let pointLetters = oldPointStructure[point];

    for (let i = 0; i < pointLetters.length; i++) {
      pointList[pointLetters[i].toLowerCase()] = Number(point);
    }
  }
  return pointList;
}
let newPointStructure = transform(oldPointStructure);
// console.log(typeof(newPointStructure["A"]));
// console.log(newPointStructure);


function runProgram() {
  //  initialPrompt();
  scorerPrompt();
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  initialPrompt: initialPrompt,
  transform: transform,
  oldPointStructure: oldPointStructure,
  simpleScore: simpleScore,
  vowelBonusScore: vowelBonusScore,
  scrabbleScore: scrabbleScore,
  scoringAlgorithms: scoringAlgorithms,
  newPointStructure: newPointStructure,
  runProgram: runProgram,
  scorerPrompt: scorerPrompt
};