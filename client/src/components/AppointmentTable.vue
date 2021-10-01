 <template>
  <div>
    <h2>Appointments</h2>
    <table class="table table:border secondary-5:border">
      <thead>
        <tr>
          <th></th>
        </tr>
      </thead>
    </table>
  </div>
</template>
<script>
import { Api } from '@/Api'
export default {
  name: 'AppointmentTable',
  mounted() {
    Api.get('/appointments').then((resp) => {
      console.warn(resp)
    })
  }
}
</script>

 <style>
</style>
