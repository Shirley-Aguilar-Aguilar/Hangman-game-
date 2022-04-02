const WORD_TO_GUESS = document.querySelector(".inputLetterUser");
let containerOfDashes = document.querySelector(".containerSpace");
const STRING_UNDERSCORE = "_";
const DIV1_ID_TO_PRINT_MESSAGE = document.getElementById("messageWinLose");;
const INPUT1_ID_TO_GET_LETTER = "inputGame"; //valor que ususario va ingresando
const MESSAGE_GAME_WIN = "Felicidades! Has ganado el juego";
const MESSAGE_GAME_LOSE = "Fin del juego!";
const MESSAGE_GAME_OVER = "The game is over.";
const BUTTON_PLAY = document.querySelector(".buttonPLay")

let currentInput
function drawDashes(word) {
    for(let i=0; i< word.length; i++)
    {    const containerSpace = document.createElement("div")
        if(word[i]!= null){
             const INPUT_LETTER = () => {
                 const input = document.createElement("input")
                 input.className = "letterSpace";
                 input.placeholder = "";
                 input.disabled = true;
                 return input;
             }
            containerOfDashes.appendChild(INPUT_LETTER());
        }
    }
}
let countError = 0;
let error = 0;
function trackEvent(word) {
    let body = document.querySelector("body");
    body.addEventListener('keyup', (e) => {
        countError = 0;
        let onlyLetter = "";
        let charTyped = String.fromCharCode(e.which);
        if (/[a-z\d]/i.test(charTyped)) {
            onlyLetter = charTyped;
            console.log("Letter or number typed: " +  onlyLetter);
        }
        WORD_TO_GUESS.value = WORD_TO_GUESS.value +  onlyLetter;
        checkIfInputLetterIsValid(onlyLetter, word);
    })
}

checkIfInputLetterIsValid = (letter, word) => {
    for(let i=0; i< word.length; i++)
    {
        if (word[i].toUpperCase().includes(letter.toUpperCase())) {
              processValidLetter(letter,word);
              countError = 0 ;
        } else {
                countError += 1;
                if(countError === word.length){
                    error += 1;
                    printDrownBody(error,countError);
                }
        }
    }
}
//flujo en donde la la letra ingresada si existe en la palabra a adivinar
function processValidLetter(letter,word) {
    console.log("exe processValidLetter");
    let candidateText = identifySpacesToDisplay(letter, word); // "o_o"
    //replaceAndPrint(candidateText);

    /*if (countNumberOfDashes(candidateText) === 0) {
        showWinMessage();
    }*/
}

function identifySpacesToDisplay(letter, word) {
    for(let i=0; i< word.length; i++){
        const spaces = document.querySelectorAll(".letterSpace");
       if(word[i] === letter){
           containerOfDashes.childNodes[i].placeholder = letter;
       }
    }
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
function printDrownBody(error) {
    console.log("exe printDrownBody");
    let pending = pendingBodyPartsToPrint(error);
    console.log('pending'+pending)
    if (pending >= 0) {
        if(error === 1){
            drawPoste();
        } else if (error === 2) {
            drawPoste2();
        } else if (error === 3) {
            drawPoste3();
        } else if (error === 4) {
            drawHead();
        } else if (error === 5) {
            drawBody();
        } else if (error === 6) {
            drawLeftLeg();
        } else if (error === 7) {
            drawRightLeg();
        } else if (error === 8) {
            drawLeftArm();
        } else {
            drawRigthtArm();
        }
    }
   if (pending === 0) {
        showYouLoseMessage();
    }
}
pendingBodyPartsToPrint= (error) => {return (9 - error);}
let image = "";
function showYouLoseMessage() {
    console.log("you have loosed");  //todo: show this on UI
    image = "img/perry.gif" ;
    cleanAndPrintOnDiv(DIV1_ID_TO_PRINT_MESSAGE, MESSAGE_GAME_LOSE, image);
    gameOver();
}
function cleanAndPrintOnDiv(divId, message, image) {
    const MESSAGE_WIN_LOSE = ()=> {
        const containerMessage = document.createElement("div");
        containerMessage.className = "containerMessage"
        const textMessage = document.createElement("h1");
        const strongMessage = document.createElement("strong");
        strongMessage.innerText = message;
        const imagesMessage = document.createElement("img");
        imagesMessage.src = image;
        imagesMessage.alt = "imagen de ganar o perder";
        textMessage.appendChild(strongMessage);
        containerMessage.appendChild(textMessage);
        containerMessage.appendChild(imagesMessage);
        return containerMessage;
    }
    divId.appendChild(MESSAGE_WIN_LOSE());
    divId.style.display = "block";
}
//funciones auxiliares : son llamadas por las funciones de flujo
function gameOver() {
    BUTTON_PLAY.style.display = "block";
    BUTTON_PLAY.addEventListener("click",() =>{
        location.reload();
    })
}

function getWordToGuessUpperCase() {
    return WORD_TO_GUESS.toUpperCase();
}

