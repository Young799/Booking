<template>
  <div class="Table">
    <table>
      <thead>
        <tr>
          <th v-for="(obj, ind) in config" :key="ind">{{ obj.title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in theData" :key="index">
          <td v-for="(obj, ind) in config" :key="ind">{{ row[obj.key] }}
              <span v-if="obj.typ === 'text'">{{ row[obj.key] }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ['theData', 'config']
}
</script>

<style>
.Table {
  border: 1px solid #999;
  border-radius: 4px;
  overflow: auto;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
}
table {
  border-collapse: collapse;
  color: #333;
  width: 100%;
}
th {
  background: #f1f1f1;
  position: sticky;
  top: 0;
  padding: 10px 5px;
  text-align: center;
  border-bottom: 1px solid #999;
  font-size: 0.7em;
  text-transform: uppercase;
  font-weight: bold;
}
td {
  padding: 5px 5px;
  text-align: center;
  font-size: 0.7em;
  text-transform: uppercase;
}
</style>
