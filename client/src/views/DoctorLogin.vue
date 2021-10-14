<template>
  <div>
      <Navbar />
    <DoctorLogin />
  </div>
</template>

<script>
import DoctorLogin from '@/components/DoctorLogin.vue'
import Navbar from '@/components/Navbar.vue'
export default {
  components: {
    DoctorLogin,
    Navbar
  }
}
</script>
