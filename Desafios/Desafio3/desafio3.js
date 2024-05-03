function multPrecioU_xCantidad(precioUnitario, cantidadDeseada) {
    let precioDerivado_pUycD = precioUnitario * cantidadDeseada;
    return precioDerivado_pUycD;
}

let precioUnitario = 450;
let cantidadDeseada = prompt("Cantidad deseada de tomate: ");

alert(`Usted compro ${cantidadDeseada} unidades de tomate.`);

let totalCompra = multPrecioU_xCantidad(precioUnitario, cantidadDeseada);

console.log("El total a pagar es: $" + totalCompra);
Swal.fire(`El total a pagar es: $${totalCompra}`);