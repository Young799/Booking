<template>
  <div>
    <div class="title">Welcome to the admin page!</div>
    <main>
      <Register />
      <Pagination />
      <Table v-if="tableData" :theData="tableData" :config="config" :style="{ height: '300px' }"/>
    </main>
  </div>
</template>

<script>
import Register from '../components/RegisterDoctor.vue'
import Table from '../components/Table.vue'
import Pagination from '../components/Pagination.vue'
export default {
  components: {
    Register,
    Table,
    Pagination
  },
  data: () => ({
    tableData: undefined,
    config: [
      {
        key: 'first_name',
        title: 'First name',
        type: 'text'
      },
      {
        key: 'last_name',
        title: 'Last name',
        type: 'text'
      },
      {
        key: 'personal_number',
        title: 'Personal number',
        type: 'text'
      },
      {
        key: 'phone_number',
        title: 'Phone number',
        type: 'text'
      },
      {
        key: 'email_address',
        title: 'Email Address',
        type: 'text'
      }
    ]
  }),
  mounted() {
    this.$axios.get('http://localhost:3000/api/doctors').then(({ data }) => {
      this.tableData = data
    })
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
