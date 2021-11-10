<template>
  <div>
    <b-navbar
      id="b-navbar"
      toggleable="lg"
      type="light"
      class="navbar navbar-expand-lg navbar-dark"
      style="background-color: #172531"
    >
      <b-navbar-brand href="#">WECARE4YOU</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/">Home</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="/logout">Log Out</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style>
#b-navbar {
  position: sticky
}</style>
