<template>
  <div>
      <patient-menu/>
    <profile-update-form />
  </div>
</template>

<script>
import PatientMenu from '../components/PatientMenu.vue'
import ProfileUpdateForm from '../components/ProfileUpdateForm.vue'
export default {
  components: {
    ProfileUpdateForm,
    PatientMenu
  }
}
</script>
