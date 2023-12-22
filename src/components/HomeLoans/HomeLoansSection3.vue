<template>
    <div class="alpha">
      <h1 class="header">Mortgage Loan Benefits</h1>
      <div class="section-1">

        <div class="group">
          <span class="fa-stack fa-2x"><em class="fas fa-circle fa-stack-2x text-tertiary circle-icon"></em><em class="fas fa-percent fa-stack-1x fa-inverse icon-size"></em></span>
          <p class="group-text">Competitive Rates</p>
        </div>

        <div class="group">
          <span class="fa-stack fa-2x"><em class="fas fa-circle fa-stack-2x text-tertiary circle-icon"></em><em class="fas fa-ban fa-stack-1x fa-inverse icon-size"></em></span>
          <p class="group-text">No Application Fee</p>
        </div>

        <div class="group">
          <span class="fa-stack fa-2x"><em class="fas fa-circle fa-stack-2x text-tertiary circle-icon"></em><em class="fas fa-bolt fa-stack-1x fa-inverse icon-size"></em></span>
          <p class="group-text">Quick Application Turnaround</p>
        </div>

        <div class="group">
          <span class="fa-stack fa-2x"><em class="fas fa-circle fa-stack-2x text-tertiary circle-icon"></em><em class="fas fa-lock fa-stack-1x fa-inverse icon-size"></em></span>
          <p class="group-text">Free Rate Lock</p>
        </div>

      </div>

    </div>
</template>

<script>
export default {
  name: "HomeLoansSection3"
}
</script>

<style scoped>
.alpha{
  margin-top: 6%;
  padding-top: 70px;
  --bs-bg-opacity: 1;
  --bs-tertiary-100-rgb: 233, 240, 255;
  background-color: rgba(var(--bs-tertiary-100-rgb), var(--bs-bg-opacity)) !important;
}

.section-1{
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
}

.group{
  text-align: center;
}

.group-text{
  font-size: 20px;
  margin-bottom: 75px;
  color: #222222;
  padding-top: 8px;
  width: 80%;
  display: block;
  margin-right: auto;
  margin-left: auto;
}

.image-2{
  width: 76px;
  height: 76px;
  object-fit: cover;
}

.header{
  margin-bottom: 60px;
  font-size: 38px;
  color: #003a9a;
  font-style: normal;
  font-weight: 400;
  line-height: 60px;
  text-align: center;
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}
.fa-2x {
  font-size: 2em;
  color: #1b54c7;
}

@media (max-width: 990px) {
  .header{
    margin-bottom: 50px;
    font-size: 38px;
    line-height: 70px;
  }
}

@media (max-width: 700px) {

  .alpha{
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .section-1{
    display: block;
  }

}


@media (max-width: 500px) {


  .header{
    margin-bottom: 35px;
    font-size: 34px;
    line-height: 50px;
  }

  .group-text{
    font-size: 18px;
    margin-bottom: 50px;
  }

}
</style>