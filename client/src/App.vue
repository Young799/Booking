<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">WECARE4YOU</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/patients">Patients</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/doctors">Doctors</router-link>
          </li>
          <li class="nav-item-log-out">
            <router-link class="nav-link" to="/logout">Log Out</router-link>
          </li>
        </ul>
      </div>
    </nav>
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
  background-color: #eee;
  height: 100%;
  width: 100%;
}
html,
.body {
  background-color: #eee;
}

.nav-item-log-out {
  margin-left: 750px;
}
</style>
