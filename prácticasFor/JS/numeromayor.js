function EventListener(){
    document.getElementById("calcular3numeros").addEventListener("click",calcularnumeros());
}

function calcularnumeros(){
    var num1 = Number(document.getElementById("numero1").value);
    var num2 = Number(document.getElementById("numero2").value);
    var num3 = Number(document.getElementById("numero3").value);
    var imprimirmensaje = document.getElementById("imprimir");

    if(num1 > num2 && num1 > num3 ){
        imprimirmensaje.innerText = num1 +" "+ "Es el mayor";
    }if(num2 > num1 && num2 > num3){
         imprimirmensaje.innerText = num2 + " " + "Es el mayor";
    }if(num3 > num1 && num3 > num2){
        imprimirmensaje.innerText = num3 + " " + "Es el mayor";
    }
   

}