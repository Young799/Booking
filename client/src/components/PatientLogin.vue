<template>
  <div class="form">
    <div class="Welcometitle">Welcome</div>
    <div class="subtitle">Log in to your account!</div>
    <div class="row pt-2">
      <div class="col-md">
        <div class="input-container ic2">
          <input
            id="email"
            class="input"
            type="email"
            v-model="email"
            placeholder=" "
          />
          <div class="cut"></div>
          <label for="email" class="placeholder">Email</label>
        </div>
      </div>
    </div>
    <div class="row pt-2">
      <div class="col-md">
        <div class="input-container ic1">
          <input
            id="password"
            class="input"
            type="password"
            v-model="password"
            placeholder=" "
          />
          <div class="cut"></div>
          <label for="password" class="placeholder">password</label>
        </div>
      </div>
    </div>
    <div class="row pt-2">
      <div class="col-md">
        <button type="text" class="submit" v-on:click="loginPatient">
          Log In
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { Api } from '@/Api'

export default {
  name: 'patientlogin',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    // not filter .showing all paitent collection
    loginPatient() {
      console.warn(this.email, this.password)
      Api.post('/login', {
        email_address: this.email,
        password: this.password
      })
        .then((response) => {
          if (
            this.email === response.data.email_address ||
            this.password === response.data.password
          ) {
            const userId = response.data._id
            this.$router.push(`/booking/${userId}`)
          }
        })
        .catch((error) => {
          console.warn(error.response.data.message)
        })
    }
  }
}
</script>

<style scoped>
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
  height: 70%;
  padding: 20px;
  width: 80%;
  margin: 30px auto;
  margin-top: 5%;
}

.Welcometitle {
  color: #eee;
  font-family: sans-serif;
  font-size: 36px;
  font-weight: 600;
  margin-top: 30px;
}

.subtitle {
  color: #eee;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
}

.input-container {
  height: 50px;
  position: relative;
  width: 100%;
}

.ic1 {
  margin-top: 30px;
}

.ic2 {
  margin-top: 30px;
}

.input {
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
  resize: vertical;
}

.cut {
  background-color: #15172b;
  border-radius: 10px;
  height: 20px;
  left: 20px;
  position: absolute;
  top: -20px;
  transform: translateY(0);
  transition: transform 200ms;
  width: 76px;
  margin-left: 80px;
}

.cut-short {
  width: 50px;
}

.input:focus ~ .cut,
.input:not(:placeholder-shown) ~ .cut {
  transform: translateY(8px);
}

.placeholder {
  color: #65657b;
  font-family: sans-serif;
  left: 20px;
  line-height: 14px;
  pointer-events: none;
  position: absolute;
  transform-origin: 0 50%;
  transition: transform 200ms, color 200ms;
  top: 23px;
  margin-left: 82px;
}

.input:focus ~ .placeholder,
.input:not(:placeholder-shown) ~ .placeholder {
  transform: translateY(-30px) translateX(10px) scale(0.75);
}

.input:not(:placeholder-shown) ~ .placeholder {
  color: #808097;
}

.input:focus ~ .placeholder {
  color: #dc2f55;
}

.submit {
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
  width: 30%;
  margin: 30px auto;
}

.submit:active {
  background-color: #06b;
}
</style>
