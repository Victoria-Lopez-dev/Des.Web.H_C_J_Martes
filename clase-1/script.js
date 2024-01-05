//comentarios
/*
comentarios en multiples linea
*/
//tipos de datos

//string -> caracteres " ",'', ``
//numbers -> numeros (numeros decimales un punto no coma)
//booleans -> verdadero y falso : true - false 
//undefined | null | NaN(not a number )tipo de dato number

"hola"-20 //NaN

//variables -> espacios de memoria donde guardo data :
// let -const (creacion de la variable)

//funciones : tradicionales - arrow functions (funcion flecha)
let nombre="Juan"//variables globales
//definir|crear una funcion 
function suma(number1,number2) {
    number1+number2
}

const suma2=()=>{
    let number1=12321;//variables locales ->solo viven dentro de su contenedor: funcion 
    let number2=3333;
    console.log("accion suma2")
   return number1+number2
}

//ejecutar

console.log(suma2())
console.log(suma(3,4))
suma2()
suma2()
suma("hola",4)


//indice    0       1   2
let lista=[nombre,23423,true]//arrays |listas|arreglos -> [,,]
let lista2=["sdf",lista]

console.log(lista)
console.log(lista2)
//length -> largo o cantidad de items de una lista (strings,cantidad de caracteres)

//acceder a valor del array
console.log(lista[2]);


//metodos de los array :
// array.push() array.unshift() -> agregar items a la lista (al final de la lista o al inicio)
//array.pop()| array.shift() -> sacar el ultimo o el primer item de la lista
//aray.splice(indice,cantidad,alt-nuevo)->sacar uno o varios items de la lista ,reemplazar uno o varios items de la lista

//objetos -> propiedad o key -> {propiedad:valor, propiedades:valor }

let objeto={
    marca:true,
    cantidad:23234,
    lista:lista2
}

console.log(objeto.cantidad)
objeto.marca="nuevo valor de la propiedad"

console.log(objeto)
let listaVacia=[];
let listaPresonas=[
    {nombre:"Marta",
        apellido:"Perez",
        accion:suma2
    },
    {nombre:"Juan",
        apellido:"Gomez"
    },
    {nombre:"Luis",
        apellido:"Vera"
    }

]

console.log(listaPresonas[2].apellido)
listaPresonas[0].accion()//ejecuta la funcion(metodo) suma2 que se encuentra como valor de la propiedad del objeto

//condiciones | bucles | eventos(DOM) -> repasar la semana que viene 


