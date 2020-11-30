function EventListener(){
    document.getElementById("btncalcular").addEventListener("click", calcularnumeros());
}
function calcularnumeros(){

    var arreglonumerico = [1,4,2,9,11,111,7,4];
    var menoramayor = document.getElementById("imprimirmenoramayor");
    var mayoramenor = document.getElementById("imprimirmayoramenor");

    arreglonumerico.sort();
    arreglonumerico.sort(MenorAMayor());
    arreglonumerico.sort(MayorAMenor());
}
//Mandar llamar elementos para poder utilizarlos y hacer operaciones con ellos
function MenorAMayor(elem1, elem2){
    //return se encarga de finalizar la operación
    return elem1 - elem2;
} 
    
