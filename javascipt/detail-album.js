// let querystring = location.search;
// let datos = new URLSearchParams (querystring);
// let mainAlbums = datos.get('id')

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/302127")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        let albumTitle = data.artist
        let albumLista = data.tracks

        let albumes = document.querySelector(".lista");
        let tituloAlbum = document.querySelector('.title');

        tituloAlbum.innerHTML += '<div class="title"><img class="imagen_artista" src="' + albumTitle[i].artist.picture_big + '" alt="' + albumTitle[i].title + '"><p class="categoria">Album</p><h1 class="titulo">The Dark Side of the Moon</h1><article class="agregado_album3"><img class="mini" src="Fotos/pink_floyd.jpg" alt="pink floyd"><p class="nombre_agregado"><a href="' + albumTitle[i].title + '">Pink Floyd</a><p><p class="fecha">01/03/1973</p></div>'

        albumes.innerHTML += '<li><article class="lista_canciones"><p class="nombre_cl_alb"><a href="detail-track.html">Speak to Me</a></p><p class="reproducciones_alb">93.473.120 </p> </article> </li>'

    })