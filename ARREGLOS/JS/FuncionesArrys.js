//Se va a crear un arreglo con los 7 días de la semana

function FunArrays(){
    var DiasSemana = new Array(7); //Se crea un cuadro con 7 posisiones o siete días de la semana

    //Se manda a llamar la información de cada cuadro o arreglo
    DiasSemana[0] = "Lunes";
    DiasSemana[1] = "Martes";
    DiasSemana[2] = "Miércoles";
    DiasSemana[3] = "Jueves";
    DiasSemana[4] = "Viernes";
    DiasSemana[5] = "Sábado";
    DiasSemana[6] = "Domingo";

    //imprimir el arreglo completo
    console.log(DiasSemana);
    //Imprimir un dia de la semana con su indice
    console.log(DiasSemana[4]);
//Se manda imprimir todos los días de la semana con su indice
    console.log(DiasSemana[0], DiasSemana[1], DiasSemana[2], 
        DiasSemana[3], DiasSemana[4], DiasSemana[5], DiasSemana[6]);

        //segunda forma de declarar un arreglo
    var semanas = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

    //imprimir el arreglo completo
    console.log(semanas);
    //imprimir un día de la semana con su indice
    console.log(semanas[4]);
    //imprimir todos los días de la semana con su indice
    console.log(semanas[0], semanas[1], semanas[2], semanas[3], semanas[4], semanas[5], semanas[6]);
}