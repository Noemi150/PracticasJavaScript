function EventListener(){
    document.getElementById("compararedad").addEventListener("click", compararedad());
}
function compararedad(){
    var hermano1 = Number(document.getElementById("Hermano+").value);

    var hermano2 = Number(document.getElementById("Hermano-").value);

    var imprimirmensaje = document.getElementById("mayor");

    var diferenciaedad = document.getElementById("diferencia");
    var diferencia = 0;

   




     if(hermano1 > hermano2){
         imprimirmensaje.innerText = "El primer hermano es el mayor con" +  hermano1;
         diferencia = hermano1-hermano2;

         console.log("El primer hermano es mayor")
     }



     else if(hermano1 < hermano2) {

        imprimirmensaje.innerText = "El segundo hermano es el mayor con" +  hermano2;

        diferencia = hermano2-hermano1;
        console.log("El segundo hermano es el mayor")
    }

    diferenciaedad.innertext = "LA DIFERENCIA DE EDAD ES DE" + diferencia + "años" ;
}
