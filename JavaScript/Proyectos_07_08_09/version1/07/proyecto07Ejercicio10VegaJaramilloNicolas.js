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

- Descripción: [Este programa convierte de mph a m/s]    
*/

//modulo prompt para recibir datos por consola, lo carga de npm
const prompt = require('prompt-sync')();

//variable que almacena los mph
const mph = parseFloat(prompt("Por favor digite la cantidad de mph que desea convertir a m/s: "));

//funcion que convierte los mph a m/s
ms = (mph) => mph * (1609.344/3600);

//imprime el resultado
console.log(`${mph} mph equivalen a ${ms(mph).toFixed(2)} m/s`);

