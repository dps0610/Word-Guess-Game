//Variables
var wordPool = ["Benson", "Elyse", "James", "Bruce", "Adam", "Lawrence", "Alanah", "Hitman", "Manhunter", "RoosterTeeth", "Arizona Circle"]
var win = 0
var remainingGuesses = 15
var guessedLetters = []
var randomWord = null

//Generate random word
randomWord = wordPool[Math.floor(Math.random() * wordPool.length)];
  console.log(randomWord)

//Change random word into dashes and display in box


//Take in user keys, push results to proper areas:
//letters to fill in random word dashes if right or letters guessed if wrong,
//guesses remainging decreases,
//determine win condition, update wins if met, play interesting win thing, and reset
//determine loss condition, play loss thing, and reset

//reset and reset functions

var reset = function() {
    remainingGuesses = 15;
    lettersGuessed = [];
    resetRandomWord ();
    
}

var resetRandomWord = function () {
  randomWord = wordPool[Math.floor(Math.random() * wordPool.length)];
  console.log(randomWord)
}