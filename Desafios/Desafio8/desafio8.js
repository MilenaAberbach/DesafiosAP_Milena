const boton = document.getElementById('botoncito');
const msj = document.getElementById('mensaje');

boton.addEventListener('click', (eventcito)=>{
    msj.textContent = 'Se clickeo el boton';
    eventcito.target.style.color = 'red';
    eventcito.target.style.padding = '15px';
    console.log(eventcito.target);
    console.log(enviarMensaje());
})

function enviarMensaje(){
    console.log('Hola Mundo!');
}

function obtenerDatos(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {
            const exito = true;

            if(exito){
                resolve('Datos obtenidos correctamente');
            }

            else
            {
                reject('Error al obtener los datos');
            }
        })
    })
}

obtenerDatos().then((resultado)=>{console.log(resultado)}).catch((error)=>{console.error(error)})