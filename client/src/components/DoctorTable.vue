<template>
  <div>
    <div class="DoctorTable">
      <table class="doctorTable">
        <thead>
          <tr>
            <th class="doctorTh" v-for="(obj, ind) in config" :key="ind">{{ obj.title }}</th>
          </tr>
        </thead>
        <tbody>
          <tr class="doctorTr" v-for="(row, index) in theData" :key="index">
            <td v-for="(obj, ind) in config" :key="ind">
              {{ row[obj.key] }}
              <span v-if="obj.typ === 'text'">{{ row[obj.key] }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: ['theData', 'config']
}
</script>

<style>
.DoctorTable {
  border-radius: 4px;
  overflow: auto;
  width: 100%;
  margin: 30px auto;
  max-height: 686px;
}
.doctorTable {
  border-collapse: collapse;
  color: #333;
  width: 100%;
}
.doctorTh {
  background: rgba(86, 121, 100, 0.445);
  position: sticky;
  top: 0;
  padding: 10px 5px;
  text-align: center;
  border-bottom: 1px solid #999;
  font-size: 0.7em;
  text-transform: uppercase;
  font-weight: bold;
}
.doctorTr {
    background: white;
  padding: 5px 5px;
  text-align: center;
  font-size: 0.7em;
  text-transform: uppercase;
}
</style>
