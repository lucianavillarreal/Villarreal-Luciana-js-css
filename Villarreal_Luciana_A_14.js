const prompt = require('prompt-sync')();
//Crear una función llamada “divisibles” que reciba dos parámetros:
//Un arreglo de números 
//y un divisor.
//Esta deberá retornar un arreglo con los números que sean divisibles por el segundo parámetro.
let arreglo =[];
let div=[];
console.log("Cargar un arreglo de números");
a=1;
while (a==1){
    num = parseInt(prompt("ingrese un numero: "));
    arreglo.push(num);    
    a = parseInt(prompt("Desea cargar otro número al arreglo?  1-Si 2-No :"));
    }
function divisibles(arreglo, x) {
    for ( var i =0; i<=arreglo.length - 1;i++){
        if (arreglo[i] % x==0){
            div.push(arreglo[i])
        }
   }
    return div;
}
num2 = parseInt(prompt("ingrese el divisor: "));
div=divisibles(arreglo,num2);
console.log(div);
