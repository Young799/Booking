<template>
  <div>
    <user-menu />
    <patient-profile />
    <booking-form />
    <patient-appointment-table />
    <div class="noti">
      <button
        type="button"
        v-on:click="getAllNotification"
        class="notificationBtn"
      >
        See notifications
      </button>
    </div>
  </div>
</template>

<script>
import UserMenu from '../components/UserMenu.vue'
import BookingForm from '../components/BookingForm.vue'
import PatientAppointmentTable from '../components/PatientAppointmentTable.vue'
import PatientProfile from '../components/PatientProfile.vue'

export default {
  components: {
    UserMenu,
    PatientProfile,
    BookingForm,
    PatientAppointmentTable

  },
  methods: {
    getAllNotification() {
      this.$router.push(`/booking/${this.$route.params.id}/notifications`)
    }
  }
}
</script>

<style>
.notificationBtn {
  background: #203344;
  border: 0;
  padding: 10px 20px;
  color: white;
  border-radius: 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  width: 20%;
  height: 100%;
  margin-top: 10%;
}
</style>
