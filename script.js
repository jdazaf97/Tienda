/* creamos una constante en donde almacenamos el elemento del icono de la barra de navegacion (menu hamburguesa) para abrir el menu */
const bar = document.getElementById('bar');
/* creamos una constante en donde almacenamos el elemento del icono de la barra de navegacion (cerrar menu hamburguesa) para cerrar el menu */
const close = document.getElementById('close');
/* creamos una constante en donde obtiene el elemento que queremos que se despliegue cuando oprimamos el boton */
const nav = document.getElementById('navbar');

/* creamos la condicion si el menu se muestra en pantalla o no */
if (bar){
    /* creamos una funcion en donde diremos que cuando se haga clic realizara cierta accion determinada en el archivo style.css llamada #navbar.active en donde despliega el menu */ 
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    }) 
}

/* Creamos la condicion para cerrar o no el menu */
if (close){
    /* creamos una funcion en donde diremos que cuando se haga clic realizara cierta accion determinada en el archivo style.css llamada #navbar.active en donde despliega el menu */ 
    close.addEventListener('click', () => {
        nav.classList.remove('active')/* aqui diremos que remueva la accion */
    }) 
}