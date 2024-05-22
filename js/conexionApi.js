
async function listVideos(){
  const conexion  =await fetch("http://localhost:3001/videos");  
  const conexionParse = conexion.json();
  return conexionParse
//   console.log(conexionParse);
}

 async function enviarVideo (titulo, descripcion, url, imagen){
    const  conexion = await fetch("http://localhost:3001/videos", {
        method: "POST",
        headers:{"Content-type": "application/json"},
        body:JSON.stringify({
            titulo:titulo,
            descripcion:`${descripcion} mil visualizaciones`,
            url:url,
            imagen:imagen
        })

    })
    
    const conexionParse = conexion.json();
    return conexionParse;
 }

 async function buscarVideo(palabra){
    const  conexion = await fetch(`http://localhost:3001/videos?q=${palabra}`);
    const conexionParse = conexion.json();
    return conexionParse
 }

export const conexionApi ={
    listVideos, enviarVideo, buscarVideo
}

// listVideos()
