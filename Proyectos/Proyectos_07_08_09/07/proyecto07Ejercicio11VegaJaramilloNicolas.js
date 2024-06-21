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

- Descripción: [Este programa recibe horas, minutos y segundos y muestra el total de milisegundos] 

*/

//modulo prompt para recibir datos por consola, lo carga de npm
const prompt = require('prompt-sync')();

console.log("Por favor digite el numero de horas, minutos y segundos que desea convertir a milisegundos.\n");
//variables que almacenan las horas, minutos y segundos
const horas = parseInt(prompt("Digite las horas: "));
const minutos = parseInt(prompt("Digite los minutos: "));
const segundos = parseInt(prompt("Digite los segundos: "));

//funcion que calcula el total de milisegundos
totalMilisegundos = (horas, minutos, segundos) => ((horas * 3600) + (minutos * 60) + segundos) * 1000;

//imprime el resultado
console.log(`\nLa cantidad de milisegundos para ${horas} hora, ${minutos} minutos y ${segundos} segundos es de ${totalMilisegundos(horas, minutos, segundos).toLocaleString('de-DE')} milisegundos`);
