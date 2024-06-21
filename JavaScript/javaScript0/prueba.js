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

// var miVariableGlobal = "Soy una variable global";

// console.log(miVariableGlobal);

// function miFuncion(){
//     var miVariableLocal = "Soy una variable local";
//     console.log(miVariableLocal);
//     console.log(miVariableGlobal);
// }

// var miNombre = "Nicolas";

// function mostrarMiNombre(){
//     var miNombre = "Juan";
//     console.log(miNombre);
// }

// //-----Return-----

// function sumarR(a,b){
//     return a + b;
// }

// function sumar(a,b){
//     console.log(a + b);
// }

// let resultado = sumarR(10,20);
// console.log(resultado);
// //Las funciones retornan un valor predefinidio UNDEFINED
// resultado = sumar(10,20);
// console.log(resultado);


// //Proyecto

// function inPila(arr, element){
//     arr.unshift(element);
// }

// function outPila(arr){
//     return arr.shift();
// }

// let pila = [1,2,3,4,5];

// inPila(pila, 6);
// console.log(JSON.stringify(pila));

// let elemento = outPila(pila);
// console.log(elemento);
// console.log(JSON.stringify(pila));

//------------------Booleanos---------------

// let esVerdadero = true;//True es invalido en JavaScript, solo es valido true
// let esFalso = false;

// console.log(esVerdadero);
// console.log(esFalso);

// console.log(5 == 5);
// console.log(5 == 6); //Compara elementos sin importar el tipo
// console.log(5 != 6);
// console.log(5 != 5);
// console.log(5 === 5);
// console.log(5 === "5"); //Compara elementos con el mismo tipo
// console.log(5 !== "5");
// //Nota: == y === son operadores de igualdad, != y !== son operadores de desigualdad
// //Nota: == y != son operadores de igualdad débil, === y !== son operadores de igualdad fuerte
// //Nota: no comparar arrays con == o ===, ya que se comparan como objetos, no comparan sus elementos.

// console.log(5 > 3);
// console.log(5 < 3);
// console.log(5 >= 5);
// console.log(5 <= 5);

//------------------Operadores logicos----------------

// let esVerdadero = true;
// let esFalso = false;

// console.log(esVerdadero && esFalso);    //AND
// console.log(esVerdadero || esFalso);    //OR
// console.log(!esVerdadero);              //NOT
// console.log(!esFalso);
//  //Tener en cuenta las tablas de verdad

//------------------Condicionales----------------

//Lo regular en otros lenguajes se usa if, else if, else

// let esVerdadero = true;

// if(esVerdadero){
//     console.log("Es verdadero");
// }

// let esFalso = false;

// if(esFalso){
//     console.log("Es verdadero");
// }

// let x = 10;

// if(x > 5 && x < 20){
//     console.log("Es mayor a 5");
// }

// let estacion = "Invierno";

// if(estacion === "Primavera"){
//     console.log("Flores");
// }else if(estacion === "Invierno"){
//     console.log("Nieve");
// }

// function esPar(numero){
//     if(numero % 2 === 0){
//         return true;
//     }else{
//         return false;
//     }
// }

// console.log(esPar(10));

// function interpretarIMC(imc){
//     if(imc < 18.5){
//         return "Bajo peso";
//     }else if(imc >= 18.5 && imc <= 24.9){
//         return "Normal";
//     }else if(imc >= 25 && imc <= 29.9){
//         return "Sobrepeso";
//     }else{
//         return "Obesidad";
//     }
// }

// console.log(interpretarIMC(20));
// console.log(interpretarIMC(30));
// console.log(interpretarIMC(15));


// function puntajeDeGolf(par, golpes){
//     if(golpes === 1){
//         return "Hoyo en uno";
//     }else if(golpes <= par - 2){
//         return "Eagle";
//     }else if(golpes === par - 1){
//         return "Birdie";
//     }else if(golpes === par){
//         return "Par";
//     }else if(golpes === par + 1){
//         return "Bogey";
//     }else if(golpes === par + 2){
//         return "Doble Bogey";
//     }else{
//         return "Peor que Doble Bogey";
//     }
// }

