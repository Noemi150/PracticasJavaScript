function Eventlistener(){
    //mandar llamar al boton 1
    document.getElementById("click").addEventListener("click", daleclick());
    //mandar llamar al boton 2
    document.getElementById("click2").addEventListener("click", daleclick2());
    //mandar llamar boton 3
    document.getElementById("click3").addEventListener("click", daleclick3());
}
//La función del primer boton
function daleclick(){

    var salidaboton = document.getElementById("salida");

    //document.createelement se utiliza para crear la etiqueta desdejavascript
    var boton = document.createElement("button");

    //la instruccion set.atribute llamamos a la clase para darle forma al boton
    boton.setAttribute("class", "btn btn-primary btn-lg btn-block mt-2");
    boton.setAttribute("id", "button");
    boton.setAttribute("type", "button");
    boton.setAttribute("onclick", "click2")

    //Se utiliza para imprimir información en la etiqueta boton
    boton.innerText = "Boton Impreso"

    //appendChild se utiliza para imprimir el boton
    salidaboton.appendChild(boton);
}

//la función del segundo boton
function daleclick2(){
    var salida2 = document.getElementById("salida1");

    for(var i=0; i < 5; i++){
        var button = document.createElement("button");
        button.setAttribute("class", "btn btn-primary btn-lg btn-block mt-2");
        //se le agrega un texto al boton
        button.innerText = "Boton impreso varias veces";
        //Se imprime el boton en el jumbotron
        salida2.appendChild(button);
    }

   
}
//La función del terver boton
function daleclick3(){
    var listado = document.getElementById("listado");

    for(var x=0; x<5; x++){
        var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText = x;
        listado.appendChild(lista);
    }


}