let search_results = new URLSearchParams(this.location.search);
let codigo = search_results.get('id');
console.log('id:' + codigo);
let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${codigo}`

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${codigo}`)
 .then(function(respuesta) {
    return respuesta.json();
 })
 .then(function (data) {
    console.log(data);
 })
 .catch(function (error) {
    console.log(error);
})