<template>
<div>
    <h1>Welcome you to Care4you </h1>
    <div v-for="patient in patients" v-bind:key="patient._id">
      <patient-info v-bind:patient="patient"/>
    </div>
</div>
</template>

<script>
import patientItem from '../components/patient-info.vue'
import { Api } from '../Api'

export default {
  name: 'patients',
  components: {
    'patient-info': patientItem
  },

  mounted() {
    Api.get('patients/:id')
      .then(response => {
        this.patients = response.data.patients
      })
  },
  data() {
    return {
      patients: []
    }
  }
}
</script>
