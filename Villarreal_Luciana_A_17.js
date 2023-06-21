const prompt = require('prompt-sync')();
//Crear una funcion llamada “breakStatement” que reciba un número e itere en un bucle aumentando
// en 2 hasta un límite de 10 veces. Guardar cada nuevo valor en un array y devolverlo.
//Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe 
//interrumpirse la ejecución y devolver: "Se interrumpió la ejecución" 
//Pista: usá el statement 'break'
let arreglo =[];
num1 = parseInt(prompt("ingrese un numero: "));
function breakStatement(n) {
    for ( var i=0; i<10;i++){
        if (i==n){
            console.log("Se interrumpió la ejecución");
            break;
        }
        arreglo.push(n);
        n=n+2;      
    }
    return arreglo;
}
arreglo=breakStatement(num1);
console.log(arreglo);