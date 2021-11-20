<template>
<div class="container">
   <h1>Hello {{ patient.first_name }}, Welcome to care 4 you !</h1>
   <h2>User Profile</h2>
    <b-form @submit="updatePersonalInfo">
      <b-form-group class="formStyls"
        label="First Name:"
        label-for="First_name"
      >
        <b-form-input class="s"
          id="First_name"
          v-model="patient.first_name"
          type="text"
          placeholder="your First name"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group class="formStyls"
        label="Last Name:"
        label-for="First_name"
      >
        <b-form-input
          id="Last_name"
          v-model="patient.last_name"
          type="text"
          placeholder="your Last name"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group class="formStyls"
        label= "Email:"
        label-for="email"
      >
        <b-form-input
          id="email"
          v-model="patient.email_address"
          type="email"
          placeholder="email"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group class="formStyls"
        label="current passowrd:"
        label-for="current passowrd"
      >
        <b-form-input
          id="current_passowrd"
          v-model="patient.current_passowrd"
          type="text"
          placeholder="current password"
          required
        ></b-form-input>
      </b-form-group>
      <b-button class="mx-3 bdark" pill type="submit" variant="primary">UPDATE PROFILE</b-button>
      <b-button class="mx-3" pill @click="removePatient" variant="danger">DELETE ACCOUNT</b-button>
    </b-form>
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
<style scopped>
.formStyls{
  text-align: left;
}
.container{
  margin-right: 3rem;
   margin-left: 3rem;
}
.bdark{
  background: #415c96 !important;
  border-color:  #415c96 !important;
}
</style>
