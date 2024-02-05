//API incluida HTML5 
//arrastrar elementos en nuestro proyecto


//arrastrable(afecto) - draggable 
//anclas e imagenes elementos arrastrables por defecto
// draggable -> boolean 

//Drag&Drop -> conjunto de eventos efecto arraster
//dataTransfer -> objeto vive en dichos eventos
//almacena informacion para poder trasladarla desde la zona de inicio hasta su destino  

//dataTransfer -> metodos: setData("tipo",dato)-> guardar info| getData(tipo) ->obtener info | clearData(tipo) -> eliminar la info guardada
//tipo -> "Text" |"URL"| "text/plain"| "text/html" | "text/uri-list"
//7 eventos -> 3 de ellos minimos para un arrastre

//elemento/s que estamos arrastrando
//dragstart * | dragend| drag

 function inicioArrastre(e){
    //console.dir(e)
   // let texto=e.target.textContent DOM para obtener info del texto
    //e.dataTransfer.setData("Text",texto)guardar info
    //dataTransfer -> metodos

    e.dataTransfer.setData("Text",e.target.id)
    console.log("inicio de arraste")
 }
 function elementoSeSolto() {
    //console.log("se solto el elemento")
 }//dragend -> es cuando suelto el elemento

 function elementoEnTraslado() {
    //console.log("elemento en traslado")
 }
//elemento del destino 

//dragenter |dragleave | dragover* |drop*
let destino=document.querySelector(".zona-destino");

// destino.addEventListener("dragenter",()=>{
//     console.log("arrastrando elemento sobre zona destino..")
// })

// destino.addEventListener('dragleave',()=>{
//     console.log("cuando salimos de la zona destino con un elemento arrastrado")
// })

destino.addEventListener("dragover",(event)=>{
    event.preventDefault();
    //metodo de eventos -> preventDefault()
   // console.log("ejecuta cada vez que tenemos el elemento arrastrado sobre la zona destino + suelto si no ponemos el preventDefault()")//similar al drag 
})
destino.addEventListener("drop",(event)=>{
   // const texto=event.dataTransfer.getData("Text");
    //destino.innerHTML=`<h1>${texto}</h1>`

    const id=event.dataTransfer.getData("Text");
    if(id == ""){
        console.dir(event.dataTransfer.files[0])
            let documento=event.dataTransfer.files[0];
            if(documento.type === "application/pdf"){
                destino.innerHTML=`<img src="./imagenes/img-pdf.png">
                <p>${documento.name}</p>`
            }else{
                destino.innerHTML=`<p>${documento.name}</p>`
            }
    }else{
        
         let elemento=document.querySelector("#"+id);
         destino.innerHTML=elemento.outerHTML;
    }
   
  

    
    //destino.appendChild(elemento)
   // elemento.style.display="none";

    //console.log("evento ejecutado cuando se suelta el elemento en la zona de destino")
})
//eventos -> atributo -> on+evento=funcion() | metodo addEventListener() -> nodo.addEventListener("evento",funcion)
const pulsar=()=>{
    console.log("se pulso el boton!")
}