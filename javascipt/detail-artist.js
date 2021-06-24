let search_results = new URLSearchParams(this.location.search);
let codigo = search_results.get('id');
console.log('id:' + codigo);
let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${codigo}`
console.log (url)
 fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${codigo}`)
 .then(function(respuesta) {
    return respuesta.json();
 })
 .then(function (data) {
    console.log(data);
    let nombre = data.name
    let imagen = data.picture_big
    let ubic = document.querySelector('main')
    ubic.innerHTML +=`
    <img class="imagen_artista" src="${imagen}" alt="${nombre}">
    <p class="categoria">Artista</p>
    <h1 class="titulo">${nombre}</h1>
    <h3 class="titulo_lista">Albumes :</h3>
    <ol class="lista">
    <ol/>
    `
    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${codigo}/albums`)
    .then(function(respuesta){
        return respuesta.json();
     })
    .then(function (data) {
        let album = data.data
        let ubicLista = document.querySelector('ol')

        for (let i = 0; i < 5; i++) {
            let fotoAlbm = album[i].cover_medium
            let nombreAlbm = album[i].title
            let idAlbm = album[i].id
            ubicLista.innerHTML +=`
            <li>
            <article class="lista_canciones">
                <img class="imagen_all" src="${fotoAlbm}" alt="${nombreAlbm}">
                <p class="nombre_cl"><a href="detail-track.html?id=${idAlbm}">${nombreAlbm}</a></p>
            </article>
            </li> 
            `
        }
    })
    .catch(function (error) {
        console.log(error);
    })

 })
 .catch(function (error) {
    console.log(error);
})