<template>
  <div class="alpha">
    <div class="content-alpha">

      <div class="content-2">
        <img src="@/assets/mobile-wallet.jpeg" alt="section-1-image" class="image"/>
      </div>

      <div class="content-1">
        <!--        <p class="text-1">-->
        <!--          FEEL RIGHT AT HOME-->
        <!--        </p>-->
        <p class="text-2">
          Helpful Resources
        </p>
        <p class="text-3">At AFFBB, protecting the assets of our members is our highest priority. Below are tools,
          features, and services we offer to help secure your accounts.</p>
        <div class="lawrence">
          <em class="fas fa-caret-right"></em>
          <p class="text-3">
            <span style="font-weight: 900; color: black;">Account Alerts : </span>Sign up for Account Alerts via Digital Banking and increase your account awareness. Choose
            from balance, transaction, security alerts, and more that will be sent directly to your phone
            or email instantaneously.
          </p>
        </div>

        <div class="lawrence">
          <em class="fas fa-caret-right"></em>
          <p class="text-3">
            <span style="font-weight: 900; color: black;">Digital Wallet : </span>
            Connect your Visa Debit Card and Credit Card to your smartphone or smartwatch for convenient and
            contactless payments with Apple Pay, Google Pay, Samsung Pay, Fitbit Pay, and Garmin Pay. Each
            transaction uses a unique virtual card number, so your actual card number is never shared with
            merchants or compromised by card skimmers.
          </p>
        </div>

        <div class="lawrence">
          <em class="fas fa-caret-right"></em>
          <p class="text-3">
            <span style="font-weight: 900; color: black;">Card Controls : </span>
            Stop unauthorized purchases made with your Visa Debit Card and Credit Card in seconds. Set up card
            activity alerts, lock or unlock your card, set travel notices, and report lost or stolen cards anytime
            inside of Digital Banking.
          </p>
        </div>


      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "ResourcesSection4"
}
</script>

<style scoped>

.content-alpha{
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  margin-left: 2.5%;
  padding-top: 4.3%;
}

.content-1{
  width: 50%;
  margin-left: 2%;
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
  font-weight: 900;
  letter-spacing: normal;
  font-size: 26px;
  line-height: 1.1;
  margin: 0;
  width: 90%;
  margin-bottom: 1%;
}

.text-3{
  font-size: 18.5px;
  font-weight: normal;
  line-height: 1.3;
  margin: 0;
  width: 83%;
  margin-bottom: 1%;
}

.text-4{
  display: inline-block;
  background-color: #ffffff;
  border: 1.8px solid #0f2e6d;
  color: #0f2e6d;
  padding: 10px 30px;
  border-radius: 5px;
  margin-top: 3%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.text-4:hover{
  background-color: #0f2e6d;
  border: 1.8px solid #0f2e6d;
  color: #ffffff;
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

.section-1{
  width: 70%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 3%;
  margin-bottom: 2%;
  color: #071333;
}
.header{
  margin-bottom: 1%;
  color: #071333;
}
.section-1-inner p{
  padding-bottom: 10px;
}

@media (max-width: 990px) {
  .text-1{
    line-height: 1.4;
  }

  .text-2{
    line-height: 1.2;
  }

  .text-3{
    line-height: 1.4;
  }

  .text-4{
    padding: 9px 30px;
    margin-top: unset;
  }
}

@media (max-width: 700px) {

  .content-alpha{
    display: block;
    margin-left: unset;
    margin-right: unset;
  }

  .content-1{
    width: 100%;
    text-align: center;
  }

  .text-1{
    text-align: center;
    margin-bottom: 1%;
    margin-top: 2%;
  }

  .text-2{
    display: block;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
    margin-bottom: 1%;
    margin-top: 1%;
  }

  .content-2{
    width: 100%;
    text-align: center;
  }

  .text-3{
    display: block;
    margin-right: auto;
    margin-left: auto;
  }

  .text-4{
    margin-bottom: 3%;
    padding: 10px 40px;
  }

  .fa-caret-right{
    display: none;
  }

}
@media (max-width: 500px) {

}

</style>