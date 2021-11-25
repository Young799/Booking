<template>
  <div class="booking" data-server-rendered="true">
    <b-container>
      <div class="row pt-2">
        <div class="col-12">
          <h2 class="menu_1">Request Appointment</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <label for="bookinginfo1">Enter your wished booking date:</label>
          <input
            type="text"
            class="form-control"
            id="bookinginfo1"
            v-model="booking.date"
            placeholder="yyyy-mm-dd"
          />
        </div>
        <div class="col-12">
          <label for="bookinginfo2">Enter your wished booking time:</label>
          <input
            type="text"
            class="form-control"
            id="bookinginfo2"
            v-model="booking.time"
            placeholder="hh-mm"
          />
        </div>
      </div>
      <div class="row pt-2">
        <div class="col-12">
          <button type="button" class="send" v-on:click="sendRequest">
            Send request
          </button>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import { Api } from '@/Api'

export default {
  data() {
    return {
      booking: {
        date: '',
        time: '',
        doctor: ''
      }
    }
  },
  methods: {
    sendRequest() {
      Api.post(`/patients/${this.$route.params.id}/appointments`, {
        appointment_date: this.booking.date,
        time: this.booking.time,
        doctor: { _id: '61915563f2e5bf1514b323d9' } // update with mongoDB atlas
      })
        .then(response => {
          alert('Do you want to send a booking request')
          this.$router.go()
          console.log(response)
        })

        .catch(error => {
          alert(error.response.data.message)
        })
    }
  }
}
</script>

<style >
.booking {
  margin: 30px auto;
}
.menu_1 {
  font-family: Impact, Charcoal, sans-serif;
  font-size: 25px;
  letter-spacing: 4px;
  word-spacing: 2px;
  color: #3d3d3d;
  font-weight: 700;
  text-decoration: none;
  font-style: normal;
  font-variant: small-caps;
  text-transform: uppercase;
  margin-top: 30px;
  margin-bottom: 20px;
}
.send {
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
  margin: 30px auto;
}
</style>
