import { conexionApi } from "./conexionApi.js";

const form = document.querySelector("[data-form]");

async function createVideo(evento){
    evento.preventDefault();

    const titulo = document.querySelector("[data-titulo]").value;
    const url = document.querySelector("[data-url]").value;
    const imagen = document.querySelector("[data-img]").value;

    const descripcion = Math.floor(Math.random*10).toString();

    await conexionApi.enviarVideo(titulo,descripcion,url,imagen);
    window.location.href="../pages/send-finished.html";
}

form.addEventListener("submit", evento => createVideo(evento));