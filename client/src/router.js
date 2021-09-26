import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
<<<<<<< Updated upstream
=======
import Register from './views/register.vue'
import Login from './views/login.vue'
import Booking from './views/Booking.vue'
import Logout from './views/Logout.vue'
>>>>>>> Stashed changes

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
<<<<<<< Updated upstream
=======
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

>>>>>>> Stashed changes
    }
  ]
})
