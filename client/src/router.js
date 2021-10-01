import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Register from './views/register.vue'
import PatientLogin from './views/PatientLogin.vue'
import Booking from './views/Booking.vue'
import Logout from './views/Logout.vue'
import Doctor from './views/Doctor.vue'
import DoctorLogin from './views/DoctorLogin.vue'
import Appointment from './views/Appointment.vue'

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
      path: '/patientlogin',
      name: 'patientlogin',
      component: PatientLogin
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
      path: '/doctor',
      name: 'doctor',
      component: Doctor
    },
    {
      path: '/doctorlogin',
      name: 'doctorlogin',
      component: DoctorLogin
    },
    {
      path: '/appointments',
      name: 'appointments',
      component: Appointment
    }
  ]
})
