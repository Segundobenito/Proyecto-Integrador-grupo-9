let search_results = new URLSearchParams(this.location.search);
let codigo = search_results.get('id');
console.log('id: ' + codigo);

let formulario = document.querySelector("form");
let coso = document.getElementById("fomu");
formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    if (fomu.value === '') {
        alert('EL CAMPO NO PUEDE ESTAR VACIO')
    } else if (fomu.value.length < 3) {
        alert('Ponga mas que 3 caracteres por favor');
    } else {
        formulario.submit();
    }
})

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${codigo}`)
    .then(function (respuesta) {
        return respuesta.json();
    })
    .then(function (data) {
        console.log(data);
        let nombre = data.title;
        let nombreArtist = data.artist.name;
        let artistaId = data.artist.id;
        let fotoArtista = data.artist.picture;
        let ubic = document.querySelector('main');
        let nombreAlbm = data.album.title;
        let albmId = data.album.id;
        let fotoAlbm = data.album.cover_xl;

        ubic.innerHTML = `
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
    ` + ubic.innerHTML

        let miPlaylist = [];
        console.log(window.localStorage);

        let traigoPlaylist = window.localStorage.getItem('miPlaylist');
        console.log(traigoPlaylist);

        if (traigoPlaylist == null) {
            miPlaylist = [];
            console.log(miPlaylist);
        } else {
            miPlaylist = JSON.parse(traigoPlaylist);
        }

        if (miPlaylist.includes(codigo)) {
            document.querySelector('.agregar').innerHTML = "Quitar de Mi Playlist";
        }

        let add = document.querySelector('.agregar');
        console.log(add);

        add.addEventListener('click', function () {
            if (miPlaylist.includes(codigo)) { //aca buscamos si la cancion esta en la playlist y si l esta, la sacamos y cambia el texto de el boton
                let indice = miPlaylist.indexOf(codigo); //si la cancion esta devuelve 1
                miPlaylist.splice(indice, 1); //splice se va a ocuar de sacar la cancion del array, si indice es 1
                add.innerHTML = "Agregar a Mi Playlist";
                console.log(miPlaylist);
            } else { // Implica que la cancion no esta en la playlis, por lo tanto la agregamos y cambiamos el texto del boton
                miPlaylist.push(codigo);
                add.innerHTML = "Quitar de Mi Playlist";
            }
            let miPlaylistGuardada = JSON.stringify(miPlaylist); //paso mi playlist a string para poder guardarlo en el local storage
            console.log(miPlaylistGuardada);
            localStorage.setItem('miPlaylist', miPlaylistGuardada); // aca se manda la playlist al local storage
            console.log(localStorage);
        })
    })
    .catch(function (error) {
        console.log(error);
    })