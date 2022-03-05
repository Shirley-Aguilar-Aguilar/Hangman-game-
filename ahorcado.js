//principales selectores
let bottonStartGame= document.getElementById("buttonStartGame");
let inputWord= document.getElementById("inputWord");
let points =document.getElementById("points");

//variables globales que se actualizarán con más frecuencia
let palabraElegida =""; //palabra elegida
let errores = "";       //contador de errores
let letrasCorrectas= [];   //almacenar las letras corretas
let letrasIncorrectas= []; //almacenar letras incorrectas



//mostrar el juego

function jumpPage(){
    document.getElementById("firstPage").style.display="none";
    document.getElementById("gamePage").style.display="block";
}
bottonStartGame.addEventListener("click", jumpPage);

let separateLetters="";
// función para escoger palabra
    function azarWords(){
        let words =["oracle","javascript","alura", "correr" ,"tren","Lima",];
        let azarWords = words[Math.floor(Math.random()*words.length)];
        console.log("la palabra al azar escogida es: " + azarWords);
        
        //separar palabra en letra por letra
         separateLetters = azarWords.toUpperCase().split("");
        console.log( "las letras de la palabra son : "+ separateLetters);
        drawDashesPlay(separateLetters);
    }
    bottonStartGame.addEventListener("click", azarWords);

//i = al numero de dashes


function drawDashesPlay(input){
    let numberDashes="";
    for(let i=1;i<input.length +1 ;i++){
      drawDashes(i);
    }
    return numberDashes;
}
//EVENTO keyup
pantalla.onkeyup = validarEntradas;


//función de validar letra ingresada
/*function validarEntradas(separateLetters,){
    for(let i=0;i<input.length  ;i++){
        if
    }

}*/

function victoria(){

}

