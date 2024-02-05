//API -> Aplication Programing Interfase
//API externas: gratuitas -pagas |  incluidas en HTML5

//Canvas - Geolocalizacion - Drag&Drop

// - Geolocalizacion -> ubicar al dispositivo (siempre y cuando el usuario nos lo permita);

const funcionOk=(position)=>{
    console.log(position)
    //coords -> info de la ubicacion
    //dentro de coords :
    //accuracy (margen de error en metros)

    //timestamp -> tiempo que tardo en ubicarlo (ms)
    let parrafo=document.querySelector("p");
    parrafo.textContent=`Ubicacion del dispositivo: ${position.coords.latitud} latitudo y ${position.coords.longitud} longitud; con ${position.coords.accuracy} metros de error`

};

const funcionErr=(error)=>{
    console.log(error)
    if(error.code === 1){
        alert("al no permitir la ubicacion no podemos proceder con las demas acciones...")
    }
    if(error.code ==2){
        //no pudo ubicarlo
        console.log("no pudo ubicarlo")
    }
    if(error.code ==3){
        //no tiene el tiempo necesario para ubicarlo
        console.log("No hay suficiente tiempo para ubicarlo")
    }

};

const config={
    enableHighAccuracy:false,// booleano(true-false) si necesitamos la mayor precision posible o no.
   // timeout: 100,  ->milisegundos tiempo limite de espera.
   //maximumAge //-> milisegundos la espera entre llamados 

};

navigator.geolocation.getCurrentPosition(funcionOk,funcionErr,config);
//pedir permiso 
//a partir de la respuesta ejecuta la ubicacion o nos tirara un error 
//devuelve un objeto -> 
//si pudo ubicarlo -> position : info de la ubicacion.
//si no pudo obtengo un objeto de error