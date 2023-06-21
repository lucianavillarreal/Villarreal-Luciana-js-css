const prompt = require('prompt-sync')();
//Crea una función llamada "abbrevName" que reciba como parámetro un string. 
//El string recibido siempre tiene que incluir un espacio. La función debería convertir el string recibido en iniciales.
function abbrevName(nom){
    Ini=nom[0].toUpperCase() +". ";
    for(i=0;i<=nom.length;i++){
        if (nom[i]==" "){
            Ini=Ini+nom[i+1].toUpperCase() +".";
            break;
        }
    }
    return Ini;
}
nom=prompt("ingrese un string: ");
Iniciales=abbrevName(nom);
console.log(Iniciales);




