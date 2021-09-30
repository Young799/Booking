<template>
  <div>
    <div v-for="patient in patients" v-bind:key="patient._id">
      <patient-info v-bind:patient="patient" />
    </div>
    <b-container fluid>
      <span
        ><body>
          <form>
            <div class="container">
              <h2>User Profile Update</h2>

              <div class="row pt-4">
                <div class="col-md-6">
                  <label for="firstname">First name:</label>
                  <input
                    type="text"
                    name="firstname"
                    v-model="patient.firstname"
                    class="form-control"
                  />
                </div>
                <div class="col-md">
                  <label for="lastname">Last name:</label>
                  <input
                    type="text"
                    name="lastname"
                    v-model="patient.lastname"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="row pt-2">
                <div class="col-md-6">
                  <label for="emailaddress">Email:</label>
                  <input
                    type="text"
                    name="email_address"
                    v-model="patient.email"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="row pt-2">
                <div class="col-12">
                  <label for="password">New password:</label>
                  <input
                    type="number"
                    name="password"
                    v-model="patient.password"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="row pt-2">
                <div class="col-12">
                  <label for="confirmpassword">Enter new password again:</label>
                  <input
                    type="number"
                    name="confirmpassword"
                    v-model="patient.confirmpassword"
                    class="form-control"
                    placeholder=""
                  />
                </div>
              </div>
              <div class="row pt-4 float-right">
                <button
                  type="submit"
                  class="btn btn-primary"
                  v-on:click="update"
                >
                  save changes
                </button>
                <div class="col-md-4"></div>
              </div>
              <div class="row pt-4 float-right">
                <button
                  type="subit"
                  class="btn btn-primary"
                  v-on:click="getPersonalInfo"
                >
                  update info
                </button>
                <div class="col-md-4"></div>
              </div>
              <div class="col-md-4"></div>
              <hr class="my hrlines" />
              <h2>Request Booking</h2>
              <h2>(We will contact you within 48 hours.)</h2>
              <div class="row pt-2">
                <div class="col-12">
                  <label for="addrline2">Enter your wished booking date:</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="booking.date"
                    placeholder="dd-mm-yyyy"
                  />
                </div>
                <div class="col-12">
                  <label for="addrline2">Enter your wished booking time:</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="booking.time"
                    placeholder="hh-mm"
                  />
                </div>
                <div class="row pt-4 float-right">
                  <button
                    type="submit"
                    class="btn btn-primary"
                    v-on:click="sendRequest"
                  >
                    request
                  </button>
                </div>

                <hr />
                <div class="col-md-4"></div>
                <div>
                  <h2>
                    If you want to unregister you from our clinic, please press
                    the delete button
                  </h2>
                </div>
                <div class="col-md-4 col-md-offset-4"></div>
                <div class="row pt-4 float-right">
                  <button type="submit" class="btn btn-primary">delete</button>
                </div>
              </div>
            </div>
          </form>
        </body></span
      >

      <div></div>
    </b-container>
  </div>
</template>

<script>
import PatientInfo from '../components/PatientInfo.vue'
import { Api } from '@/Api'
export default {
  components: { 'patient-info': PatientInfo },
  data() {
    return {
      patient: {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmpassword: ''
      },
      booking: {
        date: '',
        time: ''
      }
    }
  },

  getPersonalInfo() {
    Api.get('/patients/:_id', async (req, res) => {
      try {
        const patient = await PatientInfo.findById({ _id: req.params.id })
        res.status(200).json(patient)
        console.log(patient)
      } catch (err) {
        res.status(404).json({ message: 'Id invalid' })
      }
    })
  },

  sendRequest() {
    Api.post('/patients/:patient_id/appointments', {
      appointmet_date: this.date,
      time: this.time
    })

      .then((response) => {
        alert('Your request is sent')
      })

      .catch((error) => {
        alert(error)
      })
  }
}
</script>

<style>
.container {
  max-width: 500px;
}
.spacer {
  height: 100px;
}
hr.myhrline {
  margin: 100px;
}
</style>
