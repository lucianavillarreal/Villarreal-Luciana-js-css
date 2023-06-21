const prompt = require('prompt-sync')();
//Crear una función llamada “arregloDeObjetos” que reciba un número como
//parámetro y devuelva un arreglo de objetos que tengan una propiedad llamada “valor” que contenga 
//el valor del número y sus anteriores

let lista=[];
function arregloDeObjetos(num) {
    for (i=num ; i>0 ; i=i-1){
        x="Valor "+i.toString();
        lista.push(x);    
    }
    return lista;
}
num = parseInt(prompt("ingrese un numero: "));
lista=arregloDeObjetos(num);
console.log(lista);
