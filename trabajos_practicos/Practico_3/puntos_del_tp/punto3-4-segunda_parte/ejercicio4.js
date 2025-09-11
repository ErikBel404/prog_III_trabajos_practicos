
document.addEventListener ("DOMContentLoaded", function() {

    const input_cant_psj = document.getElementById ("cant_psj");
    const contenedor_original = document.getElementById ("contenedor_original");
    const contenedor_clonado = document.getElementById ("contenedor_clonado");
    const clone = contenedor_original.cloneNode (true);

    input_cant_psj.addEventListener ("change", function() {

        alert ("hola jajajja");

        const cant_psj = input_cant_psj.value;

        for (let i = 0; i < cant_psj; i++) {

            contenedor_clonado.appendChild (clone);

        }
    })

    
})

/*si funciona jajajaj, el tema hay que ver la condicion del for o como hacer para que lo haga
  la cantidad de veces correctay arriba de cada enunciado ponerle un titulo que pea pasaje N 
  tambien ver si el css no tengo una limitacion del heith del body*/


