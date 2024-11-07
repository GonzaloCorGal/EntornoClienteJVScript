function escribirHora() {
  let hora = new Date();
  document.getElementById("reloj").innerHTML = hora.toLocaleTimeString();
}

setInterval(escribirHora, 1000);
