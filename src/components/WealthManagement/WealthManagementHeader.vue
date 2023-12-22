<template>
  <div class="alpha">
    <div class="content-alpha">

      <div class="content-1">
        <p class="text-1">
          INVEST WITH A TEAM YOU CAN TRUST
        </p>
        <p class="text-2">
          The Investment Center
        </p>
        <p class="text-3">
          AFFBB has partnered with Osaic Institutions to help you plan your financial future by designing an
          investment portfolio specific to your short- and long-term financial goals.
        </p>
        <p class="text-4" @click="onPostClick">
          Learn More
        </p>
      </div>

      <div class="content-2">
        <img src="@/assets/Investment-Center-header.jpg" alt="section-1-image" class="image"/>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "WealthManagementHeader",
  methods: {
    onPostClick() {
      this.$router.push("/signUpEmail");
      window.scrollTo(0, 0);
    },
  }
}
</script>

<style scoped>
.alpha{
  --bs-bg-opacity: 1;
  --bs-tertiary-100-rgb: 233, 240, 255;
  background-color: rgba(var(--bs-tertiary-100-rgb), var(--bs-bg-opacity)) !important;
}

.content-alpha{
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  margin-left: 5%;
  margin-right: 3%;
  padding-top: 4.3%;
  padding-bottom: 4%;
}

.content-1{
  width: 50%;
}

.content-2{
  width: 50%;
}

.image{
  width: 90%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
}

.text-1{
  font-size: 20px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.7;
  letter-spacing: 1.6px;
  text-align: left;
  text-transform: uppercase;
  color: #3c790f !important;
  vertical-align: middle;
}

.text-2{
  color: #0f2e6d;
  font-stretch: normal;
  font-style: normal;
  font-weight: 700;
  letter-spacing: normal;
  font-size: 35px;
  line-height: 1.5;
  margin: 0;
}

.text-3{
  font-size: 20px;
  font-weight: normal;
  line-height: 1.6;
  margin: 0;
  width: 85%;
}

.text-4{
  display: inline-block;
  background-color: #0f2e6d;
  border: 1.8px solid #0f2e6d;
  color: #ffffff;
  padding: 10px 30px;
  border-radius: 5px;
  margin-top: 3%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.text-4:hover{
  background-color: #1b54c7;
  border: 1.8px solid #1b54c7;
  color: #ffffff;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

@media (max-width: 990px) {
  .text-1{
    line-height: 1.4;
  }

  .text-2{
    line-height: 1.3;
  }

  .text-3{
    line-height: 1.4;
  }

  .text-4{
    padding: 9px 30px;
    margin-top: 2%;
  }
}

@media (max-width: 700px) {
  .content-alpha{
    display: block;
    padding-bottom: 5%;
    text-align: center;
    margin-left: unset;
    margin-right: unset;
  }

  .content-1{
    width: 100%;
  }

  .content-2{
    width: 100%;
  }

  .text-1{
    text-align: center;
  }
  .text-3{
    display: block;
    margin-right: auto;
    margin-left: auto;
  }

  .text-4{
    margin-bottom: 3%;
  }
}

@media (max-width: 500px) {

}

</style>