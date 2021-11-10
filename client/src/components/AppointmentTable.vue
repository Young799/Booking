<template>
  <div style="overflow-x: auto">
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Trirong"
    />
    <h2 class="appointmentTitle">Appointments</h2>
    <table class="appointmentTable">
      <thead>
        <tr>
          <th>Appointment Date</th>
          <th>Time</th>
          <th>Patient</th>
          <th>Doctor</th>
          <th>Confirmed</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tr v-for="appointment in list" v-bind:key="appointment._id">
        <td>{{ appointment.appointment_date }}</td>
        <td>{{ appointment.time }}</td>
        <td>{{ appointment.patient.first_name}}</td>
        <td>{{ appointment.doctor.first_name }}</td>
        <td>{{ appointment.is_confirmed }}</td>
        <td>
          <button
            id="editButton"
            v-on:click="
              editAppointment(
                appointment._id,
                appointment.patient,
                appointment.appointment_date,
                appointment.time
              )
            "
          >
            Confirm
          </button>
        </td>
        <td>
          <button
            id="delButton"
            v-on:click="deleteAppointment(appointment._id)"
          >
            Delete
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { Api } from '@/Api'
export default {
  name: 'AppointmentTable',
  data() {
    return {
      list: undefined
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      Api.get('/appointments').then(resp => {
        this.list = resp.data
        console.warn(resp.data)
      })
    },

    deleteAppointment(id) {
      Api.delete('/appointments/' + id).then(resp => {
        this.getData()
      })
    },
    editAppointment(id, patient, date, time) {
      Api.patch(
        '/appointments/' + id + '/doctors/' + this.$route.params.id
      ).then(() => {
        this.getData()
        Api.post('/patients/' + patient._id + '/notifications/', {
          appointment_date: date,
          appointment_time: time
        }).then(() => {})
      })
    }
  }
}
</script>

<style>
body {
  height: 100vh;
  display: grid;
  justify-content: center;
  align-items: center;
}
.appointmentTitle {
  font-family: Impact, Charcoal, sans-serif;
  font-size: 25px;
  letter-spacing: 4px;
  word-spacing: 2px;
  color: #3d3d3d;
  font-weight: 700;
  text-decoration: none;
  font-style: normal;
  font-variant: small-caps;
  text-transform: uppercase;
  margin-top: 30px;
  margin-bottom: 50px;
}

.appointmentTable {
  width: 95%;
  border-collapse: collapse;
  margin: 30px auto;
  border: black;
  box-shadow: 0 5px 10px rgb(189, 188, 188);
  background-color: white;
}

thead {
  box-shadow: 0 2px 5px rgb(168, 168, 168);
}

td {
  font-family: 'Trebuchet MS', Helvetica, sans-serif;
  font-size: 16px;
  letter-spacing: -0.8px;
  word-spacing: -1px;
  color: #4d4b4b;
  font-weight: 400;
  text-decoration: none;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  text-align: center;
}

th {
  padding: 1rem 2rem;
  background-color: white;
  color: rgb(8, 8, 8);
  font-family: 'Trebuchet MS', Helvetica, sans-serif;
  height: 40px;
  font-size: 0.7rem;
  letter-spacing: 0.1rem;
  word-spacing: -1px;
  font-weight: 900;
  text-decoration: none;
  font-style: normal;
  font-variant: normal;
  text-transform: uppercase;
  text-align: center;
}

tr:nth-child(even) {
  background-color: rgb(232, 235, 236);
}

#delButton {
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
#editButton {
  background: #203344;
  border: 0;
  padding: 10px 20px;
  color: white;
  border-radius: 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  width: 80%;
  margin: 10px auto;
}
</style>
