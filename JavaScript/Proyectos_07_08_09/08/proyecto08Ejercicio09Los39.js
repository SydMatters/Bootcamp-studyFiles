/*
* Fecha de publicacion: 18/06/2024
* Hora: 16:00
* Version codigo: 1.0
* Autor: Ingenieros del bootcamp
* Version: ECMAScript 6.0
* Presentado a: Doctor Ricardo Moreno Laverde
* Universidad Tecnologica de Pereira
* Programa de Ingenieria de Sistemas y Computacion
* Descripcion: programa que muestra un mensaje al usuario si al ingresar el capital supera los 7000 y le dice cual sera la ganacia
*
* Descripcion variables:
 - interes: valor del interes que ingresa el usuario
 - capital: valor del capital que ingresa el usuario
 - saldo: saldo final que se muestra si al ngresar el capital supera los 7000
*/

const prompt = require('prompt-sync')();

function invertir() {
    let interes = 0;
    let capital = 0;
    let saldo = 0;
    interes = parseFloat(prompt('por favor, ingrese el interes: '));
    capital = parseFloat(prompt('Por favor, ingrese el capital: '));

    if (capital > 7000) {
        saldo = capital + ((capital * interes)/ 100 )
        console.log("INVIERTA. SU SALDO SERA: $" + saldo)
    } else {
        console.log("NO INVIERTA")
    }
}


invertir()