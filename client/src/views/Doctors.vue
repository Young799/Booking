<template>
  <div>
    <main>
      <div class="container">
        <div class="row">
            <Table
              v-if="tableData"
              :theData="tableData"
              :config="config"
              :style="{ height: '50%' }"
            />
        </div>
        <div class="row">
          <div class="col-sm">
            <button id="deleteButton" @click="deleteDoctors">
              Delete doctors
            </button>
          </div>
        </div>
        <div class="row">
          <div class="col-sm">
            <AppointmentTable />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Table from '../components/DoctorTable.vue'
import AppointmentTable from '../components/AppointmentTable.vue'
import { Api } from '@/Api'
export default {
  components: {
    Table,
    AppointmentTable
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
        key: 'specialist',
        title: 'Specialist',
        type: 'text'
      },
      {
        key: 'email_address',
        title: 'Email Address',
        type: 'text'
      }
    ]
  }),
  methods: {
    getDoctors() {
      Api.get('/doctors').then(({ data }) => {
        this.tableData = data
      })
    },
    deleteDoctors() {
      Api.delete('/doctors').then(({ data }) => {
        this.tableData = data
      })
    }
  },
  mounted() {
    this.getDoctors()
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
#deleteButton {
  margin: 30px auto;
  background: #ca0e0e;
  border: 0;
  padding: 10px 20px;
  color: white;
  border-radius: 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  width: 14%;
  margin: 30px auto;
}
</style>
