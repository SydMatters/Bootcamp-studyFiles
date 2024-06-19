/*
- 18/Junio/2024
- Hora: 
- Versión: 2
- Autores: Los 39 del Bootcamp
- Nombre del lenguaje utilizado: JavaScript
- Versión del lenguaje utilizado: ECMAScript 6.0
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Salvedades: Para valores no positivos, no se garantiza el resultado correcto
- Descripción: Este programa calcula el resultado aproximado del logaritmo natural de x por Series de Taylor
*/

const prompt = require('prompt-sync')(); // Importa el modulo prompt-sync que viene de Node.js

let a = 0; // Inicializa la variable a en 0
let b = 1; // Inicializa la variable b en 1
let suma = 0; // Inicializa la variable suma en 0

console.log("Serie de fibonacci entre 0 y 100: ");  // Imprime el encabezado


while (a <= 100) {        // Mientras a sea menor o igual a 100

    suma += a;             // Suma la variable (a) a la variable suma
    let c = a;               // Guarda la variable a en la variable c
    a = b;                   // Guarda la variable b en la variable a
    b = c + b;                // Suma la variable c con la variable b

    console.log(c);          // Imprime la variable c
}

console.log(`Y su suma es:${suma} `);     // Imprime la variable suma



