<template>
  <div class="container">
    <div class="form" @submit.prevent="handlesubmit">
      <form>
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
                id="email"
                class="input"
                type="email"
                placeholder=" "
                required
                v-model="email"
              />
              <div class="cut"></div>
              <label for="email" class="placeholder">Email</label>
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
              <label for="password" class="placeholder">password</label>
            </div>
          </div>
        </div>
        <div class="row pt-2">
          <div class="col-md">
            <div class="input-container ic1">
              <input
                id="confirmpassword"
                class="input"
                type="password"
                placeholder=" "
                required
                v-model="confirmpassword"
              />
              <div class="cut"></div>
              <label for="password" class="placeholder">confirm password</label>
            </div>
          </div>
          <div class="col-md"></div>
        </div>
        <div class="row pt-2">
          <div class="col-md">
            <button type="text" class="submit">submit</button>
          </div>
          <div class="col-md">
            <button
              @click="patientLogin"
              id="login-patient"
              class="float-md-none"
            >
              Log In
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Api } from '@/Api'

export default {
  name: 'register',
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
    handlesubmit() {
      Api.post('/patients', {
        first_name: this.firstname,
        last_name: this.lastname,
        email_address: this.email,
        password: this.password,
        confirmPassword: this.confirmpassword
      })
        .then((response) => {
          this.$router.push('/patients/login')
        })
        .catch((error) => {
          alert(error.response.data.message)
        })
    },
    patientLogin() {
      this.$router.push('/patients/login')
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
  height: 100%;
  padding: 20px;
  width: 80%;
  margin: 30px auto;
  margin-top: 2%;
}

.title {
  color: #eee;
  font-family: sans-serif;
  font-size: 36px;
  font-weight: 600;
  margin-top: 10px;
}

.subtitle {
  color: #eee;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 600;
  margin-top: 5px;
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
  padding: 12px;
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
  margin-left: 30px;
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
  top: 25px;
  margin-left: 30px;
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
  width: 50%;
  margin: 30px auto;
  height: 40px;
}

.submit:active {
  background-color: rgb(115, 126, 134);
}
#login-patient {
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
  height: 40px;
}
</style>
