import { conexionApi } from "./conexionApi.js";
import crearCard from "./showVideos.js"

async function filtrarVideo(evento){
    evento.preventDefault();
    const dataSearch = document.querySelector("[data-search]").value;
    const busqueda = await conexionApi.buscarVideo(dataSearch);

    const lista= document.querySelector("[data-list]");

    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }

    busqueda.forEach(video=> lista.appendChild(crearCard(video.titulo,video.descripcion,video.url,video.imagen)));
    console.log(busqueda);
    
    if(busqueda.length==0){
        lista.innerHTML= `<h2 class="mensaje__titulo">No se encontraron elementos para <span> "${dataSearch}" </span></h2>`
    }
}
//search button
const button = document.querySelector("[data-button-search]");
button.addEventListener("click",evento=>filtrarVideo(evento))

//search enter
var  buscar =document.getElementById('buscar');
buscar.addEventListener('keyup', function(e){
    var key = e.which || e.keyCode;
    if(key ==13){
        filtrarVideo(e)

    }
    console.log(e);
})