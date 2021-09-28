import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Register from './views/register.vue'
import Login from './views/login.vue'
import Booking from './views/Booking.vue'
import Logout from './views/Logout.vue'
import Admin from './views/Admin.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/booking',
      name: 'booking',
      component: Booking

    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout

    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    }

  ]
})
