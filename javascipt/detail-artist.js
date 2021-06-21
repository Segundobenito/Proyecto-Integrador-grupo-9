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
    let canciones = data.traklist.data
    let ubic = document.querySelector('main')

    ubic.innerHTML +=`
    <img class="imagen_artista" src="${imagen}" alt="${nombre}">
    <p class="categoria">Artista</p>
    <h1 class="titulo">${nombre}</h1>
    <h3 class="titulo_lista">Top 5 Canciones :</h3>
    <article class="menu_lista">
        <p class="posicion_menu">#</p>
        <p class="imagen_menu">Album</p>
        <p class="nombre_menu">Nombre</p>
        <p class="reproducciones_menu">Reproducciones </p>
    </article>
    <ol class="lista">
    <ol/>
    `
    let ubicLista = document.querySelector('ol')

    for (let i = 0; i < 5; i++) {
        let nomCancion = canciones[i].title
        let rank = canciones[i].rank

        ubicLista.innerHTML +=`
        <li>
        <article class="lista_canciones">
            <img class="imagen_all" src="${imagen}" alt="${nombre}">
            <p class="nombre_cl"><a href="detail-track.html">${nomCancion}</a></p>
            <p class="reproducciones">${rank} </p>
        </article>
        </li> 
        `
    }

 })
 .catch(function (error) {
    console.log(error);
})