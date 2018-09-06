import App from './components/App.vue'
import Login from './components/Login.vue'
import Router from 'vue-router';
import Vue from 'vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/todo',
      name: 'todo',
      component: App
    }
  ]
})