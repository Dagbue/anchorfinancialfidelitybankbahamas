<template>
  <div>
    <div class="backdrop"></div>
    <dialog open>
      <form class="payment-modal" @submit.prevent="proceed">
        <p @click="$emit('close')" class="close">x</p>
        <!--            <div class="text-block-73 lawrence">Kindly complete the KYC process to proceed with Payment</div>-->
        <!--        <div class="image-wrapper"><img src="@/assets/images/clock.png" loading="lazy" width="161" alt=""></div>-->

<!--                <div class="text-block-73 lawrence">You buy: Daily-100 | Expire: 30 days | price: 15$</div>-->

        <div style="color: #db657b" class="text-block-73 lawrence">Order Details</div>

        <div class="seperate">
          <div class="text-block-72 ">Total amount to pay</div>
          <div class="text-block-72 ">0.096BTC</div>
        </div>

        <div class="slider-container">
          <label class="label" for="range">Volume paid (30%)</label>
          <input type="range" id="range" min="0" max="100" value="30">
        </div>

        <loading-spinner/>

        <div class="text-block-73 lawrence-3">Transaction detected, waiting for the confirmation on the network.</div>

        <div style="color: #db657b" class="text-block-73 lawrence-4">. It can take up to 6 confirmations before we deliver an order paid with BTC on the mainnet.</div>
        <div style="color: #db657b" class="text-block-73 lawrence-4">. 🔍 See your transaction on the MemPool Screener</div>
        <div style="color: #db657b" class="text-block-73 lawrence-4">. Closing this window will not effect your order.</div>
        <div style="color: #db657b" class="text-block-73 lawrence-4">. In your account history you can find the status of your order as well.</div>
        <div style="color: #db657b" class="text-block-73 lawrence-4">. We will deliver your product as soon as the transaction is confirmed.</div>
<!--        <div  v-show="!mobile" style="color: #db657b" class="text-block-73 lawrence-4">. If your wallet doesn't use proper fee estimations or there is a high load on the network, your transaction can take more time to be confirmed.</div>-->


        <p  class="lawrence-2">bc1qffq5qt944k3q2v6ddr50mzlhm9dqp5k49az2cs</p>





        <!--        <div class="margin-top margin-small">-->
        <!--          <a href="#" @click="$emit('close')" class="button is-secondary w-button">Cancel</a>-->
        <!--        </div>-->
      </form>
    </dialog>
  </div>
</template>

<script>
import LoadingSpinner from "@/components/baseComponents/LoadingSpinner.vue";

export default {
  name: "InfoConfirmPaymentModal6",
  components: {LoadingSpinner},
  emits: ['close'],
  data() {
    return {
      timer: null,
      timeRemaining: 3600, // 1 hour in seconds
      mobile: false,
    };
  },
  computed: {
    digitalCurrency() {
      return this.$store.getters.getDigitalCurrency;
    },
    formatTime() {
      const minutes = Math.floor(this.timeRemaining / 60);
      const seconds = this.timeRemaining % 60;
      return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    },
  },
  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  methods: {
    proceed(){
      // RouterUtils.navigateTo(RouterUtils.routes.kyc.updateKycStep.name)
      this.$router.push("/fundWalletView");
      window.scrollTo(0, 0);
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 700){
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
  },
  mounted() {
    this.timer = setInterval(() => {
      if (this.timeRemaining > 0) {
        this.timeRemaining--;
      } else {
        clearInterval(this.timer);
        alert('Countdown finished!');
      }
    }, 1000); // Update every second
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
}
</script>


<style scoped>
h3 {margin: 40px 0 0; }
ul {list-style-type: none; padding: 0; }
li {display: inline-block; margin: 0 10px; }


.slider-container {
  width: 100%;
}

input[type="range"] {
  width: 100%;
  height: 4px;
  background: #ddd;
  border-radius: 3px;
  outline: none;
}


.label{
  font-size: 14px;
  font-weight: 700;
}


.loader {
  animation: rotate 1s infinite;
  height: 50px;
  width: 50px;
}

.loader:before,
.loader:after {
  border-radius: 50%;
  content: "";
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 30px;
  width: 30px;
  margin-bottom: 10%;
}
.loader:before {
  animation: ball1 1s infinite;
  background-color: #475467;
  box-shadow: 30px 0 0 #db657b;
  margin-bottom: 10px;
}
.loader:after {
  animation: ball2 1s infinite;
  background-color: #db657b;
  box-shadow: 30px 0 0 #475467;
}

@keyframes rotate {
  0% { transform: rotate(0deg) scale(0.8) }
  50% { transform: rotate(360deg) scale(1.2) }
  100% { transform: rotate(720deg) scale(0.8) }
}

@keyframes ball1 {
  0% {
    box-shadow: 30px 0 0 #db657b;
  }
  50% {
    box-shadow: 0 0 0 #db657b;
    margin-bottom: 0;
    transform: translate(15px, 15px);
  }
  100% {
    box-shadow: 30px 0 0 #db657b;
    margin-bottom: 10px;
  }
}

@keyframes ball2 {
  0% {
    box-shadow: 30px 0 0 #475467;
  }
  50% {
    box-shadow: 0 0 0 #475467;
    margin-top: -20px;
    transform: translate(15px, 15px);
  }
  100% {
    box-shadow: 30px 0 0 #475467;
    margin-top: 0;
  }
}



.lawrence{
  /*text-transform: lowercase;*/
  text-align: left;
  font-size: 20px;
}

.lawrence-3{
  /*text-transform: lowercase;*/
  text-align: center;
  width: 85%;
  display: block;
  margin-right: auto;
  margin-left: auto;
  font-size: 16px;
}

.lawrence-4{
  font-size: 15px;
  text-align: left;
  padding-top: 0;
  margin-top: 0;
  line-height: 1.3;
}

.seperate{
  display: flex;
  justify-content: space-between;
}


.close{
  text-align: right;
  font-size: 22px;
}

.lawrence-2{
  background-color: #222222;
  color: #FFFFFF;
  padding: 5px;
  margin-top: 2%;
  margin-bottom: 1%;
  text-align: center;
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.7);
}

div{
  padding-bottom: 10px;
}
h3{
  font-weight: bold;
}
img{
  display: block;
  margin-right: auto;
  margin-left: auto;
}
dialog {
  position: fixed;
  top: 3vh;
  width: 32rem;
  height: 20rem;
  left: calc(50% - 13.5rem);
  margin: 0;
  background-color: transparent;
  z-index: 100;
  border: none;
  animation: modal 0.3s ease-out forwards;
}

@keyframes modal {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}


@media (max-width: 500px) {
  dialog {
    top: 2vh;
    width: 27rem;
    height: 20rem;
    left: calc(50% - 12.4rem);
    right: 30px;
  }
  h3{
    font-size: 20px;
  }
  p{
    font-size: unset;
  }
}
</style>