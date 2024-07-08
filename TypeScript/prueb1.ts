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

//inferencia
const e = 1
const b = 2
const c = e+b

let cadena = 'hola'

//functions

// function saludar(name: string){
//   console.log(`Hola ${name}`)
// }
// saludar('Tony')//Valido, mismo tipo de dato
// saludar(2) //No valido

//aunque este codigo esté mal TypeScript es capaz de compilar y devolver el codigo de JS
// function saludar({ name, age }){
//   console.log(`Hola ${name}, tienes ${age} años`)
// }
// saludar({ name:2 , age: 'Pepe'})
//Pero la gracia es evitar los anys

//Una forma de tiparlos:

// function saludar ({name,age}: {name:string, age:number}){
//   console.log(`Hola ${name}, tienes ${age} años`)
// }

// saludar({name: 'Pepe', age: 2})

// function saludar (persona :{name:string, age:number}){
//   console.log(`Hola ${persona.name}, tienes ${persona.age} años`)
// }

// saludar({name: 'Pepe', age: 2})

// function saludar ({name, age}: {name:string, age:number}){
//   console.log(`Hola ${name}, tienes ${age} años`)
//   return age
// }


// let username : string

// username = saludar({name: 'Pepe', age: 2}) //No se puede asignar un number a un string, 
//Sin ponerle que devuelve la función typescript infiere que devuelve un numero gracias a age

//forma correcta

// function saludar ({name, age}: {name:string, age:number}) :string {
//   console.log(`Hola ${name}, tienes ${age} años`)
//   return age //conflicto porque ahora está retornando un number cuando la función devuelve un string
// }

//Function es el any de las funciones, es decir, cualquier tipo de función
// const sayHiFromFunction = (fn : Function ) => {
//   return fn('Miguel')
// }

// sayHiFromFunction((name:string) => {
//   console.log(`Hola ${name}`)
// })

//void indica que la función en un procedimiento, puede devolver cosas, pero lo que se devuelve no importa
//Las funciones devuelven undefined de forma implicita
// const sayHiFromFunction = (fn : (name:string) => void ) => {
//   return fn('Miguel')
// }

// const sayHi = (name:string) => {
//   console.log(`Hola ${name}`)
// }

// sayHiFromFunction(sayHi)

//Type arrow functions

// const sumar = (a:number, b:number) : number => {
//   return a+b
// }

// const restar : (a:number, b:number) => number = (a,b) => {
//   return a-b
// }

// //never
// //funciones que se saben que no van a devolver nada
// //nunca llega al final de la función
// function throwError(message: string) : never {
//   throw new Error(message)
// }


// //Las funciones no tienen inferencia de tipos, hay que ponerlos siempre

// const avengers = ['Ironman', 'Thor', 'Capitan America']

//Con las funciones anonimas si hay inferencia de tipos

// avengers.forEach(function (avenger){
//   console.log(avenger.toUpperCase())
// })


// //Objetos. tiene inferencia de datos

// let hero ={
//   name: 'Tony',
//   age: 45
// }

// function createHero(name: string, age: number) {
//   return {
//     name,
//     age
//   }
// }
// const thor = createHero('Thor', 1500)

// hero.power = 100 //No se puede añadir una propiedad que no está definida en el objeto

//type alias para definir un tipo de dato

// type Hero = {
//   name: string,
//   age: number
// }

// let heroe : Hero = {
//   name: 'Tony',
//   age: 45
// }

// //reduntante
// function createHero2(name: string, age: number) : Hero {
//   return {
//     name,
//     age
//   }
// }

// const thor2 = createHero2('Thor', 1500)

// //mejor forma

// function createHero3(heroe: Hero) : Hero {
//   const {name, age} = heroe
//   return {name, age}
// }
// //Ahora espera un objeto de tipo Hero 
// const thor3 = createHero3({name: 'Thor', age: 1500})

//hay una forma de hacerlo más corto
// type Hero = {
//   id?: number,
//   name: string,
//   age: number
//   isActive?: boolean //Si está debe ser un boolean sino, no pasa nada
//   //Aún no es inmutable
// }

// let heroe: Hero = {
//   name : 'Tony',
//   age: 45
// }

// function createHero (hero: Hero): Hero {
//   const {name, age} = hero
//   return {name, age, isActive: true}
// }

// const thor = createHero({name: 'Thor', age: 1500})

// thor.id?.toString() //Si id existe, conviertelo a string, TypeScript es capaz de inferir su existencia
// //colocando automaticamente un  ? se asegura de que no sea undefined

// type Heroe = {
//   readonly id?: number, //No se puede modificar
//   name: string,
//   age: number
// }

//Para hacerlo inmutable es necesario el Object.freeze de Js

//template union types

// type HeroID = `${string}-${string}-${string}-${string}-${string}`

// type Hero = {
//   readonly id?: HeroID,
//   name: string,
//   age: number,
//   isActive?: boolean
// } 

// function create(hero: Hero): Hero {
//   const {name, age} = hero
//   return {
//     id: crypto.randomUUID(),
//     name,
//     age,
//     isActive: true
//   }
// }

// const thor = create({name: 'Thor', age: 1500})
// type HexadecimalColor = `#${string}`

// const color : HexadecimalColor= '0033ff'
// const color2 :HexadecimalColor= '#ff0000'

// type HeroID = `${string}-${string}-${string}-${string}-${string}`
// type HeroPowerScale = 'low' | 'medium' | 'high' | 'super' | 'godlike' //La escala de poderes de los heroes
// //puede ser low, medium, high, super, godlike

// let ann : number | string
// ann = 2 //Valido



// type Hero = {
//   readonly id?: HeroID,
//   name: string,
//   age: number,
//   isActive?: boolean,
//   powerScale?: HeroPowerScale
// } 

// function create(hero: Hero): Hero {
//   const {name, age} = hero
//   return {
//     id: crypto.randomUUID(),
//     name,
//     age,
//     isActive: true
//   }
// }

// const thor = create({name: 'Thor', age: 1500})

// thor.powerScale = 'high'

//Intersectuon types

type HeroID = `${string}-${string}-${string}-${string}-${string}`
type HeroPowerScale = 'low' | 'medium' | 'high' | 'super' | 'godlike' //La escala de poderes de los heroes
//puede ser low, medium, high, super, godlike

let ann : number | string
ann = 2 //Valido



type Hero = {
  readonly id?: HeroID,
  name: string,
  age: number,
  isActive?: boolean,
  powerScale?: HeroPowerScale
} 

function create(hero: Hero): Hero {
  const {name, age} = hero
  return {
    id: crypto.randomUUID(),
    name,
    age,
    isActive: true
  }
}

const thor = create({name: 'Thor', age: 1500})

thor.powerScale = 'high'  

