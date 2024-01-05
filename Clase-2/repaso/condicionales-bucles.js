//Condicionales -> evaluar una condicion; y a partir de esta seguir distintos caminos

//operador ternario
//sintaxis: condicion ? accion-true : accion-false;
let edad=20
let producto={
    nombre:"cuaderno",
    marca:"pepe",
    stock:20,
    precio:200,
    descuento:false
}
let lista=[producto,"item","item"]
let total=0;
//              true
producto.descuento == true ? total=total+(producto.precio*0.5): total=total+producto.precio;

console.log(total)


// if- if/else
//sintaxis
/*
    if(condicion){
        //accion/es a realizar si la condicion true
    }


    if(condicion){
        //accion/es a realizar si la condicion true
    }else{
        //accion/es a realizar si la condicion false
    }
*/

if(edad>16){
    console.log("puede ingresar al sitio..")
}

//switch -> evalua un valor| key | clave
//sintaxis
/*
 switch(key){
    case valor: accion/es a realizar
        break;
    case valor: accion/es a realizar
        break;
    case valor: accion/es a realizar
        break;
    default:
        break;
 }
*/

let cargo="admin"

switch (cargo) {
    case "admin":
        //acceso a todo
        break;
    case "operario":
        //acceso al stock
        break;
    case "recepcion":
        //acceso al panel de colaborares
        break;

    default:
        //no tiene acceso 
        break;
}

//bucles -> for for-of while do-while
//acciones repetitivas 

//for

let listaNombres=["Juan","Marta","Matias","Noelia"];



// //array o cualquier accion repetitiva
// for(let i=0;listaNombres.length>i;i++){
//     if(listaNombres[i].length >5){
//         console.log("tiene un nombre extenso")
//         console.log(listaNombres[i])
//     }
// }

// for(let i=0;5>i;i++){
//     console.log("hola")
// }

// //for-of
// //para listas|array -> porque en su condicion indica recorrer una lista completa
// for(item of listaNombres){
//     if(item.length >5){
//         console.log("tiene un nombre extenso")
//         console.log(item)
//     }
// }

// //while do-while

// // while(condicion){
// //     //accion/es a realizar si se cumple
// // }
// // do{
// // // accion/es a realizar 1 vez y despues la repite si se cumple la condicion 
// // }while(condicion)
// let i=0;

// while(listaNombres.length>i){

//     if(listaNombres[i].length >5){
//         console.log("tiene un nombre extenso")
//         console.log(listaNombres[i])
//     }
//     i++
// }

// //funciones nationes - bucles 

let listaNombres2=[
    {
        nombre:"Juan",
        edad:22
    },{
        nombre:"Marta",
        edad:44
    }
    ,{
        nombre:"Matias",
        edad:33
    },{
        nombre:"Noelia",
        edad:66
    }];

//filter() -> filtrar de un array aquellos items que cumplen con la condicion
//find() -> obtiene el primer valor del array que cumple con la condicion
//map() -> repetir una misma accion por cada item de la lista y devuelve una nueva lista 
//forEach() -> repetir una misma accion por cada item de la lista

let resultado=listaNombres.filter((nombre)=>{ return nombre.length>5});

let resultado2=listaNombres.find((nombre)=>{ return nombre.length>5});

let resultado3=listaNombres2.filter((persona)=>{ return persona.nombre.length>5});

let resultado4=listaNombres2.map((persona)=> {
    if(persona.nombre.length>5){
        persona.regular=true
    }
    return persona
})
let resultado5=listaNombres2.forEach((persona)=> {if(persona.nombre.length>5){
    persona.regular=true}
})

console.log(resultado)
console.log(resultado2)
console.log(resultado3)
console.log(resultado4)
console.log(resultado5)
console.log(listaNombres2)