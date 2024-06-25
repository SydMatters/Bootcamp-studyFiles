// Un evento es una acción que se ejecuta cuando el usuario o el navegador realiza una acción en la página web.
const wrapper = document.querySelector('[data-id = "wrapper"]');

const input = document.querySelector('[type="text"]');
const changeUser = document.querySelector('[data-id="name"]');

const section = document.querySelector('.section');

const buttonShow = document.querySelector('[data-id="button-show"]');

const buttonHide = document.querySelector('[data-id="button-hide"]');

//Un evento requiere de un Listener y un Handler
//Listener: es el que escucha el evento
//Handler: es el que ejecuta la acción

// input.addEventListener('change', (event) => {
//     changeUser.textContent = event.target.value;
// })
//target : foco donde se origina el evento del input

//Manera más sensilla de hacerlo

// function controladorEvento(){
//     const nombre = prompt('Ingresa tu nombre');

//     alert(`Hola ${nombre}`);
// }

// buttonShow.onclick = controladorEvento; //Si coloco parentesis se llama sin que pase el evento

//para eleminar controlador de evento
// buttonShow.onclick = null;

//No puedo asignar dos eventos a un mismo elemento

// buttonShow.onclick = () => {
//     alert('Hola');
// }

//DOMContentLoaded: se ejecuta cuando el DOM ha sido cargado completamente

//La manera más recomendada
//Listener - Handler
// buttonShow.addEventListener('click', controladorEvento);
//Este evento soporta todos los eventos en el dom

//Puedo meter funciones
//Se pueden acumular eventos
// buttonShow.addEventListener('click', () => {
//     alert('Soy otro manejador de eventos');
// });

//Es mejor escuchar los eventos desde JS

function showSection(event){
    event.preventDefault(); //Evita que se ejecute el evento por defecto
    // console.log(event);
    // console.log(event.target);
    wrapper.className = "show";
    // console.log(this); //Hace referencia al elemento que dispara el evento
    // this.textContent = "He cambiado el texto";//This hace referencia al objeto que dispara el evento

function hideSection(event){
    // event.preventDefault();
    // wrapper.className = "hide";

}


// const hideSection = (event) => {
//     event.preventDefault(); //Evita que se ejecute el evento por defecto
//     wrapper.className = "hide";
//     //EL VALOR DE THIS ES EL OBJETO GLOBAL, cuando se usan funciones flecha
//     console.log(this)
// };

function hideSection = (event) => {
    event.preventDefault(); //Evita que se ejecute el evento por defecto
    wrapper.className = "hide";
    //EL VALOR DE THIS ES EL OBJETO GLOBAL, cuando se usan funciones flecha
    console.log(this)
};
//con funciones this toma el contexto de las funciones flecha


//Cambiando clases logro mostrar y ocultar el section
buttonShow.addEventListener('click', showSection);

buttonHide.addEventListener('click', hideSection);


// input.addEventListener('change', (event) => {
//     console.dir(event.target); //Muestra todas las propiedades del elemento en consola
//     console.log(event.target.value);
//     changeUser.textContent = event.target.value;
// });

// wrapper.addEventListener('click', (event) => {
//     event.target.style.backgroundColor = 'hotpink';
// });

// const form = input.parentElement;

// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     console.log('Formulario enviado');
// });

// form.onsubmit = function (){

//     console.log('Enviado')
// }