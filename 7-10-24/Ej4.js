/* 
Crear un script que ponga en negrita las letras mayúsculas que hay en una frase.
*/
function AnalizaNombre(){

let nombre = MiraNegra.meteNombre.value;
let nombreNegra = "";

console.log(nombre);


for(i=0;i<nombre.length;i++){
    console.log(i);
    if(nombre.charAt(i)===(nombre.charAt(i).toUpperCase()))
        nombreNegra+="<b>"+nombre.charAt(i)+"</b>";
    else
        nombreNegra+=nombre.charAt(i);
}


document.getElementsByName("salida").innerHTML = nombreNegra;

}










