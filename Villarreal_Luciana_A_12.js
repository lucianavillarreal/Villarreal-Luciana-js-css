const prompt = require('prompt-sync')();
//Escribí un loop que imprima en la consola los números del 1 al 100. 
//Deberá cumplir las siguientes condiciones: si el número a imprimir es múltiplo de 3, 
//debe mostrar en la consola el string 'Fizz'. En cambio, si es múltiplo de 5, debe mostrar:
//'Buzz'. Por último, si es múltiplo de ambos debe mostrar: 'FizzBuzz’


for ( var i =0; i<=100;i++){
    if (i % 3===0 && i % 5===0){
        console.log("FizzBuzz")
    }
    else{
        if (i % 3==0){
            console.log("Fizz")
        }
        else{
            if (i % 5==0){
            console.log("Buzz")
            }
            else {
                console.log(i)
            }

        }
    }
}



