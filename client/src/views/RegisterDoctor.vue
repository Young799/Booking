<template>
  <div>
    <RegisterDoctor />
  </div>
</template>

<script>
import RegisterDoctor from '@/components/RegisterDoctor.vue'
export default {
  components: {
    RegisterDoctor
  }
}
</script>

<style>
.title {
  color: rgb(5, 5, 5);
  font-family: sans-serif;
  font-size: 24px;
  font-weight: 600;
  margin-top: 10px;
}
.main {
  margin: 20px;
}
</style>
