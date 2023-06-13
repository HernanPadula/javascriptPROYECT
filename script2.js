
function filtrarPrecio(precio){
    const juegosFiltrados = juegos.filter((juego) => juego.precio <= precioLimite); 
    return juegosFiltrados;
}
let precioLimite = parseFloat(prompt("mostrar Juegos con precio menor a..."));
while(precioLimite != 0){
    if(isNaN(precioLimite)){
        alert('ingrese un precio valido >:(');
    }else{
        const listaJuegos = filtrarPrecio(precioLimite);
        console.log(listaJuegos)
    }
    precioLimite = parseFloat(prompt("mostrar Juegos con precio menor a..."));
}