//Variables
var wordPool = ["Benson", "Elyse", "James", "Bruce", "Adam", "Lawrence", "Alanah", "Hitman", "Manhunter", "RoosterTeeth", "Arizona Circle"];
var win = 0;
var remainingGuesses = 15;
var guessedLetters = [];
var positions = [];
//Generate random word
window.onload = function () {

  var randomWord = wordPool[Math.floor(Math.random() * wordPool.length)];
    console.log(randomWord);

  //Change random word into dashes and display in box
  var blanks = [];
  for (var  i = 0; i < randomWord.length; i++) {
    blanks[i] = "_";
  }
  //document.getElementById("word-guess") = blanks.toString;
    document.getElementById("word-guess").innerHTML = blanks.join(" ");

  //Take in user keys, push results to proper areas:
  //document.onkeyup()

  //letters to fill in random word dashes if right or letters guessed if wrong,
  //guesses remainging decreases,

  //determine win condition, update wins if met, play interesting win thing, and reset

  //determine loss condition, play loss thing, and reset

  //reset and reset functions

  var reset = function() {
    remainingGuesses = 15;
    lettersGuessed = [];
    resetRandomWord ();
  };

  var resetRandomWord = function () {
    randomWord = wordPool[Math.floor(Math.random() * wordPool.length)];
    console.log(randomWord)
  };

};