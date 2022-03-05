
let pantalla= document.querySelector("canvas"); //query conecta html con js
let pincel= pantalla.getContext("2d");          //2 dimenssiones ancho y largo

function drawDashes(i){
    let a =i;
    //guion
    pincel.fillStyle ="black";
    pincel.beginPath();
    pincel.moveTo(650 +70*a,600);
    pincel.lineTo((650+70*a)+50,600);
    pincel.closePath();
    pincel.stroke();
 }
  
//base de la horca
pincel.fillStyle ="black";
    pincel.beginPath();
    pincel.moveTo(200,600);
    pincel.lineTo(100,700);
    pincel.lineTo(300,700);
    pincel.fill();

//dibujando horca y el ahorcado

function drawPoste(){
    pincel.fillStyle ="black";
    pincel.beginPath();
    pincel.moveTo(200,600);
    pincel.lineTo(200,200);
    pincel.closePath();
    pincel.stroke();
}
function drawPoste2(){
    pincel.fillStyle ="black";
    pincel.beginPath();
    pincel.moveTo(200,200);
    pincel.lineTo(500,200);
    pincel.closePath();
    pincel.stroke();
}
function drawPoste3(){
    pincel.fillStyle ="black";
    pincel.beginPath();
    pincel.moveTo(500,200);
    pincel.lineTo(500,300);
    pincel.closePath();
    pincel.stroke();
}
function drawHead(){
    pincel.fillStyle ="black";
    pincel.beginPath();
    pincel.arc(500,350,50,0,2*3.14);
    pincel.closePath();
    pincel.stroke();
}
function drawBody(){
    pincel.fillStyle ="black";
    pincel.beginPath();
    pincel.moveTo(500,400);
    pincel.lineTo(500,550);
    pincel.closePath();
    pincel.stroke();
}
function drawLeftLeg(){
    pincel.fillStyle ="black";
    pincel.beginPath();
    pincel.moveTo(500,550);
    pincel.lineTo(430,600);
    pincel.closePath();
    pincel.stroke();
}
function drawRigthLeg(){
    pincel.fillStyle ="black";
    pincel.beginPath();
    pincel.moveTo(500,550);
    pincel.lineTo(570,600);
    pincel.closePath();
    pincel.stroke();
}
function drawLeftArm(){
    pincel.fillStyle ="black";
    pincel.beginPath();
    pincel.moveTo(500,450);
    pincel.lineTo(430,390);
    pincel.closePath();
    pincel.stroke();  
}
function drawRigthtArm(){
    pincel.fillStyle ="black";
    pincel.beginPath();
    pincel.moveTo(500,450);
    pincel.lineTo(570,390);
    pincel.closePath();
    pincel.stroke();  
}
