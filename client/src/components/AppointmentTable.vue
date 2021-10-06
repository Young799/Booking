 <template>
  <div style="overflow-x: auto">
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Trirong"
    />
    <h2 id="appointmentTitle">Appointments</h2>
    <table class="appointmentTable">
      <tr>
        <th>Appointment Date</th>
        <th>Time</th>
        <th>Patient</th>
        <th>Doctor</th>
        <th>Confirmed</th>
        <th></th>
        <th>Actions</th>
        <th></th>
      </tr>
      <tr v-for="appointment in list" v-bind:key="appointment._id">
        <td>{{ appointment.appointment_date }}</td>
        <td>{{ appointment.time }}</td>
        <td>{{ appointment.patient }}</td>
        <td>{{ appointment.doctor }}</td>
        <td>{{ appointment.is_confirmed }}</td>
        <td>
          <button
            id="editButton"
            v-on:click="editAppointment(appointment._id, appointment.patient)"
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
    return { list: undefined }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      Api.get('/appointments').then((resp) => {
        this.list = resp.data
        console.warn(resp.data)
      })
    },
    deleteAppointment(id) {
      Api.delete('/appointments/' + id).then((resp) => {
        this.getData()
      })
    },
    editAppointment(id, patient) {
      Api.patch(
        '/appointments/' + id + '/doctors/' + this.$route.params.id
      ).then(() => {
        this.getData()
        Api.post('patients/' + patient + '/notifications/').then(() => {})
      })
    }
  }
}
</script>

 <style>
#appointmentTitle {
  font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, serif;
  font-size: 32px;
  letter-spacing: 0.8px;
  word-spacing: -1px;
  color: #000000;
  font-weight: 700;
  text-decoration: none;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  margin-top: 30px;
  margin-bottom: 50px;
}

.appointmentTable {
  width: 100%;
  border-collapse: collapse;
  margin: 30px auto;
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
  background-color: rgb(93, 98, 126);
  color: white;
  font-family: 'Trebuchet MS', Helvetica, sans-serif;
  height: 40px;
  font-size: 16px;
  letter-spacing: -0.8px;
  word-spacing: -1px;
  font-weight: 400;
  text-decoration: none;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  text-align: center;
}

#delButton {
  background: rgb(93, 98, 126);
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
  background: rgb(93, 98, 126);
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
#showButton {
  background: rgb(93, 98, 126);
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
