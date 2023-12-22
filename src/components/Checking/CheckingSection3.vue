<template>
  <div class="alpha">
    <h1 class="header">Checking Account Features</h1>
    <div class="section-1">

      <div class="group">

        <span class="fa-stack fa-2x">
          <em class="fas fa-circle fa-stack-2x text-tertiary circle-icon"></em>
          <em class="fas fa-smile fa-stack-1x fa-inverse icon-size"></em>
        </span>

        <p class="group-text">No Monthly Fee</p>
      </div>

      <div class="group">
        <span class="fa-stack fa-2x"><em class="fas fa-circle fa-stack-2x text-tertiary circle-icon"></em><em class="fas fa-mobile fa-stack-1x fa-inverse icon-size"></em></span>
        <p class="group-text">Digital Banking</p>
      </div>

      <div class="group">
        <span class="fa-stack fa-2x"><em class="fas fa-circle fa-stack-2x text-tertiary circle-icon"></em><em class="fab fa-cc-visa fa-stack-1x fa-inverse icon-size"></em></span>
        <p class="group-text">Visa Debit Card</p>
      </div>

      <div class="group">
        <span class="fa-stack fa-2x"><em class="fas fa-circle fa-stack-2x text-tertiary circle-icon"></em><em class="fas fa-file-alt fa-stack-1x fa-inverse icon-size"></em></span>
        <p class="group-text">Free eStatements</p>
      </div>


    </div>

    <div class="section-1" style="margin-left: 1%;">

      <div class="group">
        <span class="fa-stack fa-2x"><em class="fas fa-circle fa-stack-2x text-tertiary circle-icon"></em><em class="fas fa-file-invoice fa-stack-1x fa-inverse icon-size"></em></span>
        <p class="group-text">Unlimited Bill Pay</p>
      </div>

      <div class="group">
        <span class="fa-stack fa-2x"><em class="fas fa-circle fa-stack-2x text-tertiary circle-icon"></em><em class="fas fa-people-arrows fa-stack-1x fa-inverse icon-size"></em></span>
        <p class="group-text">Pay A Person</p>
      </div>

      <div class="group">
        <span class="fa-stack fa-2x"><em class="fas fa-circle fa-stack-2x text-tertiary circle-icon"></em><em class="fas fa-credit-card-front fa-stack-1x fa-inverse icon-size"></em></span>
        <p class="group-text">Access to AllPoint ATMs</p>
      </div>

      <div class="group">
        <span class="fa-stack fa-2x"><em class="fas fa-circle fa-stack-2x text-tertiary circle-icon"></em><em class="fas fa-handshake fa-stack-1x fa-inverse icon-size"></em></span>
        <p class="group-text">Cash Deposits at ATMs</p>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  name: "CheckingSection3"
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
  font-size: 40px;
  color: #003a9a;
  font-style: normal;
  font-weight: 400;
  line-height: 72px;
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