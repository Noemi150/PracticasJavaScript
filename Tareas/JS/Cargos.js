function EventListener(){
    document.getElementById("CalcularCargo").addEventListener("click", CalcularCargo());
}

function CalcularCargo(){
    var tipo = document.getElementsByName("Seguros").value;

    var enfermedad = document.getElementsByName("Enfermedad").value;

    var lents = document.getElementsByName("Lentes").value;

    var edad = document.getElementsByName("Edad").value;

    var alcohol = document.getElementsByName("Alcohol").value;

    var inicial1 = 1200

    var inicial2 = 950

    var preciofinal, Cargo1, Cargo2, Cargo3, Cargo4, Cargo5, Cargo6 = 0

    var imprimircargo = document.getElementsByName("imprimirCargoFinal");
    if(tipo == "1" && enfermedad == "3" && lentes == "5" && edad == "7" && alcohol == "9"){
        Cargo1 = (inicial1) = 40;
        preciofinal = inicial1 + Cargo1;
        imprimircargo.innerText = "El costo final del Seguro es" + preciofinal
    }



}