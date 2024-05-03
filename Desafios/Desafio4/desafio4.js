const vecProductos = ["Aceite de maiz", "Fanta", "Harina", "Frutillas"];
let vecStock = [23,  11, 45, 67];
//                   [         0      ,    1   ,    2    ,     3      ] En realidad son 4 elementos

for(let i = 0; i < vecProductos.length; i = i + 1){
    console.log("Producto (" + (i + 1) + "): " + vecProductos[i]); // Listado de productos
    
}

for(let j = 0; j < vecProductos.length; j = j + 1){
    console.log("Stock del producto: (" + (j + 1) + "): " + vecStock[j]);
}

let ventaSioNo = parseInt(prompt("¿Desea eliminar el ultimo producto? (1 para confirmar y 0 para rechazar): "));
while(ventaSioNo > 1 || ventaSioNo < 0){
    ventaSioNo = parseInt(prompt("¿Desea eliminar el ultimo producto? (1 para confirmar y 0 para rechazar): "));
}

if(ventaSioNo == 1){ // Si se confirmo
    vecStock.pop(); // ELIMINA EL ULTIMO ELEMENTO!!! (3)
    vecStock[3] = 0;

    console.log("NUEVO STOCK DE PRODUCTOS!!! ..."); // Nos devuelve el nuevo stock
    for(let q = 0; q < vecProductos.length; q = q + 1){
        console.log("Stock del producto: (" + (q + 1) + "): " + vecStock[q]);
    }
}
else{
    console.log("Vuelva pronto. ;)")
}