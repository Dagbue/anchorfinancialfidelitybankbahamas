<template>
  <div class="alpha">
    <p class="header">Member Benefits Include</p>
    <div class="section-1">

      <div class="section-1-content">
        <img src="@/assets/icons8-atm-80.png" alt="crd-low-cost" class="section-1-content-image">
        <em class="fas fa-bullseye-pointer fa-stack-1x fa-inverse icon-size"></em>
        <div class="section-1-content-text">
          <p class="section-1-content-text-1">Allpoint ATM Network</p>
          <p class="section-1-content-text-2">
            As a AFFBB Member, you have access to over 55,000 surcharge-free ATMs nationwide as part of the
            Allpoint network.
          </p>
        </div>
      </div>

      <div class="section-1-content">
        <img src="@/assets/icons8-paid-64.png" alt="crd-low-cost" class="section-1-content-image">
        <div class="section-1-content-text">
          <p class="section-1-content-text-1">Get Paid Early</p>
          <p class="section-1-content-text-2" >
            With AFFBB’s early pay Direct Deposit, you’re eligible to receive your paycheck or federal benefits up
            to one day early at no charge to you! Set up Direct Deposit today.
          </p>
        </div>
      </div>

    </div>

    <div class="section-1">

      <div class="section-1-content">
        <img src="@/assets/icons8-insurance-64.png" alt="crd-low-cost" class="section-1-content-image">
        <em class="fas fa-bullseye-pointer fa-stack-1x fa-inverse icon-size"></em>
        <div class="section-1-content-text">
          <p class="section-1-content-text-1">Discounted Insurance</p>
          <p class="section-1-content-text-2">
            Your credit union membership could result in some nice savings for all your insurance needs, including
            life, health, car and home, AD&D coverage and more.
          </p>
        </div>
      </div>

      <div class="section-1-content">
        <img src="@/assets/icons8-financial-64.png" alt="crd-low-cost" class="section-1-content-image">
        <div class="section-1-content-text">
          <p class="section-1-content-text-1">Financial Fitness Resources</p>
          <p class="section-1-content-text-2" >
            Making good financial decisions now, can pay dividends later in life. To help you develop skills for
            managing your financial future, we offer free resources including articles, calculators, webinars, and even an app that rewards users for completing bite-sized financial literacy lessons.
          </p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "AboutSection4"
}
</script>

<style scoped>
.section-1{
  display: flex;
  margin-left: 5%;
  margin-top: 4%;
  margin-bottom: 4%;
}
.section-1-content{
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  width: 40%;
  margin-right: auto;
  margin-left: auto;
}

.section-1-content-text-1{
  font-weight: 600;
  color: #0f2e6d;
  margin-top: 0;
  font-size: 23px;
  margin-bottom: 1%;
}
.section-1-content-text-2{
  margin: 0;
  font-size: 17px;
  /*color: #818a91;*/
  /*width: 80%;*/
  line-height: 1.38;
  padding-top: 1.5%;
}
.section-1-content-image{
  height: 70px;
  width: 70px;
  object-fit: cover;
  margin-right: 15px;
}


.header{
  font-size: 30px;
  line-height: 1.15;
  margin: 0;
  color: #272727;
  font-stretch: normal;
  font-style: normal;
  font-weight: 700;
  letter-spacing: normal;
  text-align: center;
  padding-bottom: 0.5rem !important;
  padding-top: 4rem !important;
}



@media (max-width: 1000px) {
  .section-1-content-text-2{
    font-size: .750rem;
    width: 95%;
  }

  .section-1-content-text-1{
    font-size: 16px;
  }
}

@media (max-width: 700px) {
  .section-1{
    display: block;
    margin: 2.5% 2% 2.5% 4%;
  }

  .section-1-content{
    margin-bottom: 4%;
    width: 100%;
  }

  .section-1-content-text-2{
    font-size: .875rem;
    width: 95%;
  }

  .section-1-content-text-1{
    font-size: 18px;
  }

}

@media (max-width: 500px) {

}
</style>