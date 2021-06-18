//https://cors-anywhere.herokuapp.com/corsdemo
https: //cors-anywhere.herokuapp.com/corsdemo 

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
            canciones.innerHTML += '<article><img class="imagen" src="' + songs[i].album.cover_big + '" alt="' + songs[i].title + '"><h3class="nombre_artista"><a href="detail-track.html">' + songs[i].title + '</a></h3></article>'
        }

        for (let i = 0; i < 5; i++) {
            albumes.innerHTML += '<article><img class="imagen" src="' + albums[i].cover_big + '" alt="' + albums[i].title + '"><h3 class="nombre_artista" id="bob"><a href="detail-artist.html">' + albums[i].title + '</a></h3></article>'
        }

        for (let i = 0; i < 5; i++) {
            artistas.innerHTML += '<article><img class="imagen" src="' + artists[i].picture_big + '" alt="' + artists[i].name + '"><h3 class="nombre_artista" id="metalica"><a href="detail-artist.html">' + artists[i].name + '</a></h3></article>'

         }
        })
    .catch(function(error){
        console.log(error)
    })

   
