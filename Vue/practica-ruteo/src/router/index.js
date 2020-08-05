/**
 * $ npm install vue-router --save
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../components/Home.vue';  // asumiendo que hicimos este componente
import Login from '../components/Login.vue';
import Restoran from '../components/Restoran.vue';
import Categoria from '../components/Categoria.vue';
import PagNoEncontrada from '../components/PagNoEncontrada.vue';

Vue.use(VueRouter);    // instalamos explícitamente el router

export default new VueRouter({
    routes: [
        {
            path: '/', 
            name: 'Inicio',
            component: Home
        },
        {
            path: '/login', 
            name: 'Login',
            component: Login
        },
        {
            path: '/:Restoran', 
            name: 'Restoran',
            component: Restoran
        },
        {
            path: '/category/:Categoria', 
            name: 'Categoria',
            component: Categoria
        },
        {
            path: '*', 
            component: PagNoEncontrada
        }
    ]
})
