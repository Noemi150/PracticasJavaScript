function guardarinformacion(){
    var NombreUsuario = String(document.getElementById("usuario").value);
    var Email = String(document.getElementsByName("email").value);
    var password1 = String(document.getElementsByName("contraseña").value);
    var password2 = String(document.getElementsByName("contraseña2").value);

    //comparando cada uno de los inputs que no se ingrese ningún campo vacío
    if(NombreUsuario != "" && Email != "" && password1 != "" && password2 != ""){
        //Guardando la información en el local storage
        localStorage.setItem("NombreUsuario", NombreUsuario);
        localStorage.setItem("Email", Email);

        if(password1 == password2){
        localStorage.setItem("password1", password1);
        localStorage.setItem("password2", password2);


        alert("la información se guardó correctamente");
        }else{
            alert("Las contraseñas no coinciden");
        } 
    } else{
        alert("Revisa las contraseñas, no coinciden");
    }
}


function obtenerinformacion(){
    var imprimirNombre = document.getElementById("NombreUsuario");
    var imprimirEmail = document.getElementById("Email");
    var imprimirpass = document.getElementById("password1");

    imprimirNombre.innerText = "El Nombre del usuario es" + " " + localStorage.getItem("NombreUsuario");
    imprimirEmail.innerText = "El correo del usuario es:" + " " + localStorage.getItem("Email");
    imprimirpass.innerText = "La contraseña del usuario es:" + " " + localStorage.getItem("password1");
}