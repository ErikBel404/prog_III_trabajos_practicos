
function verificacion_fecha (fecha_usuario) {
    let fecha_vuelo;
    let fecha_actual = new Date ();

    if (typeof fecha_usuario === typeof fecha_actual){
        fecha_vuelo = fecha_usuario
    }else {
        fecha_vuelo = new Date (fecha_usuario);
    }   /*ESTE IF SE ENCARGA DE PONER LOS DATOS SI O SI EN EL TIPO CORRECTO PARA 
        QUE LA VERIFICACION SEA POSIBLE */

    if (fecha_vuelo < fecha_actual){
        alert ("Fecha de Vuelo debe ser Mayor a la Fecha Actua");
        console.log ("Fecha de Vuelo debe ser Mayor a la Fecha Actua");
    }else{
        return true;
    }

}


/*SIMULACION DE PRUEBAS CON DISTINTOS TIPOS DE DATOS DEL USUARIO*/
let fecha_usuario1 = "15/09/2025";
let fecha_usuario2 = new Date ("3/09/2025");

console.log (verificacion_fecha (fecha_usuario1));