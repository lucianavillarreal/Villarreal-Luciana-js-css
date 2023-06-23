const prompt = require('prompt-sync')();


function juegoDeDados() {
    let dinero = 50;
    let numeroApostado = Number(prompt("Ingrese el número por el cual desea apostar (1-6):")) || 1;
    let montoApuesta = Number(prompt("Ingrese el monto de la apuesta (valor por defecto: 20):")) || 20;
  
    // Validar el monto de la apuesta
    if (montoApuesta <= 0 || montoApuesta > dinero) {
      console.log("Monto de apuesta inválido.");
      return;
    }
  
    // Generar el número del dado
    let dado = Math.floor(Math.random() * 6) + 1;
    console.log("Número obtenido: " + dado);
  
    // Verificar si acertó
    if (numeroApostado === dado) {
      let ganancia = montoApuesta * 2;
      dinero += ganancia;
      console.log("¡Felicidades! Ha acertado el número. Ha ganado $" + ganancia + ".");
    } else {
      dinero -= montoApuesta;
      console.log("Lo siento, no ha acertado el número. Ha perdido $" + montoApuesta + ".");
      console.log("Dinero restante: $" + dinero);
    }
  
    // Verificar si ha ganado o perdido el juego
    if (dinero <= 0) {
      console.log("¡Has perdido el juego!");
      return;
    } else if (dinero >= 200) {
      console.log("¡Has ganado el juego!");
      return;
    }
  
    // Jugar de nuevo
    juegoDeDados();
  }
  
  console.log("Bienvenido al juego de dados.");
  console.log("Dinero inicial: $50");
  
  juegoDeDados();
  