/*
- Fecha de publicación: [18/06/2024]
- 11:03 PM 
- Versión 01
- Autores: Nicoalas Vega Jaramillo
- Nombre del lenguaje utilizado: [Javascript]
- Versión del lenguaje utilizado: [v12.22.9]
- Presentado a: [Doctor Ricardo Moreno Laverde]

------- | Universidad Tecnológica de Pereira |-------------
--- | Programa de Ingeniería de Sistemas y Computación |---

- Descripción: [Este programa convierte los grados centigrados a grados Fahrenheit]


*/
//modulo prompt para recibir datos por consola, lo carga de npm
const prompt = require('prompt-sync')();
//variable que almacena los grados centigrados
const grados = parseInt(prompt("Por favor digite los centigrados a convertir a Fahrenheit: "));

//funcion que convierte los grados centigrados a grados Fahrenheit
fahrenheit = (grados) => (grados * 9/5) + 32;

//imprime el resultado
console.log(`Los ${grados}°C son ${fahrenheit(grados).toFixed(1)} grados Fahrenheit`);
//Se llama al metodo toFixed para redondear el resultado a un decimal