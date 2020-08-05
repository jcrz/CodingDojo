/**
 * Las directivas son atributos HTML que permiten especificar a Vue la manera en la cual deseamos
 * renderizar (mostrar) nuestras variables. Se puede identificar rapidamente una directiva porque
 * comienzan con 'v-'. La mayoria de las directivas esperan que se les asigne un valor, el cual 
 * puede ser una expresión o una variable. 
 */

/**
 * Nota: un div con una variable, sigue en contexto mientras este dentro del Div padre con id "#app".
 * Por lo tanto se pueden utilizar div's anidados y las variables no perderán el contexto.
 */

 const app = new Vue({
    el: '#app',
    data: {
        message: 'desde Vue!',
        isState: false,
        items : [
            'Manzana',
            'Pera',
            'Naranja'
        ],
        algunNumero: 99
    }
 })