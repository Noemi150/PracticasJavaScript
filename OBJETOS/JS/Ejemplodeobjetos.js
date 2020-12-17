function objetos(){

    //se crea un objeto con sus propiedades
    var coche1 = {
        ruedas:4,
        puertas:4,
        color:"verde",
        anio:2010,
        luces: 4,
        espejos:2
    };

    var coche2 = {
        ruedas:4,
        puertas:2,
        color: "rojo",
        anio:2015,
        luces: 4,
        espejos:2
    };

    var coche3 = {
        ruedas:4,
        puertas:4,
        color:"azul",
        anio:2020,
        luces: 4,
        espejos:2
    };

    var coche4 = {
        ruedas:4,
        puertas:2,
        color:"negro",
        anio:2018,
        luces: 4,
        espejos:2
    };

    //se crea otro objeto llamado propiedades con sus cuatro marcas
    var fabricantes = {
         marca1: "Ford",
         marca2: "Nissan",
         marca3: "Fiat",
         marca4: "Chevrolet",
    };

    //se crea objeto llamado ford donde vamos a llamar las propiedades del coche
    var Ford = {
        ruedas: coche1.ruedas,
        puertas: coche1.puertas,
        color: coche1.color,
        anio1: coche1.anio,
        luces: coche1.luces,
        espejos: coche1.espejos,
        marca1: fabricantes.marca1
    };
    console.log(Ford);

    var Nissan = {
        ruedas: coche2.ruedas,
        puertas: coche2.puertas,
        color: coche2.color,
        anio2: coche2.anio,
        luces: coche2.luces,
        espejos: coche2.espejos,
        marca2: fabricantes.marca2
    };
    console.log(Nissan);

    var Fiat = {
        ruedas: coche3.ruedas,
        puertas: coche3.puertas,
        color: coche3.color,
        anio3: coche3.anio,
        luces: coche3.luces,
        espejos: coche3.espejos,
        marca3: fabricantes.marca3
    };
    console.log(Fiat);

    var Chevrolet = {
        ruedas: coche4.ruedas,
        puertas: coche4.puertas,
        color: coche4.color,
        anio4: coche4.anio,
        luces: coche4.luces,
        espejos: coche4.espejos,
        marca4: fabricantes.marca4
    };
    console.log(Chevrolet);
}