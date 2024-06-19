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

- Descripción: [Este programa calcula el valor del angulo faltante de un triangulo,
tomando los valores de los otros dos angulos como entrada. Angulos =180°]    

*/

//modulo prompt para recibir datos por consola, lo carga de npm
const prompt = require('prompt-sync')();

//variables que almacenan los dos angulos conocidos
const angulo1 = parseFloat(prompt("Por favor digite el valor del primer angulo: "));
const angulo2 = parseFloat(prompt("Por favor digite el valor del segundo angulo: "));

//funcion que calcula el angulo faltante
console.log(`\nEl valor del tercer angulo de un triangulo con angulos de ${angulo1} y ${angulo2} es de ${180 - (angulo1 + angulo2)}.`);