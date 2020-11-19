function Eventlistener(){
    document.getAnimations("boton").addEventListener("click", serienum());
}

function serienum(){
    var listado = document.getElementById("lista");
    listado.innerText = ""


     for(var x=1; x<=20; x++){
        var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText = x;
        listado.appendChild(lista);
     }



}