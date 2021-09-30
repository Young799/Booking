<template>
  <div class="row no-gutters">
    <div class="col-12 col-sm-6 col-md-8">
      <p class="alex">
        NIKLAS HOLLERUP FOUNDER / MANAGER & LEG. CHIROPRACTOR Operations Manager
        and Leg. Chiropractor at The Clinic. Educated at Macquarie University in
        Australia and the Anglo-European College of Chiropractic in England.
        Works today with several elite athletes in various sports. Great
        interest in working multidisciplinary with other therapists to optimize
        treatment of patients. Also trained in dizziness and pediatrics and also
        treats smaller children with, among other things, sleep problems, muscle
        tension and constipation. You can contact Niklas via Niklas@theclinic.se
      </p>
    </div>
    <div class="col-6 col-md-4">
      <img class="img" src="../assets/do.jpg" alt="" />
    </div>

    <div class="row no-gutters">
      <div class="col-12 col-sm-6 col-md-8">
        <p class="mari">
          MARIUS HELSTAD LEG. CHIROPRACTOR Chiropractor at The Clinic. Educated
          at AECC University College in England and has a great interest in
          working with people of all ages. Marius works multidisciplinary with
          other therapists to optimize treatment for his patients. He is also
          trained in the treatment of extremities, dizziness and pediatrics and
          treats many athletes to improve and optimize performance in their
          sport. You can contact Marius via Marius@theclinic.se
        </p>
      </div>
      <div class="col-6 col-md-4">
        <img class="img" src="../assets/alex.jpg" alt="" />
      </div>
    </div>

    <div class="row no-gutters">
      <div class="col-12 col-sm-6 col-md-8">
        <p class="heli">
          HELÉNE MÖLLER (FITZSIMONS) LEG. CHIROPRACTOR Heléne Möller, Leg
          chiropractor. Educated at McTimoney College of Chiropractic in
          England. The practice of the McTimoney method focuses on the
          well-being of the whole body and the treatment is based on quick,
          specific and easy adjustments of the body's joints. Heléne enjoys
          working multidisciplinary with other therapists to optimize the
          treatment of patients. She is very interested in treating patients
          during and after pregnancy. Heléne has a strong focus and specialist
          expertise in women's health. You can contact Heléne via
          Helene@theclinic.se
        </p>
      </div>
      <div class="col-6 col-md-4">
        <img class="img" src="../assets/sara.jpg" alt="" />
      </div>
    </div>

    <div class="row no-gutters">
      <div class="col-12 col-sm-6 col-md-8">
        <p class="ann">
          ANNA STÅHL LEG. PHYSIOTHERAPIST Licensed Physiotherapist with previous
          experience at health centers in both Gothenburg and Skåne. She has a
          great interest in everything that has to do with training and sports
          and she has a background as both an active elite gymnast and coach for
          over 15 years. Anna can help you with everything from acute injuries
          to long-term pain. Trained in both shock wave treatment and dry
          needling, she adapts treatment according to your needs. Anna attaches
          great importance to knowledge and education for her patients. You can
          contact Anna via Anna@theclinic.se
        </p>
      </div>
      <div class="col-6 col-md-4">
        <img class="img" src="../assets/ann.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Api } from '@/Api'
export default {
  name: 'home',
  data() {
    return {
      message: 'none'
    }
  },
  methods: {
    getMessage() {
      Api.get('/')
        .then((response) => {
          this.message = response.data.message
        })
        .catch((error) => {
          this.message = error
        })
    }
  }
}
</script>

<style>
.btn_message {
  margin-bottom: 1em;
}
.img {
  width: 35%; /*image width*/
  border-radius: 50%;
  margin-top: 10px;
  margin: left;
  margin: right;
}
p {
  margin-top: 30px;
  width: 100%;
}
.alex {
  margin-top: 30px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  float: right;
}
.mari {
  margin-top: 30px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.heli {
  margin-top: 30px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.ann {
  margin-top: 10px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.main {
  margin-top: 1000px;
}
</style>
