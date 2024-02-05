//armo lo mismo para la hoja secundaria 
//defino los cambios del tema noche
let lista=[];
let tema=localStorage.getItem("tema");
let productos=localStorage.getItem("productos");
let ul=document.querySelector("ul")


//apenas inicia a ejecutar script.js
const estiloNoche=()=>{
    let body=document.querySelector("body");
    let botones=document.querySelectorAll(".boton");
    body.classList.add("fondo")
    botones.forEach((boton)=>{boton.classList.add("botonNight")})

    //guardar la data del dia noche 
    localStorage.setItem("tema","noche")
}

//si esta almacenada la data "noche" cambia los estilos del sitio al estilo noche
if(tema=== "noche"){
    estiloNoche()
}

if(productos !== null){
    lista=JSON.parse(productos)
    lista.map((item)=>{
        let li=document.createElement("li");
        li.innerHTML=`producto: <strong>${item.producto}</strong> ,precio <strong>:${item.precio} </strong>`

        return ul.appendChild(li)})
}


