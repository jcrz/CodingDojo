import Vue from 'vue'
import App from './App.vue'

// Evita que aparezca un mensaje de compilado, mientras se desarrolla en local.
Vue.config.productionTip = false

/*
 *  Con 'render' especificamos que componente renderizar.
 *  Con '$mount' indicamos a Vue que elemento literal en el DOM será reemplazado
 *  con el componente App.
 */ 
  
new Vue({
  render: h => h(App),
}).$mount('#app')
