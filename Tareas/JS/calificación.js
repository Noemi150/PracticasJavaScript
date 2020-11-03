function Eventlistener(){
    document.getElementById("resultado").addEventListener("click", calcularcalificacion());
}

function calcularcalificacion(){
    var calificacion = Number(document.getElementById("calificacion").value);
    var imprimircal = document.getElementById("imprimircalificaciones");
     
    if(calificacion == 10){
        imprimircal.innerText= "Tu calificación es  A"
    }
    if(calificacion == 9){
        imprimircal.innerText = "Tu calificación es  B"
    }
    if(calificacion == 8){
        imprimircal.innerText = "Tu calificación es  C"
    }
    if(calificacion == 7 && calificacion == 6){
        imprimircal.innerText = "Tu calificación es  D"
    }
    // if(calificacion == 5 && calificacion == 4 && calificacion == 3 && calificacion == 2 && calificacion == 1 && calificacion == 0){
    //     imprimircal.innerText = "Tu calificación es F"
    // }
    if(calificacion <=5){
        imprimircal.innerText = "Tu calificación es F"
    }

    
}