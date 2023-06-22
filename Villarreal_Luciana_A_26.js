const prompt = require('prompt-sync')();
//Crear una función llamada “gananciaTotal” que recibe como argumento un array con los balances de un periodo
//y tal como lo indica su nombre retorna la ganancia total de ese periodo.
//Utilizar la siguiente variable: 
//let balancesUltimoSemestre = [
//  { mes: "julio", ganancia: 50 }, 
//  { mes: "agosto", ganancia: -12 }, 
//  { mes: "septiembre", ganancia: 1000 }, 
//  { mes: "octubre", ganancia: 300 }, 
//  { mes:  "noviembre", ganancia: 200 }, 
//  { mes: "diciembre", ganancia: 0 }
//];
//Output esperado:
//1538

let balancesUltimoSemestre = [
    { mes: "julio", ganancia: 50 },
    { mes: "agosto", ganancia: -12 },
    { mes: "septiembre", ganancia: 1000 },
    { mes: "octubre", ganancia: 300 },
    { mes: "noviembre", ganancia: 200 },
    { mes: "diciembre", ganancia: 0 }
  ];
  
  function gananciaTotal(balances) {
    let total = 0;
    for (let i = 0; i < balances.length; i++) {
      total += balances[i].ganancia;
    }
    return total;
  }
  
  let resultado = gananciaTotal(balancesUltimoSemestre);
  console.log(resultado); 
  
