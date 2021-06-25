
let search_results = new URLSearchParams(this.location.search);
let codigo = search_results.get('id');
console.log('id: ' + codigo);

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${codigo}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        let albumFoto = data.cover_xl;
        let albumLista = data.tracks.data;
        let albumName = data.title;
        let albumDate = data.release_date
        let artista = data.artist.name
        let artistaFoto = data.artist.picture_medium
        let artistaId = data.artist.id
        let ubicLista = document.querySelector('.lista');
        let ubic = document.querySelector('.title');


        ubic.innerHTML +=`
        <img class="imagen_artista" src="${albumFoto}" alt="${albumName}">
        <p class="categoria">Album</p>
        <h1 class="titulo">${albumName}</h1>
        <article class="agregado_album3">
            <img class="mini" src="${artistaFoto}" alt="${artista}">
            <p class="nombre_agregado"><a href="detail-artist.html?id=${artistaId}">${artista}</a><p>
            <p class="fecha">Publicado el ${albumDate}</p>
        </article>
        `
         

        
        for(let i = 0; i < albumLista.length; i++) {
            let cancion = albumLista[i]
            let nombreCancion = cancion.title
            let idCancion = cancion.id
            let duracion = cancion.duration
            console.log(albumLista.length)
            ubicLista.innerHTML +=`
            <li>
                <article class="lista_canciones">
                    <p class="nombre_cl_alb"><a href="detail-track.html?id=${idCancion}">${nombreCancion}</a></p>
                    <p class="reproducciones_alb">${duracion} sec</p>
                </article>
            </li>`
        }

    })

    .catch(function (error) {
        console.log(error);
    })