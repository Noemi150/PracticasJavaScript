function EventListener(){
    document.getElementById("costototal").addEventListener("click" , calcularcostos())
}

function calcularcostos(){
    var pres = Number(document.getElementById("presupuesto").value);
    var cost1 = Number(document.getElementById("costo1").value);
    var cost2 = Number(document.getElementById("costo2").value);
    var cost3 = Number(document.getElementById("costo3").value);
    var cost4 = Number(document.getElementById("costo4").value);
    var imprsum = Number(document.getElementById("suma").value);
    var imprres = Number(document.getElementById("resultado").value);
    var suma = cost1 + cost2 + cost3 + cost4


    if(sumatotal <= pres){
        imprsum.innerText = "La suma total de los precios es de:" + " " + suma;
        imprres.innerText = "Le alcanza el presupuesto";
    }

    else{
        imprsum.innerText = "La suma total de los precios es de:" + " " + suma;
        imprres.innerText =  "No alcanzó su presupuesto";
    }

}