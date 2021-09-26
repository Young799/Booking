<template>
  <b-container fluid>
    <span><body>
      <form>
          <div class="container">
            <h2>  To update your personal info,fill out the field and click the save. </h2>
            <div class="row pt-4">
                <div class="col-md-6">
                    <label for="firstname">First name:</label>
                    <input type="text" class="form-control" placeholder="Enter your first name" required>
                </div>
                <div class="col-md">
                    <label for="lastname">Last name:</label>
                    <input type="text" class="form-control" placeholder="Enter your last name" required>
                </div>
            </div>
            <div class="row pt-2">
                <div class="col-md-6">
                    <label for="email">Email:</label>
                    <input type="email" class="form-control" placeholder="Enter your email address" required>
                </div>
                <div class="col-md-6">
                    <label for="tel">Tel:</label>
                    <input type="tel" class="form-control" placeholder="Enter your phone number" required>
                </div>
            </div>
            <div class="row pt-2">
                <div class="col-12">
                    <label for="addrline1">New password:</label>
                    <input type="text" class="form-control" placeholder="Enter your new password" required>
                </div>
            </div>
            <div class="row pt-2">
                <div class="col-12">
                    <label for="addrline2">Enter new password again:</label>
                    <input type="text" class="form-control" placeholder="">
                </div>
            </div>
            <div class="row pt-4 float-right">
                <buton type="submit" class="btn btn-primary">save</buton>
            </div>
            <div class="col-md-6">
                  <label for="gender">Gender:</label><br>
                  <input type="radio" name="gender"> Male
                  <input type="radio" name="gender"> Female
              </div>
              <hr class="myhrline">

            <h2>  Enter your request here ,we contact you within 48 hours. </h2>
              <div class="row pt-2">
                <div class="col-12">
                    <label for="addrline2">Enter your wished booking date:</label>
                    <input type="text" class="form-control" placeholder="dd-mm-yyyy">
                </div>
                <div class="col-12">
                    <label for="addrline2">Enter your wished booking time:</label>
                    <input type="text" class="form-control" placeholder="hh-mm">
                </div>
                <div class="row pt-4 float-right">
                <buton type="submit" class="btn btn-primary">request</buton>
              </div>
        </div>
        </div>
      </form>
        </body></span>

                <div>
                  <CalendarWidget />
                </div>

    </b-container>

</template>

<script>
import CalendarWidget from '../components/CalendarWidget.vue'
export default {

  name: 'App',
  components: {
    CalendarWidget
  }
}

</script>

<style>
 .container {
     max-width: 500px;
 }
 .spacer{
   height:100px;
 }
 hr.myhrline{
     margin: 40px;
 }
</style>
