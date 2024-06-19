/*
-18/06/2024 
- hora ---
- version 1.0
-Autores. Los 39 del Bootcamp
- JavaScript
- JavaScript ES6.
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
Pide un nuemro de terminos para la serie de Perrin y la impime uno a uno los terminos hasta el numero ingresado.
Vgr: Salvedad: Para entradas de tipo string, no garantizamos los resultados.
*/

// Importa el módulo 'prompt-sync' para recibir entradas del usuario de forma síncrona
const prompt = require('prompt-sync')();

//la funcion SeriePerrin se encarga de imprimir la serie de perrin hasta n terminos
function SeriePerrin(n /*numero de terminos */) {
    let start = 3; // variable que contiene el primer termino de la serie, luego este mutara para ser el antepenultimo termino (n-2)
    let next = 0; // segundo termino de la serie de perrin, luego mutara a termino(n-1)
    let next2 = 2; // termino 3 de la serie de perrin, luego mutara a termino = (n-2) + (n-1)
    for (let i = 0; i < n; i++) {
        console.log(`${start}`);
        let aux = next2; // auxiliar para almacenar el valor de next2
        next2 = start + next;
        start = next;
        next = aux;
    }
}

const number = parseInt(
    prompt("Por favor, ingresa el número de terminos deseados: "),
);

SeriePerrin(number);
