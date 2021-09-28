<template>
  <div class="RegisterDoctor">
    <div class="title">Doctor registration form</div>
    <form @submit.prevent="handleSubmit">
      <label>First name:</label>
      <input type="firstname" required v-model="firstname" />
      <label>Last name:</label>
      <input type="lastname" required v-model="lastname" />
      <label>Personal number:</label>
      <input type="personalnumber" required v-model="personalnumber" />
      <label>Specialist:</label>
      <select v-model="specialist">
        <option value="Pediatrician">Pediatrician</option>
        <option value="Dermatologist">Dermatologist</option>
        <option value="Psychiatrist">Psychiatrist</option>
        <option value="Orthopedist">Orthopedist</option>
        <option value="Gynecologist">Gynecologist</option>
        <option value="Surgeon">Surgeon</option>
      </select>
      <label>Email:</label>
      <input type="email" required v-model="email" />
      <div class="submit">
        <button>Create doctors account</button>
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
      email: ''
    }
  },
  methods: {
    handleSubmit() {
      Api.post('/doctors', {
        first_name: this.firstname,
        last_name: this.lastname,
        personal_number: this.personalnumber,
        specialist: this.specialist,
        email: this.email
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
form {
  max-width: 420px;
  margin: 30px auto;
  background: #ffffff;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
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
  color: rgb(5, 5, 5);
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  margin-top: 20px;
}
button {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}
.submit {
  text-align: center;
}
</style>
