<template>
  <div>
    <div v-bind:key="patient._id">
    </div>
    <b-container fluid>
      <span
        ><body>
          <div class="container">
            <h2>User Profile</h2>

            <div class="row pt-4">
              <div class="col-md-6">
                <label for="firstname">First name:</label>
                <input
                  type="text"
                  name="firstname"
                  v-model="patient.first_name"
                  class="form-control"
                />
              </div>
              <div class="col-md">
                <label for="lastname">Last name:</label>
                <input
                  type="text"
                  name="lastname"
                  v-model="patient.last_name"
                  class="form-control"
                />
              </div>
            </div>
            <div class="row pt-2">
              <div class="col-md-6">
                <label for="email">Email:</label>
                <input
                  type="text"
                  name="email"
                  v-model="patient.email_address"
                  class="form-control"
                />
              </div>
            </div>
            <div class="row pt-2">
              <div class="col-12">
                <label for="password">Current password:</label>
                <input
                  type="text"
                  name="password"
                  v-model="patient.password"
                  placeholder="Enter new password here"
                  class="form-control"
                />
              </div>
            </div>
            <div class="row pt-2">
              <div class="col-12">
                <label for="confirmpassword">Password:</label>
                <input
                  type="text"
                  name="confirmpassword"
                  v-model="patient.confirmPassword"
                  class="form-control"
                  placeholder="password have to at least 6 characters"
                />
              </div>
            </div>

            <div class="row pt-4 float-right">
              <button class="btn btn-primary" v-on:click="updatePersonalInfo">
                Click To Update
              </button>
              <div class="col-md-4"></div>
            </div>
            <div class="row pt-4 float-right">
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
                <button
                  type="submit"
                  v-on:click="removePatient"
                  class="btn btn-primary"
                >
                  delete
                </button>
              </div>
            </div>
          </div>
        </body></span
      >

      <div></div>
    </b-container>
  </div>
</template>

<script>
import { Api } from '@/Api'
export default {
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
  async mounted() {
    console.log('page loaded')
    const userInfo = await Api.get('/patients/' + this.$route.params.id)
    this.patient = userInfo.data
    console.log(userInfo.data)
  },

  methods: {
    updateInfo() {
      // not upworking
      alert('Are you sure ?')

      Api.put(
        '/patients/' + this.$route.params.id,

        {
          first_name: this.patient.first_name,
          last_name: this.patient.last_name,
          email: this.patient.email_address,
          password: this.patient.password,
          confirmpassword: this.patient.confirmPassword
        }
      )
        .then((response) => {
          alert('Your information is updated ')
          this.$router.push('/')
          if (response.status === 200) {
            console.log('pass')
            this.$router.push('/')
          }
        })
        .catch((error) => {
          alert(error)
        })
    },

    sendRequest() {
      Api.post(`/patients/${this.$route.params.id}/appointments`, {
        appointment_date: this.booking.date,
        time: this.booking.time
      })
        .then((response) => {
          alert('Your request is sent')
        })

        .catch((error) => {
          alert(error)
        })
    },

    removePatient() {
      Api.delete('/patients/' + this.$route.params.id, {})
        .then((response) => {
          alert('Your are unregisterd from our clinic now. ')
          console.log(response)
          this.$router.push('/') // then back to patiens page again !! debug needed
        })
        .catch((error) => {
          alert(error)
        })
    },

    updatePersonalInfo() {
      this.$router.push(`/booking/${this.$route.params.id}/update`)
    }
  }
}
</script>

<style>
.container {
  max-width: 500px;
  margin-top: 450px;
}
.spacer {
  height: 100px;
}
hr.myhrline {
  margin: 100px;
}
</style>
