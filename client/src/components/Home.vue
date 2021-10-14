<template>
  <div class="homeRow">
    <div class="homeColumn">
      <div class="homeCard">
        <img src="../assets/do.jpg" alt="" style="width: 100%" />
        <div class="homeContainer">
          <h5>NIKLAS HOLLERUP</h5>
          <p class="homeTitle">Chiropractor &amp; Founder</p>
          <p>
            Educated at Macquarie University in Australia and the Anglo-European
            College of Chiropractic in England. Works today with several elite
            athletes in various sports.
          </p>
          <p>Niklas@theclinic.se</p>
        </div>
      </div>
    </div>

    <div class="homeColumn">
      <div class="homeCard">
        <img src="../assets/alex.jpg" alt="" style="width: 100%" />
        <div class="homeContainer">
          <h5>MARIUS HELSTAD</h5>
          <p class="homeTitle">Gynecologist</p>
          <p>
            Educated at AECC University College in England and has a great
            interest in working with people of all ages.
          </p>
          <p>Marius@theclinic.se</p>
        </div>
      </div>
    </div>

    <div class="homeColumn">
      <div class="homeCard">
        <img src="../assets/sara.jpg" alt="" style="width: 100%" />
        <div class="homeContainer">
          <h5>HELÉNE MÖLLER</h5>
          <p class="homeTitle">Psychiatrist</p>
          <p>She is very interested in treating patients
          during and after pregnancy. Heléne has a strong focus and specialist
          expertise in women's health.</p>
          <p>Helene@theclinic.se</p>
        </div>
      </div>
    </div>

    <div class="homeColumn">
      <div class="homeCard">
        <img src="../assets/ann.jpg" alt="" style="width: 100%" />
        <div class="homeContainer">
          <h5>ANNA STÅHL</h5>
          <p class="homeTitle">Physiotherapist</p>
          <p> Licensed Physiotherapist with previous
          experience at health centers in both Gothenburg and Skåne. </p>
          <p>Anna@theclinic.se</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* Three columns side by side */
.homeColumn {
  float: left;
  width: 25%;
  margin-bottom: 16px;
  padding: 0 8px;
}

/* Display the columns below each other instead of side by side on small screens */
@media screen and (max-width: 650px) {
  .homeColumn {
    width: 100%;
    display: block;
  }
}

/* Add some shadows to create a card effect */
.homeCard {
    font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background: #e5eaee;
  color: rgb(73, 73, 73);
  text-align: center;
}

/* Some left and right padding inside the container */
.homeContainer {
  padding: 0 16px;
}

/* Clear floats */
.homeContainer::after,
.homeRow::after {
  content: '';
  clear: both;
  display: table;
}

.homeTitle {
  color: grey;
}
img {
    margin-bottom: 20px;
}

</style>
