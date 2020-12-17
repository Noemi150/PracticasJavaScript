function EventListener(){
    document.getElementById("buton").addEventListener("click", guardarinfo());
}

function guardarinfo(){
    var username = String(document.getElementById("nombre").value);
    var Email = String(document.getElementById("email").value);
    var password = String(document.getElementById("contraseña").value);
    var password2 = String(document.getElementById("contraseña2").value);

    if(username != "" && Email != "" && password != "" && password2 != ""){
        localStorage.setItem("NombreUsuario", username);
        localStorage.setItem("Email", Email);

        alert("La información se guardó correctamente");
    }
    if(password == password2){
        localStorage.setItem("Password", password);
        localStorage.setItem("ConfirmaPassword", password2);
        alert("La información se guardó correctamente");
    }else{
        alert("El password no coincide");
    }
    alert("Verifica que la información sea correcta");

}