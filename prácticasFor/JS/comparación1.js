//Quiere comparar si una persona es mayor de edad y si tiene INE y si ya puede tomar o no

function EvenListener(){
    //Obtiene el id del boton que esta en html y va a estar atentocuando le de click
    document.getElementById("calcularedad").addEventListener("click" , calcularedad());
}
    
    function CalcularEdad()
    {
        //Obtener el ID del input, pero con el .value obtenemos lo que ingresamos en el input
        //El number indica que tipo de variable es
    var edad = Number(document.getElementById("edad").value);
    //se declara otra variable para leer el valor del input ine
    var ine = Number(document.getElementById("INE").value);
    //Se crea variable para imprimir la información
    var imprimirmensaje = ("")

    if(edad >= 18 && Ine > 0 ){
        console.log("La persona es mayor de edad y puede tomar");
    }
    else if(edad<18 && ine == 0{
        console.log("La persona no es mayor de edad, no puede tomar")
    }


    }
    