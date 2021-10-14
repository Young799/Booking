import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import datePicker from 'vue-bootstrap-datetimepicker'
import axios from 'axios'
import '@fortawesome/free-solid-svg-icons'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(datePicker)

Vue.config.productionTip = false

Vue.prototype.$axios = axios

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
