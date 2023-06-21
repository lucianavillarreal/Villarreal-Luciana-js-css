const prompt = require('prompt-sync')();
//Sumatoria
//Debés crear una función llamada `sumattion` que reciba un número como parámetro
//y que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo.
sum=0;

function sumattion(n) {
    num = parseInt(prompt("ingrese un numero: "));
    for (i=num ; i>0 ; i=i-1){
        sum=sum+i
    }
    return sum;
}

suma=sumattion(sum);
console.log(suma);
