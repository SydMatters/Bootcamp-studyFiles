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

- Descripción: [Programa que recibe 2 numeros y realiza operaciones de suma resta
                multiplicacion y division y muestra los resultados]    

*/

//modulo prompt para recibir datos por consola, lo carga de npm
const prompt = require('prompt-sync')();

//variables que almacenan los numeros
const num1 = parseFloat(prompt("Por favor digite el primer numero: "));
const num2 = parseFloat(prompt("Por favor digite el segundo numero: "));

//funciones que realizan las operaciones
suma = (num1, num2) => num1 + num2;
resta = (num1, num2) => num1 - num2;
multiplicacion = (num1, num2) => num1 * num2;
division = (num1, num2) => num1 / num2;

//imprime los resultados
console.log(`Suma: ${suma(num1, num2)}`);
console.log(`Resta: ${resta(num1, num2)}`);
console.log(`Multiplicacion: ${multiplicacion(num1, num2)}`);
console.log(`Division: ${division(num1, num2)}`);
