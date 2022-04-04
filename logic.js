const WORD_TO_GUESS = document.querySelector(".inputLetterUser");
const CONTAINER_DASHES = document.querySelector(".containerSpace");
const ALL_CONTAINER_DASHES = document.querySelectorAll(".containerSpace");
const DIV1_ID_TO_PRINT_MESSAGE = document.getElementById("messageWinLose");;
const MESSAGE_GAME_WIN = "¡Felicidades! Has ganado el juego";
const MESSAGE_GAME_LOSE = "Fin del juego!";
const MESSAGE_GAME_OVER = "Lo sentimos este juego se ha terminado";
const BUTTON_PLAY = document.querySelector(".buttonPLay")
let countError = 0;
let error = 0;
let body = document.querySelector("body");
let gameOverValue = false;

function drawDashes(word) {
    for(let i=0; i< word.length; i++)
    {    const containerSpace = document.createElement("div")
        if(word[i]!= null){
             const INPUT_LETTER = () => {
                 const input = document.createElement("input")
                 input.id = `input${i+1}`;
                 input.className = "letterSpace";
                 input.placeholder = "";
                 input.disabled = true;
                 return input;
             }
            CONTAINER_DASHES.appendChild(INPUT_LETTER());
        }
    }
}
function trackEvent(word) {
    if(gameOverValue === false){
        body.addEventListener('keyup', (e) => {
            countError = 0;
            let onlyLetter = "";
            let charTyped = String.fromCharCode(e.which);
            if (/[a-z\d]/i.test(charTyped)) {
                onlyLetter = charTyped;
            }
            WORD_TO_GUESS.value = WORD_TO_GUESS.value +  onlyLetter;
            checkIfInputLetterIsValid(onlyLetter, word);
        })
    } else {
        console.log("gameOverValue esta en true");
        /*let message = document.createElement("h1")
        message.innerText = MESSAGE_GAME_OVER;*/
        let html ="";
        html += `<h1>${MESSAGE_GAME_OVER}</h1>`
        DIV1_ID_TO_PRINT_MESSAGE.innerText = html;
        DIV1_ID_TO_PRINT_MESSAGE.style.display = "block";
    }
}
checkIfInputLetterIsValid = (letter, word) => {

    for(let i=0; i< word.length; i++)
    {
        let timesIncludeLetter = word[i].toUpperCase().includes(letter.toUpperCase())
        if (timesIncludeLetter) {
            timesIncludeLetter = timesIncludeLetter + timesIncludeLetter;

            identifySpacesToDisplay(letter, word);
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
function identifySpacesToDisplay(letter, word) {
    for(let i=0; i< word.length; i++){
       if(word[i] === letter) {
           CONTAINER_DASHES.childNodes[i].placeholder = letter;
           verifyWinner(word,letter);
       }
    }
}
function verifyWinner(word,letter){
    ALL_CONTAINER_DASHES.forEach((e) => {
        let pending = 9-error;
        let count =""
        e.childNodes.forEach((a) => {
           let letterInput = a.attributes.placeholder.value;
            count = count +letterInput;
        })
        if(count.length === word.length){
            if(pending > 0){
                showWinMessage();
            } else{
                console.log("sigue intentando")
            }
        }
    })
}
function showWinMessage() {
     //todo: show this on UI
    image = "img/bien-hecho.gif" ;
    cleanAndPrintOnDiv(DIV1_ID_TO_PRINT_MESSAGE, MESSAGE_GAME_WIN, image);
    gameOver();
}

//flujo en donde la la letra ingresada no existe en la palabra a adivinar
function printDrownBody(error) {
    let pending = 9-error;
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
            drawRigthArm();
        }
    }
   if (pending === 0) {
        showYouLoseMessage();
    }
}
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
        imagesMessage.className = "imageMessage";
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
    WORD_TO_GUESS.disabled = true;
    gameOverValue = true;
    BUTTON_PLAY.style.display = "block";
    BUTTON_PLAY.addEventListener("click",() =>{
        location.reload();
    })
}

