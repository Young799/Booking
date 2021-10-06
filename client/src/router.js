import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import RegisterPatient from './views/RegisterPatient.vue'
import PatientLogin from './views/PatientLogin.vue'
import Booking from './views/Booking.vue'
import Logout from './views/Logout.vue'
import Doctors from './views/Doctors.vue'
import DoctorLogin from './views/DoctorLogin.vue'
import Appointment from './views/Appointment.vue'
import RegisterDoctor from './views/RegisterDoctor.vue'

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
      path: '/patients',
      name: 'patients',
      component: RegisterPatient
    },
    {
      path: '/patients/login',
      name: 'patientlogin',
      component: PatientLogin
    },
    {
      path: '/booking/:id',
      name: 'booking',
      component: Booking

    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout

    },
    {
      path: '/doc/:id',
      name: 'doctors',
      component: Doctors
    },
    {
      path: '/doctorslogin',
      name: 'doctorlogin',
      component: DoctorLogin
    },
    {
      path: 'appointments',
      name: 'appointments',
      component: Appointment
    },
    {
      path: '/doctors',
      name: 'doctors',
      component: RegisterDoctor
    }
  ]
})
