let rotacion=document.querySelector(".rotate");
 
const girar=()=>{
    console.dir(rotacion);
    rotacion.classList.toggle("girar")
}

const mover=()=>{
    let cubo=document.querySelector(".combo");

    cubo.classList.toggle("combinado")
}