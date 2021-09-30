<template>
  <div class="container mt-5">
    <div class="row">
      <div>
        <h2 class="mb-3 text-center">Enter your desire booking date</h2>
        <date-picker v-model="date" :config="options"></date-picker>
      </div>
    </div>
  </div>
</template>

<script>
import datePicker from 'vue-bootstrap-datetimepicker'

export default {
  data() {
    return {
      date: new Date(),
      options: {
        format: 'DD/MM/YYYY',
        useCurrent: false
      }
    }
  },
  components: {
    datePicker
  }
}
</script>
