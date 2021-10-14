<template>
<div>
    <Navbar />
     <img class="logoimg" src="../assets/logo2.jpg" alt="" style="width: 100%" />
      <Home />
  </div>
</template>

<script>
import Home from '../components/Home.vue'
import Navbar from '../components/Navbar.vue'
export default {
  name: 'home',
  components: {
    Home,
    Navbar
  }
}
</script>

<style>
.btn_message {
  margin-bottom: 1em;
}
.main {
  margin-top: 1000px;
}
#header {
  font-family: Amarante, display;
  font-size: 4em;
  font-weight: 100;
  color: rgb(37, 36, 36);
  text-transform: none;
  font-style: normal;
  text-decoration: none;
  line-height: 2em;
  letter-spacing: 0.1px;
  text-shadow: 0px 0px 0px rgba(10, 10, 10, 1);
}

</style>
