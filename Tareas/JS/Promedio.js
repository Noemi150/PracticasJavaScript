function EventListener(){
    //instruccion solo de boton de html y esta atento cuando le damos click a calcular
    document.getElementById("CalcularNumeros").addEventListener("click" , promedio());
}

function promedio(){
    var cal1 = Number(document.getElementById("cal1").value);
    var cal2 = Number(document.getElementById("cal2").value);
    var cal3 = Number(document.getElementById("cal3").value);
    var cal4 = Number(document.getElementById("cal4").value);

    var imprpromedio = document.getElementById("calcularpromedio")
    var imprpromedio2 = document.getElementById("calcularmenor")
    var valorminimo, promedio;

    if(cal1 < cal2 && cal1 < cal3 && cal1 < cal4){
        valorminimo = Math.min(cal1, cal2, cal3, cal4);
        imprpromedio2.innerText = valorminimo;
        promedio = (cal2 + cal3 + cal4) / 3;
        imprpromedio.innerText = promedio;
    }

    if(cal2 < cal1 && cal2 < cal3 && cal2 < cal4){
        valorminimo = Math.min(cal1, cal2, cal3, cal4);
        imprpromedio2.innerText = valorminimo;
        promedio = (cal1 + cal3 + cal4) / 3;
        imprpromedio.innerText = promedio;
    }

    if(cal3 < cal1 && cal3 < cal2 && cal3 < cal4){
        valorminimo = Math.min(cal1, cal2, cal3, cal4);
        imprpromedio2.innerText = valorminimo;
        promedio = (cal1 + cal2 + cal4) / 3;
        imprpromedio.innerText = promedio;
    }
    
    if(cal4 < cal1 && cal4 < cal2 && cal4 < cal3){
        valorminimo = Math.min(cal1, cal2, cal3, cal4);
        imprpromedio2.innerText = valorminimo;
        promedio = (cal1 + cal2 + cal3) / 3;
        imprpromedio.innerText = promedio;
    }
   
}