// let precioLimite = parseFloat(prompt("mostrar Juegos con precio menor a..."));

// function filtrarPrecio() {
//   const juegosFiltrados = juegos.filter(
//     (juego) => juego.precio <= precioLimite
//   );
//   return juegosFiltrados;
// }

// while (precioLimite > 0) {
//   if (isNaN(precioLimite)) {
//     alert("ingrese un precio valido >:(");
//   } else {
//     const listaJuegos = filtrarPrecio(precioLimite);
//     console.log(listaJuegos);
//   }
//   continuar = prompt("Desea continuar filtrando? S para si, N para no")
//   if(continuar == "S"){
//     precioLimite = parseFloat(prompt("mostrar Juegos con precio menor a..."));
//   } else {
//     break;
//   }
  
// }
let juegos;
obtenerJuegosJson();

let carro = JSON.parse(localStorage.getItem('carro')) || [];

let titulo = document.getElementById('titulo');
titulo.style.font = '70px poppins';

let parrafos = document.getElementsByTagName('p');

let tabla = document.getElementById('tablaCarrito');

parrafos[1].innerText = new Date().toLocaleDateString();

let cartasJuegos = document.getElementById('cartas');

(carro.length != 0) && llenarTabla()

 function llenarTabla(){
  for (const juego of carro){
    tabla.innerHTML += `
    <tr> 
      <td>${juego.nombre}</td>
      <td>$ ${juego.precio}</td>
    </tr>
    `;
  }
};

function crearCards(listaJuegos){
for(const juego of listaJuegos){
  let carta = document.createElement('div')
  carta.className="card col-md-4";
  carta.innerHTML +=`
      <div class="card d-flex justify-content-center">
      <img class="card-img-to d-flex justify-content-center" src=${juego.img} alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title d-flex justify-content-center">${juego.nombre}</h5>
        <p class="card-text d-flex justify-content-center">${juego.precio}</p>
        <button id=${juego.id} class="btn btn-primary d-flex justify-content-center agregar">Agregar al Carrito</button>
      </div>
    </div>
  `;
  cartasJuegos.appendChild(carta);
}
  let botones = document.getElementsByClassName('agregar');
  for(const boton of botones){
      boton.addEventListener('click',() =>{
        const juegoACarro = juegos.find((juego) => juego.id == boton.id);
        console.log(juegoACarro);
        agregarAlCarro(juegoACarro);
        sumarTotal(juegoACarro);
      })
  }
};


function agregarAlCarro(juego){
  carro.push(juego);
  console.table(carro);
  tabla.innerHTML += `
    <tr> 
      <td>${juego.nombre}</td>
      <td>$ ${juego.precio}</td>
    </tr>
  `;
  localStorage.setItem('carro',JSON.stringify(carro));
  
  Swal.fire({
    imageUrl: juego.img,
    imageHeight: 400,
    title: juego.nombre,
  })
};
  
function sumarTotal (juego){
    let total = carro.reduce((acumulador,juego) =>
      acumulador + juego.precio,0);
      document.getElementById('totalSumado').innerText = `Total a Pagar: $ ${total}`;
  };

  let botonFinal = document.getElementById('BtnFinalizar');

  let botonBorrar = document.getElementById('btnBorrar');

  let confetti = new Confetti('BtnFinalizar');

  botonFinal.onclick = () => {
    carro=[];
    document.getElementById('tablaCarrito').innerHTML='';
    document.getElementById('totalSumado').innerText = `Total a Pagar: $ `;
    localStorage.clear();
  };

  botonBorrar.onclick = () => {
    carro=[];
    document.getElementById('tablaCarrito').innerHTML='';
    document.getElementById('totalSumado').innerText = `Total a Pagar: $ `;
    localStorage.clear();
  };

  async function obtenerJuegosJson(){
    const URLJSON = '../arrayJuegos.json';
    const respuesta = await fetch(URLJSON);
    const datos = await respuesta.json();
    console.log(datos);
    juegos = datos
    crearCards(juegos);
  }