// CSS
import 'vue-material/dist/vue-material.css'

import 'babel-polyfill'
import './plugins'
import Vue from 'vue'
import apolloProvider from './apollo'
import Main from './components/Main.vue'
import Login from './components/Login.vue'
import VueRouter from 'vue-router';
import router from './router'



new Vue({
  router,   
  apolloProvider,           
  render: h => h(Main)
}).$mount('#app')
