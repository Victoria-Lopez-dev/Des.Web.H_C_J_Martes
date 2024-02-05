
//pliegue y despliegue del navegador
function desplegar(){
    let botonesTema=document.querySelectorAll(".boton");
    botonesTema.forEach((btn)=> btn.classList.toggle("show"))
}
//defino los cambios del tema noche
const estiloNoche=()=>{
    let body=document.querySelector("body");
    let botones=document.querySelectorAll(".boton");
    body.classList.add("fondo")
    botones.forEach((boton)=>{boton.classList.add("botonNight")})
}




const temaNoche=()=>{
    estiloNoche()
}
const temaDia=()=>{
    let body=document.querySelector("body");
    let botones=document.querySelectorAll(".boton");
    body.classList.remove("fondo")
    botones.forEach((boton)=>{boton.classList.remove("botonNight")})
   
}

//-----------------------------------------------------------

//carga al chango de compras




//Web Storage -> API que permite almacenar info en el browser
//tipo de info -> texto -> strings
