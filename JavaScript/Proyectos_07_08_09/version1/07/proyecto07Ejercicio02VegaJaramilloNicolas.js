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

- Descripción: [Este programa calcula el volumen de una esfera]


*/

//modulo prompt para recibir datos por consola, lo carga de npm
const prompt = require('prompt-sync')();

//variable que almacena el radio de la esfera
const radio = parseFloat(prompt("Por favor digite el radio de la esfera: "));

//funcion que calcula el volumen de la esfera
volumen = (radio) => (4/3) * 3.1415926 * Math.pow(radio, 3);
//Se llama al objeto Math para obtener el valor de PI y el metodo pow para elevar el radio al cubo

//imprime el resultado
console.log(`El volumen de una esfera de radio 3 es de ${volumen(radio).toFixed(5)}`);
