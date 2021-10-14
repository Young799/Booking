<template>
  <div>
      <patient-menu/>
    <Notification />
  </div>
</template>

<script>
import Notification from '../components/NotificationTable.vue'
import PatientMenu from '../components/PatientMenu.vue'
export default {
  components: {
    Notification,
    PatientMenu
  }
}
</script>
