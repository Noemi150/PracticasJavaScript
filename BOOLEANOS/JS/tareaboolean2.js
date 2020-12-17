function EventListener(){
    document.getElementById("boton").addEventListener("click",Booleano());
}

function Booleano(){
    var imp = document.getElementById("listado");
     var bool1 = Boolean(100);
     var bool2 = Boolean(3.14);
     var bool3 = Boolean(-15);
     var bool4 = Boolean("Hola");
     var bool5 = Boolean("falso");
     var bool6 = Boolean(1 + 7 + 3.14);
     var bool7 = Boolean(5 < 6) ;
     var bool8 = Boolean(0);
     var bool9 = Boolean(-0);
     var bool10 = Boolean("");
     var bool11 = Boolean();
     var bool12 = Boolean(null);
     var bool13 = Boolean(false);
     var x;
     var bool14 = Boolean(10 / x);
     
    var lista = document.createElement("li");
    lista.setAttribute("class", "list-group-item");
    lista.innerText = "El número 100 en booleano es:"+" "+bool1;
    imp.appendChild(lista);

    var lista = document.createElement("li");
    lista.setAttribute("class", "list-group-item");
    lista.innerText = "El número 3.14 en booleano es:"+" "+bool2;
    imp.appendChild(lista);
    

    var lista = document.createElement("li");
    lista.setAttribute("class", "list-group-item");
    lista.innerText = "El número -15 en booleano es:"+" "+bool3;
    imp.appendChild(lista);

    var lista = document.createElement("li");
    lista.setAttribute("class", "list-group-item");
    lista.innerText = "la palabra HOLA en booleano es:"+" "+bool4;
    imp.appendChild(lista);

    var lista = document.createElement("li");
    lista.setAttribute("class", "list-group-item");
    lista.innerText = "false en booleano es:"+" "+bool5;
    imp.appendChild(lista);

    var lista = document.createElement("li");
    lista.setAttribute("class", "list-group-item");
    lista.innerText = "La suma de (7 + 1 + 3.14) en booleano es:"+" "+bool6;
    imp.appendChild(lista);

    var lista = document.createElement("li");
    lista.setAttribute("class", "list-group-item");
    lista.innerText = "La comparacion de (5<6) en booleano es:"+" "+bool7;
    imp.appendChild(lista);

    var lista = document.createElement("li");
    lista.setAttribute("class", "list-group-item");
    lista.innerText = "El número 0 en booleano es:"+" "+bool8;
    imp.appendChild(lista);

    var lista = document.createElement("li");
    lista.setAttribute("class", "list-group-item");
    lista.innerText = "El número -0 en booleano es:"+" "+bool9;
    imp.appendChild(lista);

    var lista = document.createElement("li");
    lista.setAttribute("class", "list-group-item");
    lista.innerText = "Las comillas vacias (` `) en booleano es:"+" "+bool10;
    imp.appendChild(lista);

    var lista = document.createElement("li");
    lista.setAttribute("class", "list-group-item");
    lista.innerText = "El valor sin dato en booleano es:"+" "+bool11;
    imp.appendChild(lista);

    var lista = document.createElement("li");
    lista.setAttribute("class", "list-group-item");
    lista.innerText = "El número nulo (null) en booleano es:"+" "+bool12;
    imp.appendChild(lista);

    var lista = document.createElement("li");
    lista.setAttribute("class", "list-group-item");
    lista.innerText = "El Booleano False es:"+" "+bool13;
    imp.appendChild(lista);

    var lista = document.createElement("li");
    lista.setAttribute("class", "list-group-item");
    lista.innerText = "La divicion de un número y un letra (10/H) en booleano es:"+" "+bool14;
    imp.appendChild(lista);

}