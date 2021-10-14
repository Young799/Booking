<template>
  <div style="overflow-x: auto">
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Trirong"
    />
    <h2 id="doctorTitle">Doctors</h2>
    <table class="doctorTable">
      <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Personal Number</th>
        <th>Speciality</th>
        <th>Email Address</th>
        <th>Action</th>
      </tr>
      </thead>
      <tr v-for="doctor in list" v-bind:key="doctor._id">
        <td>{{ doctor.first_name }}</td>
        <td>{{ doctor.last_name }}</td>
        <td>{{ doctor.personal_number }}</td>
        <td>{{ doctor.specialist }}</td>
        <td>{{ doctor.email_address }}</td>
        <td>
          <button id="delButton" v-on:click="deleteDoctor(doctor._id)">
            Delete
          </button>
        </td>
      </tr>
    </table>
    <button id="deleteButton" v-on:click="deleteDoctors()">
          Delete All
        </button>
  </div>
</template>

<script>
import { Api } from '@/Api'
export default {
  name: 'DoctorTable',
  data() {
    return { list: undefined }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      Api.get('/doctors').then((response) => {
        this.list = response.data
        console.warn(response.data)
      })
    },
    deleteDoctors() {
      Api.delete('/doctors').then(({ data }) => {
        this.list = data
      })
    },
    deleteDoctor(id) {
      Api.delete('/doctors/' + id).then((response) => {
        this.getData()
      })
    }
  }
}
</script>

 <style>
  body{
   height: 100vh;
   display: grid;
   justify-content: center;
   align-items: center;
 }
#doctorTitle {
font-family: Impact, Charcoal, sans-serif;
  font-size: 25px;
  letter-spacing: 4px;
word-spacing: 2px;
color: #3d3d3d;
font-weight: 700;
text-decoration: none;
font-style: normal;
font-variant: small-caps;
text-transform: uppercase;
  margin-top: 30px;
  margin-bottom: 50px;
}

.doctorTable {
  width: 95%;
  border-collapse: collapse;
  margin: 30px auto;
   border: black;
   box-shadow: 0 5px 10px rgb(189, 188, 188);
   background-color: white;
   overflow: hidden;
}

#delButton {
  background: #2e4a62;
  border: 0;
  padding: 10px 20px;
  color: white;
  border-radius: 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  width: 80%;
  margin: 5px auto;
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
