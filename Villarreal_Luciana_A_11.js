const prompt = require('prompt-sync')();
//Crear una función que reciba un número y retorne “true” si dicho número es primo. Caso contrario devuelve “false”.
//Pista: un número primo solo es divisible por sí mismo y por 1
//Pista 2: Puedes resolverlo usando un bucle `for`
//Nota: Los números 0 y 1 NO son considerados números primos
function Primo(num) {
    if (num < 2) {
        return false;
       }
    else{
        div=0;
        z=num+1;
        for (let i = 1; i<z; i++){
             if (num % i ==0) {
                div=div+1;
                }
            } 
        if (div>2){  
            return false;
            }
        else {
            return true
        }
       }
}
num=parseInt(prompt("ingrese un numero:"));
a=Primo(num);
console.log(a);
