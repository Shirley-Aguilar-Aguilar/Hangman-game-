
let pantalla= document.querySelector("canvas"); //query conecta html con js
let pincel= pantalla.getContext("2d");          //2 dimenssiones ancho y largo

  
//base de la horca
pincel.fillStyle ="white";
    pincel.beginPath();
    pincel.moveTo(100,600);
    pincel.lineTo(0,700);
    pincel.lineTo(200,700);
    pincel.fill();

//dibujando horca y el ahorcado

function drawPoste(){
    pincel.strokeStyle ="white" ;
    pincel.lineWidth = 4;
    pincel.beginPath();
    pincel.moveTo(100,600);
    pincel.lineTo(100,200);
    pincel.closePath();
    pincel.stroke();
}
function drawPoste2(){
    pincel.beginPath();
    pincel.moveTo(100,200);
    pincel.lineTo(400,200);
    pincel.closePath();
    pincel.stroke();
}
function drawPoste3(){
    pincel.beginPath();
    pincel.moveTo(400,200);
    pincel.lineTo(400,300);
    pincel.closePath();
    pincel.stroke();
}
function drawHead(){
    pincel.fillStyle ="white";
    pincel.beginPath();
    pincel.arc(400,350,50,0,2*3.14);
    pincel.closePath();
    pincel.stroke();
}
function drawBody(){
    pincel.beginPath();
    pincel.moveTo(400,400);
    pincel.lineTo(400,550);
    pincel.closePath();
    pincel.stroke();
}
function drawLeftLeg(){
    pincel.beginPath();
    pincel.moveTo(400,550);
    pincel.lineTo(330,600);
    pincel.closePath();
    pincel.stroke();
}
function drawRightLeg(){
    pincel.beginPath();
    pincel.moveTo(400,550);
    pincel.lineTo(470,600);
    pincel.closePath();
    pincel.stroke();
}
function drawLeftArm(){
    pincel.beginPath();
    pincel.moveTo(400,450);
    pincel.lineTo(330,390);
    pincel.closePath();
    pincel.stroke();  
}
function drawRigthArm(){
    pincel.beginPath();
    pincel.moveTo(400,450);
    pincel.lineTo(470,390);
    pincel.closePath();
    pincel.stroke();  
}
