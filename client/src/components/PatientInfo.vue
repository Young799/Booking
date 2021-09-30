<template>
  <div id="single patient">
    first name : {{ patient.first_name }} last name :
    {{ patient.last_name }} email: {{ patient.email_address }} password:{{
      patient.confirmPassword
    }}
  </div>
</template>

<script>
export default {
  name: 'PatientInfo',
  props: ['patient']
}
</script>
<style>
</style>
