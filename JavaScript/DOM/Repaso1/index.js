//--------Esta no es la forma más optima de acceder al DOM, pero es una forma de hacerlo para ver reflejado el arbol
// de nodos en la consola del navegador.

// const body = document.body// solo podemos acceser a los nodos superiores
// const wrapper = document.body.children[0];//accedo al primer nodo hijo

// const div= document.div // no se puede acceder a los nodos inferiores
//Los espacios en el documento html son considerados nodos de texto


//Si quiero acceder a los nodos inferiores debo hacerlo de la siguiente manera

// console.log(body.childNodes[1]); //accedo al segundo nodo hijo
// console.log(body.children);//accedo a los nodos hijos
// console.log(body.firstChild);//accedo al primer nodo hijo
// console.log(body.firstElementChild);//accedo al primer nodo hijo que es un elemento, no un nodo de texto
// console.log(body.lastChild);//accedo al ultimo nodo hijo
// console.log(body.lastElementChild);//accedo al ultimo nodo hijo que es un elemento, no un nodo de texto
// console.log(wrapper.lastChild)//Ultimo nodo, un espacio
// console.log(wrapper.lastElementChild)//Ultimo nodo, un div
// console.log(wrapper.hasChildNodes())//true
// console.log(wrapper.nextSibling)//texto
// console.log(wrapper.nextElementSibling)//script

// const div = wrapper.children[1];

// console.log(div);
// console.log(div.nextSibling);
// console.log(div.nextElementSibling);
// console.log(div.previousSibling);//Retorna un nodo anterior, sea o no sea texto
// console.log(div.previousElementSibling );//retorna un nodo anterior que sea un elemento, no un nodo de texto
// console.log(div.parentNode);//retorna el nodo padre

// const h1 = div.previousElementSibling;

// const anchor = div.children[0];

// anchor.addEventListener("click", function(){
//     //h1.textContent = "Estoy siendo modificado por primer hijo";
//     document.documentElement.style.backgroundColor = "black";
//     document.body.style.color = "white";
// })

// 

// console.log(anchor.parentNode);//div
// console.log(anchor.parentNode.parentNode);//wrapper
// console.log(anchor.parentNode.parentNode.parentNode);//body
// console.log(anchor.parentNode.parentNode.parentNode.parentNode);//html
// console.log(anchor.parentNode.parentNode.parentNode.parentNode.parentNode);//document
// console.log(anchor.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode);//null No tiene padre, nodo raiiz

// console.log(anchor.parentElement);//div
// console.log(anchor.parentElement.parentElement);//wrapper
// console.log(anchor.parentElement.parentElement.parentElement);//body
// console.log(anchor.parentElement.parentElement.parentElement.parentElement);//html
// console.log(anchor.parentElement.parentElement.parentElement.parentElement.parentElement);//NULL parent element solo retorna nodos tipo elemnto
// document no es un nodo de tipo elemento
// h1.textContent = "Estoy siendo modificado desde JS";
// todo lo que se tome despues de el script se toma como texto, no como un nodo

//Esta es una forma más sensilla de acceder al DOM
//Estos metodos son bastente buenos para acceder al DOM
// const wrapper = document.getElementById("wrapper");// Obtiene el nodo con base al id que se le pase
//Si porngo un id que no existe, me retorna null

//Este metodo solo se puede usar en el nodo raiz osea el documetno

// const links = document.getElementsByClassName("link");//Obtiene todos los nodos con la clase que se le pase
//Si no existe la clase, me retorna un array vacio
//Varios elementos, una coleccion html
//No se puede utilizar las porpiedades de elemntos como .children, ya que no es un nodo, es un array
//Se puede usar en cualquier tipo de elemento
// Ejemplo wrapper.getElementsByClassName("link") Obtiene todos los nodos con la clase link dentro del nodo wrapper

// const divs= document.getElementsByTagName("div");//Obtiene todos los nodos con la etiqueta que se le pase
//Si no existe la etiqueta, me retorna un array vacio
//Varios elementos, una coleccion html
//No se puede utilizar las porpiedades de elemntos como .children, ya que no es un nodo, es un array
//Se puede usar en cualquier node de tipo elemento
// Ejemplo wrapper.getElementsByTagName("div") Obtiene todos los nodos con la etiqueta div dentro del nodo wrapper

// const input = document.getElementsByName("input");//Obtiene todos los nodos con el atributo name que se le pase
//Se suele usar para inputs
//Si no existe el atributo, me retorna un array vacio
//Varios elementos, una coleccion html
//No se puede utilizar las porpiedades de elemntos como .children, ya que no es un nodo, es un array
//Se puede usar en cualquier node de tipo elemento, solo en el raiz, el nodo document
// Ejemplo wrapper.getElementsByName("input")  No se puede usar, ya que no es un nodo de tipo elemento
// console.log(wrapper); 

//Metodos impresionantes para acceder al DOM

