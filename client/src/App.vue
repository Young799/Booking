<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" class="home">Home</router-link>
      <router-link to="/register" class="sign">Signup</router-link>
      <router-link to="/login">Login</router-link>|
      <router-link to="/logout">Logout</router-link>|

    </div>
    <!-- Render the content of the current page view -->
    <router-view/>
  <footer class="footer-distributed">

 <div class="footer-left">

 <h3>WECARE<span>4YOU</span></h3>

 <p class="footer-links">
 </p>

 <p class="footer-company-name">WECARE4YOU &copy; 2021</p>
 </div>

 <div class="footer-center">

 <div>
 <i class="fa fa-map-marker"></i>
 <p><span>21 Revolution Street</span> Malnö, Sweden</p>
 <p>contact@phone: 070449303</p>
 <p>Blog</p>
 </div>

 <div>
 <i class="fa fa-phone"></i>
 <p>contact@email:WECARE4YOU.com</p>
 </div>

 </div>

 <div class="footer-right">

 <div class="footer-icons">

 <a href="#"><i class="fa fa-facebook"></i></a>
 <a href="#"><i class="fa fa-twitter"></i></a>
 <a href="#"><i class="fa fa-linkedin"></i></a>
 <a href="#"><i class="fa fa-github"></i></a>

 </div>

 </div>

 </footer>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
#nav{
  background-color: #2c3e50;
  height: 50px;
  margin-top: 0px;
}
.home{
  margin-right: 1070px;
}
.sign{
  margin: 30px;
}
footer{
    margin-top:2500px ;
    border: rgb(19, 20, 20);
    background: rgb(93, 98, 126);
  }
</style>
