const filtrosMaterial = document.querySelectorAll('.productos__filtro-material');
const filtrosTipo = document.querySelectorAll('.productos__filtro-tipo');
const productos = document.querySelectorAll('.producto');

let filtroMaterialActivo = 'todos';
let filtroTipoActivo = 'todos-tipo';

function filtrarProductos() {
  productos.forEach((producto) => {
    const material = producto.dataset.material;
    const tipo = producto.dataset.tipo;
    const mostrarPorMaterial = filtroMaterialActivo === 'todos' || material === filtroMaterialActivo;
    const mostrarPorTipo = filtroTipoActivo === 'todos-tipo' || tipo === filtroTipoActivo;
    if (mostrarPorMaterial && mostrarPorTipo) {
      producto.classList.remove('oculto');
    } else {
      producto.classList.add('oculto');
    }
  });
}

filtrosMaterial.forEach((filtro) => {
  filtro.addEventListener('click', () => {
    filtrosMaterial.forEach((f) => f.classList.remove('activo'));
    filtro.classList.add('activo');
    filtroMaterialActivo = filtro.id.replace('filtro-', '');
    filtrarProductos();
  });
});

filtrosTipo.forEach((filtro) => {
  filtro.addEventListener('click', () => {
    filtrosTipo.forEach((f) => f.classList.remove('activo'));
    filtro.classList.add('activo');
    filtroTipoActivo = filtro.id.replace('filtro-', '');
    filtrarProductos();
  });
});

filtrarProductos(); // Mostrar productos iniciales