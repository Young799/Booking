<template>
  <div>
    <form class="form" @submit.prevent="handleSubmit">
      <div class="title">Welcome</div>
      <div class="subtitle">Let's create your account!</div>
      <div class="row pt-2">
        <div class="col-md">
          <div class="input-container ic1">
            <input
              id="firstname"
              class="input"
              type="text"
              placeholder=" "
              required
              v-model="firstname"
            />
            <div class="cut"></div>
            <label for="firstname" class="placeholder">First name</label>
          </div>
        </div>
        <div class="col-md">
          <div class="input-container ic2">
            <input
              id="lastname"
              class="input"
              type="text"
              placeholder=" "
              required
              v-model="lastname"
            />
            <div class="cut"></div>
            <label for="lastname" class="placeholder">Last name</label>
          </div>
        </div>
      </div>
      <div class="row pt-2">
        <div class="col-md">
          <div class="input-container ic1">
            <input
              id="personalnumber"
              class="input"
              type="personalnumber"
              placeholder=" "
              required
              v-model="personalnumber"
            />
            <div class="cut"></div>
            <label for="personalnumber" class="placeholder"
              >Personal number</label
            >
          </div>
        </div>
        <div class="col-md">
          <div class="input-container ic1">
            <select
              id="specialist"
              class="input"
              type="specialist"
              placeholder=" "
              required
              v-model="specialist"
            >
              <div class="cut"></div>
              <label for="specialist" class="placeholder">Speciality</label>
              <option value="Pediatrician">Pediatrician</option>
              <option value="Dermatologist">Dermatologist</option>
              <option value="Psychiatrist">Psychiatrist</option>
              <option value="Orthopedist">Orthopedist</option>
              <option value="Gynecologist">Gynecologist</option>
              <option value="Surgeon">Surgeon</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row pt-2">
        <div class="col-md">
          <div class="input-container ic1">
            <input
              id="emailaddress"
              class="input"
              type="emailaddress"
              placeholder=" "
              required
              v-model="emailaddress"
            />
            <div class="cut"></div>
            <label for="emailaddress" class="placeholder">Email Address</label>
          </div>
        </div>
        <div class="col-md">
          <div class="input-container ic1">
            <input
              id="password"
              class="input"
              type="password"
              placeholder=" "
              required
              v-model="password"
            />
            <div class="cut"></div>
            <label for="password" class="placeholder">Password</label>
          </div>
        </div>
      </div>
      <div class="row pt-2">
        <div class="col-md">
          <div class="submitOne">
            <button id="submitButton" class="float-md-none">Register</button>
          </div>
        </div>
        <div class="col-md">
          <button @click="doctorLogin" id="login" class="float-md-none">
            Log In
          </button>
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
      specialist: '',
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
body {
  align-items: center;
  background-color: #000;
  display: flex;
  justify-content: center;
  height: 100vh;
}
.form {
  background-color: #15172b;
  border-radius: 20px;
  box-sizing: border-box;
  height: 500px;
  padding: 20px;
  width: 900px;
  margin: 30px auto;
  margin-top: 20px;
}
.title {
  color: #eee;
  font-family: sans-serif;
  font-size: 36px;
  font-weight: 600;
  margin-top: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 0px auto;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

.subtitle {
  color: #eee;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 600;
  margin-top: 5px;
}
.input,
.select {
  background-color: #303245;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  font-size: 18px;
  height: 100%;
  outline: 0;
  padding: 4px 20px 0;
  width: 80%;
  margin-top: 0%;
}
button:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
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
