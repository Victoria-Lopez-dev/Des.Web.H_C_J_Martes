//Canvas -> API grafica incluida en HTML5
// Drag&Drop, WebStorage

//API -> Aplication Programing Interface (Interfaz de Programacion de aplicaciones)
//funciones para resolver problemas
//posibilidad de hacer cosas de manera mas simple
//subrutinas 
//consumir informacion y utilizarla en nuestro sitio.

//para poder acceder a API de tercero, que no estan incluidas en HTML5 (mas alla de que sean pagas o no), necesitamos utilizar asicronia.(video de tema adicional)

//Canvas -> lienzo que nos permite realizar cosas mas complejas que con SVG

//DOM 
let canvas=document.querySelector("canvas");
let lienzo=canvas.getContext("2d");
console.dir(lienzo);

//formas primitivas : rectangulo - trazos

//rectangulos
//fillRect(x,y,width,heigth) -> rectangulo relleno
//strokeRect(x,y,width,heigth) -> rectangulo con contorno
//clearRect(x,y,width,heigth) -> tapar figura para poder dibujar otra por encima


lienzo.fillRect(130,130,200,20);

lienzo.fillStyle="#F90";// defino el color del relleno

lienzo.fillRect(100,100,200,220);


lienzo.strokeStyle="green";//definir color del contorno
lienzo.strokeRect(300,300,50,50);

lienzo.clearRect(120,100,20,70);


//trazos
//inicio beginPath() - final: closePath() cierra trazo - fill() rellena el trazo 

//moveTo(x,y) - lineTo(x,y) -rect(x,y,width,height)

lienzo.beginPath();
lienzo.strokeStyle="darkblue";
lienzo.moveTo(100,20);// indicamos coordenada a la cual trasladarse sin dibujar
lienzo.lineTo(220,30);
lienzo.lineTo(420,30);
lienzo.rect(420,30,50,50)
lienzo.stroke();
lienzo.closePath();

//arcos -> 
//arc(x,y,radio,ang. inicio.,ang.final,direccion) 
//-quadraticCurveTo(pcx,pcy,x,y) ->1pto de control
//- bezierCurveTo(pcx1,pcy1,pcx2,pcy2,x,y)  -> 2pto de control

//Math.PI -> 180grados
//Math.PI/180 * grados..

let grados45=Math.PI/180 *45;

lienzo.beginPath();
lienzo.fillStyle="brown";

lienzo.moveTo(300,200);
lienzo.arc(330,300,50,grados45,Math.PI,true)

lienzo.fill();



lienzo.strokeStyle="violet";

lienzo.beginPath();

lienzo.moveTo(440,200);
lienzo.quadraticCurveTo(670,100,440,370);

lienzo.moveTo(440,200);
lienzo.quadraticCurveTo(170,200,400,370);
lienzo.stroke();
lienzo.closePath();


lienzo.fillStyle="#333333";
lienzo.globalAlpha=0.7 //transparencia/opacidad : entre 0 -1 (mas cerca del 1 es mas solido el color )

lienzo.beginPath();
lienzo.moveTo(70,20);
lienzo.bezierCurveTo(0,120,300,100,70,200)

lienzo.fill();


//texto
//fillText(texto,x,y) - strokeText(texto,x,y)

lienzo.strokeStyle="salmon";

lienzo.globalAlpha=1
lienzo.beginPath();
lienzo.font="50px Courier New"
lienzo.strokeText("Hola",400,300);//texto con contorno

lienzo.stroke();

let funcionxseg;
let activado=false;
  let yTexto=20;
    let h=100;

const moverPalabra=()=>{

    activado=!activado;
  console.dir(lienzo)
    if(activado){
        funcionxseg= setInterval(()=>{
        
         lienzo.clearRect(400,0,400,h);
        //    lienzo.globalAlpha=1;
        //    lienzo.beginPath();
        //    lienzo.font="50px Franklin";
        //    lienzo.fillStyle="lightgoldenrodyellow";  
        //    lienzo.fillText("Buen dia",400,yTexto-20);//texto con relleno
        //    lienzo.fill();


            lienzo.beginPath();
            lienzo.fillStyle="brown";  
            lienzo.font="50px Franklin";
            lienzo.fillText("Buen dia",400,yTexto);
            lienzo.fill();


            yTexto=yTexto+20;
            h=h+20
        
        },1000);
    }else{
         clearInterval(funcionxseg);
    }
   
}

//setInterval(()=>{},milisegundo)
//clearInterval(funcion setInterval)