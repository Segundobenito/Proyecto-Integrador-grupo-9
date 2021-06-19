let queryString = location.search
let queryStringObject = new URLSearchParams(queryString);
let busqueda = queryStringObject.get("search");

let titulo = document.querySelector('.resultado')

titulo.innerHTML += `Resultado de busqueda:"${busqueda}"`


fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q="+busqueda)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
    let albums = data;
    let resultadoAlbum = document.querySelector(".busqueda");
   

    for (let i = 0; i < albums.length; i++) {
        resultadoAlbum += `<article class="resultados_parecidos"><img class="imagen" src="${albums[i].cover_big}" alt="${albums[i].title}"><h3 class="nombre_artista" id="exodus"><a href="detail-album.html"${albums[i].title}</a></h3></article>`
    
    }


})

// fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/27")

// fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/27")