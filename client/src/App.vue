<template>
  <div id="app">
    <!-- Render the content of the current page view -->
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Footer
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #f0f4f8;
  height: 100%;
  width: 100%;
}
html,
.body {
  background-color: #f0f4f8;
}
</style>
