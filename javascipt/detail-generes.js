let formulario = document.querySelector("form");
let coso = document.getElementById("fomu");
formulario.addEventListener('submit', function(e){
    e.preventDefault();
    if(fomu.value === ''){
       alert('EL CAMPO NO PUEDE ESTAR VACIO')
     } else{
        formulario.submit();
    }
    })
let search_results = new URLSearchParams(this.location.search);
let codigo = search_results.get('id');
console.log('id:' + codigo);

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${codigo}`)
 .then(function(respuesta) {
    return respuesta.json();
 })
 .then(function (data) {
    console.log(data);
    let nombreGenero = data.name
    ubicTitulo = document.querySelector('.titulo')
    ubicTitulo.innerText = nombreGenero

    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${codigo}/artists`)
    .then(function(respuesta) {
       return respuesta.json();
    })
    .then(function (data) {
       console.log(data);
       let listaArtistas = data.data
       console.log(listaArtistas)
    for (let i = 1; i < listaArtistas.length; i++) {
        let fotoArtista = listaArtistas[i].picture_big
        let nombreArtista = listaArtistas[i].name
        let idArtista = listaArtistas[i].id
        let ubicLista = document.querySelector('.genres')
        ubicLista.innerHTML += `
        <article>
            <img class="imagen" src="${fotoArtista}" alt="${nombreArtista}">
            <h3 class="nombre_artista">
                <a href="detail-artist.html?id=${idArtista}">${nombreArtista}</a>
            </h3>
        </article>`
    }
    })
 })
 .catch(function (error) {
    console.log(error);
})