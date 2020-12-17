function EventListener(){
    document.getElementsById("IMPR1").addEventListener("click", laptop());
    document.getElementsById("IMPR2").addEventListener("click", celular());
    document.getElementsById("IMPR3").addEventListener("click", TV());
    document.getElementsById("IMPR4").addEventListener("click", SW());

}

function laptop(){
    var imprimir = document.getElementById("imprimir");

    var laptop = {
        tamañodepantalla: "10 P",
        mouse: "negro",
        teclado: "numerico",
        color: "guindo",
        precio: "$8,000"
    };

    var laptop1 = {
        tamañodepantalla: "12 P",
        mouse: "blanco",
        teclado: "Ergonómico",
        color: "blanco",
        precio: "$10,000"
    };

    var fabricantes = {
        MARCA1: Hp, 
        MARCA2: Lenovo
    };

    var Hp = {
        tamañodepantalla: laptop.tamañodepantalla,
        mouse: laptop.mouse,
        teclado: laptop.teclado,
        color: laptop.color,
        precio: laptop.precio
    };

    var Lenovo = {
        tamañodepantalla: laptop1.tamañodepantalla,
        mouse: laptop1.mouse,
        teclado: laptop1.teclado,
        color: laptop1.color,
        precio: laptop1.precio
    };

    var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText= JSON.stringify(laptop);
        imprimir.appendChild(lista);

    var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText= JSON.stringify(laptop1);
        imprimir.appendChild(lista);
}
//----------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------
function celular(){
    var imprimir1 = document.getElementById("celular");

    var celular = {
        tamañodepantalla: "5,7 HD", 
        color: "Azul",
        peso: "170 gramos",
        precio: "$5500",
        ancho: ".6 cm"
    };

    var celular2 = {
        tamañodepantalla: "5,7 HD", 
        color: "rosa",
        peso: "170 gramos",
        precio: "$5500",
        ancho: ".8 cm"
    };

    var celular3 = {
        tamañodepantalla: "4.5 HD", 
        color: "negro ",
        peso: "150 gramos",
        precio: "$4500",
        ancho: ".7 cm"
    };

    var fabricantes = {
        MARCA1: LG, 
        MARCA2: Sony,
        MARCA3: Samsung
    };

    var LG = {
        tamañodepantalla: celular.tamañodepantalla,
        color: celular.color,
        peso: celular.peso,
        precio: celular.precio,
        ancho: celular.ancho
    };

    var Sony = {
        tamañodepantalla: celular2.tamañodepantalla,
        color: celular2.color,
        peso: celular2.peso,
        precio: celular2.precio,
        ancho: celular2.ancho
    };

    var Samsung = {
        tamañodepantalla: celular3.tamañodepantalla,
        color: celular3.color,
        peso: celular3.peso,
        precio: celular3.precio,
        ancho: celular3.ancho
    };

    var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText= JSON.stringify(celular);
        imprimir1.appendChild(lista);

    var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText= JSON.stringify(celular2);
        imprimir1.appendChild(lista);

    var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText= JSON.stringify(celular3);
        imprimir1.appendChild(lista);
}
//--------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------
function TV(){
    var imprimir2 = document.getElementById("television");

    var television = {
    precio: "$10,000",
	tamañopantalla: "25 P",
	peso: "1 kg",
	altura: "60 cm",
    ancho: "15 cm"
    };

    var television2 = {
    precio: "$11,999",
    tamañopantalla: "50 P",
    peso: "3 kg",
    altura: "120 cm",
    ancho: "20 cm"
    };

    var television3 = {
    precio: "$12,999",
    tamañopantalla: "60 P",
    peso: "4 kg",
    altura: "150 cm",
    ancho: "25 cm"
    };    

    var fabricantes = {
        MARCA1: LG, 
        MARCA2: Sony,
        MARCA3: Samsung
    };

    var LG ={
        precio: television.precio,
        tamañopantalla: television.tamañopantalla,
        peso: television.peso,
        altura: television.altura,
        ancho: television.ancho
    };

    var Sony = {
        precio: television2.precio,
        tamañopantalla: television2.tamañopantalla,
        peso: television2.peso,
        altura: television2.altura,
        ancho: television2.ancho
    };

    var Samsung ={
        precio: television3.precio,
        tamañopantalla: television3.tamañopantalla,
        peso: television3.peso,
        altura: television3.altura,
        ancho: television3.ancho
    };

    var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText= JSON.stringify(television);
        imprimir2.appendChild(lista);

    var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText= JSON.stringify(television2);
        imprimir2.appendChild(lista);

    var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText= JSON.stringify(television3);
        imprimir2.appendChild(lista);
}
//-------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------
function SW(){
    var imprimir3 = document.getElementById("smartwatch");

    var smartwatch = {
    ancho: "40mm",
    altura: "5cm",
    tamañopantalla: "2P",
    peso: ".5gramos"
    };

    var smartwatch2 = {
    ancho: "30mm",
    altura: "4cm",
    tamañopantalla: "2.5P",
    peso: ".5gramos"
    };

    var smartwatch3 = {
    ancho: "45mm",
    altura: "5.2cm",
    tamañopantalla: "1.5P",
    peso: ".5gramos"
    };

    var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText= JSON.stringify(smartwatch);
        imprimir3.appendChild(lista);

    var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText= JSON.stringify(smartwatch2);
        imprimir3.appendChild(lista);

    var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText= JSON.stringify(smartwatch3);
        imprimir3.appendChild(lista);
    
}