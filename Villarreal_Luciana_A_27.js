
//Crear una función que retorne la cantidad de balances positivos utilizando la variable  “balancesUltimoSemestre” del ejercicio anterior.
//  let balancesUltimoSemestre = [
//    { mes: "julio", ganancia: 50 }, 
//    { mes: "agosto", ganancia: -12 }, 
//    { mes: "septiembre", ganancia: 1000 }, 
//    { mes: "octubre", ganancia: 300 }, 
//    { mes:  "noviembre", ganancia: 200 }, 
//    { mes: "diciembre", ganancia: 0 }
//  ];

let balancesUltimoSemestre = [
    { mes: "julio", ganancia: 50 },
    { mes: "agosto", ganancia: -12 },
    { mes: "septiembre", ganancia: 1000 },
    { mes: "octubre", ganancia: 300 },
    { mes: "noviembre", ganancia: 200 },
    { mes: "diciembre", ganancia: 0 }
  ];
  
  function Positivos(balances) {
    let contador = 0;
    for (let i = 0; i < balances.length; i++) {
      if (balances[i].ganancia > 0) {
        contador++;
      }
    }
    return contador;
  }
  
  let resultado = Positivos(balancesUltimoSemestre);
  console.log(resultado); 
  