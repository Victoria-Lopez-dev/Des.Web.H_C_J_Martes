//Document Object Model (DOM)


//1) llamemos al elemento (nodo)
//2) obtengamos las propiedes, modifiquemos la propiedad|atributo

//document -> referencia al HTML al cual esta vinculado el archivo JS.

//metodos para buscar el o los nodos que necesitamos

//document.querySelector("selector") -> traer el primer nodo que cumple con ese selector 
// document.querySelectorAll("selector") -> trae un array con todos los nodos que cumplen con el selector
let titularH1=document.querySelector("h1")

titularH1.textContent="cambiando contenido"
console.dir(titularH1.id)

//eventos -> escucha acciones desde JS sobre algunos elementos del HTML.

//click el boton cambie el color del titulo a rojo (DOM+eventos)

//JS -> metodo addEventListener()
let boton=document.querySelector("button")
boton.addEventListener("click",(event)=>{
    console.log(event)
    console.log(event.target)
    titularH1.style.color="red"
});

//JS+HTML -> agrega los eventos como atributos(on+evento) en el HTML (elementos); y desde JS arma las funciones a realizar ante esos eventos


const cambiarFondo=(param)=>{
    console.log(param)
    document.querySelector("body").style.backgroundColor="Pink"
}