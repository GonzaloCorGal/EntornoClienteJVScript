/*
Realizar un programa que al introducir un número por teclado nos diga si es primo o no.
*/
function dimeNumPrimo(){

    let dimeNum = Number(dimePrimo.num.value);
    let esPrimo = true;

    if(dimeNum <=1) return esPrimo=false;

    if(dimeNum ===2 || dimeNum===3) return esPrimo=true;

    if(dimeNum %2 ===0|| dimeNum===3) return esPrimo=true;

}

/*
Realizar un programa que liste los 100 primeros números primos.
*/



/*
Elaborar una función a la cual le enviemos tres enteros y muestre el menor.
*/



/*
Solicitar a través de un formulario dos horas de un día, el sistema deberá mostrar en una 
capa de salida del documento si la primera hora es anterior o posterior a la segunda, 
además del tiempo transcurrido entre ambas en formato de hh:mm. Ejemplo: el usuario introduce en la 
primera hora 18:40 y en la segunda 22:25 de la siguiente forma, 
h1=18 m1=40 h2=22 m2=25. La salida del sistema será “H1 es anterior a H2. 
Han pasado 3 horas y 45 minutos”. Si necesitara truncar un número puede usar la función Math.floor(num).
*/