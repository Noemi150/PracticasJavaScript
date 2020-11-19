function EventListener(){
    document.getElementById("calcular").addEventListener("click" , calcularnum())
}

function calcularnum(){
       
    var Nnumero = prompt("¿Cuantos números vas a ingresar?");
    var numpositivo = document.getElementById("numeropos");
    var promediopositivo = document.getElementById("promediopos")
    var promediotodos = document.getElementById("promediotodos")
    var contador=0, sumapositivo=0, numerosneg=0, contador3=0, promediototal=0; promedio=0, promedio2=0;


    for(var i=0; i<Nnumero; i++){
        var num = Number(prompt("Ingrese un numero"));

      if(num > 0){
          contador++;
          sumapositivo = num + sumapositivo;
          promedio = sumapositivo / contador;
        }else{
          contador3++;
          numerosneg = num + numerosneg;
          promedio2 = numerosneg / contador3;
      }
      promediototal = (promedio + promedio2) / Nnumero;

    }
     numpositivo.innerText = "Numeros mayores a 0 :" + " "+ contador;
     promediopositivo.innerText = "Promedio de los numeros positivios :" + " "+ promedio;
     promediotodos.innerText ="Promedio de todos los numeros es :"+" "+promediototal;

}