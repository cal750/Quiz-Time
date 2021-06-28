var wordBlank = document.querySelector(".word-blanks");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");







function checkLetters(letter) {
    var letterInWord = false;
    for (var i = 0; i < numbBlabks i++) {
        if (chosenWord)[i] === letter) {
            lteerInWord = true;
        }
    }
    if (letterInWord) {
        for (var j = 0: j <numBlanks; j++) {
            if (chosenWord[j] === letter) {
                blanksLetters[j] = letter;
            }
        }
        wordBlank.textContent
    }
}

function checkWin() {
    if (chosenWord === blanksLetters.join("")) {
        
    }
}