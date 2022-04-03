// principales selectores
let btnStart = document.getElementById("buttonStartGame");
let inputUSer = document.querySelector(".inputWord");
let btnNewWord =document.querySelector(".buttonWord")

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
    console.log("la palabra al azar escogida es: " + azarwords);

    //separar palabra en letra por letra
    separateLetters = azarwords.toUpperCase().split("");
    console.log( "las letras de la palabra son : "+ separateLetters);
    drawDashes(separateLetters);
    trackEvent(separateLetters);

}






