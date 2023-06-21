const prompt = require('prompt-sync')();
//Crear una función llamada “rango” que reciba tres parámetros:
//Un número de comienzo
//Un número de final
//y un sumador.
//Esta deberá retornar un arreglo con los números que estén entre el de comienzo y el de final, sumando de a tanto como sea el sumador.

let arreglo =[];
let sum=[];

num1= parseInt(prompt("ingrese un numero de inicio: "));
num2= parseInt(prompt("ingrese un numero de final: "));
num3 = parseInt(prompt("ingrese el sumador: "));
function rango(n1,n2,n3) {
    for ( i=n1; i<n2;i=i+n3){
        arreglo.push(i)
    }
    return arreglo;
}
sum=rango(num1,num2,num3);
console.log(sum);

