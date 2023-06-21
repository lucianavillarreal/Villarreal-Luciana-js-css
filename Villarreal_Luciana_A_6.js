const prompt = require('prompt-sync')();
//Crear un programa que le pida al usuario dos números en un Prompt y 
//luego muestre en por consola cuál es el número mayor.

num = prompt("ingrese un numero: ");
num2 = prompt("ingrese un numero: ");
if (num<num2){
    console.log("el numero mayor es:",num2)
}
else{
    console.log("el numero mayor es",num)
}


