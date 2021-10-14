<template>
  <div>
      <Navbar />
    <PatientLogin />
  </div>
</template>

<script>
import PatientLogin from '@/components/PatientLogin.vue'
import Navbar from '@/components/Navbar.vue'
export default {
  components: {
    PatientLogin,
    Navbar
  }
}
</script>
