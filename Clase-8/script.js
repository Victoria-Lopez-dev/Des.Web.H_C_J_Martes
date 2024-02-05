let tema=localStorage.getItem("tema");
let cantidadCompra=localStorage.getItem("cantidad");
let lista=[];
//pliegue y despliegue del navegador
function desplegar(){
    let botonesTema=document.querySelectorAll(".boton");
    botonesTema.forEach((btn)=> btn.classList.toggle("show"))
};
//defino los cambios del tema noche
const estiloNoche=()=>{
    let body=document.querySelector("body");
    let botones=document.querySelectorAll(".boton");
    body.classList.add("fondo")
    botones.forEach((boton)=>{boton.classList.add("botonNight")})

    //guardar la data del dia noche 
    localStorage.setItem("tema","noche")
};
//-------------------

//apenas inicia a ejecutar script.js

//si esta almacenada la data "noche" cambia los estilos del sitio al estilo noche
if(tema=== "noche"){
    estiloNoche()
};


if(cantidadCompra !== null){
    let contador=document.querySelector("#cantidad");
    contador.textContent=cantidadCompra//buscamos el changuito de compra y le colocamos el valor que almacenamos

    //localStorage.getItem("productos") -> nos trae el JSON ( formato de texto)
    let infoLista=localStorage.getItem("productos")
   lista=JSON.parse(infoLista);//transformo el JSON para poder tener un array y que funcione el push del cargar un item
    // console.log(lista)
}
//alternativa,ejecutar el condicional dentro de un evento load en el body

const temaNoche=()=>{
    estiloNoche()
};

//defino los cambios del tema dia con la funcion de su evento
const temaDia=()=>{
    let body=document.querySelector("body");
    let botones=document.querySelectorAll(".boton");
    body.classList.remove("fondo")
    botones.forEach((boton)=>{boton.classList.remove("botonNight")})
    localStorage.setItem("tema","dia")
   
};

//almacenar info de el tema en el que estamos para que permanezca..
//-----------------------------------------------------------

//carga al chango de compras

const cargarChango=()=>{
   let contador=document.querySelector("#cantidad")
   
   contador.textContent=parseInt(contador.textContent) +1;
   //string transformado en number y le sumamos una unidad
//metodo para cargar item a la lista (array)
   lista.push(
    {
        producto:"silla",
        precio:2500
    }
    )

   localStorage.setItem("cantidad",contador.textContent);
   localStorage.setItem("productos",JSON.stringify(lista));//no es correcto, al no ser un string 
   console.log(lista)
};
//-----------------------------------------------------------
const borrarCompra=()=>{
    let contador=document.querySelector("#cantidad")
    contador.textContent="0";
    localStorage.removeItem("cantidad");
    localStorage.removeItem("productos");
    lista=[]
};

//Web Storage -> API que permite almacenar info en el browser
//tipo de dato que podemos guardar -> strings|texto

//guardar informacion en el browser -> (localStorage|webStorage ) setItem(key,valor)

localStorage.setItem("pepe","dato almacenado...")
sessionStorage.setItem("pepe","otro dato almacenado...")// si yo guardo con la misma key , mas de un dato, lo sobreescribe


//llamar informacion almacenada ->getItem(key)

let info=localStorage.getItem("pepe1")
//si encuentra la info la podemos utilizar|almacenar , sino nos da null

console.log(info)
//eliminar info almacenada: -> removeItem(key)

sessionStorage.removeItem("pepe")


///JSON -> JavaScript Object Notation
//formato de texto que nos permitir almacenar info de manera liviana, es comprendido por muchos lenguajes.
//muy utilizado para el envio de informacion 

//tiene dos metodos: stringify() y parse()

//transforma de array|objeto -> JSON -> JSON.stringify(dato)
let dato=[{info:1},{info:2},{info:3},{info:4}];
let datoJSON=JSON.stringify(dato)
console.log(dato)
console.log(datoJSON)

//transformar de JSON a array-objeto -> JSON.parse(dato)

JSON.parse(datoJSON);

console.log(JSON.parse(datoJSON))