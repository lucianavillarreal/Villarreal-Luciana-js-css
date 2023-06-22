const prompt = require('prompt-sync')();
//Crear la función “sumArray” que tome dos parámetros, un arreglo de números ordenados y un número.
//La función devolverá true, si cualquier combinación de dos números dentro del arreglo 
//suman el número del segundo parámetro. Sino, devolverá false.
//Output esperados:
//console.log(sumArray([2, 5, 7, 10, 11, 15, 20], 13)); // true     2+11 suman 13
//console.log(sumArray([2, 5, 7, 10, 11, 15, 20], 14)); // false
arreglo=[];
a=1;
while(a==1){
    nom=prompt("ingrese un valor: ");
    arreglo.push(nom);
    a=prompt("Desea agregar otro valor a la lista:  1-Si  2-No : ");
}
function sumArray(arreglo,num){
    valor=false;
    for (var i=0;i<=arreglo.length-1;i++){
        a=arreglo[i];
        for (var l=1;l<=arreglo.length-1;l++ ){
            b=arreglo[l];
            c=parseInt(a)+parseInt(b);
            if (c==num){
                valor=true;
                break;
                }
            }
    }
    return valor;
}
num = parseInt(prompt("ingrese un numero: "));
sum=sumArray(arreglo,num);
console.log(sum);