// console.log(puntajeDeGolf(4,1));
// console.log(puntajeDeGolf(4,2));
// console.log(puntajeDeGolf(4,3));
// console.log(puntajeDeGolf(4,4));
// console.log(puntajeDeGolf(4,5));
// console.log(puntajeDeGolf(4,6));
// console.log(puntajeDeGolf(4,7));

//------------------Switch----------------

// let dia = 3;
// //Muy similar a otros lenguajes
// switch(dia){
//     case 1:
//         console.log("Lunes");
//         break;
//     case 2:
//         console.log("Martes");
//         break;
//     case 3:
//         console.log("Miercoles");
//         break;
//     case 4:
//         console.log("Jueves");
//         break;
//     case 5:
//         console.log("Viernes");
//         break;
//     case 6:
//         console.log("Sabado");
//         break;
//     case 7:
//         console.log("Domingo");
//         break;
//     default:
//         console.log("Dia no valido");
//         break;
// }

// function caseInSwitch(val){
//     var respuesta = "";
//     switch(val){
//         case 1:
//             respuesta = "alpha";
//             break;
//         case 2:
//             respuesta = "beta";
//             break;
//         case 3:
//             respuesta = "gamma";
//             break;
//         case 4:
//             respuesta = "delta";
//             break;
//     }
//     return respuesta;
// }

// var producto = "hamburguesa";

// switch(producto){
//     case "hotdog":
//         console.log("El precio es 1.50");
//         break;
//     case "hamburguesa":
//         console.log("El precio es 2.50");
//         break;
//     case "pizza":
//         console.log("El precio es 3.50");
//         break;
//     default:
//         console.log("No hay producto");
//         break;
// }
// //Nota se puede retornar lo que sea en un switch, no solo strings
// function clasificarVolumen(valor){
//     switch(valor){
//         case 1:
//             return "Bajo";
//             break;
//         case 2:
//         case 3:
//         case 4:
//             return "Medio";
//             break;
//         case 5:
//         case 6:
//         case 7:
//             return "Alto";
//             break;
//         default:
//             return "No valido";
//             break;
//     }
// }
// //Despues del return no se ejecuta nada, es util cuando necesitamos detener la ejecución de un bloque de código y retornar un valor.
// //Ejemplo: retornar un undifined si no se cumple ninguna condición.

// var conteo = 0;

// function contarCartas(card){
//     switch(card){
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//         case 6:
//             conteo++;
//             break;
//         case 10:
//         case "J":
//         case "Q":
//         case "K":
//         case "A":
//             conteo--;
//             break;
//     }
//     var holdbet = "Esperar";
//     if(conteo > 0){
//         holdbet = "Apostar";
//     }
//     return conteo + " " + holdbet;
// }


//------------------Objetos----------------

// let miPerro = {
//     "nombre" : "Blue",
//     "edad": 0.5,
//     "raza": "Husky",
//     "color": "Blanco"
// };

// console.log(miPerro);
// console.log("Mi perro se llama " + miPerro.nombre);
// console.log("Mi perro tiene " + miPerro.edad + " años");
// console.log("Mi perro es de raza " + miPerro.raza);
// console.log("Mi perro es de color " + miPerro.color);

// let miPc ={
//     marca: "ASUS",
//     modelo: "TUF",
//     ram: 16,
//     procesador: "AMD Ryzen 5", //comillas necesarias si el nombre tiene espacios
// };
// //La notacion de corchetes es obligatoria si mi atrubuto tiene espacios
// console.log(miPc)

// console.log("Mi pc es una" + miPc["marca"]);
// console.log("Mi pc es un " + miPc["modelo"]);
// console.log("Mi pc tiene " + miPc["ram"] + " GB de RAM");
// console.log("Mi pc tiene un procesador " + miPc["procesador"]);

// let modeloIndex = 2;

// console.log(miPc[modeloIndex]);

// //Manipular atributos
// miPc.ram = 32;
// console.log(miPc);

// var mochila = {
//     "color": "azul",
//     "marca": "Nike",
//     "tamaño": "grande",
//     "material": "tela",
//     "contenido": ["libro", "cuaderno", "lapiz"]
// };

