<template>
  <div class="updateProfile">
    <b-container fluid>
      <span
        ><body>
          <div class="container">
            <h2>User Profile Update</h2>

            <div class="row pt-4">
              <div class="col-md-6">
                <label for="firstname">First name:</label>
                <input
                  type="text"
                  name="firstname"
                  required
                  v-model="patient.firstname"
                  class="form-control"
                />
              </div>
              <div class="col-md">
                <label for="lastname">Last name:</label>
                <input
                  type="text"
                  name="lastname"
                  required
                  v-model="patient.lastname"
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
                  required
                  v-model="patient.email"
                  class="form-control"
                />
              </div>
            </div>
            <div class="row pt-2">
              <div class="col-12">
                <label for="password">New password:</label>
                <input
                  type="text"
                  name="password"
                  required
                  v-model="patient.password"
                  placeholder="Enter new password here"
                  class="form-control"
                />
              </div>
            </div>
            <div class="row pt-2">
              <div class="col-12">
                <label for="confirmpassword">Confirm New Password:</label>
                <input
                  type="text"
                  name="confirmpassword"
                  required
                  v-model="patient.confirmpassword"
                  class="form-control"
                  placeholder="Enter new password again"
                />
              </div>
            </div>

            <div class="row pt-2">
              <div class="col-12">
                <button class="save" type="submit" v-on:click="updateInfo">
                  Save
                </button>
              </div>
              <div class="col-12">
                <button
                  class="cancel"
                  type="submit"
                  v-on:click="getUserProfile"
                >
                  Cancel
                </button>
              </div>
            </div>
            <div class="col-12"></div>
          </div>
        </body>
      </span>
    </b-container>
  </div>
</template>

<script>
// import { Api } from '@/Api'
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
      }
    }
  },

  methods: {
    updateInfo() {
      if (this.patient.password === this.patient.confirmpassword) {
        alert('Will you save your new information?')

        Api.put('/patients/' + this.$route.params.id, {
          first_name: this.patient.firstname,
          last_name: this.patient.lastname,
          email_address: this.patient.email,
          password: this.patient.password,
          confirmPassword: this.patient.confirmpassword
        })
          .then((response) => {
            alert('Your information is updated ')
            if (response.status === 200) {
              console.log('pass')
              this.getUserProfile()
            }
          })
          .catch((error) => {
            alert(error)
          })
      } else {
        alert('Your confirmed password is not match with your password')
      }
    },
    getUserProfile() {
      const userId = this.$route.params.id
      this.$router.push(`/booking/${userId}`)
    }
  }
}
</script>

<style>
.save {
  background: #415c96;
  border: 0;
  padding: 10px 20px;
  color: white;
  border-radius: 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  width: 20%;
  margin: 30px auto;
}
.cancel {
  background: #415c96;
  border: 0;
  padding: 10px 20px;
  color: white;
  border-radius: 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  width: 20%;
}

.updateProfile {
  margin: 30px auto;
}
</style>
