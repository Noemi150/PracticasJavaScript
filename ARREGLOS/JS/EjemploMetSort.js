function EventListener(){
    document.getElementById("btncalcular").addEventListener("click", calcularnumeros());
}

function calcularnumeros(){
    var ArregloNumero = [1,4,2,9,11,44,111,7,4];
    var imprimirmenormayor = document.getElementById("imprimirmenoramayor");
    var imprimirmayormenor = document.getElementById("imprimirmayoramenor");

    //Ordenar alfabeticamente los números
    ArregloNumero.sort();
    //creo una función de sort para ordenar los numeros numericamene de menor a mayor
    imprimirmenormayor.innerText = ArregloNumero.sort(MenorAMayor);
    //creo una función en el metodo sort para poder ordenar los números numericamente de mayor a menor
    imprimirmayormenor.innerText = ArregloNumero.sort(MayorAMenor);
}

//funcion que me permite ordenar de mayor a menor el arreglo
function MenorAMayor(elem1, elem2){
    //termina la función y regresa el valor
    return elem1 - elem2
}

function MayorAMenor(elem1, elem2){
    return elem2 - elem1
}