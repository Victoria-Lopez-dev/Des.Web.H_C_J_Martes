const poligono=document.querySelector("#poli");
const elipse=document.querySelector("ellipse");

const mover=()=>{
    poligono.classList.toggle("moverLugar")
}
elipse.addEventListener("mouseover",()=>{
    elipse.style.animation="color 3s 2"
})

elipse.addEventListener("click",()=>{
   console.log("HOLLA")
})