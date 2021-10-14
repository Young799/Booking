<template>
  <div>
      <Navbar />
    <RegisterPatient />
  </div>
</template>

<script>
import RegisterPatient from '@/components/RegisterPatient.vue'
import Navbar from '@/components/Navbar.vue'
export default {
  components: {
    RegisterPatient,
    Navbar
  }
}
</script>

<style>
.title {
  color: rgb(248, 247, 247);
  font-family: sans-serif;
  font-size: 24px;
  font-weight: 600;
  margin-top: 10px;
}
.main {
  margin: 20px;
}
</style>
