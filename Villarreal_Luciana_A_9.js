const prompt = require('prompt-sync')();
//Crear un programa que pida un color al usuario y retorne por consola el string correspondiente:
//En caso que el color recibido sea “azul”, → Devuelve “blue”
//En caso que el color recibido sea “rojo”, → Devuelve “red”
//En caso que el color recibido sea “verde”, → Devuelve “green”
//En caso que el color recibido sea “naranja”, → Devuelve “orange”
//En caso que el color recibido sea “amarillo”, → Devuelve “yellow”
//En caso que el color recibido no sea ninguno de los anteriores → Devuelve “Color not found”
//Se debe usar el statement Switch.
color= prompt("ingrese un color: ");
switch (color.toUpperCase()){
    case "AZUL":
      console.log("blue")
      break;
    case "ROJO":
      console.log("red")
      break;
    case "AZUL":
      console.log("blue")
      break;
    case "VERDE":
      console.log("green")
      break;
    case "NARANJA":
      console.log("orange")
      break;
    case "amarillo":
      console.log("yellow")
      break;
    default:
      console.log("Color not found")
}