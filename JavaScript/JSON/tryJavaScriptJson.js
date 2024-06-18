//JSON: JavaScript Object Notation
//JSON es un formato de intercambio de datos ligero y fácil de leer.
//Se utiliza principalmente para transmitir datos entre un servidor y una aplicación web como alternativa a XML.
//Es tener un formato de descripcion de textos de tipo key-value, lo cual ayuda a que sea sencillo de usar y leer.

//Copio y pego el string de JSON
const clientes = `
[
    {
        "nombre": "Juan",
        "edad": 25,
        "ciudad": "Madrid",
        "orden" : true
    },
    
    {
        "nombre": "Ana",
        "edad": 30,
        "ciudad": "Barcelona",
        "orden" : false
    },
    
    {
        "nombre": "Pedro",
        "edad": 35,
        "ciudad": "Valencia",
        "orden" : true
    }
]`

//Parseamos el string de JSON a un objeto de JavaScript
console.log(typeof clientes) //string

const jsonData = JSON.parse(clientes) //parseamos el string a un objeto de JavaScript
console.log(typeof jsonData) //object

//Ahora lo puedo manipular como cualquier objeto de JavaScript

const ordenesTrue = jsonData.filter(
    (cliente) => cliente.orden === true //filtramos los clientes que tienen orden
);

console.log(ordenesTrue) //devuelve los clientes que tienen orden

//Stringify: convierte un objeto de JavaScript a un string de JSON

const  ordenesEntregadas = JSON.stringify(ordenesTrue);
console.log(typeof ordenesEntregadas) //string
console.log(ordenesEntregadas) //devuelve un string de JSON con los clientes que tienen orden

//Modificar archivo JSON

const clienteNuevo = {
    nombre: "Carlos",
    edad: 40,
    ciudad: "Sevilla",
    orden: false
}

const fs = require('fs');

const newClient = JSON.stringify(clienteNuevo); //convertimos el objeto a un string de JSON

fs.writeFile('pruebaJSON.json', newClient, (err) => {
    if (err) throw err;
    console.log('Cliente añadido');
})