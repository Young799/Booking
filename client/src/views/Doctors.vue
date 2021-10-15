<template>
  <div>
    <UserMenu />
    <Table />
    <AppointmentTable />
  </div>
</template>

<script>
import Table from '../components/DoctorTable.vue'
import AppointmentTable from '../components/AppointmentTable.vue'
import UserMenu from '../components/UserMenu.vue'
export default {
  components: {
    Table,
    AppointmentTable,
    UserMenu
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
