let formulario = document.querySelector("form");
let coso = document.getElementById("fomu");
formulario.addEventListener('submit', function(e){
    e.preventDefault();
    if(fomu.value === ''){
       alert('EL CAMPO NO PUEDE ESTAR VACIO')
     } else{
        formulario.submit();
    }
    })