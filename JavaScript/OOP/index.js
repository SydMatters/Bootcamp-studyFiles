// //Primitive data type
// console.log(typeof "Primitive data type".toLowerCase());
// console.log(typeof 1);
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof null); //object
// console.log(typeof Symbol('symbol'));


// //Object data type
// console.log(typeof {});
// console.log(typeof []);
// console.log(typeof new Date());
// console.log(typeof new RegExp());

// console.log(typeof new Number(1));
// console.log(typeof new Boolean(true));
// console.log(typeof new String('string'));

//Literal Object

// console.log({})

// let name  = 'John';
// let age = 25;
// let isMarried = false;

// // Empty Object

// const person = {};
// //instancia
// const user = {
//     name: "Ryan",
//     age: 30,
//     isMarried: true,
//     hobbies: ['reading', 'running', 'coding'],
//     address : {
//         street : "123 Main St",
//         city : "New York",
//     }
// }

//Propoerties

//Instancia de objetos
// const user = {
//     name: "Ryan",
//     lastName: "Black", //propiedades
//     age: 30,
//     isMarried: true,
//     hobbies: ['reading', 'running', 'coding'],
//     address : {
//         street : "123 Main St",
//         city : "New York",
//     },
//     showFullName(){
//         return this.name + " " + this.lastName
//     }
// }

//Varias instancias
// const user1 = {
//     name: "Ryan",
//     lastName: "Black", //propiedades
//     age: 30,
//     isMarried: true,
//     hobbies: ['reading', 'running', 'coding'],
//     address : {
//         street : "123 Main St",
//         city : "New York",
//     },
//     showFullName(){
//         return this.name + " " + this.lastName
//     }
// }
// const user2 = {
//     name: "Ryan",
//     lastName: "Black", //propiedades
//     age: 30,
//     isMarried: true,
//     hobbies: ['reading', 'running', 'coding'],
//     address : {
//         street : "123 Main St",
//         city : "New York",
//     },
//     showFullName(){
//         return this.name + " " + this.lastName
//     }
// }
//Metodos
// const account = {
//     number : "123456789",
//     amount : 10000,
//     deposit(saldo){
//         this.amount += saldo;
//         console.log(this.amount)
//     },
//     withDraw(gasto){
//         if(this.amount - gasto < 0){
//             console.log("No puede hacer el retiro")
//         }else{
//             this.amount -= gasto;
//             console.log(this.amount);
//         }
//     }
// }

// account.deposit(100);
// account.withDraw(200);
// account.withDraw(9901)

//Constructores

// function Person (){
//     this.name ="";
//     this.lastName = "";
//     this.age = 0;
//     this.showFullName = function(){
//         return `${this.name} ${this.lastName}`   
//     }
// }

// const user2 = new Person();
// user2.name = "Joe";
// user2.lastName = "Gringo";
// user2.age=22;

// console.log(user2.showFullName());
// console.log(user2);

//Object contructor

// const person =  new Object();
// console.log(person);

// const person2 = {};
// console.log(person.constructor === Object);

// const string = new Object("hello world")
// string.name = "Special String";
// string.test = function(){
//     return this +"test"
// }
// console.log(string.name);
//mostrando values
// const user = {
//     name: "ryan",
//     lastName : "black",
//     age: 30,
//     showName(){
//         return this.name;
//     }
// }

// console.log(Object.values(user))

//new

// function Person(){
//     "use strict" //Esto hace que el new sea estrictamente necesario para la instancia con el constructor;
//     this.name = "";
//     this.lastname = "";
// }

// const person = new Person(); // Use 'new' to create a new instance of Person
// console.log(person);

//new

// const makind = {
//     Person: function () {
//         "use strict" //Esto hace que el new sea estrictamente necesario para la instancia con el constructor;
//         this.name = "";
//         this.lastname = "";
//     }
// }

// const person = new makind.Person(); // Use 'new' to create a new instance of Person
// console.log(person);
// console.log(makind);
 
//Prototype

// function Person(){
//     this.name = "";
//     this.lastname = "";
// }

// const john = new Person();
// const mario = new Person();

// john.name = "John";
// john.lastname = "Doe";

// function user(name, lastName){
//     this.name = name;
//     this.lastname = lastName;
//     this.displayNqame = function(){
//         return `${this.name} ${this.lastname}`;
//     } 
// }

// const user1 = new user("John", "Doe");
// user1.name = "Ryan";
// console.log(user1); 
// console.log(user1.displayNqame());

