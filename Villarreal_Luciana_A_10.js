const prompt = require('prompt-sync')();
//Crear una función llamada “operadoresLogicos” con 3 números por parámetros que retorne lo siguiente:
//Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
//Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
//Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
//0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
//Si no se cumplen ninguna de las condiciones anteriores, retornar false.

function operadoresLogicos(){
    num1=parseInt(prompt("ingrese un numero:"))
    num2=parseInt(prompt("ingrese otro numero:"))
    num3=parseInt(prompt("ingrese otro numero:"))
    
    if (num1==0 || num2==0 || num3==0){
        console.log("Error")
    }
    else{
        if (num1>num2 & num1>num3 & num1>0){
            console.log("Número "+num1+" es mayor y positivo")
        }
        else{ 
            if (num1<0 || num2<0 ||num3<0){
                console.log("Hay negativos")
            }
            else{
                if (num3>num1 & num3>num2){
                    inc=(num3+1)
                    return inc;
                }
                else{
                    return false;
                }  
            }
        }     
    
    }
    
   
}
a=operadoresLogicos();
console.log(a)