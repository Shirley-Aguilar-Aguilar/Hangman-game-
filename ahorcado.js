// principales selectores
let btnStart = document.getElementById("buttonStartGame");
let inputUser = document.querySelector(".inputWord");
let btnNewWord =document.querySelector(".buttonWord");

let separateLetters = "";


//mostrar el juego

function jumpPage(){
    document.getElementById("firstPage").style.display="none";
    document.getElementById("gamePage").style.display="block";
    azarWords();
}
btnStart.addEventListener("click", jumpPage);


// función para escoger palabra
function azarWords(){
    let words =["oracle","javascript","alura", "correr" ,"tren","Lima",];
    let azarwords = words[Math.floor(Math.random()*words.length)];

    //separar palabra en letra por letra
    separateLetters = azarwords.toUpperCase().split("");
    if(inputUser.value.length>0) {
        separateLetters = inputUser.value.toUpperCase().split("");
    }
    drawDashes(separateLetters);
    trackEvent(separateLetters);

}






