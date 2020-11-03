function EventListener(){
    document.getElementById("semana").addEventListener("click", CalcularDias())
}
function CalcularDias(){

    var días = document.getElementById("dias").value;
    var imprimirdiasdelasemana = document.getElementById("imprimirdias");

    if(días == "1"){
        imprimirdiasdelasemana.innerText = "El día que seleccionaste es el domingo"
    }

    if(días == "2"){
        imprimirdiasdelasemana.innerText = "El día que seleccionaste es Lunes"
    }

    if(días == "3"){
        imprimirdiasdelasemana.innerText = "El día que seleccionaste es Martes"
    }

    if(días == "4"){
        imprimirdiasdelasemana.innerText = "El día que seleccionaste es Miercoles"
    }

    if(días == "5"){
        imprimirdiasdelasemana.innerText = "El día que seleccionaste es Jueves"
    }

    if(días == "6"){
        imprimirdiasdelasemana.innerText = "El día que seleccionaste es Viernes"
    }

    if(días == "7"){
        imprimirdiasdelasemana.innerText = "El día que seleccionaste es sábado"
    }
}