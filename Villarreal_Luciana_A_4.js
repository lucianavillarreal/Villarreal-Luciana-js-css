const prompt = require('prompt-sync')();
//Pedir por prompt una temperatura en grados fahrenheit y luego crear una función que convierta
//la dicha temperatura a grados Celsius.
//Finalmente mostrar por consola el resultado de la conversión.

num = prompt("ingrese la temperatura en grado fahrenheit: ");
c=((num-31)*5/9)
console.log("los grados",num +"F° equivalen a",c + "C°")



