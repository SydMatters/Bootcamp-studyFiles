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

- Descripción: [Este programa recibe el numero de minutos e imprime el total de horas y minutos]

*/

//modulo prompt para recibir datos por consola, lo carga de npm
const prompt = require('prompt-sync')();

//variable que almacena los minutos
const minutos = parseInt(prompt("Por favor digite la cantidad de minutos: "));

//funcion que calcula el total de horas y minutos
totalHorasMinutos = (minutos) => {
    let horas = parseInt(minutos / 60);
    let minutosRestantes = minutos % 60; //Calcula el residuo de la division,
    // ya que las horas son enteras y los minutos son el residuo de la division entre 60.
    return [horas, minutosRestantes];
}

//imprime el resultado
console.log(`${minutos} minutos equivalen a ${totalHorasMinutos(minutos)[0]} horas y ${totalHorasMinutos(minutos)[1]} minutos.`);