const prompt = require('prompt-sync')();
//Crear una función llamada toTime() que tome como argumento un número entero (segundos).
//La función debe convertir el valor recibido en un string ("") que describa cuantas horas
//y minutos comprenden esa cantidad de segundos
//El resultado debe tener el siguiente formato: "X hora (s) y X minuto (s)"
num = parseInt(prompt("ingrese los segundos: "));
function toTime(num) {
    if (num>3600){
        horas=Math.floor( num/3600);
        n1=num - horas *3600;
        }
    else{
        horas=0;
        n1=num;
        }
    if (n1>60){
        minutos=Math.floor( n1/60);
        seg=n1-minutos*60;
        }
    else {
        minutos=0;
        seg=n1;
        }
    
    
    var h=horas.toString();
    var m=minutos.toString();
    var s=seg.toString();
    const tiempo=h+' hora (s) con '+ m+' minutos y '+s+' segundos';
    return tiempo;
    }
tiempo=toTime(num)
console.log(tiempo);