function EventListener(){
    document.getElementById("calcular").addEventListener("click" , multiplo());
}

function multiplo(){
    var elm1 = Number(document.getElementById("uno").value);
    var elm2 = Number(document.getElementById("dos").value);
    var imprmultiplo = document.getElementById("alerta");


    if(elm1 % elm2 == 0){
        imprmultiplo.innerText = "El primer número es multiplo del segundo número"
    }

    else{
        imprmultiplo.innerText = "El primer número no es multiplo del segundo"
    }
}