{
    /* <iframe title="deezer-widget" src="https://widget.deezer.com/widget/auto/track/${data.id}" width="1000" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe> */
}

let queryString = location.search
let queryStringObject = new URLSearchParams(queryString);
let busqueda = queryStringObject.get("search");
let titulo = document.querySelector('.resultado')
titulo.innerHTML += `Resultado de busqueda:"${busqueda}"`
console.log(busqueda);
let formulario = document.querySelector("form");
let coso = document.getElementById("fomu");
formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    if (fomu.value === '') {
        alert('El campo no puede estar vacio');
    } else if (fomu.value <= 3) {
        alert('Mas que 3 please');
    } else {
        formulario.submit();
    }
})

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q=" + busqueda + '&&limit=3')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let songs = data.data;
        let canciones = document.querySelector(".busquedaCanciones");
        let main = document.querySelector("main");


        console.log(songs);

        if (songs.length == 0) {
            main.innerHTML = '<h1>No hay coincidencias</h1>'
            main.style.height = '80vh'
        }




        for (let i = 0; i < 3; i++) {
            canciones.innerHTML += `<article class="resultados_parecidos">
                <img class="imagen" src="${songs[i].album.cover_big}" alt="${songs[i].title}"><h3 class="nombre_artista"><a href="detail-track.html?id=${songs[i].id}">${songs[i].title}</a></h3></article>`



        }
    })


fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q=" + busqueda + '&&limit=3')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let albums = data.data;
        let resultadoAlbum = document.querySelector(".busquedaAlbums");
        console.log(albums);

        for (let i = 0; i < albums.length; i++) {
            resultadoAlbum.innerHTML += ` <article class = "resultados_parecidos"> 
        <img class="imagen" src="${albums[i].cover_big}" alt="${albums[i].title}">
        <h3 class="nombre_artista" id="exodus"><a href="detail-album.html?id=${albums[i].id}">${albums[i].title}</a></h3></article>`;

        }
    })

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q=" + busqueda + '&&limit=3')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let artists = data.data
        let artistas = document.querySelector(".busquedaArtistas")
        console.log(artists);


        for (let i = 0; i < 3; i++) {
            artistas.innerHTML += `
        <article class="resultados_parecidos"><img class="imagen" src="${artists[i].picture_big}" alt="${artists[i].name}"><h3 class="nombre_artista" id="bob"><a href="detail-artist.html?id=${artists[i].id}">${artists[i].name}</a></h3></article>
        `

        }


    })