<template>
  <div class="RegisterDoctor">
    <form class="formOne" @submit.prevent="handleSubmit">
      <label>First name:</label>
      <input type="firstname" required v-model="firstname" />
      <label>Last name:</label>
      <input type="lastname" required v-model="lastname" />
      <label>Personal number:</label>
      <input type="personalnumber" required v-model="personalnumber" />
      <label>Specialist:</label>
      <select type="specialist" v-model="specialist">
        <option value="Pediatrician">Pediatrician</option>
        <option value="Dermatologist">Dermatologist</option>
        <option value="Psychiatrist">Psychiatrist</option>
        <option value="Orthopedist">Orthopedist</option>
        <option value="Gynecologist">Gynecologist</option>
        <option value="Surgeon">Surgeon</option>
      </select>
      <label>Email:</label>
      <input type="emailaddress" required v-model="emailaddress" />
      <label>Password:</label>
      <input type="password" required v-model="password" />
      <div class="submitOne">
          <button id="submitButton" class="float-md-none">Add Doctor</button>
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
    }
  }
}
</script>

<style>
.formOne {
  max-width: 420px;
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
button:hover{
     box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
#submitButton {
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
  width: 55%;
}
.submitOne {
  text-align: center;
}
</style>