// console.log(mochila);
// mochila.contenido.push("borrador");
// console.log(mochila);

// //Agregar atributos
// mochila.peso = "1kg";
// mochila["peso"]= "1kg";
// console.log(mochila);

// //Eliminar atributos
// delete mochila.peso;

// //Verificar propiedades

// var miObjeto = {
//     "nombre": "Nicolas",
//     "edad": 25,
//     "estudiante": true

// };
// console.log(miObjeto.hasOwnProperty("nombre")); //true
// console.log(miObjeto.hasOwnProperty("apellido")); //false

// //Objetos más complejos

// var ordenesPizza = [
//     {
//         "tamaño": "mediana",
//         "tipo": "margarita",
//         "precio": 10,
//         "toppings": ["queso", "tomate"],
//         paraLlevar: true

//     },
//     {
//         "tamaño": "grande",
//         "tipo": "peperoni",
//         "precio": 15,
//         "toppings": ["queso", "peperoni"],
//         paraLlevar: true
//     }
// ];

// console.log(ordenesPizza);

// console.log(ordenesPizza[0]);
// console.log(ordenesPizza[1]);

// console.log(ordenesPizza[0].tamaño);
// console.log(ordenesPizza[1].tipo);

// //Objetos anidados

// var miReceta = {
//     "nombre": "Tarta de manzana",
//     "porciones": 8,
//     "ingredientes": [
//         {
//             "nombre": "manzanas",
//             "cantidad": 4
//         },
//         {
//             "nombre": "azucar",
//             "cantidad": "1 taza"
//         },
//         {
//             "nombre": "harina",
//             "cantidad": "2 tazas"
//         }
//     ]
// };

// console.log(miReceta);
// console.log(miReceta.ingredientes[0]);
// console.log(miReceta.ingredientes[1].nombre);
// console.log(miReceta.ingredientes[1].cantidad);

// //Objetos dentro de arrays
// var misFlores = [
//     {
//         tipo:"flores",
//         lista: ["rosas",
//                 "girasoles",
//                 "margaritas"]
//     },
//     {
//         tipo:"arboles",
//         lista: ["pino",
//                 "roble",
//                 "cedro"]
//     }
// ]

// var primeraFlor = misFlores[0].lista[0];
// var segundaFlor = misFlores[0].lista[1];
// console.log(primeraFlor);

// var coleccionDiscos = {
//     7853: {
//         artista: "Queen",
//         album: "A Night at the Opera",
//         canciones: ["Bohemian Rhapsody", "You're my best friend"]
//     },
//     5439: {
//         artista: "The Beatles",
//         album: "Abbey Road",
//         canciones: ["Come Together", "Here Comes the Sun"]
//     }
// };

// function actualizarDiscos(id, propiedad, valor){
//     if(valor === ""){
//         delete coleccionDiscos[id][propiedad];
//     }
//     else if(propiedad === "canciones" && coleccionDiscos.id.hasOwnProperty("canciones")){
//         coleccionDiscos.id["canciones"] = [];
//         coleccionDiscos.id["canciones"].push(valor);
//     }
//     else if(propiedad ==="canciones" && valor !== ""){
//         coleccionDiscos.id["canciones"].push(valor);
//     }
//     else if(valor !== "" && propiedad !== "canciones"){
//         if(coleccionDiscos.id.hasOwnProperty(propiedad)){
//             coleccionDiscos.id[propiedad] = valor;
//         }
//         else {
//             coleccionDiscos.id[propiedad] = []
//             coleccionDiscos.id[propiedad].push(valor);
//         }
//     }
// }


//------------------Ciclos----------------

// var i = 0;

// while(i < 5){
//     console.log(i);
//     i++;
// }

// var miArreglo =[];

// var i;
// console.log(miArreglo);

// while(i < 5){
//     miArreglo.push(i);
//     i++;
// }

// var Numeros = [1,2,3,4,5,6,7,8,9,10];

// while(Numeros.length > 4){
//     Numeros.pop();
// }

