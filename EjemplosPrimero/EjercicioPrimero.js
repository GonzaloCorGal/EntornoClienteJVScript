

/* Realiza un programa que pida un numero y 
devuelva la tabla de multiplicar del 1 al 10 con ese numero */

let numero = prompt("Introduce un número");
let listado = "";

for (let i = 1; i <= 10; i++) {
    listado += (` ${numero} x ${i} = ${numero * i} \n`);
}
alert(listado);



/*
Realizar un programa que lea por teclado dos números, 
si el primero es mayor al segundo informar su suma y diferencia, 
en caso contrario informar el producto y la división del primero respecto al 
segundo.
*/

let num1 = prompt("Introduce el primer numero");
let num2 = prompt("Introduce el segundo numero");

if(num1>num2){
    
    let suma = num1+num2;
    let resta = num1-num2;
    
    alert("La suma de " + num1 + " y " + num2 + " es " + suma
        + "\n" + "La resta de " + num1 + " y " + num2 + " es " + resta);
}
else{

    let multiplicar = num2*num1
    let division = num2/num1

    alert("La multiplicación de " + num2 + " y " + num1 + " es " + multiplicar
        + "\n" + "La división de " + num2 + " y " + num1 + " es " + division);

}

/*
Desarrollar un programa que permita la carga de 5 valores
por teclado utilizando una única variable para dichos valores y 
nos muestre posteriormente la suma.
*/

let sumatorio






 