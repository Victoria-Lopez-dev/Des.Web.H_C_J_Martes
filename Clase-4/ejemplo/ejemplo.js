let hijo=document.querySelector(".hijo");

hijo.addEventListener("click",()=>{
    hijo.classList.toggle("girar")
});

const rotar=()=>{
    let input= document.querySelector("input");
    input.classList.toggle("rotar")
}