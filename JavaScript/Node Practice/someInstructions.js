//En lugar de window el nodo raiz es global
console.log(process);
console.log(process.env);
// console.exit();  //Harakiri de la app

//Con archivos

console.log(__filename, __dirname);

//Con modulos

const {suma} = require('./sumar')

console.log(suma(1, 2));

//Qué pasa con var?

//No es accesible sino es desde el nodo raiz
var miValor = 62;

console.log(miValor); //undefined

console.log(global.miValor); //62