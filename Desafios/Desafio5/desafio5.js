let producto = {
    nombre: "Camiseta",
    precio: 33000,
    cantidad_disponible: 12
}

alert(`El nombre del producto (antes Camiseta) ahora es Zapatillas!!! Su precio es $${producto.precio}`);
producto.nombre = "Zapatillas";
producto.categoria = "Calzado";
console.log(`Nuevo producto: ${producto.nombre}`);

delete producto.cantidad_disponible;
alert(`Se agoto el producto!!! Viniste tarde :(`);
console.log(`Ya no hay mas stock...`);