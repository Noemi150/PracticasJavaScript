function localstorage(){
    //guardar información en el local storage
    //setitem se encarga de guardar la información
    localStorage.setItem("Nombre", "Noemi Doria");
    localStorage.setItem("Numero", 30);
    localStorage.setItem("Booleano", true);
    localStorage.setItem("Arreglo", [1,2,3,4,5]);
   
    var ropa = {
        calzado: "tenis",
        calzado2: "pantunflas",
        calzado3: "chanclas",
        jeans: "pantalon mezqulilla"
    };
    localStorage.setItem("Objeto", JSON.stringify(ropa));

    //Imprimo en la consola en nombre que ya tengo en el LocalStorage
    console.log(localStorage.getItem("Nombre"));

    //removeitem
    //ingreso localStorage y selecciono removeItem, con la clave a remover y me elimina la clave y el valor
    localStorage.removeItem("booleano");

    //clear
    //limpiar la información que esta en el localstorage
    localStorage.clear();

    usuario = {
        Nombre: "Noemi",
        Edad: 19
    };

    //JSON.stringify es un formato que tiene javascript para guardar un objeto en el local storage
    localStorage.setItem("usuario", JSON.stringify(usuario));
    //JSON.parse es otro formato de javascript para obtener el objeto en el navegador o en consola
    console.log(JSON.parse(localStorage.getItem("usuario")));
}