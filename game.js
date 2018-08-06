//
var Donkeywords = ["barrel", "banana", "tree", "princess", "kong", "donkey", "yoshi", "bowser", "nintendo"];
var word;
var lives = 1;
var guess;
var placeholder;
var correct;
var wordLength;
var wordSubstring;
var wins = 0;


function NewGame() {
    placeholder = "";
    if (lives == 0) {
        lives = 10;
        wins = 0;
    }

    word = Donkeywords[Math.floor(Math.random() * Donkeywords.length)];
    console.log(word);
    splitWord = word.split("");
    currentWord = 0;
    var html = "wins: " + wins;
    document.querySelector("#wins").innerHTML = html;
    wordLength = word.length;
    wordSubstring = word.substring;

    for (var i = 0; i < splitWord.length; i++) {
        placeholder = placeholder + "_";
    }

    document.getElementById("placeholder").innerHTML = placeholder;
    document.getElementById("status").innerHTML = "Press any key to get started!!";

}

document.onkeyup = function (event) {
    var guess;
    var correct = 0;
    var showLetter = [];
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(word);
    var letters = letters + userGuess;
    for (var i = 0; i < splitWord.length; i++) {

        if (userGuess == word.substring(i, i + 1)) {
            var audio = new Audio('http://themushroomkingdom.net/sounds/wav/smb2/smb2_coin.wav');
            audio.play();
            correct++;
            placeholder = placeholder.substring(0, i) + userGuess + placeholder.substring(i + 1, placeholder.length + 1);
            document.getElementById("placeholder").innerHTML = placeholder;
        }
    }

    if (correct == 0) {
        lives--;
    }

    if (placeholder.indexOf("_") == -1) {
        wins++;
        lives++;
        var audio = new Audio('http://themushroomkingdom.net/sounds/wav/smb3/smb3_1-up.wav');
        audio.play();
        NewGame();
    }

    if (lives == 0) {
        var audio = new Audio('http://themushroomkingdom.net/sounds/wav/smb3/smb3_game_over.wav');
        audio.play();
        NewGame();
    }

    var html2 = "Lives: " + lives;
    document.querySelector("#lives").innerHTML = html2;

}

NewGame();