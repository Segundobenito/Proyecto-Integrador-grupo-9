let querystring = location.search
let querystringobj = new URLSearchParams(querystring);
let busqueda = querystringobj.get("search");

let titulo = document.querySelector('.titulo')

titulo.innerHTML += 'Resultado de busqueda:"+busqueda+"'