// store series List
var seriesList = [
  "You",
  "Suites",
  "Stranger Things",
  "Orange Is the New Black",
  "Narcos",
  "House of Cards",
  "Black Mirror",
  "The Crown"
];
//convert seriest to lowercase and remove space between words
var seriesList = String.prototype.toLowerCase.apply(seriesList).split(",");
var seriesList = seriesList.map(function(item) {
  return item.replace(/\s+/g, "");
});
//console.log(seriesList);
//stores selected word
var selectedWord = "";
//stores letters in word
var lettersInWord = [];
//stores number of blanks in word
var blanks = 0;
//stores Blanks and correct guesses
var blanksAndSuccesses = [];
//store Wrong guesses
var wrongLetters = [];
//Counters
var winCount = 0;
var loseCount = 0;
var guessesLeft = 9;
var rightGuessCounter = 0;
//Create Audio element
var correctSound = document.createElement("audio");
var incorrectSound = document.createElement("audio");
//store sounds for correct and wrong guesses
correctSound.setAttribute("src", "assets/sounds/Correct-answer.mp3");
incorrectSound.setAttribute(
  "src",
  "assets/sounds/Wrong-answer-sound-effect.mp3"
);
var doubleWord = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

// rest FUNCTIONS
function reset() {
  //Chooses word randombly from the seriesList and store in selectedWord
  selectedWord = seriesList[Math.floor(Math.random() * seriesList.length)];
  //console.log(selectedWord);
  //Split the selected word into individual letters
  lettersInWord = selectedWord.split("");
  //generate the number of blanks
  blanks = lettersInWord.length;

  //RESET all counters
  letterGuessed = 0;
  rightGuessCounter = 0;
  guessesLeft = 9;
  wrongLetters = [];
  blanksAndSuccesses = [];
  doubleWord = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  test = false;
  startGame();
}
function startGame() {
  //Chooses word randombly from the seriesList and store in selectedWord
  selectedWord = seriesList[Math.floor(Math.random() * seriesList.length)];
  console.log(selectedWord);
  //Split the selected word into individual letters
  lettersInWord = selectedWord.split("");
  //generate the number of blanks
  blanks = lettersInWord.length;

  //RESET all counters
  rightGuessCounter = 0;
  guessesLeft = 9;
  wrongLetters = [];
  blanksAndSuccesses = [];
  doubleWord = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];

  //Add blanks with correct guessed number
  for (var i = 0; i < blanks; i++) {
    blanksAndSuccesses.push("_");
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses;
  }

  //changes HTML
  document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(
    " "
  );
  document.getElementById("numGuesses").innerHTML = guessesLeft;
  document.getElementById("winCounter").innerHTML = winCount;
  document.getElementById("lossCounter").innerHTML = loseCount;
  document.getElementById("wrongGuesses").innerHTML = wrongLetters;
}

function compareLetters(userKey) {
  var foundLetter = false;
  //If user key exist in choosen word then perform this function
  if (selectedWord.indexOf(userKey) > -1) {
    //Loops depending on the amount of blanks
    for (var i = 0; i < blanks; i++) {
      //Fills in right index with user key
      if (lettersInWord[i] === userKey) {
        foundLetter = true;
        correctSound.play();
        rightGuessCounter++;
        blanksAndSuccesses[i] = userKey;
        document.getElementById(
          "wordToGuess"
        ).innerHTML = blanksAndSuccesses.join(" ");
      }
    }
  }
  //Wrong Keys
  else {
    incorrectSound.play();
    wrongLetters.push(userKey);
    guessesLeft--;
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    //Changes HTML
    document.getElementById("wrongGuesses").innerHTML = wrongLetters;
  }
}
function winLose() {
  // When number blanks if filled with right words then you win
  if (rightGuessCounter === blanks) {
    //Counts Wins
    winCount++;
    //Changes HTML
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("message").innerHTML = "You win the Game.";
    reset();
  }
  // When number of Guesses reaches 0 then You lose
  else if (guessesLeft === 0) {
    //Counts losses
    loseCount++;
    document.getElementById("lossCounter").innerHTML = loseCount;
    //Changes HTML
    document.getElementById("message").innerHTML =
      "You lose the Game. Try again";
    reset();
  }
}
startGame();

document.onkeyup = function(event) {
  test = true;
  document.getElementById("message").innerHTML = "";
  var letterGuessed = event.key;
  for (var i = 0; i < doubleWord.length; i++) {
    if (letterGuessed === doubleWord[i] && test === true) {
      var spliceDword = doubleWord.splice(i, 1);
      compareLetters(letterGuessed);
      if (selectedWord == "you") {
        document.getElementById("background-image").style.backgroundImage =
          "url('assets/images/you-poster.jpg')";
      } else if (selectedWord == "suites") {
        document.getElementById("background-image").style.backgroundImage =
          "url('assets/images/suits.jpg')";
      } else if (selectedWord == "strangerthings") {
        document.getElementById("background-image").style.backgroundImage =
          "url('assets/images/Stranger-Things.jpg')";
      } else if (selectedWord == "orangeisthenewblack") {
        document.getElementById("background-image").style.backgroundImage =
          "url('assets/images/OITNB.jpg')";
      } else if (selectedWord == "narcos") {
        document.getElementById("background-image").style.backgroundImage =
          "url('assets/images/narcos.jpg')";
      } else if (selectedWord == "houseofcards") {
        document.getElementById("background-image").style.backgroundImage =
          "url('assets/images/house-of-cards.jpg')";
      } else if (selectedWord == "blackmirror") {
        document.getElementById("background-image").style.backgroundImage =
          "url('assets/images/Black-Mirror.jpg')";
      } else if (selectedWord == "thecrown") {
        document.getElementById("background-image").style.backgroundImage =
          "url('assets/images/thecrown.jpg')";
      } else {
        document.getElementById("background-image").style.backgroundColor =
          "#000000";
      }
      winLose();
    }
  }
};
