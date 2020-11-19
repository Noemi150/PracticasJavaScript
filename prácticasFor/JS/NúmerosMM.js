//se requiere un algoritmo para determinar, de N cantidades, cuantas son menores o iguales a 0 y cuantas son mayores a 0


function NumerosMayoresMenores(){

    //con esta instruccion vamos a saber cuantos números vamos a contar
    //prompt es un cuadro de texto que nos permite ingresar información
    var Nnumeros = prompt("¿Cuántos números vas a ingresar?"); //10
    var contador = 0, contadorneg=0;
    var contador2 = 1, contadorneg2=1;

    //for(var x=0; x<4; x++)
    //for(inicializar una variable; realizar la comparación con la variable; contar de 1 en 1 la variable);
    for(var x=0; x<Nnumeros; x++){
        var numero = prompt("Ingresa un número");
        if(numero >= 0){
            //se utiliza para contar los números positivos
            contador = contador + contador2;
        }
        else{
            //se utiliza para contar los números negativos
            contadorneg = contadorneg +contadorneg2;
        }
    }
    alert("Los números mayores a cero son" + contador + "Los menores a cero son contador" + contadorneg);
}