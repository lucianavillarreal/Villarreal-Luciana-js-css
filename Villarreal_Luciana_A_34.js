const prompt = require('prompt-sync')();
//Ahora deben refactorizar la función doubleFilter, que recibirá los mismos tres parámetros pero en vez de devolver
//un arreglo con los nombres de los países que cumplan con las condiciones, devolverá un objeto con una key ‘nombres’ 
//que tendrá como valor un arreglo con los nombres de los países y otra llamada ‘población total’ cuyo valor sea la suma
//de las poblaciones de los países filtrados.
function doubleFilter(paises, continente, poblacion) {
  let paisesFiltrados = paises.filter(function(pais) {
    return pais.continente === continente && pais.poblacion >= poblacion;
  });

  return paisesFiltrados;
}

var paises = [
  {nombre: "argentina", continente: "sudamerica",  poblacion: 40000000},
  {nombre: "brasil", continente: "sudamerica", poblacion: 300000000},
  {nombre: "venezuela", continente: "sudamerica", poblacion: 25000000},
  {nombre: "chile", continente: "sudamerica", poblacion: 10000000},
  {nombre: "australia", continente: "oceania", poblacion: 18000000},
  {nombre: "nueva zelanda", continente: "oceania", poblacion: 8000000},
  {nombre: "china", continente: "asia", poblacion: 1000000000},
  {nombre: "tailandia", continente: "asia", poblacion: 32000000},
  {nombre: "vietnam", continente: "asia", poblacion: 23000000},
  {nombre: "españa", continente: "europa", poblacion: 29000000},
  {nombre: "alemania", continente: "europa", poblacion: 33000000},
  {nombre: "francia", continente: "europa", poblacion: 65000000},
  {nombre: "portugal", continente: "europa", poblacion: 4000000},
  {nombre: "grecia", continente: "europa", poblacion: 12000000},
];
num = prompt("ingrese el continente que quiere que se muestre: ");
num1 = prompt("ingrese la poblacion minima: ");
let continente = num;
let poblacionMinima = num1;

let paisesFiltrados = doubleFilter(paises, continente, poblacionMinima);
console.log(paisesFiltrados);

