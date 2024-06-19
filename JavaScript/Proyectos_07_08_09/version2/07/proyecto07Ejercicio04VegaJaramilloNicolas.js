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

- Descripción: [Este programa convierte de Km/h a mph]

*/

//modulo prompt para recibir datos por consola, lo carga de npm
const prompt = require('prompt-sync')();

//variable que almacena los km/h
const kmh = parseFloat(prompt("Por favor digite cuantos km/h quiere convertir a mph: "));

//funcion que convierte los km/h a mph
mph = (kmh) => kmh * 0.621371;

//imprime el resultado
console.log(`${kmh} km/h equivalen ${mph(kmh).toFixed(2)} mph`);