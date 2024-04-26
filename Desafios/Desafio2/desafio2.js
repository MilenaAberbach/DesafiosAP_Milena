let nombreProducto = "Chocolate";
let precioUnitario = 300;
let cantidadDeseada = prompt("Cantidad deseada de Chocolate: ");
const costoTotal = precioUnitario * cantidadDeseada;

alert(`Usted compro ${cantidadDeseada} unidades de ${nombreProducto}. El costo total es: $${costoTotal}`);

if(cantidadDeseada >= 5){

    alert(`Tenes un 10% de descuento!!!`);

    precio_conDescuento = costoTotal - ((costoTotal * 10)/100);
    Swal.fire(`El costo total, ahora aplicado un 10% de descuento, es: $${precio_conDescuento}`);
}