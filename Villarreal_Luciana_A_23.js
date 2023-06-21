const prompt = require('prompt-sync')();
//Crear una función pluck que tome dos parámetros, un arreglo de objetos y el nombre de una propiedad. 
//La función devolverá un nuevo arreglo solo con los valores dentro de la propiedad recibida.
//Ejemplo:
//var productos = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }]
//pluck(productos, 'name') // ['TV LCD', 'Computadora']
//pluck(productos, ‘price’) // [100, 500]
lista=[];
var prod = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }];
function pluck(prod,prop) {
    if (prop == "name"){
        for (var i=0 ; i<prod.length ; i++){
            lista.push(prod[i].name);
            }
        }
    else {
        for (i=0 ; i<prod.length ; i++){
            lista.push(prod[i].price);
            }
         }
    return lista;
}
num = prompt("ingrese name o price: ");
lista=pluck(prod,num);
console.log(lista);