<template>
  <div class="alpha">

    <div class="section-1">

      <div class="section-1-inner">
        <p>
          Membership at AFFBB is open to anyone that meets one of the eligibility requirements. Open an account online or visit one of our Financial Centers.</p>

      </div>

    </div>

    <div class="content-alpha">


      <div class="content-1">
        <!--        <p class="text-1">-->
        <!--          FEEL RIGHT AT HOME-->
        <!--        </p>-->
        <p class="text-2">
          Items Needed to Open an Account
        </p>
        <br/>
        <div class="lawrence">
          <em class="fas fa-caret-right"></em>
          <p class="text-3">
            A valid form of identification (unexpired Driver License, Government or state issued ID, or Passport with current address)
          </p>
        </div>

        <div class="lawrence">
          <em class="fas fa-caret-right"></em>
          <p class="text-3">
            <span style="font-weight: 900; color: black;">Digital Wallet : </span>
            Your complete physical and mailing address (and previous address if at current address less than two years)
          </p>
        </div>

        <div class="lawrence">
          <em class="fas fa-caret-right"></em>
          <p class="text-3">
            <span style="font-weight: 900; color: black;">Card Controls : </span>
            Information for funding your new account (credit card or debit card)
          </p>
        </div>

        <div class="lawrence">
          <em class="fas fa-caret-right"></em>
          <p class="text-3">
            <span style="font-weight: 900; color: black;">Card Controls : </span>
            Your Social Security Number
          </p>
        </div>

        <div class="lawrence">
          <em class="fas fa-caret-right"></em>
          <p class="text-3">
            <span style="font-weight: 900; color: black;">Card Controls : </span>
            If applying for a joint membership/account, the secondary applicant's information
          </p>
        </div>


        <p class="text-4" @click="onPostClick">
          Open an Account
        </p>

      </div>


    </div>

  </div>
</template>

<script>
export default {
  name: "OpenSection1",
  methods: {
    onPostClick() {
      this.$router.push("/signUpEmail");
      window.scrollTo(0, 0);
    },
  }
}
</script>

<style scoped>
.content-alpha{
  /*display: flex;*/
  /*justify-content: space-between;*/
  /*align-content: center;*/
  /*align-items: center;*/
  padding-top: 4.3%;
}

.content-1{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
  padding-left: 10%;
}



.text-2{
  color: #0f2e6d;
  font-stretch: normal;
  font-style: normal;
  font-weight: 900;
  letter-spacing: normal;
  font-size: 26px;
  line-height: 1.1;
  margin: 0;
  width: 90%;
}

.text-3{
  font-size: 18.5px;
  font-weight: normal;
  line-height: 1.3;
  margin: 0;
  width: 83%;
}

.text-4{
  display: block;
  margin-left: 25.5%;
  width: 25%;
  background-color: #ffffff;
  border: 1.8px solid #56ad16;
  color: #222222;
  padding: 10px 30px;
  border-radius: 5px;
  margin-top: 3%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.text-4:hover{
  background-color: #56ad16;
  border: 1.8px solid #56ad16;
  color: #222222;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}


.fa-caret-right{
  font-size: 1.5rem;
  color: #56ad16;
  padding-top: 0.2rem;
  padding-right: 10px;
}

.lawrence{
  display: flex;
  align-content: center;
  align-items: center;
  padding-bottom: 2%;
}

.section-1-inner p {
  text-align: left;
  font-size: 20px;
  margin-top: 2%;
  width: 65%;
  margin-left: auto;
  margin-right: auto;
}


@media (max-width: 990px) {
  .text-4{
    width: 30%;
  }
}

@media (max-width: 700px) {
  .content-1{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    padding-left: 5%;
  }

  .text-2{
    width: 100%;
    text-align: center;
  }

  .text-3{
    width: 100%;
    text-align: left;
  }

  .text-4{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
  }

  .section-1-inner p {
    text-align: center;
    font-size: 20px;
    margin-top: 2%;
    width: 87%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

}


@media (max-width: 500px) {
  .text-4{
    width: 60%;
  }
}
</style>