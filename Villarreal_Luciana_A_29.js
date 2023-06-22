const prompt = require('prompt-sync')();
//Crear un programa que pida al usuario que teclee un número y se repita hasta que este teclee un 0.
// Además, al finalizar mostrará por consola la suma de todos los números tecleados.

function sumaNumeros() {
  let numero = parseInt(prompt("Ingrese un número (ingrese 0 para finalizar):"));
  let suma = 0;

  while (numero !== 0) {
    suma += numero;
    numero = parseInt(prompt("Ingrese un número (ingrese 0 para finalizar):"));
}

  return suma;
}

let resultado = sumaNumeros();
console.log("La suma de los números ingresados es: " + resultado);
