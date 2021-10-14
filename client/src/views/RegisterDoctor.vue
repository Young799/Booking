<template>
  <div>
      <Navbar />
    <RegisterDoctor />
  </div>
</template>

<script>
import RegisterDoctor from '@/components/RegisterDoctor.vue'
import Navbar from '@/components/Navbar.vue'
export default {
  components: {
    RegisterDoctor,
    Navbar
  }
}
</script>
