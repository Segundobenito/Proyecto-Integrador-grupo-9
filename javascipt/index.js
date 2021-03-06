
let formulario = document.querySelector("form");
let coso = document.getElementById("fomu");
let titulo = document.querySelector('.resultado')
//titulo.innerHTML += `Resultado de busqueda:"${busqueda}"`

formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    if (fomu.value === '') {
        alert('El campo no puede estar vacio');
    } else if (fomu.value.length < 3) {
        alert('Ponga mas que 3 caracteres por favor');
    } else {
        formulario.submit();
    }
})

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let songs = data.tracks.data;
        let albums = data.albums.data;
        let artists = data.artists.data;

        let canciones = document.querySelector('.songs');
        let albumes = document.querySelector('.albums');
        let artistas = document.querySelector('.artists');


        for (let i = 0; i < 5; i++) {
            canciones.innerHTML += `
                <article>
                    <img class="imagen" src="${songs[i].album.cover_big}" alt="${songs[i].title}">
                    <h3 class="nombre_cancion">
                        <a href="detail-track.html?id=${songs[i].id}">${songs[i].title}</a>
                    </h3>
                    <h4 class="nombre_cancion2">
                    <a href="detail-artist.html?id=${songs[i].artist.id}">${songs[i].artist.name}</a>
                    </h4>
                </article>`
        }

        for (let i = 0; i < 5; i++) {
            albumes.innerHTML += `
                <article>
                    <img class="imagen" src="${albums[i].cover_big}" alt="${albums[i].title}">
                    <h3 class="nombre_artista">
                        <a href="detail-album.html?id=${albums[i].id}">${albums[i].title}</a>
                    </h3>
                </article>`
        }

        for (let i = 0; i < 5; i++) {
            artistas.innerHTML += `
            <article>
                <img class="imagen" src="${artists[i].picture_big}" alt="${artists[i].name}">
                <h3 class="nombre_artista">
                    <a href="detail-artist.html?id=${artists[i].id}">${artists[i].name}</a>
                </h3>
            </article>`
        }
    })
    .catch(function (error) {
        console.log(error)
    })