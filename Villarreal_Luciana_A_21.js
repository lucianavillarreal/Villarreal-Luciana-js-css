const prompt = require('prompt-sync')();
//Crear una función llamada “moveZeros” que reciba un arreglo como parámetro y devuelva otro con los números “0”
// ordenados al final.
arreglo=[];
a=1;
while(a==1){
    nom=prompt("ingrese un valor: ");
    arreglo.push(nom);
    a=prompt("Desea agregar otro valor a la lista:  1-Si  2-No : ");
}
function moveZeros(arreglo){
    m=arreglo.length-1;
    console.log(m);
    for(i=0;i<=m;i++){
        if (arreglo[i]=="0"){
            console.log(m);
            z=arreglo[m];
            arreglo[m]=arreglo[i];
            arreglo[i]=z;
            m=m-1;
            i=i-1;
        }
    }
    return arreglo;
}
arreglo=moveZeros(arreglo);
console.log(arreglo);