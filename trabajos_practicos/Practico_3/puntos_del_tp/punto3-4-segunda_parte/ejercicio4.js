
document.addEventListener ("DOMContentLoaded", function() {

    const input_cant_psj = document.getElementById ("cant_psj");
    const contenedor_original = document.getElementById ("contenedor_original");
    const contenedor_clonado = document.getElementById ("contenedor_clonado");
    

    input_cant_psj.addEventListener ("change", function() {

        contenedor_clonado.innerHTML = "";

        const cant_psj = parseInt(input_cant_psj.value) || 0;
        const clone = contenedor_original.content.cloneNode (true);

        for (let i = 0; i < cant_psj; i++) {
            const titululo = document.createElement ("h2");
            const contenido = document.createTextNode ("Pasajero"+ (i+1));
            titululo.appendChild (contenido);
            contenedor_clonado.appendChild (titululo);

            const clone = contenedor_original.content.cloneNode (true);
            contenedor_clonado.appendChild (clone);

        }
    })

    
})

/*si funciona jajajaj, el tema hay que ver la condicion del for o como hacer para que lo haga
  la cantidad de veces correctay arriba de cada enunciado ponerle un titulo que pea pasaje N 
  tambien ver si el css no tengo una limitacion del heith del body*/


