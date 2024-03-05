<template>
  <div>
    <div class="backdrop"></div>
    <dialog open>
      <form class="payment-modal" @submit.prevent="proceed">
        <!--            <div class="text-block-73 lawrence">Kindly complete the KYC process to proceed with Payment</div>-->
        <div class="image-wrapper"><img src="@/assets/images/clock.png" loading="lazy" width="161" alt=""></div>

<!--        <div class="text-block-73 lawrence">Insufficient Balance</div>-->

<!--        <div class="text-block-73 lawrence">Account Maturity date not reached for withdrawal, Contact support for more information </div>-->

        <div class="text-block-73 lawrence">Your Account is Limited</div>

        <div class="text-block-72 lawrence">This action is not allowed at the moment.please upgrade your account to
          activate this feature.</div>

        <!--        <div class="margin-top margin-medium">-->
        <!--          <a href="#" @click="proceed"  class="button w-button">Make Deposit</a>-->
        <!--          &lt;!&ndash;          <base-button :loading="loading">Proceed to KYC</base-button>&ndash;&gt;-->
        <!--        </div>-->
        <div class="margin-top margin-small">
          <a href="#" @click="$emit('close')" class="button is-secondary w-button">Cancel</a>
        </div>
      </form>
    </dialog>
  </div>
</template>

<script>
export default {
  name: "InfoConfirmPaymentModal4",
  emits: ['close'],
  computed: {

  },
  methods: {
    proceed(){
      // RouterUtils.navigateTo(RouterUtils.routes.kyc.updateKycStep.name)
      this.$router.push("/fundWalletView");
      window.scrollTo(0, 0);
    },
  },
}
</script>

<style scoped>
h3 {margin: 40px 0 0; }
ul {list-style-type: none; padding: 0; }
li {display: inline-block; margin: 0 10px; }


.lawrence{
  text-transform: lowercase;
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
p{
}
dialog {
  position: fixed;
  top: 15vh;
  width: 32rem;
  height: 20rem;
  left: calc(50% - 14rem);
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
    top: 18vh;
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