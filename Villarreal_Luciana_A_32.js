const prompt = require('prompt-sync')();
//Crear un programa que solicite por consola al usuario que ingrese primero un número y luego otro. 
//Este debe retornar el valor de la suma y preguntar al usuario si quiere repetir la operación ingresando “SI” o “NO”.
//Si el usuario ingresa “SI” el programa comienza nuevamente.
//Si el usuario ingresa “NO” el programa finaliza.
//En caso de que el usuario ingrese una cadena diferente, debe volver a realizar la pregunta hasta que el input coincida 
//con uno de los strings “SI” o “NO”
//Pista: para este ejercicio necesitarás utilizar bucles Do While. Y se puede usar utilizar un bucle dentro de otro.


function realizarOperacion() {
    let repetir = true;
  
    while (repetir) {
      let num1 = parseFloat(prompt("Ingrese el primer número:"));
      let num2 = parseFloat(prompt("Ingrese el segundo número:"));
  
      let suma = num1 + num2;
      console.log("La suma de los números es:", suma);
  
      let respuesta = "";
  
      while (respuesta !== "SI" && respuesta !== "NO") {
        respuesta = prompt("¿Desea repetir la operación? (SI/NO):").toUpperCase();
      }
  
      if (respuesta === "NO") {
        repetir = false;
      }
    }
  }
  
  realizarOperacion();
  