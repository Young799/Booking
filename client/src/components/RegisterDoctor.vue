<template>
  <div class="RegisterDoctor">
    <form class="formOne" @submit.prevent="handleSubmit">
      <div class="row pt-4">
        <div class="col-md-6">
          <label>First name:</label>
          <input type="firstname" required v-model="firstname" />
        </div>
        <div class="col-md">
          <label>Last name:</label>
          <input type="lastname" required v-model="lastname" />
        </div>
      </div>
      <div class="row pt-2">
        <div class="col-md-6">
          <label>Personal number:</label>
          <input type="personalnumber" required v-model="personalnumber" />
        </div>
        <div class="col-md">
          <label>Specialist:</label>
          <select type="specialist" v-model="specialist">
            <option value="Pediatrician">Pediatrician</option>
            <option value="Dermatologist">Dermatologist</option>
            <option value="Psychiatrist">Psychiatrist</option>
            <option value="Orthopedist">Orthopedist</option>
            <option value="Gynecologist">Gynecologist</option>
            <option value="Surgeon">Surgeon</option>
          </select>
        </div>
      </div>
      <div class="row pt-2">
        <div class="col-6">
          <label>Email:</label>
          <input type="emailaddress" required v-model="emailaddress" />
        </div>
        <div class="col-md">
          <label>Password:</label>
          <input type="password" required v-model="password" />
        </div>
      </div>
      <div class="row pt-2">
        <div class="col-6">
          <div class="submitOne">
            <button id="submitButton" class="float-md-none">Register</button>
          </div>
        </div>
        <div class="col-md">
          <div>
            <button @click="doctorLogin" id="login" class="float-md-none">
              Log In
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { Api } from '@/Api'
export default {
  data() {
    return {
      firstname: '',
      lastname: '',
      personalnumber: '',
      specialist: 'Pediatrician',
      emailaddress: '',
      password: ''
    }
  },
  methods: {
    handleSubmit() {
      Api.post('/doctors', {
        first_name: this.firstname,
        last_name: this.lastname,
        personal_number: this.personalnumber,
        specialist: this.specialist,
        email_address: this.emailaddress,
        password: this.password
      })
        .then((response) => {
          alert('Doctor registered')
        })
        .catch((error) => {
          alert(error)
        })
    },
    doctorLogin() {
      this.$router.push('/doctorslogin')
    }
  }
}
</script>

<style>
.formOne {
  max-width: 900px;
  background: #ffffff;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
  margin: 30px auto;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
.title {
  color: rgba(100, 93, 93, 0.096);
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 0px;
  font-weight: bold;
}
button:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
#submitButton {
  background: #3a6d35;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  width: 50%;
  margin: 30px auto;
}
.submitOne {
  text-align: center;
}
#login {
  background: #415c96;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  width: 50%;
  margin: 30px auto;
}
</style>
