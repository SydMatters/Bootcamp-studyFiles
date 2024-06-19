/* -Fecha de publicación: Junio 18
- Hora: 
- Versión de su código: 1
- Autores: Ingenieros del BootCamp
- Nombre del lenguaje utilizado: JavaScript
- Versión del lenguaje utilizado: ECMAScript 6
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Descripcion: Este programa pide un numero de termino deseado de la serie de Narayana: 1, 1, 1, 2, 3, 4, 6, 9, 13, ...*/

const prompt = require('prompt-sync')(); // Se importa la libreria prompt-sync

function serieDeNarayana(indice){
    let serie = [1, 1, 1]; // Se inicializa la serie con los primeros 3 terminos
    if (indice < 0) // Se valida si el indice es negativo
        console.log("No se permiten números negativos!"); // Se imprime un mensaje de error
    else if (indice <= 2) // Se valida si el indice es menor o igual a 2
        return serie.slice(0, indice + 1); // Se retorna la serie hasta el indice
    else {
        for (let i = 3; i <= indice; i++) { // Se recorre la serie desde el termino 4 hasta el termino deseado
            serie[i] = serie[i-1] + serie[i-3]; // Se calcula el termino actual
        }
        return serie;
    }
}

let indice = parseInt(prompt("Ingrese el termino al que desea ingresar: "));

console.log("La serie hasta el termino " + indice + " es: " + serieDeNarayana(indice));