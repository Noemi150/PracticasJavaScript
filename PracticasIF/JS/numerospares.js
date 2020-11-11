function EvenListener(){
    document.getElementById("calcula").addEventListener("click" , numpar())
}

function numpar(){

    var num = Number(document.getElementById("Numero").value);
    var imprnum = document.getElementById("alerta")

    if(num % 2 == 0){
        imprnum.innerText = "Si es par"
    }
    else{
        imprnum.innerText = "Es impar"
    }
}