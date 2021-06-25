let formulario = document.querySelector("form");
let coso = document.getElementById("fomu");
formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    if (fomu.value === '') {
        alert('EL CAMPO NO PUEDE ESTAR VACIO')
    } else if (fomu.value <= 3) {
        alert('Mas que 3 please');
    } else {
        formulario.submit();
    }
})

let traigoPlaylist = localStorage.getItem('miPlaylist');
console.log(traigoPlaylist);
let playlist = JSON.parse(traigoPlaylist);
console.log(playlist)
let ubiCant = document.querySelector('.fecha')
ubiCant.innerText = `${playlist.length} Canciones`
let ubicLista = document.querySelector('ol')
for (let i = 0; i < playlist.length; i++) {
    let cancionId = playlist[i];
    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${cancionId}`)
        .then(function (respuesta) {
            return respuesta.json();
        })
        .then(function (data) {
            console.log(data);
            let nombre = data.title
            let nomAlbm = data.album.title
            let fotoAlbm = data.album.cover_medium
            let duracion = data.duration
            ubicLista.innerHTML += `
            <li>
                <article class="lista_canciones">
                    <img class="imagen_all" src="${fotoAlbm}" alt="${nomAlbm}">
                    <p class="nombre_cl"><a href="detail-track.html?id=${cancionId}">${nombre}</a></p>
                    <p class="reproducciones">${duracion} Sec</p>
                </article>
            </li>
            `
        })
        .catch(function (error) {
            console.log(error);
        })
}