/**
 * Recuerda: Vue solo es el nombre de una función, y esta toma como argumentoun objeto.
 * En la primera linea creamos una instancia de Vue y le pasamos un argumento. Dicho 
 * argumento es un objeto con 2 variables y sus correspondientes valores.
 */
const app = new Vue({
    el: '#app',
    data: {
        message: 'Vue!'
    }
});