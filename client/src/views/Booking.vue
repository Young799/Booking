<template>
  <b-container fluid>
    <h1> Welcome to care4you, Please Enter your booking request </h1>
    <b-row class="my-1" v-for="type in types" :key="type">
      <b-col sm="3">
        <label :for="`type-${type}`">Type <code>{{ type }}</code>:</label>
      </b-col>
      <b-col sm="9">
        <b-form-input :id="`type-${type}`" :type="type"></b-form-input>
      </b-col>
    </b-row>
    <b-dropdown class="m-m2-r" id="dropdown-1" block  menu-class='w-100' variant="outline-secondary" text="Choose the specialist" >
    <b-dropdown-item>Pediatrician</b-dropdown-item>
    <b-dropdown-item>Dermatologist</b-dropdown-item>
    <b-dropdown-item>Psychiatrist</b-dropdown-item>
    <b-dropdown-item>Orthopedist</b-dropdown-item>
    <b-dropdown-item>Gynecologist</b-dropdown-item>
    <b-dropdown-item>Surgeon</b-dropdown-item>
  </b-dropdown>
  <div>
    <b-form-checkbox
      id="checkbox-1"
      name="checkbox-1"
    >
      I accept the terms and use
    </b-form-checkbox>
  </div>

  <b-button variant="primary">Submit</b-button>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      types: [
        'Name',
        'Phone_Number',
        'Email',
        'Specialist',
        'date',
        'time'

      ]
    }
  }
}

</script>

<style>

</style>
