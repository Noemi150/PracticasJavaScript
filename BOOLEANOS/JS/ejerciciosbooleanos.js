function Ejerciciosdevariables(){
//Todas las variables se tiene que declarar
    //var mayorde25 = false;
    //mayorde25 = variablediferente;

    //cuadro de texto donde se puede imprimir un rsultado
    //alert("Mostrar mensaje no se va a ejecutar")

    var foco = false;

   // if(foco == true){
       // alert("El foco está encendido");
    //}
    //else{
     //   alert("El foco está apagado")
    //}

    //! se encarga de cambiar el valor de foco
    //if(!foco == true){
        //alert("El foco esta encendido")
    //}
    //else{
        //alert("El foco esta apagado")
    //}
    //variable númerica
    var a = 1, b =2, c =3;
    //variable booleana
    var casado = true;
    var mayorde25 = false;
    //variable de texto
    var texto1 = "En un lugar de la mancha"

    //SI MANDO LLAMAR LA VARIABLE IMPRIME TRUE
    console.log("El valor de la variable casado es" + " " + casado);
    console.log("El valor de la variable mayor a 25 es" + " " + mayorde25);

    //El booleanotrue se convierte en 1 para poder multiplicar 1*5
    console.log("La multiplicación de true es" + " " + (casado*b));

    //El booleano false se convierte en 0 para poder multiplicar * 0
    console.log("la multiplicación del false es" + " " + (mayorde25 * c));

    //La variable casado vale true por que no le hemos hecho ningún cambio
    console.log("La variable casado ahora vale" + " " + casado);
    console.log("La variable mayor de 25 ahora vale" + " " + mayorde25);

    //sumar las variables a+b+c
    console.log("La suma de los números es" + " " + (a + b + c));

    //Multiplicar frases con numero imprime NaN es decir que no es un número
    console.log("Que obtenemos multiplicando un texto con un número" + " " + (texto1 * 1));

    //toString - cualquier tipo de variable lo escribe el resultado en un texto
    //un booleano como string imprime un true como texto
    console.log("Mostramos lo equivalente de true en texto" + " " + casado.toString());

    //imprime el texto
    console.log(texto1.toString());

    //imprime la frase separada por una coma
    var arreglo = ["Quiero", "aprender"];
    console.log(arreglo.toString());

    //imprime el número como si fuera texto y si no suma a.toString + b.toString solo los junta
    console.log(a.toString() + b.toString());
    console.log(b.toString() + c.toString());
    console.log(c.toString() + a.toString());

    //suma de variables
    console.log(a + b);
    console.log(b + c);
    console.log(c + a);
}