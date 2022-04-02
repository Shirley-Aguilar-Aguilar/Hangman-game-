// principales selectores
let btnStart = document.getElementById("buttonStartGame");



let separateletters = "";

// palabra por sorteo
function azarwords(){
    let words =["oracle","javascript","alura", "correr" ,"tren","lima",];
    let azarWords = words[Math.floor(Math.random()*words.length)];
    console.log("la palabra al azar escogida es: " + azarWords);

    //separar palabra en letra por letra
    separateletters = azarWords.toUpperCase().split("");
    console.log( "las letras de la palabra son : "+ separateletters);
    drawDashes(separateletters);
    trackEvent(separateletters);
}

// mostrar el juego
btnStart.addEventListener("click", () => {
    document.getElementById("firstPage").style.display="none";
    document.getElementById("gamePage").style.display="block";
    azarwords();
})





