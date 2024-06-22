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

function Person(){
    this.name = "",
    this.lastname = ""
}

const person = Person()
console.log(person)