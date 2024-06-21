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

- Descripción: [Este programa calcula e imprime el perimetro de un rectangulo]

*/

//modulo prompt para recibir datos por consola, lo carga de npm
const prompt = require('prompt-sync')();

//variables que almacenan el largo y ancho del rectangulo
const largo = parseFloat(prompt("Por favor digite el largo del rectangulo: "));
const ancho = parseFloat(prompt("Por favor digite el ancho del rectangulo: "));

//funcion que calcula el perimetro del rectangulo
perimetro = (largo, ancho) => 2 * (largo + ancho);

//imprime el resultado
console.log(`El perimetro del rectangulo con largo ${largo.toFixed(0)} y ancho ${ancho.toFixed(0)} de ${perimetro(largo, ancho)}.`);
