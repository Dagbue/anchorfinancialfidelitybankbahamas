<template>
  <div class="alpha">
    <div class="section-1">

      <div class="section-1-content">
                <img src="@/assets/internship.png" alt="crd-low-cost" class="section-1-content-image">
<!--        <img src="@/assets/wealth.png" alt="" class="section-1-content-image">-->
<!--        <em class="fas fa-bullseye-pointer fa-stack-1x fa-inverse icon-size"></em>-->
        <div class="section-1-content-text">
          <p class="section-1-content-text-1">Careers at AFFBB</p>
          <p class="section-1-content-text-2">
            We are committed to offering our employees more than a job – we provide real careers with a focus on growth
            and professional development.
          </p>
        </div>
      </div>

      <div class="section-1-content">
                <img src="@/assets/fitness.png" alt="crd-low-cost" class="section-1-content-image">
<!--        <img src="@/assets/stocks.png" alt="" class="section-1-content-image">-->
        <div class="section-1-content-text">
          <p class="section-1-content-text-1">Financial Fitness</p>
          <p class="section-1-content-text-2" >
            Making good financial decisions is a skill that can be learned at any age. AFFBB offers free resources
            that will prepare you with knowledge to manage your finances now and in the future.
          </p>
        </div>
      </div>

      <div class="section-1-content">
                <img src="@/assets/digital.png" alt="crd-low-cost" class="section-1-content-image">
<!--        <img src="@/assets/insurance-64.png" alt="" class="section-1-content-image">-->
        <div class="section-1-content-text">
          <p class="section-1-content-text-1">Digital Services</p>
          <p class="section-1-content-text-2" >
            AFFBB offers a wide array of digital offerings including Digital Wallet, Digital Banking and Web App,
            Direct Deposit, eStatements, Bill Pay, and more!
          </p>
        </div>
      </div>


    </div>

    <div class="section-2">

      <p class="header">Featured Rates</p>

      <div class="section-2-content">

        <div class="section-2-content-1">

          <p class="text-1">Vehicle Loans</p>
          <hr class="new1">
          <p class="text-2">As Low As 6.64% APR1</p>
          <p class="text-3" @click="onPostClick">View Now</p>

        </div>

        <div class="section-2-content-1">

          <p class="text-1">Savings Accounts</p>
          <hr class="new1">
          <p class="text-2">Up to 3.00% APY2</p>
          <p class="text-3" @click="onPostClick2">View Now</p>

        </div>

        <div class="section-2-content-1">

          <p class="text-1">Checking Accounts</p>
          <hr class="new1">
          <p class="text-2">Up to 4.75% APY2</p>
          <p class="text-3" @click="onPostClick3">View Now</p>

        </div>


      </div>

    </div>

  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Section6",
  methods: {
    onPostClick() {
      window.scrollTo(0, 0);
      this.$router.push("/vehicleLoans");
    },

    onPostClick2() {
      window.scrollTo(0, 0);
      this.$router.push("/saving");
    },

    onPostClick3() {
      window.scrollTo(0, 0);
      this.$router.push("/checking");
    },
  },
}
</script>

<style scoped>
.section-1{
  display: flex;
  /*margin-right: 3%;*/
  margin-left: 5%;
  margin-top: 4%;
  margin-bottom: 4%;
}
.section-1-content{
  display: flex;
  justify-content: space-between;
  /*align-content: center;*/
  /*align-items: center;*/
  width: 32%;
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
  height: 100px;
  width: 100px;
  object-fit: cover;
  margin-right: 5px;
  margin-left: 5px;
}

.section-2{
  --bs-bg-opacity: 1;
  --bs-tertiary-100-rgb: 233, 240, 255;
  background-color: rgba(var(--bs-tertiary-100-rgb), var(--bs-bg-opacity)) !important;
  padding-bottom: 4rem !important;
}

.header{
  font-size: 34px;
  line-height: 1.15;
  margin: 0;
  color: #272727;
  font-stretch: normal;
  font-style: normal;
  font-weight: 700;
  letter-spacing: normal;
  text-align: center;
  padding-bottom: 1rem !important;
  padding-top: 3rem !important;
}

.section-2-content{
  display: flex;
  justify-content: space-between;
  margin-left: 3%;
  margin-right: 3%;
  margin-top: 2%;
}

.section-2-content-1{
  background-color: #fff;
  max-width: 100%;
  border: none;
  box-shadow: 0 0.5rem 0.9375rem 0 rgba(28,106,255,.1);
  border-radius: 0.75rem;
  padding: 2.5rem 2rem;
  width: 410px;
  height: 400px;
  text-align: center;
}

.text-1{
  color: #0f2e6d;
  font-size: 25px;
  line-height: 1.26;
  margin: 0;
  font-stretch: normal;
  font-style: normal;
  font-weight: 700;
  letter-spacing: normal;
  padding-top: 1.5%;
}

hr.new1 {
  border: solid 0.0625rem #272727;
  margin: 2rem 0;
  color: inherit;
  border-top: var(--bs-border-width) solid;
  opacity: .25;
  --bs-border-width: 1px;
  width: 70%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.text-2{
  font-size: 2.4rem;
  font-weight: bold;
  width: 80%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 12%;
  padding-top: 2%;
}

.text-3{
  color: #2b570b;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  font-size: 17px;
}

@media (max-width: 1000px) {
  .section-1-content-text-2{
    font-size: .750rem;
    width: 95%;
  }

  .section-1-content-text-1{
    font-size: 16px;
  }
  .section-2-content{
    display: block;
  }

  .section-2-content-1{
    width: 500px;
    margin-bottom: 3%;
    display: block;
    margin-left: auto;
    margin-right: auto;
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