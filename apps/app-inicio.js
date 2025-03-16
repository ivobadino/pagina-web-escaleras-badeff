const carrusel = document.querySelector('.carrusel');
const contenedor = carrusel.querySelector('.carrusel-contenedor');
const imagenes = contenedor.querySelectorAll('img');
const anterior = carrusel.querySelector('.anterior');
const siguiente = carrusel.querySelector('.siguiente');

let posicion = 0;
let intervalo; // Variable para almacenar el intervalo

// Función para desplazar el carrusel a la siguiente imagen
function desplazarSiguiente() {
  posicion = (posicion + 1) % imagenes.length;
  const imagenAncho = imagenes[0].offsetWidth;
  contenedor.style.transform = `translateX(-${posicion * imagenAncho}px)`;
}

// Función para iniciar el desplazamiento automático
function iniciarCarruselAutomatico() {
  intervalo = setInterval(desplazarSiguiente, 3000); // Cambia de imagen cada 3 segundos (3000 ms)
}

// Función para detener el desplazamiento automático
function detenerCarruselAutomatico() {
  clearInterval(intervalo);
}

// Event listeners para los botones
siguiente.addEventListener('click', () => {
  detenerCarruselAutomatico(); // Detiene el desplazamiento automático al hacer clic en un botón
  desplazarSiguiente();
  iniciarCarruselAutomatico(); // Reinicia el desplazamiento automático
});

anterior.addEventListener('click', () => {
  detenerCarruselAutomatico(); // Detiene el desplazamiento automático al hacer clic en un botón
  posicion = (posicion - 1 + imagenes.length) % imagenes.length;
  const imagenAncho = imagenes[0].offsetWidth;
  contenedor.style.transform = `translateX(-${posicion * imagenAncho}px)`;
  iniciarCarruselAutomatico(); // Reinicia el desplazamiento automático
});

// Inicia el desplazamiento automático al cargar la página
iniciarCarruselAutomatico();