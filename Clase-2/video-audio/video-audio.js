//DOM y evento

// const mostrarInfo=(nodoVideo)=>{
//     console.dir(nodoVideo)
//     console.log(nodoVideo.duration); -> duracion en segundos
//     nodoVideo.play()

// }

let video =document.querySelector("video");

//metodos de video y audio

//play() | pause() -> reproduccion y la pausa del video o audio

//propiedades : muted - duration 
let seccionDur=document.querySelector("#duracion");
let muestraDurActual;

const transformarTiempo=(tiempo)=>{
    //1 minuto -> 60seg
    if(tiempo<60){
        return `00:${tiempo.toFixed(0)}`
        //metodo toFixed(cant. decimales)
    }else{
        console.log(tiempo/60 )
        let minutos=parseInt(tiempo/60) //-> cantidad de minutos, solo tomo el valor entero
        let segundos= (tiempo/60 - minutos)*60

        return `${minutos}:${segundos.toFixed(0)}`
    }
    
}


//accion que se reproduce cuando se carga la pagina

const mostrarDur=()=>{
    let duracion=transformarTiempo(video.duration);
  
    seccionDur.textContent=duracion;

    

}


const reproducir=()=>{
    video.play()//para iniciar la reproduccion
    console.dir(video)
    let zonaTiempoReal=document.querySelector("#tiempoReal");
    muestraDurActual=setInterval(()=>{
        console.log("re reproduce la actualizacion del tiempo real")
        zonaTiempoReal.textContent=transformarTiempo(video.currentTime)
    },1000)//ejecuto cada 1 segundo el cambiar el tiempo actual de la reproduccion

}
const pausar=()=>{
    video.pause()//para pausar el video
    console.dir(video)
    clearInterval(muestraDurActual)//pausar la accion del setInterval creada en la reproduccion

}
const mutear=()=>{
    video.muted =true
}


console.log(transformarTiempo(130))
// 2 minutos -> 120seg  -> entonces  2:10

//metodo js -> setInterval(()=>{},cant.seg)

