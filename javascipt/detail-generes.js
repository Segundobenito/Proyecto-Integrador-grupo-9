let search_results = new URLSearchParams(this.location.search);
let codigo = search_results.get('id');
console.log('id:' + codigo);

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${codigo}`)
 .then(function(respuesta) {
    return respuesta.json();
 })
 .then(function (data) {
    console.log(data);
    let nombreGenero = data.data[i].name
    
    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${codigo}/artist`)
    .then(function(respuesta) {
       return respuesta.json();
    })
    .then(function (data) {
       console.log(data);
    for (let i = 1; i < genero.length; i++) {
        let fotoArtista = genero[i].picture_big
        let nombreArtista = genero[i].name
        let idArtista = genero[i].id
        generes.innerHTML += `
        <article>
            <img class="imagen" src="${fotoGenero}" alt="${nombreGenero}">
            <h3 class="nombre_artista">
                <a href="detail-generes.html?id=${idGenero}">${nombreGenero}</a>
            </h3>
        </article>`
    }
    })
 })
 .catch(function (error) {
    console.log(error);
})