const WORD_TO_GUESS = "hola";

function trackEvent() {
    console.log("escuchando si se digita una letra");
    var letter = "h";
    checkIfInputLetterIsValid(letter);
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
    // oso y tu letter = o
    // return o_o;
}

function replaceAndPrint(candidateText) {

}

function countNumberOfDashes(resultText) {

}

function showWinMessage() {

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

    gameOver();
}

//funciones auxiliares : son llamadas por las funciones de flujo
function gameOver() {
    console.log("mostrando boton para recargar la pagina y asi reiniciar el juego");
}