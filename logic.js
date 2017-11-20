window.onload = function(){
// Declaration of Variables
var wordPool= ["TheMatrix", "Titanic", "ForrestGump", "Braveheart"];
var lives = 6;
var myLetter;
var letter;
var wordChoice;
var hiddenWord;
var i;
var enter;
var letterList = [];
var count=0;
var wins = 0;


// Change character to selected one
function checkCharacter(n) {
  for(i = 0; i < wordChoice.length; i++){
    if(wordChoice[i].toLowerCase() == n.toLowerCase()){
      hiddenWord = setCharAt(hiddenWord,i,n);
      count++;
     
    }
  }
  var html = 
  "<p>" + hiddenWord + "</p>";
  document.querySelector("#word").innerHTML = html;
  if(hiddenWord == wordChoice) {
    selectedWord();
    lives = 6;
  }
  

   //  var fill = 
   //  "<p>Guesses remaining:</p>";
   // document.querySelector("#stats").innerHTML = fill;
  }


//Replace _ with character
function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}

// Selects word randomly from wordPool[]. Then replaces the letters with "_ ". Learned about regEx.

function selectedWord() {
  var random = Math.round(Math.random() * (wordPool.length - 1));
  wordChoice = wordPool[random];
  hiddenWord = wordChoice.replace(/./gi,"_");
  var html =
  "<p>" + hiddenWord + "</p>";
  document.querySelector("#word").innerHTML = html;
}

// Gives myLetter a value of key pressed. If key is "Enter" selectedWord() initiates 

document.onkeyup = function(event) {
    var myLetter = event.key;
    myLetter = myLetter.toLowerCase();

    //If incorrect letter chosen. Chosen letter index compared to letters in wordChoice.
    if(wordChoice.toLowerCase().indexOf(myLetter.toLowerCase()) === -1){
    
    //reset lives if you lose
        if(lives == 0){
          letterList=[];
           selectedWord();
           lives = 6;
         }
         else{
           lives--;
        }
    }
    checkCharacter(myLetter);

    letterList.push(myLetter);
    if (count == wordChoice.length){
        wins++;
        letterList=[];
        count=0;
        selectedWord();
      }
    var green = 
  "<p>Lives: " + lives + "</p>" +
  "<p>Letters Guessed: " + letterList + "</p>" +
  "<p>Wins: " + wins + "</p>";
  document.querySelector("#stats").innerHTML = green;

  }  


//Select a random word at start
selectedWord();

}

