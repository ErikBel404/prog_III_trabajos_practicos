function mostrarMensaje() {
    alert("Hola desde una función!");
}

//Controladores Semanticos
let boton = document.getElementById("btnBotonSemantico");

// Asignamos la función directamente a la propiedad onclick
boton.onclick = function() {
      alert("¡Hola desde un controlador semántico!");
};

///////////El método addEventListener() /////////////////////////////////////
/*
var x = document.getElementById("myBtn");

// Asociamos los eventos con las funciones
x.addEventListener("mouseover", miPrimeraFuncion);
x.addEventListener("click", miSegundaFuncion);
x.addEventListener("mouseout", miTerceraFuncion);

function miPrimeraFuncion() {
    document.getElementById("demo").innerHTML += "¡El mouse pasó sobre el elemento!<br>";
}

function miSegundaFuncion() {
    document.getElementById("demo").innerHTML += "¡El botón fue clickeado!<br>";
}

function miTerceraFuncion() {
    document.getElementById("demo").innerHTML += "¡El mouse salió del elemento!<br>";
}
*/

///////////////////////////////////////

///////////Objeto Event///////////////
/*let botonEvent = document.getElementById("miBotonEvent");

botonEvent.addEventListener("click", function(event) {
    console.log(event);              // Muestra todo el objeto Event en consola
    console.log(event.type);         // Tipo de evento: "click"
    console.log(event.target);       // Elemento que disparó el evento: <button>
    console.log(event.timeStamp);    // Momento en que ocurrió
});*/
//////////////////////////////////////





