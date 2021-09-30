<template>
    <main>
      <AppointmentTable
        v-if="tableData"
        :theData="tableData"
        :config="config"
        :style="{ height: '50%' }"
      />
    </main>
</template>

<script>
import AppointmentTable from '../components/AppointmentTable.vue'
import { Api } from '@/Api'
export default {
  components: {
    AppointmentTable
  },
  data: () => ({
    tableData: undefined,
    config: [
      {
        key: 'appointment_date',
        title: 'Appointment Date',
        type: 'text'
      },
      {
        key: 'time',
        title: 'Time',
        type: 'text'
      },
      {
        key: 'patient',
        title: 'Patient',
        type: 'text'
      },
      {
        key: 'doctor',
        title: 'Doctor',
        type: 'text'
      },
      {
        key: 'is_confirmed',
        title: 'Confirmed',
        type: 'text'
      }
    ]
  }),
  methods: {
    getAppointments() {
      Api.get('/appointments').then(({ data }) => {
        this.tableData = data
      })
    },
    mounted() {
      this.getAppointments()
    }
  }
}
</script>
