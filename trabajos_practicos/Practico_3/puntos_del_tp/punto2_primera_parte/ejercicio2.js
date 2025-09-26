function reserva (destino, origen, fecha, hora, nomCompleto, dni, fechaNacimiento, sexo, clase, ubicacionAsicento){
    this.destino = destino;
    this.origen = origen;
    this.fecha = fecha;
    this.hora = hora;
    this.nomCompleto = nomCompleto;
    this.dni = dni;
    this.fechaNacimiento = fechaNacimiento;
    this.sexo = sexo;
    this.clase = clase;
    this.ubicacionAsicento = ubicacionAsicento;

} /*FUNCION CONSTRUCTORA PARA CREAR RESERVAS*/

class sistemaReservas {
    constructor (){
        this.listaReservas = [];
    }

    agregarReserva (nueva_reserva) {
        this.listaReservas.push (nueva_reserva);
    }

} /*CLASE PARA CREAR EL SISTEMA DE RESERVAS*/


let reserva1= new reserva ("bs_as", "catamarca", "25/09/2025", "23:10", "Erik Cirione", "44942752", 
                            "23/11/2003", "macho", "economica", "ventanilla");

let reserva2= new reserva ("bs_as", "catamarca", "25/09/2025", "23:10", "Erik Leguizamon", "44942753", 
                            "23/11/2003", "macho", "economica", "ventanilla");

let reserva3= new reserva ("bs_as", "catamarca", "25/09/2025", "23:10", "Mirko Cirione", "44942753", 
                            "23/11/2003", "macho", "economica", "ventanilla"); 

let reserva4= new reserva ("bs_as", "catamarca", "25/09/2025", "23:10", "Mirko Leguizamon", "44942753", 
                            "23/11/2003", "macho", "economica", "ventanilla"); /*ACA CREE DOS RESERVAS*/

let sistemaReservas1 = new sistemaReservas ();
sistemaReservas1.agregarReserva (reserva1);
sistemaReservas1.agregarReserva (reserva2);
sistemaReservas1.agregarReserva (reserva3);
sistemaReservas1.agregarReserva (reserva4);

console.log (sistemaReservas1.listaReservas);/* ACA CREE UN SISTEMA DE RESERVAS Y AGREGUE 
                                                LAS DOS RESERVAS ANTES CREADAS*/



/* EMPEZAMOS LA LECTURA DE LA LISTA DE RESERVAS Y COMPLETADO DE LAS TABLAS*/
let bodyTablaReservas= document.getElementById ("bodyTablaReservas"); /*obtuve el elemento por el id*/
let reservaAuxiliar;


for (let index = 0; index < sistemaReservas1.listaReservas.length; index++) {

    let fila = document.createElement ("tr"); /*por cada objeto en la lista creo una fila*/
    reservaAuxiliar = sistemaReservas1.listaReservas[index];

    for (let x in reservaAuxiliar){
        let celda = document.createElement ("td");/*por cada atributo especifico, creo una celda*/
        let contenido= document.createTextNode (reservaAuxiliar[x]);
        celda.appendChild (contenido);
        fila.appendChild (celda);
        /*despues solo es cuestion de conectar los nodos jajajajaja*/
    }

    bodyTablaReservas.appendChild (fila);
}

