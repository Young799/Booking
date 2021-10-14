import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import RegisterPatient from './views/RegisterPatient.vue'
import PatientLogin from './views/PatientLogin.vue'
import Booking from './views/Patients.vue'
import Logout from './views/Logout.vue'
import Doctors from './views/Doctors.vue'
import DoctorLogin from './views/DoctorLogin.vue'
import RegisterDoctor from './views/RegisterDoctor.vue'
import UpdateUserInfo from './views/UpdateUserInfo.vue'

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
      path: '/booking/:id/update',
      name: 'UpdateUserInfo',
      component: UpdateUserInfo
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
      path: '/doctors',
      name: 'doctors',
      component: RegisterDoctor
    }
  ]
})
