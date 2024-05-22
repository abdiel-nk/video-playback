import { conexionApi } from "./conexionApi.js";


async function filtrarVideo(evento){
    evento.preventDefault();
    const dataSearch = document.querySelector('[data-search]').value;
    const busqueda = conexionApi.buscarVideo(dataSearch);
    console.log(busqueda);
}
const button = document.querySelector("[data-button-search]");
button.addEventListener("click",evento=>filtrarVideo(evento))