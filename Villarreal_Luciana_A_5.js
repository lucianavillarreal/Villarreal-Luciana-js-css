const prompt = require('prompt-sync')();
//Crear un programa donde se introduzcan los tres ángulos internos de un triángulo y 
//se determine si el triángulo es válido o no.
num1 = prompt("ingrese el primer grado: ");
num2 = prompt("ingrese el segundo grado: ");
num3 = prompt("ingrese el tercer grado: ");
suma=(parseInt (num1)+ parseInt (num2)+ parseInt(num3))
if (suma==180){
    console.log("los angulos corresponde a un triangulo")
}
else{
    console.log("los angulos corresponde a otra figura")
}