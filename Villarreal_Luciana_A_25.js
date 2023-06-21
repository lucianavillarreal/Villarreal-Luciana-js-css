const prompt = require('prompt-sync')();
//Sacar el valor total de todos los artículos que se encuentren en la tienda, pero que estén 
//separados por sección, cada artículo diferenciado de otro sin estar en el mismo arreglo.
//Crear una nueva función llamada “totalDeArticulos” que como parametro que tenga,
//haga referencia a un arreglo de productos de nuestro ecommerce.
//La función en general tendrá que devolver un nuevo arreglo con objetos que tengan el nombre
//de cada producto y el valor total de todos los artículos que se encuentren en la tienda.
//Utilizar la siguiente variable:
//var ecommerce = [{ nombre: "Samsung TV", precio: 6000, articulos:10}, 
//{ nombre: "DELL notbook", precio: 4000, articulos:30 },
// {nombre:"Auriculares Sony", precio: 1500, articulos:15}, 
//{nombre:"Monitor Philips", precio:12000, articulos:20}, 
//{nombre:"Teclado logitech", precio: 3000, articulos:5}] 
lista=[];
var ecommerce = [{ nombre: "Samsung TV", precio: 6000, articulos:10}, { nombre: "DELL notbook", precio: 4000, articulos:30 }, {nombre:"Auriculares Sony", precio: 1500, articulos:15}, {nombre:"Monitor Philips", precio:12000, articulos:20}, {nombre:"Teclado logitech", precio: 3000, articulos:5}] 

function pluck(ecommerce,prop) {
    if (prop == "nombre"){
        for (var i=0 ; i<ecommerce.length ; i++){
            lista.push(ecommerce[i].nombre);
            }
        }
    else {
        if (prop == "articulo"){
            for (var i=0 ; i<ecommerce.length ; i++){
                lista.push(ecommerce[i].articulos);
                }
            }
        else {
            if (prop == "precio"){
                for (i=0 ; i<ecommerce.length ; i++){
                    lista.push(ecommerce[i].precio);
                    }
                }
            }
        }
    return lista;
}
num = prompt("ingrese nombre, precio o articulo: ");
lista=pluck(ecommerce,num);
console.log(lista);








