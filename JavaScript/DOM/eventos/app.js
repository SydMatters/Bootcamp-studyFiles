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

function controladorEvento(){
    const nombre = prompt('Ingresa tu nombre');

    alert(`Hola ${nombre}`);
}

buttonShow.onclick = controladorEvento; //Si coloco parentesis se llama sin que pase el evento

//para eleminar controlador de evento
// buttonShow.onclick = null;

//No puedo asignar dos eventos a un mismo elemento

// buttonShow.onclick = () => {
//     alert('Hola');
// }

//DOMContentLoaded: se ejecuta cuando el DOM ha sido cargado completamente

//La manera más recomendada
//Listener - Handler
buttonShow.addEventListener('click', controladorEvento);
//Este evento soporta todos los eventos en el dom

//Puedo meter funciones
//Se pueden acumular eventos
buttonShow.addEventListener('click', () => {
    alert('Hola');
});
