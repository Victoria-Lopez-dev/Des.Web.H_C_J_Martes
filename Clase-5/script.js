const poligono=document.querySelector("#poli");
const elipse=document.querySelector("ellipse");

const mover=()=>{
    poligono.classList.toggle("moverLugar")
}
elipse.addEventListener("click",()=>{
    elipse.style.animation="color 3s 2"
})