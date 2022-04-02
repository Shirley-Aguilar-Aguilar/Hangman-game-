let pantalla= document.querySelector("canvas"); //query conecta html con js
let pincel= pantalla.getContext("2d");

//base de la horca

pincel.beginPath();
pincel.moveTo(100,600);
pincel.lineTo(0,700);
pincel.lineTo(200,700);
pincel.fill();

//dibujando horca y el ahorcado


    pincel.fillStyle ="black";
    pincel.beginPath();
    pincel.moveTo(100,600);
    pincel.lineTo(100,200);
    pincel.closePath();
    pincel.stroke();

    pincel.fillStyle ="black";
    pincel.beginPath();
    pincel.moveTo(100,200);
    pincel.lineTo(400,200);
    pincel.closePath();
    pincel.stroke();


    pincel.fillStyle ="black";
    pincel.beginPath();
    pincel.moveTo(400,200);
    pincel.lineTo(400,300);
    pincel.closePath();
    pincel.stroke();

    pincel.fillStyle ="black";
    pincel.beginPath();
    pincel.arc(400,350,50,0,2*3.14);
    pincel.closePath();
    pincel.stroke();

    pincel.fillStyle ="black";
    pincel.beginPath();
    pincel.moveTo(400,400);
    pincel.lineTo(400,550);
    pincel.closePath();
    pincel.stroke();


    pincel.fillStyle ="black";
    pincel.beginPath();
    pincel.moveTo(400,550);
    pincel.lineTo(330,600);
    pincel.closePath();
    pincel.stroke();


    pincel.fillStyle ="black";
    pincel.beginPath();
    pincel.moveTo(400,550);
    pincel.lineTo(470,600);
    pincel.closePath();
    pincel.stroke();


    pincel.fillStyle ="black";
    pincel.beginPath();
    pincel.moveTo(400,450);
    pincel.lineTo(330,390);
    pincel.closePath();
    pincel.stroke();

    pincel.fillStyle ="black";
    pincel.beginPath();
    pincel.moveTo(400,450);
    pincel.lineTo(470,390);
    pincel.closePath();
    pincel.stroke();

