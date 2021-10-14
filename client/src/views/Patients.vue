<template>
  <div>
    <patient-menu />
    <patient-profile />
    <booking-form/>
    <patient-appointment-table/>
  </div>
</template>

<script>
import PatientMenu from '../components/PatientMenu.vue'
import BookingForm from '../components/BookingForm.vue'
import PatientAppointmentTable from '../components/PatientAppointmentTable.vue'
import PatientProfile from '../components/PatientProfile.vue'
export default {
  components: {
    PatientMenu,
    PatientProfile,
    BookingForm,
    PatientAppointmentTable
  }
}
</script>
