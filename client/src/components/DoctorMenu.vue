<template>
    <nav class="navbar sticky-top navbar-expand-lg navbar-dark" style=
    "background-color: #172531;">
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
          <li class="nav-item-log-out-doctor">
            <router-link class="nav-link" to="/logout">Log Out</router-link>
          </li>
        </ul>
      </div>
    </nav>
</template>

<style>
.nav-item-log-out-doctor {
  margin-left: 900px;
}

.nav {
  background-color: #172531;
}

</style>
