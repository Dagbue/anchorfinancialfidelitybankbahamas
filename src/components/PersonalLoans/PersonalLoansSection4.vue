<template>
  <div class="alpha">
    <h1 class="header">Personal Loan Benefits</h1>
    <div class="section-1">

      <div class="group">
        <span class="fa-stack fa-2x"><em class="fas fa-circle fa-stack-2x text-tertiary circle-icon"></em><em class="fas fa-percent fa-stack-1x fa-inverse icon-size"></em></span>
        <p class="group-text">Low Rates</p>
      </div>

      <div class="group">
        <span class="fa-stack fa-2x"><em class="fas fa-circle fa-stack-2x text-tertiary circle-icon"></em><em class="fas fa-file fa-stack-1x fa-inverse icon-size"></em></span>
        <p class="group-text">Flexible Terms</p>
      </div>

      <div class="group">
        <span class="fa-stack fa-2x"><em class="fas fa-circle fa-stack-2x text-tertiary circle-icon"></em><em class="fas fa-laptop fa-stack-1x fa-inverse icon-size"></em></span>
        <p class="group-text">Easy Application</p>
      </div>

    </div>

    <div class="section-1" style="margin-left: 1%;">

      <div class="group">
        <span class="fa-stack fa-2x"><em class="fas fa-circle fa-stack-2x text-tertiary circle-icon"></em><em class="fas fa-bolt fa-stack-1x fa-inverse icon-size"></em></span>
        <p class="group-text">Quick Turnaround</p>
      </div>

      <div class="group">
        <span class="fa-stack fa-2x"><em class="fas fa-circle fa-stack-2x text-tertiary circle-icon"></em><em class="fas fa-phone fa-stack-1x fa-inverse icon-size"></em></span>
        <p class="group-text">Telephone Banking</p>
      </div>

      <div class="group">
        <span class="fa-stack fa-2x"><em class="fas fa-circle fa-stack-2x text-tertiary circle-icon"></em><em class="fas fa-percent fa-stack-1x fa-inverse icon-size"></em></span>
        <p class="group-text">Complimentary Checks</p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "PersonalLoansSection4"
}
</script>

<style scoped>
.alpha{
  margin-top: 6%;
  padding-top: 50px;
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
  width: 100%;
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
  margin-bottom: 40px;
  font-size: 36px;
  color: #003a9a;
  font-style: normal;
  font-weight: 400;
  line-height: 70px;
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