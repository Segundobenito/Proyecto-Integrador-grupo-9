fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/27")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        let detailArtists = data.e.data;

        let detalleAristas = document.querySelector('.lista');

        for (let i = 0; i < 5; i++) {
            detalleAristas.innerHTML += '<article class="lista_canciones"><img class="imagen_all" src="' + detailArtists[i].picture_big + '" alt="' + detailArtists[i].name + '"><p class="nombre_cl"><a href="detail-track.html">' + detailArtists[i].name + '</a></p><p class="reproducciones">93.473.120 </p></article>'

        }
    })
    .catch(function (error) {
        console.log(error);
    })