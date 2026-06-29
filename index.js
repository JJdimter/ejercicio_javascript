// Precio base
const precio = 400000;

// Cantidad inicial
let cantidad = 0;

// Elementos del DOM
const precioSpan = document.querySelector(".precio-inicial");
const cantidadSpan = document.querySelector(".cantidad");
const totalSpan = document.querySelector(".valor-total");

// Mostrar valores iniciales
precioSpan.innerHTML = precio;
cantidadSpan.innerHTML = cantidad;
totalSpan.innerHTML = precio * cantidad;

// Función para actualizar la pantalla
function actualizarTotal() {
    cantidadSpan.innerHTML = cantidad;
    totalSpan.innerHTML = cantidad * precio;
}

// Botón +
function aumentar() {
    cantidad++;
    actualizarTotal();
}

// Botón -
function disminuir() {
    if (cantidad > 0) {
        cantidad--;
        actualizarTotal();
    }
}