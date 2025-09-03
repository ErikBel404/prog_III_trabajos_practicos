/*
alert('Hola Mundo!');
*/



/*****Definir con Var *****/

/*var x=10;
{
      var x=2;
}
console.log(x);*/
/*va a mostrar 2 /*


/*****Definir con LET ****/
/*let x=10;
{
      let x=2;
}
console.log(x);*/
/**//**//**va a mostrar 10 *//*



/*****Definir con CONST NO define un valor constante. Define una referencia constante a un valor.
 const definimos variables de sólo lectura (no confundir con inmutables),
 esto quiere decir que, cuando asignamos una variable, el nombre de esta
 va estar asignada a un puntero en memoria, el cual no puede ser sobreescrito o reasignado.

/*******Se usa const cuando sabes que el valor no va a cambiar ******/
/*const numero = 10;
console.log(numero); // 10

// Intentar reasignar el valor genera un error
numero = 20; // Error: Assignment to constant variable.*/


/*******Funciones*******/


/*function miFuncion(a, b) {
    if (a > b) {
        console.log("a es mayor que b");
    }
    return a + b;
}

console.log(miFuncion(3,5))*/

/*******Funciones Flechas*******/

/*miFuncion = (a, b) => a * b;

let resultado = miFuncion(4, 5);
console.log("El producto es: " + resultado);*/


/***********OBJETOS***********************/


/*****Crear Objetos literal *****/
/***Usando la sintaxis de objeto literal: Esta es la forma más sencilla de crear un objeto. Puedes definir un objeto directamente utilizando llaves {}.*/
/*let Cliente={
      nombre:'Maria',
      apellido:'Valdez',
      saldo:2000,
      tipoCliente:function(){
            let tipo;
            if (this.saldo>1000){
                  tipo='Preferencial';
            }
            else{
                  tipo='Normal';
            }
            return tipo;
      }
}

*//*Para acceder a los atributos con el . y para los metodos () *//*
console.log(Cliente.nombre);
console.log(Cliente.tipoCliente());*/

/*Para crear varios objetos del “mismo tipo” (similar a una clase), se utiliza una función constructor de objetos:/*
/*Se puede definir una función que actúe como un molde para crear objetos. Luego, se puede crear instancias de ese objeto usando el operador new*/

/*function Cliente(nombre,apellido,saldo){
      this.nombre=nombre;
      this.apellido=apellido;
      this.saldo=saldo;
      this.tipoCliente=function(){
            let tipo;
            if (this.saldo>1000){
                  tipo='Preferencial';
            }
            else{
                  tipo='Normal';
            }
            return tipo;
      }
}

let cliente1=new Cliente('Maria','Valdez',500);
console.log(cliente1);
console.log(cliente1.tipoCliente());*/


/*Crear prototipos de va a ayudar a tener el código mas organizado, creamos el prototipo, con el nombre de Cliente*/


/*function Cliente(nombre,saldo){
      this.nombre=nombre;
      this.saldo=saldo;
}

let cliente1=new Cliente('Maria', 2000);

///Crear un prototype

Cliente.prototype.tipoCliente=function(){
      let tipo
      if(this.saldo>1000){
            tipo='Preferencial';
      }
      else{
            tipo='Normal';
      }
      return tipo
}

console.log (cliente1);
console.log (cliente1.tipoCliente());*/



/***** Creamos clases: Esta forma es más clara y se asemeja a la programación orientada a objetos en otros lenguajes *****/
/*class Cliente{
      constructor(nombre,saldo){
            this.nombre=nombre;
            this.saldo=saldo;
      }
      tipoCliente=function(){
            let tipo;
            if (this.saldo>1000){
                  tipo='Preferencial';
            }
            else{
                  tipo='Normal';
            }
            return tipo;
      }
      imprimirSaldo=function(){
            return `Hola ${this.nombre}, tu saldo es de ${this.saldo}`;
      }

}

let cliente1=new Cliente('Maria',4000);
console.log(cliente1);
console.log(cliente1.tipoCliente());
console.log(cliente1.imprimirSaldo());*/


/*************Herencia *******************/

/*
class Empresa extends Cliente {
      constructor(nombre,saldo,telefono,direccion){
            super(nombre,saldo);
            this.telefono=telefono;
            this.direccion=direccion;
      }
}

let empresa1=new Empresa('LG',25000,'1545444','Catamarca 225');
console.log(empresa1);
console.log(empresa1.tipoCliente());
console.log(empresa1.imprimirSaldo());

*/

/*DOM (Document Object Model) */
/*let elemento;
elemento=document;
console.log(elemento);*/

/************Obtenemos el elemento con getElementById *****************/

/*
let encabezado=document.getElementById("tituloPrincipal");

///////////Por ejemplo podemos cambiarle el texto
encabezado.innerHTML='Ejemplo de JavaScript';
console.log(encabezado);
*/

///**Obtenemos el elemento con getElementByTagName */
/*
let elemento=document.getElementsByTagName("label");

console.log(elemento);
*/


///**Obtenemos lo elemento con getElementByClassName */
/*let elemento=document.getElementsByClassName("boton");

var i;
for (i=0; i<elemento.length; i++){
      elemento[i].style.backgroundColor="red";
}

console.log(elemento);*/

///**Obtenemos lo elemento con getElementByName */
/*

let elemento=document.getElementsByName("nombreCurso");

console.log(elemento);
*/


///**Obtenemos lo elemento con querySelector, devuelven el primer elemento */

/*
let elemento1 = document.querySelector(".boton");
console.log(elemento1);  // Muestra el primer elemento con clase "boton"

let elemento2 = document.querySelectorAll(".boton");
console.log(elemento2);  // Muestra todos los elementos con clase "boton"
*/


/********************Crear Elementos *****************/
let enlace=document.createElement("a");

/*Creamos la clase*/

enlace.className="enlace"

/*Agregamos un id*/

enlace.id="nuevoId";


/*Le agregamos atributos*/

enlace.setAttribute("href","#");


/*Agregamos el Texto */

enlace.appendChild(document.createTextNode("Nuevo Enlace"));


/*Agregamos al html */

let li=document.createElement("li");
li.appendChild(enlace);

document.getElementById("listaCursosDisponibles").appendChild(li);

console.log(enlace);


