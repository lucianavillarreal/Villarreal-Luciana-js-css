const prompt = require('prompt-sync')();
//Crear una función llamada “contarHasta” que pide un número positivo por consola y retorna una lista
// con los números desde el 0 hasta el número recibido.
//Utilizar el bucle While para hacerlo. 


function contarHasta() {
    let numero = parseInt(prompt("Ingrese un número positivo:"));
    
    while (isNaN(numero) || numero < 0) {
      numero = parseInt(prompt("El número ingresado no es válido, Ingrese un número positivo:"));
    }
  
    let listaNumeros = [];
    let contador = 0;
    
    while (contador <= numero) {
      listaNumeros.push(contador);
      contador++;
    }
  
    return listaNumeros;
  }
  
  let resultado = contarHasta();
  console.log(resultado);
  