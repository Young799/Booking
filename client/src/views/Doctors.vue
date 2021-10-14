<template>
  <div>
    <DoctorMenu />
    <Table />
    <AppointmentTable />
  </div>
</template>

<script>
import Table from '../components/DoctorTable.vue'
import AppointmentTable from '../components/AppointmentTable.vue'
import DoctorMenu from '../components/DoctorMenu.vue'
export default {
  components: {
    Table,
    AppointmentTable,
    DoctorMenu
  }
}
</script>

<style>
.title {
  color: rgb(5, 5, 5);
  font-family: sans-serif;
  font-size: 24px;
  font-weight: 600;
  margin-top: 10px;
}
.main {
  margin: 20px;
}
</style>
