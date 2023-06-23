const prompt = require('prompt-sync')();
//Crear una función que reciba un string por parámetro y retorne si esa cadena está formada sólo por mayúsculas,
// sólo por minúsculas o por mayúsculas y minúsculas.

function DetCadena(cadena) {
    let soloMayusculas = /^[A-Z]+$/.test(cadena);
    let soloMinusculas = /^[a-z]+$/.test(cadena);
  
    if (soloMayusculas) {
      return "La cadena está formada solo por mayúsculas.";
    } 
    else{
        if (soloMinusculas) {
            return "La cadena está formada solo por minúsculas.";
            } 
        else {
            return "La cadena está formada por mayúsculas y minúsculas.";
        }
    } 
        
  }
  
  let cadena1 = "HOLA";
  let cadena2 = "hola";
  let cadena3 = "Hola123";
  
  console.log(DetCadena(cadena1));
  console.log(DetCadena(cadena2));
  console.log(DetCadena(cadena3));
  