// let querystring = location.search;
// let datos = new URLSearchParams (querystring);
// let mainAlbums = datos.get('id')

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/302127")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        let frontTitle = document.querySelector('.title');

        frontTitle.innerHTML += data.title

        let albumes = document.querySelector(".lista");
        albumes.innerHTML += lorem

    })