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
console.log('id: ' + codigo);

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${codigo}`)
 .then(function(respuesta) {
    return respuesta.json();
 })
 .then(function (data) {
    console.log(data);
    let nombre = data.title
    let nombreArtist = data.artist.name
    let artistaId = data.artist.id
    let fotoArtista = data.artist.picture
    let ubic = document.querySelector('main')
    let nombreAlbm = data.album.title
    let albmId = data.album.id
    let fotoAlbm = data.album.cover_xl

    ubic.innerHTML +=`
        <iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${codigo}" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
        <p class="categoria">Cancion</p>
        <article class="titulo_track">
            <h1 class="titulo">${nombre}</h1>
        </article>
        <section class="section_cancion">
            <article class="agregado_album">
                <img class="mini" src="${fotoAlbm}" alt="${nombreAlbm}">
                <p class="nombre_agregado"><a href="detail-album.html?id=${albmId}">${nombreAlbm}</a></p>
                <img class="mini" src="${fotoArtista}" alt="${nombreArtist}">
                <p class="fecha"><a href="detail-artist.html?id=${artistaId}">${nombreArtist}</a></p>
            </article>
            <article class="agregado_album2">
                <p class="agregar">Agregar a Mi Playlist</p>
                <p><a href="playlist.html">Ver Mi Playlist</a></p>
            </article>
        </section>
    `
 })
 .catch(function (error) {
    console.log(error);
})