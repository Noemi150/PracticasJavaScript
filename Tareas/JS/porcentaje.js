function EventListener(){
    document.getElementById("descuento"); addEventListener("click", Porcentaje());
}

function Porcentaje(){

    var precio = Number(document.getElementById("precio").value);
    var imprimirdescuento = document.getElementById("descuentoagregado");
    var rebaja = 0;
    var preciofinal = 0;

 if(precio > 3600){
     preciofinal = precio * .84;
     rebaja = precio - preciofinal;
     imprimirdescuento.innerText = "Este producto tiene 16% de descuento. El precio total es de $" + preciofinal + " " + "Descuento total en pesos =" + " " + rebaja;
}  else{
    preciofinal = precio * .97;
    rebaja = precio - preciofinal;
    imprimirdescuento.innerText ="Este producto tiene 7% de descuento. El precio total es de $" + preciofinal + " " + "Descuento total en pesos =" + " " + rebaja;
} 
}