<template>
  <div style="overflow-x: auto">
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Trirong"
    />
    <h2 class="appointmentTitle">Notifications</h2>
    <table class="appointmentTable">
      <tr>
        <th>Message</th>
        <th>Appointment Date</th>
        <th>Appointment Time</th>
        <th>Cancel</th>
        <th></th>
      </tr>
      <tr v-for="notification in list" v-bind:key="notification._id">
        <td>{{ notification.text }}</td>
        <td>{{ notification.appointment_date }}</td>
        <td>{{ notification.appointment_time }}</td>

        <td>
          <button
            id="cancleButton"
            v-on:click="deleteNotification(notification._id)"
          >
            Delete
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { Api } from '@/Api.js'
// import AppointmentVue from '../components/Appointment.vue'
export default {
  name: 'Notification',
  data() {
    return {
      list: undefined
    }
  },
  mounted() {
    this.getNofications()
  },
  methods: {
    getNofications() {
      Api.get(`/patients/${this.$route.params.id}/notifications`).then(
        response => {
          this.list = response.data.notification
          console.log(this.list)
          console.log('page loaded')
        }
      )
    },
    deleteNotification(id) {
      Api.delete(
        '/patients/' + this.$route.params.id + '/notifications/' + id,
        {}
      )
        .then(response => {
          console.log(response)
          this.list = response.data.notification
          this.getNofications()
        })
        .catch(error => {
          alert(error.response.data.message)
        })
    }
  }
}
// }
</script>
<style></style>
