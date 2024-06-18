/* Pruebas del video de BOOTCAMP*/
//------------------Instanciar variables------------------

// var miVariable = "freeBootCamp"
// console.log(miVariable)

// var a;
// var b = 2;

// console.log(a);
// console.log(b);

// a = 10;

// console.log(a);

// a = b;
//JavaScript es CaseSensitive
//----------Operaiciones aritméticas----------------

// var sum = 10 + 10;
// console.log(sum);

// var rest = 10 - 5;
// console.log(rest);

// var rest = 5 - 15;
// console.log(rest);

// var producto = 10 * 10;
// console.log(producto);  

// var producto = 10 * 0;
// console.log(producto);

// var division = 10 / 2;
// console.log(division);

// var division = 10 / 0;
// console.log(division);

//-----------Numeros decimales----------------

// var numeroDecimal = 10.5;

// var peso = 79.5;
// //Todas las operaciones validas

//-------------Restos----------------

// var resto = 10 % 3;
// console.log(resto);

//------------Incrementos, decrementos y asignaciones----------------

// var librosComprados = 10;
// console.log(librosComprados);

// //opcion1

// librosComprados = librosComprados + 1;
// console.log(librosComprados);
// librosComprados = librosComprados - 1;
// console.log(librosComprados);
// //opcion2
// //
// librosComprados ++;
// console.log(librosComprados);
// librosComprados --;
// console.log(librosComprados);

// //Also exist the +=. This can variate with the other operators, like *=, /=, %=.
// //It also can be used =+, the order means that the value is added after the operation.


// librosComprados += 5;
// console.log(librosComprados);  
// librosComprados =- 5;


//------------Strings----------------

// var nombre = "Nicolas";
// var apellido = "Vega";

// //Escapar comillas

// var freeBootCamp = "Free \"BootCamp\"";
// console.log(freeBootCamp);

// //Comillas simples

// var freeBootCamp = 'Free "BootCamp"';
// console.log(freeBootCamp);
// var freeBootCamp = "Free \'BootCamp\'";
// console.log(freeBootCamp);

// /* Secuencias de escape

// Codigo | Resultado
// \' | Comilla simple
// \" | Comilla doble
// \\ | Barra invertida
// \n | Nueva línea
// \r | Retorno de carro
// \t | Tabulación
// \b | Retroceso
// \f | Salto de página
// */

// console.log("Esto es un parrafor con un salto de línea \n y aquí sigue el párrafo");

// //Concatenar

// var nombreCompleto = nombre + " " + apellido;
// console.log(nombreCompleto);

// //Concatenar con variables

// var nombreCompleto = "Mi nombre es "
// var presentacion = nombreCompleto + nombre + " " + apellido;
// console.log(presentacion);

// //tamaño de cadenas

// var nombre = "Nicolas";
// console.log(nombre.length);

// //Notación de corchetes

// var lenguaje = "JavaScript";

// /*
// Cadeba :     J  a  v  a  S  c  r  i  p  t
// Posición:    0  1  2  3  4  5  6  7  8  9
// */

// console.log(lenguaje[0]);

// //Inmutabilidad

// var lenguaje = "javaScript";
// console.log(lenguaje);

// lenguaje[0] = "J"; //No se puede cambiar el valor de una cadena
// console.log(lenguaje);

// lenguaje = "JavaScript";
// console.log(lenguaje);

// console.log(lenguaje[0]);
// console.log(lenguaje[1]);
// console.log(lenguaje[2]);
// console.log(lenguaje[3]);
// console.log(lenguaje[4]);
// console.log(lenguaje[5]);
// console.log(lenguaje[6]);
// console.log(lenguaje[7]);
// console.log(lenguaje[8]);
// console.log(lenguaje[9]);

// console.log(lenguaje[10]); //undefined

// //Las cadenas empiezan a contar desde 0

// console.log(lenguaje[lenguaje.length - 1]); //t

// var miCadena = "JavaScript";
// var n = 2;

// console.log(miCadena[miCadena.length - n]);//p


//-------------------Arrays----------------

// var miArreglo = ["Nicolas", 25, true, "Vega"];
// console.log(miArreglo);

// var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];
// console.log(estudiantes);

// //Anidados

// var listaDeEstudiantes=[["Nora",97],["Sergio",89],["Rosa",95],["Daniel",92]];
// console.log(listaDeEstudiantes);

// //Acceder a los elementos
// /*
// Arreglo: [Maria, Sergio, Rosa, Daniel]
// Posición:  0       1       2       3
// */
// console.log(estudiantes[0]);

// //Modificar elementos
// var miArreglo= [10, 20, 30, 40];
// miArreglo[0] = 100;

// console.log(miArreglo);

// miArreglo[1] = "Hola";

// miArreglo[2] = [1,2,3];

// console.log(miArreglo);

// //Arreglos multidimensionales

// var miArreglo = [[1,2,3],[4,5,6],[7,8,9]];
// console.log(miArreglo);

// /*
// Arreglo:        [[1, 2, 3],[4, 5, 6],[7, 8, 9]]
// Posición:           0       1       2
// Indices internos:0  1  2    0  1  2   0  1  2  
// */


// console.log(miArreglo[0][0]);
// console.log(miArreglo[0][1]);
// console.log(miArreglo[2][2]);

// //push

// var estaciones = ["Primavera", "Verano", "Otoño",];
// console.log(estaciones);
// estaciones.push("Invierno");//Adds a new element
// console.log(estaciones);

// //pop

// var estaciones = ["Primavera", "Verano", "Otoño", "Invierno"];
// console.log(estaciones);
// var estacion = estaciones.pop();//Removes the last element
// console.log(estaciones);
// console.log(estacion);

// //shift

// var estaciones = ["Primavera", "Verano", "Otoño", "Invierno"];
// console.log(estaciones);
// var estacion = estaciones.shift();//Removes the first element
// console.log(estaciones);
// console.log(estacion);

// //unshift

// var estaciones = [ "Verano", "Otoño", "Invierno"];
// estaciones.unshift("Primavera");//Adds a new element at the beginning
// console.log(estaciones);

// //miniproject

// var miListaDeContactos = [["Juan", 123456], ["Maria", 654321], ["Pedro", 456789], ["Ana", 987654], ["Luis", 321654]];

// for (var i = 0; i < miListaDeContactos.length; i++){
//     console.log(i+1 + "Nombre: " + miListaDeContactos[i][0]);
//     console.log( "Teléfono: " + miListaDeContactos[i][1]);
// }

//-----------------------FUNCIONES--------------------

// function mostrarMensaje(){
//     console.log("Hola Mundo");    
// }

// mostrarMensaje();

// function sumar(a,b){
//     let suma = a + b;
//     console.log("El resultado es: "+ suma);
// }

// let x = 2;

// sumar(10,20);
// sumar(100,200);
// sumar(x,x);

// function concatenarTresCaenas(cadena1, cadena2, cadena3){
//     let resultado = cadena1 + " " + cadena2 + " " + cadena3;
//     console.log(resultado);
// }

// concatenarTresCaenas("Hola", "como", "estas");

//--------------------Variable global y local----------------

var miVariableGlobal = "Soy una variable global";

console.log(miVariableGlobal);

function miFuncion(){
    var miVariableLocal = "Soy una variable local";
    console.log(miVariableLocal);
    console.log(miVariableGlobal);
}

var miNombre = "Nicolas";

function mostrarMiNombre(){
    var miNombre = "Juan";
    console.log(miNombre);  
}
