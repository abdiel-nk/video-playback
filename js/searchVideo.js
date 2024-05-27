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
}
const button = document.querySelector("[data-button-search]");
button.addEventListener("click",evento=>filtrarVideo(evento))
