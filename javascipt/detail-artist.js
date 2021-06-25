let formulario = document.querySelector("form");
let coso = document.getElementById("fomu");
formulario.addEventListener('submit', function(e){
    e.preventDefault();
    if(fomu.value === ''){
        alert('EL CAMPO NO PUEDE ESTAR VACIO')
      } else if(fomu.value <= 3){
         alert('Mas que 3 please');
      }else{
         formulario.submit();
     }
     })
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
    <section class="genres">
    </section>
    `
    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${codigo}/albums`)
    .then(function(respuesta){
        return respuesta.json();
     })
    .then(function (data) {
        let album = data.data
        let ubicLista = document.querySelector('section')

        for (let i = 0; i < 5; i++) {
            let fotoAlbm = album[i].cover_medium
            let nombreAlbm = album[i].title
            let idAlbm = album[i].id
            ubicLista.innerHTML +=`
            <article class="lista_canciones">
            <img class="imagen" src="${fotoAlbm}" alt="${nombreAlbm}">
            <h3 class="nombre_artista">
                <a href="detail-album.html?id=${idAlbm}">${nombreAlbm}</a>
            </h3>
            </article>
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