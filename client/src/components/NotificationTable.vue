<template>
  <div style="overflow-x: auto">
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Trirong"
    />
    <h2 class="appointmentTitle">Notifications</h2>
    <table class="appointmentTable">
      <tr>
        <th>Id</th>
        <th>Message</th>
      </tr>
      <tr v-for="notification in list" v-bind:key="notification._id">
        <td>{{ notification._id }}</td>
        <td>{{ notification.text }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { Api } from '@/Api.js'
// import AppointmentVue from '../components/Appointment.vue'
export default {
  data() {
    return {
      list: undefined
    }
  },
  mounted() {
    Api.get(`/patients/${this.$route.params.id}/notifications`).then(
      (response) => {
        console.log(response)
        this.list = response.data.notification
      }
    )
  }
}
// }
</script>
<style>
</style>
