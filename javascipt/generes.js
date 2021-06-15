fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre")
    .then(function (response) {
        return response.json();     
    })
    .then(function (data) {
        console.log(data);
        let genres = data.data

        let generes = document.querySelector('.genres');

        for (let i = 0; i < 10; i++) {
            generes.innerHTML += '<article><img class="imagen" src="'+genres[i].picture_big+'" alt="'+genres[i].name+'"><h3 class="nombre_artista" id="exodus"><a href="detail-generes.html">'+genres[i].name+'</a></h3></article>'
        }
    })