import { conexionApi } from "./conexionApi.js";

const list = document.querySelector("[data-list]")

export default function crearCard(titulo, descripcion, url, imagen){
    const video = document.createElement("li");
    video.className="videos__item";
    video.innerHTML = `<iframe  width="100%"  height="72%" src="${url}" 
    title="${titulo}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <div class="descripcion-video">
        <img src="${imagen}" alt="Logo">
        <div class="detalles__video">
            <h3>${titulo}</h3>
            <p>${descripcion}</p>
        </div>
    </div>`;
    return video;
}

async function listarVideos(){
    try{
    const listAPI = await conexionApi.listVideos()
    listAPI.forEach(video =>list.appendChild(crearCard(video.titulo,video.descripcion, video.url,video.imagen)));}
    catch{
        list.innerHTML=`<h2 class="mensaje__titulo">Ha ocurrido un problema con la conexión</h2>`;
    }
}
listarVideos()