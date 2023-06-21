const prompt = require('prompt-sync')();
//Crear una función llamada “nuevoArreglo” que reciba un número como parámetro y 
//que devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado.
let arreglo =[];
num1 = parseInt(prompt("ingrese la cantidad de elementos: "));

function nuevoArreglo(n1) {
    for ( var i=0; i<n1;i++){
        num = parseInt(prompt("ingrese un numero: "));
        arreglo.push(num)
        
    }
    return arreglo;
}
sum=nuevoArreglo(num1);
console.log(sum);
