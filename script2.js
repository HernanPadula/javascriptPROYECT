let precioLimite = parseFloat(prompt("mostrar Juegos con precio menor a..."));

function filtrarPrecio() {
  const juegosFiltrados = juegos.filter(
    (juego) => juego.precio <= precioLimite
  );
  return juegosFiltrados;
}

while (precioLimite > 0) {
  if (isNaN(precioLimite)) {
    alert("ingrese un precio valido >:(");
  } else {
    const listaJuegos = filtrarPrecio(precioLimite);
    console.log(listaJuegos);
  }
  continuar = prompt("Desea continuar filtrando? S para si, N para no")
  if(continuar == "S"){
    precioLimite = parseFloat(prompt("mostrar Juegos con precio menor a..."));
  } else {
    break;
  }
  
}