// const wrapper = document.querySelector("#wrapper");//Obtiene el primer nodo con el selector que se le pase
//funciona con selectores de css
//Es el metodo más versatil, podemos buscar cualquier elemento
//busquedas por id, clase, etiqueta, atributo
//busqueda por clase: document.querySelector(".link")
//Se puede utilizar con cualquier elemento de documento
//Tambien se puede buscar por pseudo clase

// const linkBold = wrapper.querySelector(".link.bold");

// const pseudo = wrapper.querySelector("link:last-of-type");
//Nos permite obtener a cualquier elemento, solo retorna al primer elemento que cumpla con el selector, solo uno

//Para seleccionar varios elementos:

// const wrapperAll = wrapper.querySelectorAll(".link");//Obtiene todos los nodos con el selector que se le pase
//Se puede utilizar con cualquier elemento de documento, esto quiere decir que al busqueda va  aaprtir del nodo que se le pongo asunmientdo el rol de padre

//Mayormente se utiliza querySelectorAll y querySelector por su versatilidad

//diferencias: 
// const linksHTML = document.getElementsByClassName("link"); // Lista de nodos
// const linksNode = document.querySelectorAll(".link"); // Lista HTML
//La lista de nodos tendra 5 elementos
// Lista de nodos puede utilizar forEach
// Lista de nodos no es dinámica, no refleja cambios en el DOM

// linksNode.forEach(link => {
//     console.log(link);
// })

// Explicación forEach: 
// El forEach es un método para recorrer arrays, no para recorrer nodos

// const tagAnchor = document.createElement('a'); // Crea un nodo de tipo elemento
// tagAnchor.setAttribute('class', 'link'); // Le agrega atributos al nodo
// tagAnchor.textContent = "Hola mundo"; // Le agrega texto al nodo
//En la lista de nodos de links no refleja el cambio
// document.body.append(tagAnchor); // Agrega el nodo al final del body

// console.log(linksHTML); //La lista de HTML si refleja el cambio, ya que es un objeto dinámico
// console.log(linksNode);//La lista de nodos no refleja el cambio, ya que es un objeto estático

//La lista de nodos HTML si refleja el cambio, ya que es un objeto dinámico

//Podemos obtener elemtnos por su posición

// console.log(linksNode[0]);//Primer elemento
// console.log(linksHTML.item(0));//Primer elemento. .item() es un metodo que se puede utilizar en la lista HTml

//Si quiero utilizar elemtnos de array en una lista de nodos la podemos convertir en un array

// const linksArray = Array.from(linksNode);//Convierte la lista de nodos en un array
// console.log(linksArray);

//childNodes aunque es una lista de nodos, si se actuliza

//----------------Editar elementos
//Hay etiquetas/ nodos que tienen propiedades y metodos que otros no tienen
const wrapper = document.getElementById("wrapper");

const title = document.querySelector(".title");
const link = document.querySelector(".link.bold");
const inputNumber = document.querySelector('[type="number"]');

// console.dir(wrapper);//Mostrar todoas las propiedades y metodos de un objeto

// console.log(wrapper.className); //retorna un string con las clases que tiene el nodo
// //También es de escritura, se puede modificar

// wrapper.className = "container";//Se sobre escirbe, o sea que se borra la clase que tenia y se le pone la nueva


// console.log(link.href); //Tiene la propiedad href

// console.log(title.href); //No tiene la propiedad href

// console.log(title.nodeName);//Retorna el nombre del nodo h1

// console.log(wrapper.childNodes[0].nodeName);// Propiedad que retorna el nombre del nodo

// console.log(wrapper.innerHTML);//Retorna el html del nodo

//wrapper.innerHTML = "<h1>Estoy siendo modificado</h1>";//Se sobre escribe el html del nodo. se sobrescribe todo el html
//Si quiero agregar algo al html, se puede hacer de esta manera
//Si es el usuario el que va a modificar el html, se debe tener cuidado con la seguridad del codigo html nor eocmendable con innerHTML

// wrapper.innerHTML=  `<img src="error" onerror="alert('te han hackeado')"/>`// no recomendable

// wrapper.innerHTML += `<h2> HTML añadido </h2>`;//Añade html al nodo

// console.log(wrapper.outerHTML); //Retorna el html 

// wrapper.outerHTML = `<h1> nuevo html </h1>`;//Sobre escribe el html del nodo

// console.log(wrapper);
// const h1 = document.querySelector("h1");
//  console.log(h1);

//text content

// console.log(title.textContent);//Retorna el texto del nodo, no etiquetas html

// const textoUser = prompt("¿Cómo te llamas");

// title.textContent = `Hola bienvenido ${textoUser}`;//Sobre escribe el texto del nodo
//obre escribe o guardar el texto actual.
/* 


*/

console.dir(inputNumber);

//Cómo modificar y obtener atributos que no están en las propiedades de lso elemtnos

console.log(title.getAttribute("href")); //retorna null
console.dir(title.getAttribute("class")); //retorna la clase

console.dir(title.id = "encabezado")//Atributos ya listados

//Agregar atribvtos

title.setAttribute("href", "https://www.google.com");//Agrega un atributo al nodo

console.log(title)