
function imprimeNombre(){

let nombre = String(miFormulario.Nombre.value);
let apellido = String(miFormulario.Apellidos.value);

document.getElementById("salida").innerHTML = nombre+" "+apellido;

}