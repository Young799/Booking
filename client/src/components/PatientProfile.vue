<template>
  <div class="patient-profile">
    <div v-bind:key="patient._id">
      <!-- <patient-info v-bind:patient="patient" /> -->
    </div>
    <b-container fluid>
      <span
        ><body>
          <div class="container">
            <h1>Hello {{ patient.first_name }}, Welcome to care 4 you !</h1>
            <div class="profile">
              <br />
              <h2>User Profile</h2>

              <div class="row pt-4">
                <div class="col-md-12">
                  <label for="firstname">First name:</label>
                  <input
                    type="text"
                    name="firstname"
                    v-model="patient.first_name"
                    class="form-control"
                    disabled
                  />
                </div>
                <div class="col-md-12">
                  <label for="lastname">Last name:</label>
                  <input
                    type="text"
                    name="lastname"
                    v-model="patient.last_name"
                    class="form-control"
                    disabled
                  />
                </div>
              </div>
              <div class="row pt-2">
                <div class="col-lg-12">
                  <label for="email">Email:</label>
                  <input
                    type="text"
                    name="email"
                    v-model="patient.email_address"
                    class="form-control"
                    disabled
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
                    disabled
                  />
                </div>
              </div>
              <div class="row pt-4 col-md-12 text-under float-right">
                <button class="update" v-on:click="updatePersonalInfo">
                  Update profile
                </button>
                <button class="deleteAccount" v-on:click="removePatient">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </body>
      </span>
    </b-container>
  </div>
</template>

<script>
import { Api } from '@/Api'
export default {
  name: 'PatientProfile',
  data() {
    return {
      patient: {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmpassword: ''
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
    removePatient() {
      Api.delete('/patients/' + this.$route.params.id, {})
        .then((response) => {
          alert('Are you sure to delete your account?')
          alert('Your are unregisterd from our clinic now. ')
          console.log(response)
          this.$router.push('/')
        })
        .catch((error) => {
          alert(error.response.data.message)
        })
    },

    updatePersonalInfo() {
      this.$router.push(`/booking/${this.$route.params.id}/update`)
    }
  }
}
</script>

<style>
.patient-profile {
  margin: 30px auto;
}
.deleteAccount {
  background: #415c96;
  border: 0;
  padding: 10px 20px;
  color: white;
  border-radius: 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  width: 15%;
  margin-left: 2%;
}
.update {
  background: #415c96;
  border: 0;
  padding: 10px 20px;
  color: white;
  border-radius: 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  width: 15%;
}
</style>
