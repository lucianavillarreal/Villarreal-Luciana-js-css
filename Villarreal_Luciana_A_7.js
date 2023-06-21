const prompt = require('prompt-sync')();
//Crear un programa que determine si un año dado es bisiesto.
//En caso de que lo sea retornar por consola “El año ingresado es bisiesto”,
//y en caso de no serlo retornar “El año ingresado no es bisiesto”.

v1=prompt("ingrese un año: ");
v2=(v1%4)
if(v2==0){
    console.log("el año ingresado es bisiesto")
}
else{
    console.log("el año ingresado no es bisiesto")
}
