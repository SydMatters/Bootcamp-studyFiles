/*
- Fecha de publicación: [18/06/2024]
- 12:26 AM 
- Versión 01
- Autores: Nicoalas Vega Jaramillo
- Nombre del lenguaje utilizado: [Javascript]
- Versión del lenguaje utilizado: [v12.22.9]
- Presentado a: [Doctor Ricardo Moreno Laverde]

------- | Universidad Tecnológica de Pereira |-------------
--- | Programa de Ingeniería de Sistemas y Computación |---

- Descripción: [Este programa recibe datos de nombre, apellido y año de nacimiento
    luego los imprime juntos]    

*/

//modulo prompt para recibir datos por consola, lo carga de npm
const prompt = require('prompt-sync')();

//variables que almacenan el nombre, apellido y año de nacimiento
const nombre = prompt("Por favor digite su nombre: ");
const apellido = prompt("Por favor digite su apellido: ");
const anioNacimiento = parseInt(prompt("Por favor digite su año de nacimiento: "));

//funcion que imprime el nombre, apellido y año de nacimiento
console.log(`${nombre} ${apellido} ${anioNacimiento}`);

