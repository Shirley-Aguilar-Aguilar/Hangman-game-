const WORD_TO_GUESS = "hola";
const STRING_UNDERSCORE = "_";
const DIV1_ID_TO_PRINT_MESSAGE = "div1_message";
const DIV2_ID_TO_PRINT_MESSAGE = "div2_message";
const INPUT1_ID_TO_GET_LETTER = "inputGame"; //valor que ususario va ingresando
const MESSAGE_GAME_WIN = "You have won";
const MESSAGE_GAME_LOSE = "You have loosed";
const MESSAGE_GAME_OVER = "The game is over.";

let currentInput
function trackEvent() {
    let pantallaCanvas= document.querySelector("canvas");
    pantallaCanvas.addEventListener('keyup',checkIfInputLetterIsValid )
    console.log(result);
    console.log("escuchando si se digita una letra");
/*     var letter = document.getElementById(INPUT1_ID_TO_GET_LETTER).value;
    //solo necesitamos la ultima letra a la derecha
    letter = letter.charAt(letter.length-1);
    alert("inserted letter: " + letter);
    checkIfInputLetterIsValid(letter); */
}

function checkIfInputLetterIsValid(letter) {
    console.log("exe checkIfInputLetterIsValid");
    if(WORD_TO_GUESS.toLowerCase().includes(letter.toLowerCase())) {
        processValidLetter(letter);
    } else {
        printDrownBody();
    }
}

//flujo en donde la la letra ingresada si existe en la palabra a adivinar
function processValidLetter(letter) {
    console.log("exe processValidLetter");
    let candidateText = identifySpacesToDisplay(letter); // "o_o"
    replaceAndPrint(candidateText);

    if (countNumberOfDashes(candidateText) === 0) {
        showWinMessage();
    }
}

function identifySpacesToDisplay(letter) {
    let regex = new RegExp(letter, 'g');
    return getWordToGuessUpperCase().replace(regex, STRING_UNDERSCORE);
}

function replaceAndPrint(candidateText) {
    console.log("the new text to show is: " + candidateText);
    //todo: show this on UI
}

function countNumberOfDashes(resultText) {
    return resultText.split(STRING_UNDERSCORE).length - 1;
}

function showWinMessage() {
    console.log("you have won");  //todo: show this on UI
    cleanAndPrintOnDiv(DIV1_ID_TO_PRINT_MESSAGE, MESSAGE_GAME_WIN);
    gameOver();
}

//flujo en donde la la letra ingresada no existe en la palabra a adivinar
function printDrownBody() {
    console.log("exe printDrownBody");
    let pending = pendingBodyPartsToPrint();
    if (pending > 0) {
        printPart();
    }
    if (pending === 1) {
        showYouLoseMessage();
    }
}

function pendingBodyPartsToPrint() {

}

function showYouLoseMessage() {
    console.log("you have loosed");  //todo: show this on UI
    cleanAndPrintOnDiv(DIV1_ID_TO_PRINT_MESSAGE, MESSAGE_GAME_LOSE);
    gameOver();
}

//funciones auxiliares : son llamadas por las funciones de flujo
function gameOver() {
    console.log("mostrando boton para recargar la pagina y asi reiniciar el juego");
    cleanAndPrintOnDiv(DIV2_ID_TO_PRINT_MESSAGE, MESSAGE_GAME_OVER);
}

function getWordToGuessUpperCase() {
    return WORD_TO_GUESS.toUpperCase();
}

function cleanAndPrintOnDiv(divId, message) {
    let div = document.getElementById(divId);
    div.innerHTML = `<aside id="counterOfPeople">
                 <h1><strong>Mensaje<br> ${message} </strong></h1><br>
                 <img src="img/people.jpg"><br><br>
                 </aside>`;

}