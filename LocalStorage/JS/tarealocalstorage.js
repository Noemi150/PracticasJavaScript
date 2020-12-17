function EventListener(){
    document.getElementById("persona").addEventListener("click", btn1());
    document.getElementById("comida").addEventListener("click", btn2());
    document.getElementById("peliculas").addEventListener("click", btn3());
    document.getElementById("música").addEventListener("click", btn4());
}
//-----------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------

function btn1(){
    var imprimir = document.getElementById("imprimir1");

    var per = {
        Nombre: "Noemi",
        Apellido: "Doria",
        Edad: 19,
        Genero: "Mujer",
        Nacionalidad: "Mexicana"
    };
    var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText= JSON.stringify(per);
        imprimir.appendChild(lista);
        localStorage.setItem("PERSONA", JSON.stringify(per));
}
//----------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------
function btn2(){
    var impr2 = document.getElementById("imprimir2");

    var com ={
        Mexicana: "Tacos",
        Japonesa: "Sushi",
        Francesa: "papas a la francesa",
        Italiana: "Pizza",
        Estadounidense: "Hamburguesa"
    };
    var lista2 = document.createElement("li");
    lista2.setAttribute("class", "list-group-item");
    lista2.innerText= JSON.stringify(com);
    impr2.appendChild(lista2);
    localStorage.setItem("COMIDA", JSON.stringify(com));
}
//-------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------

function btn3(){
    var impr3 = document.getElementById("imprimir3");

    var pelis = {
        Terror: "La casa de cera",
        Comedia: "Norbbit",
        Ficción: "Volver al futuro",
        Romanticas: "Love 020"
    };
    var lista3 = document.createElement("li");
    lista3.setAttribute("class", "list-group-item");
    lista3.innerText= JSON.stringify(pelis);
    impr3.appendChild(lista3);
    localStorage.setItem("PELICULAS", JSON.stringify(pelis));
}
//--------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------

function btn4(){
    var impr4 = document.getElementById("imprimir4");

    var musica ={
        Rock: "ACDC, The Rolling stones, Pink Floyd, The Beatles etc...",
        Pop: "Adele, Michael Jackson, LP etc...",
        HipHop: "Eminem, 2Pac, Snoop Dog",
        RapRock: "Twenty one pilots, Linkin Park",
        JPop: "Twice, Kyary Pamyu"
    };
    var lista4 = document.createElement("li");
    lista4.setAttribute("class", "list-group-item");
    lista4.innerText= JSON.stringify(musica);
    impr4.appendChild(lista4);
    localStorage.setItem("MUSICA", JSON.stringify(musica));
}