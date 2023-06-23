

function esPalindromo(cadena) {
    // Eliminamos los espacios y convertimos a minúsculas
    let cadenaFormateada = cadena.replace(/\s/g, "").toLowerCase();
    
    // Invertimos la cadena
    let cadenaInvertida = cadenaFormateada.split("").reverse().join("");
    
    // Comparamos la cadena original con la invertida
    if (cadenaFormateada === cadenaInvertida) {
      return true;
    } else {
      return false;
    }
  }
  
  let ejemplo1 = "La ruta nos aporto otro paso natural";
  let ejemplo2 = "Hola mundo";
  
  console.log(esPalindromo(ejemplo1)); 
  console.log(esPalindromo(ejemplo2)); 
 
  