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

- Descripción: [Este programa recibe horas y minutos e imprime el total de minutos]

*/

//modulo prompt para recibir datos por consola, lo carga de npm
const prompt = require('prompt-sync')();

//variables que almacenan las horas y minutos
const horas = parseInt(prompt("Por favor digite las horas: "));
const minutos = parseInt(prompt("Por favor digite los minutos: "));

//funcion que calcula el total de minutos
totalMinutos = (horas, minutos) => (horas * 60) + minutos;

//imprime el resultado
console.log(`${horas} horas y ${minutos} minutos equivalen a ${totalMinutos(horas, minutos)} minutos.`);