// user1.greet = function(){
//     return `Hello ${this.name} ${this.lastname}`
// }

// user2 = new user("Mario", "Bros");
// user3 = new user("Maria", "perez");

// console.log(user1.greet());
// console.log(user2);

// user.prototype.greet = function(){
//     return `Hello ${this.name} ${this.lastname}`
// }

// console.log(user1.greet());
// console.log(user2.greet());

// Person.prototype.age = 0;

// john.age = 25;
// console.log(john.age);

//Cambiando propiedades de objetos ya existentes propios de JS

// const s = new String("Hello");

// String.prototype.test = function(){{
//     return this + " test"
//     }
// }

// console.log(s.test());
// console.log("Aparato".test());

//Clases

// function Person(name, lastName){
//     this.name = name,
//     this.lastName = lastName,
//     this.showFullName = function(){
//         return `${this.name} ${this.lastName}`
//     }
// }

// class personClass{
//     constructor(name, lastName){
//         this.name = name;
//         this.lastName = lastName;
//         return{
//             x : 10 //esto no es recomendable. Con esto todos los objetos instanciado retornaran x:10
//         }
//     }
//     showFullName(){
//         return `${this.name} ${this.lastName}`
//     }
// }

// const person = new personClass("John", "Doe");
// console.log(person);
// console.log(person.showFullName());

// //Nota: Las clases no son hoisted, es decir, no se pueden llamar antes de ser declaradas.
// //tienen un contexto global y no pueden ser llamadas en un contexto local.
// //pueden haber clase anonimas, pero no es recomendable.

// console.log(typeof personClass);

//Asociacion de clases

// class Person{
//     constructor(name, lastName){
//         this.name = name;
//         this.lastName = lastName;
//     }
//     showFullName(){
//         return `${this.name} ${this.lastName}`
//     }
// }

// const john = new Person("John", "Doe");
// const mario = new Person("Mario", "Bros");

// mario.parent = john;

// console.log(mario)
// console.log(mario.parent)
// console.log(john)

//Agregacion de clases

// class Person{
//     constructor(name, lastName){
//         this.name = name;
//         this.lastName = lastName;
//     }
//     showFullName(){
//         return `${this.name} ${this.lastName}`
//     }
// }

// const company ={
//     name: "Fazt Tech",
//     employees: []
// }

// const john = new Person("John", "Doe");
// company.employees.push(john);

// console.log(company);

//Composicion de clases

// const person = {
//     name: "ryan",
//     lastname: "black",
//     address:{ //Este objeto es dependiente de person, por estar fuertemente relacionado
//         street: "123 Main St",
//         city: "New York"
//     }
// }
// //Un componente no tiene vida independiente de la clase principal


//Encapsulacion
//  const company ={
//     name: "Fazt Tech",
//     employees: [],
//     sortEmployees: function(){}
//  }

//  company.sortEmployees = 'asssd'
//  company.sortEmployees();

//  function Company(name){
//     let employees = []; //Encapsulacion
//     this.name = name,

//     this.getEmployees = function(){
//         return employees;
//     }

//     this.addEmployee = function(employee){
//         employees.push(employee);
//     }
//  }
//  const company = new Company("Fazt Tech");

//  console.log(company);
//  console.log(company.employees);
//  console.log(company.name);
//  console.log(company.getEmployees());

//  company.addEmployee("John");

//  console.log(company.getEmployees());

//Herencia

// function Person(name, lastName){
//     this.name = name;
//     this.lastName = lastName;
// }

// function Programmer(){
//     this.languege = ''
// }

// Programmer.prototype = new Person();

// const programmer = new Programmer();
// const person = new Person("maria", "perez");

// programmer.name = "John";
// programmer.lastName = "Doe";
// programmer.languege = "JavaScript";

// console.log(programmer);
// console.log(person);

// class Person{
//     constructor(name, lastName,age){
//         this.name = name;
//         this.lastName = lastName;
//         this.age = age;
//     }
// }

// class Programmer extends Person { //Muy parecido a java.
//     constructor(languege,name,lastName){
//         super(name,lastName);
//         this.languege = languege;
//     }
// }
// const person = new Person("John", "Doe");
// const programmer = new Programmer("JavaScript", "Ryan", "Black");

// console.log(programmer);

//Polimorfismo

// function countItems (x){
//     return x.toString().length;
// }

// console.log(countItems("Hello")); 

