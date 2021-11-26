<template>
  <div style="overflow-x: auto">
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Trirong"
    />
    <h2 class="appointmentTitle">Confirmed Appointments</h2>
    <table   class="appointmentTable">
      <tr>
        <!-- <th>Appointment Id</th> -->
        <th>Appointment Date</th>
        <th>Appointment Time</th>
        <th>Doctor</th>
        <th>Confirmed</th>
        <th></th>
      </tr>
      <tr v-for="appointment in list"  v-bind:key="appointment._id">
        <td>{{ appointment.appointment_date }}</td>
        <td>{{ appointment.time }}</td>
        <td>{{ appointment.doctor }}</td>
        <td >{{ appointment.is_confirmed }}</td>
        <td>
          <button
            id="cancleButton"
            v-on:click="cancleAppointment(appointment._id)"
          >
            Cancel
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
  data() {
    return {
      list: undefined
    }
  },
  mounted() {
    this.getAppointments()
  },
  methods: {
    getAppointments() {
      Api.get(`/patients/${this.$route.params.id}/appointments`).then(
        response => {
          console.log(response)
          this.list = response.data.appointment
        }
      )
    },
    // filter for is_confirmed=true then save into new array
    computed: {
      confirmedAppointment: function () {
        if (this.list.is_confirmed === true) { return this.list }
      }
    },
    cancleAppointment(id) {
      Api.delete(
        '/patients/' + this.$route.params.id + '/appointments/' + id,
        {}
      )
        .then(response => {
          alert('Are you sure to cancle this booking?')
          console.log(response)
          this.list = response.data.appointment
          this.getAppointments()
        })
        .catch(error => {
          alert(error.response.data.message)
        })
    }
  }
}
</script>
<style>
.table col-10 {
  width: 80%;
  border-collapse: collapse;
  margin: 30px auto;
}
#cancleButton {
  background: #2e4a62;
  border: 0;
  padding: 10px 20px;
  color: white;
  border-radius: 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  width: 80%;
  margin: 5px auto;
}
</style>
