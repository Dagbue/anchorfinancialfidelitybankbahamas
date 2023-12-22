<template>
  <div>
    <div class="backdrop"></div>
    <dialog open>
      <form class="payment-modal" @submit.prevent="proceed">
        <p @click="$emit('close')" class="close">x</p>
        <!--            <div class="text-block-73 lawrence">Kindly complete the KYC process to proceed with Payment</div>-->
<!--        <div class="image-wrapper"><img src="@/assets/images/clock.png" loading="lazy" width="161" alt=""></div>-->

<!--        <div class="text-block-73 lawrence">You buy: Daily-100 | Expire: 30 days | price: 15$</div>-->

        <div style="color: #db657b" class="text-block-73 lawrence">{{digitalCurrency}} Wallet Address will expire after {{ formatTime }}.</div>

        <div class="text-block-72 lawrence">Please check carefully and send to the correct {{digitalCurrency}} address
        shown. You should use QR CODE to avoid computer virus infection and then send it to a hacker. Upon first
        confirmation of the transaction, your account would be credited</div>

        <div class="text-block-73 lawrence">Please send desired {{digitalCurrency}} amount (without network send fee)</div>

        <div style="color: #db657b" class="text-block-73 lawrence">Please do not send {{digitalCurrency}} to this address after address is
          expired, we can't receive money after address is expired.</div>

        <div class="text-block-73 lawrence">{{digitalCurrency}} wallet Address: </div>

        <p v-show="digitalCurrency === 'Bitcoin'" class="lawrence-2">bc1qu3ds5tafptd9x8pgc2evha0jtf3vzty4l9pynn</p>
        <p v-show="digitalCurrency === 'Ethereum'" class="lawrence-2">0x632C7704b5D80f19576b5dFBb149879CFe283Dfb</p>
        <p v-show="digitalCurrency === 'USDT'" class="lawrence-2">TFzEqwoBWbPE8XYQ2nb9cgmYKev1fooSh2</p>

        <div class="text-block-73 lawrence">{{digitalCurrency}} Qr Code: </div>


        <img v-show="digitalCurrency === 'USDT'" src="@/assets/usdt.jpeg" loading="lazy" width="160" alt="">
        <img v-show="digitalCurrency === 'Bitcoin'" src="@/assets/bitcoin.jpeg" loading="lazy" width="160" alt="">
        <img v-show="digitalCurrency === 'Ethereum'" src="@/assets/eth.jpeg" loading="lazy" width="160" alt="">


<!--        <div class="margin-top margin-small">-->
<!--          <a href="#" @click="$emit('close')" class="button is-secondary w-button">Cancel</a>-->
<!--        </div>-->
      </form>
    </dialog>
  </div>
</template>

<script>
export default {
  name: "InfoConfirmPaymentModal3",
  emits: ['close'],
  data() {
    return {
      timer: null,
      timeRemaining: 3600, // 1 hour in seconds
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
  methods: {
    proceed(){
      // RouterUtils.navigateTo(RouterUtils.routes.kyc.updateKycStep.name)
      this.$router.push("/fundWalletView");
      window.scrollTo(0, 0);
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


.lawrence{
  /*text-transform: lowercase;*/
  text-align: center;
}


.close{
  text-align: right;
  font-size: 22px;
}

.lawrence-2{
  background-color: #222222;
  color: #FFFFFF;
  padding: 5px;
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
    top: 3vh;
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