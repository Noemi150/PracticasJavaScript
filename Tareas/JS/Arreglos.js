function arreglos(){

    var arreglo1 = ["EJERCICIO 1"];
    console.log(arreglo1);


    var semana = ["Martes","Miércoles","Jueves","Viernes","sábado"];
    console.log(semana);
    //Agregar información al final
    console.log(semana.push("Domingo"));
    console.log(semana.slice());
    //Agregar información al principio
    console.log(semana.unshift("Lunes"));
    console.log(semana.slice());


    var arreglo2 = ["EJERCICIO 2"];
    console.log(arreglo2);


    var nombrepersonas = ["Noemi","Valentina","Juan","Carlos"];
    console.log(nombrepersonas);
    console.log(nombrepersonas.push("María","Dani","Angelica"));
    console.log(nombrepersonas.slice());

    console.log(nombrepersonas.unshift("Carmen","Luis","Estefanía"));
    console.log(nombrepersonas.slice());

}