// console.log(Numeros);

// //for

// for(var i = 0; i < 5; i++){
//     console.log(i);
// }

// var miArreglo = [];

// for(var i = 0; i < 5; i++){
//     miArreglo.push(i);
// }

// var numerosImpares = [];

// for(var i = 1; i < 10; i += 2){
//     numerosImpares.push(i);
// }

// console.log(numerosImpares);

// for(var i = 15; i > 0; i--){ //hacia atras
//     console.log(i);
// }

// //con arreglos

// var miArreglo = [1,2,3,4,5];
// var suma = 0;
// for(var i = 0; i < miArreglo.length; i++){
//     console.log(miArreglo[i]);
//     suma += miArreglo[i];
// }

// console.log("La suma es: " + suma);

// var lenguajes = ["JavaScript", "Python", "Java", "C++", "Ruby", "C#"];

// for(var i = 0; i < lenguajes.length; i++){
//     console.log(lenguajes[i].toUpperCase());
// }

// function contarImpares (arr){
//     var conteo = 0;
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] % 2 !== 0){
//             conteo++;
//         }
//     }
//     return conteo;
// }

// //for anidados. igual que en otros lenguajes
//  var matrix = [[1,2,3],[4,5,6],[7,8,9]];

//  for(var i = 0; i < matrix.length; i++){
//     var arreglo = matrix[i];
//     console.log(arreglo);
//     for(var j = 0; j < matrix[i].length; j++){;
//         console.log(matrix[i][j]);
//     }
// }

// //do while, se ejecuta al menos una vez, como en otros lenguajes

// var x = 0;

// do{
//     console.log(x);
//     x++;
// }while(x < 5);

// var contactos = [
//     {
//         "nombre": "Juan",
//         "telefono": 123456,
//         "apellido": "Perez"
//         "gustos": ["futbol", "cine", "musica"]
//     },
//     {
//         "nombre": "Maria",
//         "telefono": 654321,
//         "apellido": "Gomez",
//         "gustos": ["tenis", "cine", "musica"]
//     },
//     {
//         "nombre": "Pedro",
//         "telefono": 456789,
//         "apellido": "Gonzalez",
//         "gustos": ["futbol", "cine", "musica"]
//     }
// ]

// function buscarContacto(nombre,propiedad){
//     for(var i = 0; i < contactos.length; i++){
//         if(contactos[i].nombre === nombre){
//             return contactos[i][propiedad] || "Propiedad no valida";
//         }
//     }
//     return "Contacto no encontrado";
// }

//--------Numeros aleatorios------------

// function generarFraccionAleatoria(){
//     return Math.random();//Numeros con muchos decimales entre 0 y 1
// }

// function generarNumeroAleatorio(){
//     return Math.floor(Math.random() * 10);//Numeros enteros entre 0 y 9
// }

// function generarNumeroAleatorioEntre(min, max){
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

//------------------Funciones parseInt y parseFloat----------------

// var cadena = "10";
// var cadenaDecimal = "10.5";
// var entero = parseInt(cadena);
// var decimal = parseFloat(cadenaDecimal);
// console.log(parseInt(cadena));
// console.log(parseInt(cadenaDecimal)); //redondea hacia abajo si es decimal
// console.log(parseInt("abc"));//NaN
// console.log(parseFloat(cadenaDecimal));
// console.log("La suma de los dos es: " + (entero + decimal));
// //parse con base

// console.log(parseInt("11", 2));//11 en binario es 3 en decimal
// console.log(parseInt("11", 8));//11 en octal es 9 en decimal
// console.log(parseInt("11", 16));//11 en hexadecimal es 17 en decimal

//-------------------Operador ternario----------------

// function esMayorDeEdad(edad){
//     return edad >= 18 ? "Es mayor de edad" : "Es menor de edad";
// }

// function retornarMayor(a,b){
//     console.log(a > b ? a : b);
// }

//-------------------Multiple ternary----------------

// function compararNumeros(a,b){
//     return a === b ? "Son iguales" 
//     : a > b ? "El primer número es mayor" 
//     : "El segundo número es mayor";
// }

//-------------------var vs let----------------
// var campista = "Juan";
// var campista = "Pedro";

// let campistaLet = "Juan";
// //let campistaLet = "Pedro"; //Error, no se puede redeclarar
// campistaLet = "Pedro"; //Se puede modificar
// console.log(campista);

// //var es global, let es local

// var miVariable = "global";

// console.log(miVariable);

// function miFuncion(){
//     var local = "local";
//     console.log(miVariable);
//     console.log(local);
// }

// //console.log(local); //Error, no se puede acceder a una variable local
// for(var i = 0; i < 5; i++){
//     console.log(i);
// }

// console.log(i); //5

// for(let i = 0; i < 5; i++){
//     console.log(i);
// }

// console.log(i); //Error, i no esta definido

// var mostrarColor =true;

// if(mostrarColor){
//     let color = "rojo";
//     console.log(color);
// }

// console.log(color); //Error, color no esta definido

//-------------------const----------------

// //variable constante que no se puede modificar después de su declaración.
// const PI = 3.1416;
// //Se escriven con uppercase y snake_case
// console.log(PI);

// //PI = 3.14; //Error, no se puede modificar

// function calcularArea(radio){
//     return PI * radio * radio;
// }

//-------------------Mutar arreglo----------------

// const MI_ARREGLO = [1,2,3,4,5];

// MI_ARREGLO= 10; //Error, no se puede modificar

// MI_ARREGLO[0] = 10; //Se puede modificar

// console.log(MI_ARREGLO);

//-------------------OBJETO INMUTABLE-----------------
// let colores = {
//     rojo: "#FF0000",
//     verde: "#00FF00",
//     azul: "#0000FF"
// };

// Object.freeze(colores); 

// colores.amarillo = "#FFFF00"; //No se puede agregar, read-only
// delete colores.rojo; //No se puede eliminar, read-only

//------------------ FLECHA-----------------
//Funciones anonimas, no tienen nombre especifico

// const fechaF = function(){
//     return new Date();
// }

// const fecha = () => new Date(); //Funcion flecha

// const sumarTres = (a,b,c) => a + b + c;

// const concatenar = (nombre, apellido) => nombre + " " + apellido;

// const concatenarArr = (arr1, arr2) => arr1.concat(arr2);

// const sumar = (a,b) => {
//     let num =6;
//     return a + b + num;
// }

// //Valor por defecto

// const incrementar = (num, valor = 1) => num + valor;

//-------------------Rest operator-----------------

// function miFuncion(...args){
//     console.log(args);
// }

// miFuncion(1,2,3,4,5);
// miFuncion(1,2,3,4,5,6,7,8,9,10);
// miFuncion([1,2,3,4,5]), [6,7,8,9,10];

// const sumar = (...args) => {
//     const args = [...args];
//     return args.reduce((a,b) => a + b, 0);
// }

//-------------------Spread operator-----------------

// const numeros = [1,2,3,4,5];

// function sumar(a,b,c,d,e){
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(d);
//     console.log(e);
//     return a + b + c + d + e;
// }

// console.log(sumar(...numeros));

//------------Sintaxis de desestructuración------------

// const usuario ={
//     nombre: "Nicolas",
//     apellido: "Vega",
//     edad: 25
// };

// const {nombre, apellido, edad} = usuario;

// console.log(nombre);
// console.log(apellido);
// console.log(edad);

// var coodernadas ={
//     x: 10,
//     y: 20,
//     z: 30
// };

// const {x, y, z} = coodernadas;

// console.log(x);
// console.log(y);
// console.log(z);


// //Objetos anidados

// const persona = {
//     johnDoe: {
//         age: 34,
//         email: "johnDowe@codecamep.com"
//     }
// };

// const {johnDoe: {age : años, email: correo}} = persona;

// console.log(años);
// console.log(correo);

// const PRONOSTICO_LOCAL={
//     "ayer": {max: 80, min: 60},
//     "hoy": {max: 85, min: 65},
//     "mañana": {max: 90, min: 70}
// };

// const minimoHoy = PRONOSTICO_LOCAL.hoy.min;    

// const maximaHoy = PRONOSTICO_LOCAL.hoy.max;

// console.log(minimoHoy, maximaHoy);

// const {hoy: {max: maxima, min: minima}} = PRONOSTICO_LOCAL;

// console.log(minima, maxima);


// //Arreglos

// var a = 8;
// var b = 6;

// [b,a] = [a,b];

// console.log("a: " + a);
// console.log("b: " + b);

// //with rest operator
// var array
// [a,b, ...array] = [1,2,3,4,5];

// const arregloInicial = [1,2,3,4,5,6,7,8];

// function removerDos(arreglo){
//     const [, , , ...nuevoArreglo] = arreglo;
//     return nuevoArreglo;
// }

// const arregloFinal = removerDos(arregloInicial);
// console.log(arregloFinal);

// //objeto como argumaneto

// var nuevoPerfilCliente ={
//     nombre: "Jane Doe",
//     edad: 25,
//     nacionalidad: "Española",
//     ubicacion: "Madrid"
// };

// const actualizarPerfil = (info) => {
//     const {nombre, edad, nacionalidad , ubicacion} = info;

//     console.log(nombre, edad, nacionalidad, ubicacion);  
// };

// actualizarPerfil(nuevoPerfilCliente);

// const estadisticas = {
//     max: 56.78,
//     standard_deviation: 4.34,
//     median: 34.54,
//     min: -0.75,
//     average: 35.85,
//     moda: 23.87
// };

// const puntoMedio = ({max,min}) => (max + min) / 2.0;

// console.log(puntoMedio(estadisticas));

//-------------------Template literals-----------------

// /*
// Caracteristicas: 
// 1. Se usa el acento invertido en lugar de comillas simples o dobles
// 2. Pueden contener comillas simples y dobles sin necesidad de escaparlas
// 3. Las lineas se preservan como se escriben en el codigo
// 4.Para remplazar una variable se escirbe ${variable}
// 5- Dentro de ${} se puede escribir cualquier expresion de JavaScript
// */

// var a=6;
// console.log(`El valor de a es ${a}`);

// var nombre = "Nicolas";
// var edad = 25;

// console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años`);

// var miArreglo = [1,2,3,4,5];

// console.log(`El primer elemento del arreglo es ${miArreglo[0]}`);
// console.log(`El primer elemento del arreglo es ${JSON.stringify(miArreglo)}`);

//-------------------Metodos-----------------

const crearPersona = (nombre, apellido, edad) => {
    return {
        nombre: nombre,
        apellido: apellido,
        edad: edad
    }
};

const crearPersona1 = (nombre,edad,idioma) => ({nombre,edad,idioma});

console.log(crearPersona("Nicolas", "Vega", 25));


const persona = {
    nombre: "Nicolas",
    apellido: "Vega",
    edad: 22,
    idioma: "Español",
    presentarse(){
        return `Hola, mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años`;
    }
};
console.log(persona.presentarse());

//------------------Clases-----------------

class TrasbordadorEspeacial{
    constructor(planeta){
        this.planeta = planeta;
    }
}

var zeus = new TrasbordadorEspeacial("Marte");

console.log(zeus.planeta);

var apolo = new TrasbordadorEspeacial("Jupiter");  

console.log(apolo.planeta); 

class Mascota {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}

var miMascota = new Mascota("Firulais", 5);

console.log(miMascota.nombre);
console.log(miMascota.edad);

//Getters y Setters


class Libro{
    constructor(titulo, autor){
        this._titulo = titulo;
        this._autor = autor;
    }

    get titulo(){
        return this._titulo;
    }

    set titulo(nuevoTitulo){
        this._titulo = nuevoTitulo;
    }

    get autor(){
        return this._autor;
    }

    set autor(nuevoAutor){
        this._autor = nuevoAutor;
    }
}

const libro = new Libro("El principito", "Antoine de Saint-Exupéry");
console.log(libro.titulo);

libro.titulo = "El principito 2";
console.log(libro.titulo);

console.log(`Hola mi nombre es Nicolas y leo ${libro.titulo} de ${libro.autor}`);
