fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/302127")
.then(function(response) {
    return response.json();
})
.then(function (data) {
    console.log(data);

    let albums = data;

    let albumes = document.querySelector(".detailAlbums");

    for (let i = 0; i < 10; i++) {
        albumes.innerHTML = '<article class="lista_canciones"><p class="nombre_cl_alb"><a href="detail-track.html">'+albums[i]+'</a></p><p class="reproducciones_alb">70.219.630 </p></article>'

    }
})