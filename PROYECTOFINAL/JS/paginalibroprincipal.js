function EventListener(){
    document.getElementById("buton").addEventListener("click", guardarinfo());
}

function guardarinfo(){
    var NombreUsuario = String(document.getElementById("nombre").value);
    var apellido = String(document.getElementById("apellido").value);
    var email = String(document.getElementById("email").value);
    var mensaje = String(document.getElementsById("mensaje").value);

    //comparando cada uno de los inputs que no se ingrese ningún campo vacío
    if(NombreUsuario != "" && apellido != "" && email != "" && mensaje != ""){
        //Guardando la información en el local storage
        localStorage.setItem("NOMBRE", NombreUsuario);
        localStorage.setItem("APELLIDO", apellido);
        localStorage.setItem("E-MAIL", email);
        localStorage.setItem("MENSAJE", mensaje);



        alert("La información se guardó correctamente");
    }
}
    