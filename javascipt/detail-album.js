// let querystring = location.search;
// let datos = new URLSearchParams (querystring);
// let mainAlbums = datos.get('id')

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/302127")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        let albumTitle = data;
        let albumLista = data.tracks;
        let albumName = 'Alive';
        let albumDate = '19/11/2007'
        let albumes = document.querySelector(".lista");
        let tituloAlbum = document.querySelector('.title');



             tituloAlbum.innerHTML += '<img class="imagen_artista" src="' + albumTitle.artist.picture_medium + '" alt="' + albumTitle.artist.name + '"><p class="categoria">Album</p><h1 class="titulo">' + albumTitle.artist.name + '</h1><article class="agregado_album3"><p class="nombre_agregado"><a href="detail-artist.html">' + albumName + '</a> <p class="fecha">' + albumDate + '</p><a href="generes.html">' + albumTitle.genres.data[0].name + '</a>'



         for (let i = 0; i < 13; i++) {

            albumes.innerHTML += '<li><article class="lista_canciones"><p class="nombre_cl_alb"><a href="detail-track.html">' + albumLista.data[i].title + '</a></p><p class="reproducciones_alb">93.473.120 </p> </article></li>'
         }


    })
    .catch(function (error) {
        console.log(error);
    })