const prompt = require('prompt-sync')();
//Pedir por prompt una número y luego crear una función que nos diga si dicho número es divisible por 5 o no.
//Mostrar el resultado en la consola.
num = parseInt(prompt("ingrese un numero: "));
var2=(num % 5);
if (var2==0){
    console.log("si es divisible por 5")
}
else{
    console.log("no es divisible por 5")
}



