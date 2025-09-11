
/*punto 3: Validacion del formulario del punto 1 del tp*/

document.addEventListener ('DOMContentLoaded', function () {

    const formulario1 = document.getElementById ("formulario1");
    const input_destino = document.getElementById ("destino");
    const input_origen = document.getElementById ("origen");

    formulario1.addEventListener ("submit" , function (event) {
        event.preventDefault ();
        
        const fecha_actual = new Date ();
        const fecha_usuario = new Date (document.getElementById ("fecha_vuelo").value);
        
        let valido = true;

        if (fecha_usuario < fecha_actual){
            valido = false;
            alert ("La fecha del vuelo no puede ser antes que la fecha actual ");
        }
        
        if (valido == true){
            formulario1.submit ();
        }

    });

    input_destino.addEventListener("change", function() {

        const origen = document.getElementById ("origen").value.trim();
        const destino = document.getElementById ("destino").value.trim ();

        if (origen === destino){
            input_destino.value = "";
            alert ("El Origen y el Destino no pueden ser iguales");
        }

    });

    input_origen.addEventListener ("change", function() {
        const origen = document.getElementById ("origen").value.trim();
        const destino = document.getElementById ("destino").value.trim ();

        if (origen === destino){
            input_origen.value = "";
            alert ("El Origen y el Destino no pueden ser iguales");
        }
    })
})





