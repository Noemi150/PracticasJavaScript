function metodosderreglos(){

    var arreglonumeros = [20,3,4,6,8,5,0,4];
    var arreglo2 = [2,6,7,0];
    var arreglo3 = [1,3,11,4,33,111,2,444,5,6];
    var arreglo4 = ["hoja", "papel","Sapo","Pelusa"];
    var arreglo5 = ["Quiero","aprender"]

    console.log(arreglonumeros[5]);
    console.log(arreglonumeros);
    console.log(arreglonumeros.push(10));

    //slice()- te imprime el arreglo completo
    console.log(arreglonumeros.slice());
    console.log(arreglonumeros.unshift(15));
    console.log(arreglonumeros.slice());

    console.log(arreglo2.unshift(9));
    console.log(arreglo2.slice());

    console.log(arreglo3);
    console.log(arreglo3);
    console.log(arreglo3.sort());

    console.log(arreglo4);
    console.log(arreglo4.sort());

    //pop
    //Elimina el ultimo elemento del arreglo
    arreglonumeros.pop();
    console.log(arreglonumeros.pop());
    console.log(arreglonumeros.slice()):

    console.log(arreglonumeros);
    console.log(arreglonumeros.shift());
    console.log(arreglonumeros.slice()):

    console.log(arreglonumeros);
    console.log(arreglonumeros.reverse());

    console.log(arreglonumeros);
    console.log(arreglo2);
    console.log(arreglonumeros.join(arreglo2));

    console.log(arreglo5.join())
}