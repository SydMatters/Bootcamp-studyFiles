const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45
}

console.log(persona)

let texto = 'hola'
//Cuando no sabe inferir un tipo

let a //?? any cualquiera
let anyValue: any = 'hola' //ignora el tipado del dato

let unkwonValue: unknown = 'hola'//unknown no se usa mucho, quiere decir que el tipo de dato es desconocido
//unknown es un tipo de dato que no se puede usar en ninguna operacion