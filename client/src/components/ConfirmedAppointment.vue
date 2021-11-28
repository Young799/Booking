<template>
  <div style="overflow-x: auto">
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Trirong"
    />
    <h2 class="appointmentTitle">Confirmed Appointments</h2>
    <table class="appointmentTable">
      <thead>
      <tr>
        <th >Appointment Date</th>
        <th>Appointment Time</th>
        <th>Doctor</th>

        <th></th>
      </tr>
     </thead>
      <tbody  v-for="appointment in list" v-bind:key="appointment._id">
        <tr v-if="appointment.is_confirmed">
          <td>{{ appointment.appointment_date }}</td>
          <td>{{ appointment.time }}</td>
          <td>{{ appointment.doctor.first_name }}</td>
          <td>
            <button
              id="cancelButton"
              v-on:click="cancelAppointment(appointment._id)"
            >
              Cancel
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { Api } from '@/Api.js'
// import AppointmentVue from '../components/Appointment.vue'
export default {
  data() {
    return {
      editableKeys: ['is_confirmed', 'doctor'],
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

    cancelAppointment(id) {
      Api.delete(
        '/patients/' + this.$route.params.id + '/appointments/' + id,
        {}
      )
        .then(response => {
          alert('Are you sure to cancel this booking?')
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
#cancelButton {
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
