<template>
  <div>
    <Navbar />
    <h1 id="logout">You are log out</h1>
    <h1 id="thank-you">Thank for your visit, We hope to see you !</h1>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>

<style>
#logout{
    margin-top: 150px;
}
#thank-you{
    margin-top: 20px;
}
</style>
