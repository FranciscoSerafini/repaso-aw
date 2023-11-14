// Importar tienda.js
//13- importamos el modulo js
import tienda from "./tienda.js"
// desarrollo del script

//13d- reccoremos creamos la constante y referenciamos
const html = document.getElementById("contenedor-articulos")

let herramientas = ""
//13c- recorremos los articulos
tienda.articulos.forEach((herramienta)=>{
    //13b- creamos variable que almacena html
    herramientas += `<article class="articulo">
    <figure class="articulo__fig">
       <img src="${herramienta.imagen}" alt="" />
    </figure>
    <div class="articulo__datos">
       <h3>${herramienta.nombre}</h3>
       <div>${herramienta.precio}</div>
    </div>
 </article>`    
})
//13e--asignamos la constante valor de la variable del html
html.innerHTML = herramientas