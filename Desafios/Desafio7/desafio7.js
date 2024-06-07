const productos = ["producto1", "producto2", "producto3", "producto4", "producto5"];

for(p of productos){
    let elem_h2 = document.createElement('h2');
    elem_h2.innerHTML = `Nombre: <span style='color:red;'>${p}</span>`;
    document.body.appendChild(elem_h2);
}