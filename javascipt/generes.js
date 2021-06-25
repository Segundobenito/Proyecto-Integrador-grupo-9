let formulario = document.querySelector("form");
let coso = document.getElementById("fomu");
formulario.addEventListener('submit', function(e){
    e.preventDefault();
    if(fomu.value === ''){
        alert('EL CAMPO NO PUEDE ESTAR VACIO')
      } else if(fomu.value <= 3){
         alert('Mas que 3 please');
      } else {
         formulario.submit();
     }
     })
 
 fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre")
     .then(function (response) {
        return response.json();
     })
     .then(function (data) {
        console.log(data);
        let genero = data.data
        let generes = document.querySelector('.genres');

        for (let i = 1; i < genero.length; i++) {
            let fotoGenero = genero[i].picture_big
            let nombreGenero = genero[i].name
            let idGenero = genero[i].id
            generes.innerHTML += `
            <article>
                <img class="imagen" src="${fotoGenero}" alt="${nombreGenero}">
                <h3 class="nombre_artista">
                    <a href="detail-generes.html?id=${idGenero}">${nombreGenero}</a>
                </h3>
            </article>`
        }
     })
     .catch(function (error) {
        console.log(error);
    })