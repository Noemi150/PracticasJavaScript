function EventListenr(){
    document.getElementById("boton").addEventListener("click", MetodoBooleano());
}

function MetodoBooleano(){
    var impr1 = document.getElementById("impr1");
    var impr2 = document.getElementById("impr2");
    var impr3 = document.getElementById("impr3");
    var impr4 = document.getElementById("impr4");


    var num1 = 50; 
    var num2 = 100;
    var booleano1 = true;
    var booleano2 = false;


    impr1.innerText = "El resultado de true + la variable numerica es:"+" "+(booleano1 + num1);
    impr2.innerText = "El resultado de false + la variable numerica es:"+" "+(booleano2 + num2);

    impr3.innerText = "Boolean (true) + to.String =" + " " + booleano1.toString();
    impr4.innerText = "Boolean (false) + .toString:"+" "+ booleano2.toString();
}