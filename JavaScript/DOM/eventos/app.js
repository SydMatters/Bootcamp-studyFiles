// Un evento es una acción que se ejecuta cuando el usuario o el navegador realiza una acción en la página web.
// const wrapper = document.querySelector('[data-id = "wrapper"]');

// const input = document.querySelector('[type="text"]');
// const changeUser = document.querySelector('[data-id="name"]');

// const section = document.querySelector('.section');

// const buttonShow = document.querySelector('[data-id="button-show"]');

// const buttonHide = document.querySelector('[data-id="button-hide"]');

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

// function showSection(event){
//     event.preventDefault(); //Evita que se ejecute el evento por defecto
//     // console.log(event);
//     // console.log(event.target);
//     wrapper.className = "show";
//     // console.log(this); //Hace referencia al elemento que dispara el evento
//     // this.textContent = "He cambiado el texto";//This hace referencia al objeto que dispara el evento

// function hideSection(event){
//     // event.preventDefault();
//     // wrapper.className = "hide";

// }


// const hideSection = (event) => {
//     event.preventDefault(); //Evita que se ejecute el evento por defecto
//     wrapper.className = "hide";
//     //EL VALOR DE THIS ES EL OBJETO GLOBAL, cuando se usan funciones flecha
//     console.log(this)
// };

// const hideSection = (event) => {
//     event.preventDefault(); //Evita que se ejecute el evento por defecto
//     wrapper.className = "hide";
//     //EL VALOR DE THIS ES EL OBJETO GLOBAL, cuando se usan funciones flecha
//     console.log(this)
// };
//con funciones this toma el contexto de las funciones flecha


//Cambiando clases logro mostrar y ocultar el section
// buttonShow.addEventListener('click', showSection);

// buttonHide.addEventListener('click', hideSection);


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

// function hideSection(event){
//     event.preventDefault();
//     wrapper.className= "hide";
// }

// buttonShow.addEventListener('click',hideSection)

//Con funcion anonima
// buttonShow.addEventListener('click', function(event){
//     event.preventDefault();
//     wrapper.className = "hide";
// })
                            //Evento    funcion         Para remover
// buttonShow.removeEventListener('click',showSection);//me permite remover un evento
// }

// buttonShow.addEventListener('click',function(){}); //La desventaja de colocar funciones anonimas es que luego no se podría eleiminar, ya que no tendría acceso a su instancia.
//Por lo que es recomendable usar funciones isntanciadas

//Propagación de eventos ----- event bumbing

//Caracteristica de los eventos, es la propagación en orden ascenente del DOM

// function handleEvent(e){//propaga el evento hasta body
//     console.log(`Has dado click en ${e.currentTarget.nodeName}`)
// }
// function handleEventStop(e){
//     e.stopPropagation();//Evita la propagación de eventos y que un evento tenga más de una funcion
//     //e.stopInmediatePropagation(); evita que se agrage otro manejador
//     console.log(`Has dado click en ${e.currentTarget.nodeName}`)
// }

// buttonShow.addEventListener('click',handleEvent)
// section.addEventListener('click',handleEvent);
// document.body.addEventListener('click', handleEvent)

//Fase de captura, manera descendente
// buttonShow.addEventListener('click',handleEvent, {
//     capture : true
// })
// section.addEventListener('click',handleEvent, {
//     capture : true
// });
// document.body.addEventListener('click', handleEvent, {
//     capture : true
// })

// const elements = document.querySelectorAll("[data-id]")

// for (element of elements){
//     const buttonShow = element.matches(
//     '[data-id="button-show"]');

//     if(currentElement){
//         console.log(`El botón ${element.nodeName} contiene el valor button-show en su atributo`)
//     }
// }

// console.log(input.closest(`.wrapper`));

//delegar eventos 

const section = document.querySelector('.section');
console.log(section);

function eventDelegation(e){
    if (e.target.matches('.button-color')){
        console.log('Diste click a un boton')
        const getColor = e.target.getAttribute('data-color');

        e.currentTarget.style.backgroundColor = getColor;
    }
}

section.addEventListener('click', eventDelegation);