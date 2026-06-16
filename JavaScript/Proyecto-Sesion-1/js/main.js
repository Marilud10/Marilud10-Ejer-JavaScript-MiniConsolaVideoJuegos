// Variables
let nombreProducto = " teclado gamer ";
let precio = 120000;
let cantidad = 2;
let descuento = 10000;
let disponible = true;

// Nombre limpio
let nombreLimpio = nombreProducto.trim();

// Nombre en mayúsculas
let nombreMayusculas = nombreLimpio.toUpperCase();

// Validar palabra clave
let contieneGamer = nombreLimpio.toLowerCase().includes("gamer");

// Función para calcular subtotal
function calcularSubtotal(precio, cantidad) {
    return precio * cantidad;
}

// Función para calcular total
function calcularTotal(subtotal, descuento) {
    return subtotal - descuento;
}

// Cálculos
let subtotal = calcularSubtotal(precio, cantidad);
let total = calcularTotal(subtotal, descuento);

// Array de categorías
let categorias = [
    "Periféricos",
    "Gaming",
    "Tecnología"
];

// Objeto producto
let producto = {
    nombre: nombreLimpio,
    precio: precio,
    cantidad: cantidad,
    disponible: disponible,
    categorias: categorias
};

// Mostrar información del array
console.log("Primera categoría:", categorias[0]);
console.log("Cantidad de categorías:", categorias.length);

// Mostrar propiedades del objeto
console.log("Objeto producto:");
console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

// Resumen final
console.log("------ RESUMEN DE COMPRA ------");
console.log("Producto:", nombreMayusculas);
console.log("Precio unitario:", precio);
console.log("Cantidad:", cantidad);
console.log("Subtotal:", subtotal);
console.log("Descuento:", descuento);
console.log("Total a pagar:", total);
console.log("Producto disponible:", disponible);
console.log("Contiene palabra clave gamer:", contieneGamer);

// Reto adicional
if (total >= 200000 && disponible) {
    console.log("Aplica envío gratis");
} else {
    console.log("No aplica envío gratis"); }