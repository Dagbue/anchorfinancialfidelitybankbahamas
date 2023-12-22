<template>
  <div>
    <div class="backdrop"></div>
    <dialog open>

      <div class="welcome-modal">
        <div class="modal-image-container"></div>
        <div class="intro-slider">
          <div data-delay="4000" data-animation="outin" class="slider w-slider" data-autoplay="true" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="4" data-duration="500" data-infinite="true">
            <div class="w-slider-mask">
              <div class="intro-slider-image w-slide">
                <img style="border-radius: 6px;" src="@/assets/AutumnCouple.jpg" loading="lazy" sizes="100vw"  alt="" class="image-4">
                <div class="margin-top margin-small">
                  <div style="text-align: center;" >Welcome to AFFBB Activate your Joint Account</div>
                  <div class="margin-top margin-xsmall">
                    <div class="text-size-small text-color-grey text-align-left">We’re glad to have you onboard. Here are some quick tips to get you up and running.</div>



                  </div>
                </div>
              </div>
              <div class="intro-slider-image w-slide">
                <img src="@/assets/images/KYC.png" loading="lazy" sizes="100vw" srcset="@/assets/images/KYC-p-500.png 500w, @/assets/images/KYC.png 704w" alt="" class="image-4">
                <div class="margin-top margin-small">
                  <div class="text-size-medium text-weight-medium">Verify KYC</div>
                  <div class="margin-top margin-xsmall">
                    <div class="text-size-small text-color-grey text-align-center">We’re glad to have you onboard. Here are some quick tips to get you up and running.</div>
                  </div>
                </div>
              </div>
              <div class="intro-slider-image w-slide">
                <img src="@/assets/images/fund-wallet.png" loading="lazy" sizes="100vw" srcset="@/assets/images/fund-wallet-p-500.png 500w, @/assets/images/fund-wallet.png 704w" alt="" class="image-4">
                <div class="margin-top margin-small">
                  <div class="text-size-medium text-weight-medium">Add money to your account</div>
                  <div class="margin-top margin-xsmall">
                    <div class="text-size-small text-color-grey text-align-center">We’re glad to have you onboard. Here are some quick tips to get you up and running.</div>
                  </div>
                </div>
              </div>
              <div class="intro-slider-image w-slide">
                <img src="@/assets/images/send-money.png" loading="lazy" sizes="100vw" srcset="@/assets/images/send-money-p-500.png 500w, @/assets/images/send-money.png 704w" alt="" class="image-4">
                <div class="margin-top margin-small">
                  <div class="text-size-medium text-weight-medium">Send money</div>
                  <div class="margin-top margin-xsmall">
                    <div class="text-size-small text-color-grey text-align-center">We’re glad to have you onboard. Here are some quick tips to get you up and running.</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="left-arrow w-slider-arrow-left">
              <div class="w-icon-slider-left"></div>
            </div>

            <div class="right-arrow w-slider-arrow-right">
              <div class="w-icon-slider-right"></div>
            </div>

            <div class="slide-nav w-slider-nav w-slider-nav-invert w-round"></div>
          </div>
        </div>

<!--        <div class="text-size-small text-color-grey text-align-left">* Complete the kyc process.</div>-->
<!--        <div class="text-size-small text-color-grey text-align-left">* set your pin.</div>-->
<!--        <div class="text-size-small text-color-grey text-align-left">* Make a deposit to start transacting.</div>-->

        <div style="color: rgba(219,101,123, 0.7)" class="text-size-small text-color-grey text-align-left">Note:
          Newly created account are required to make a deposit to activate account.</div>

        <div class="button-wrapper">
          <div class="button-horizontal">
            <a data-w-id="07089900-f633-e4fb-8b9c-9babbb7772aa" @click="topUp"  class="button max-width-full w-button">Make Deposit</a>
          </div>

          <div class="button-horizontal">
            <a data-w-id="07089900-f633-e4fb-8b9c-9babbb7772aa" @click="$emit('close')"  class="button max-width-full w-button">Continue to dashboard</a>
          </div>
        </div>

<!--        <div  class="button-wrapper">-->
<!--          <div class="button-horizontal">-->
<!--            <a data-w-id="07089900-f633-e4fb-8b9c-9babbb7772aa" @click="$emit('close')"  class="button max-width-full w-button">Continue to dashboard</a>-->
<!--          </div>-->
<!--        </div>-->
      </div>
    </dialog>
  </div>
</template>

<script>
export default {
  name: "IntroMessageModal",
  emits: ['close'],
  methods: {
    topUp(){
      this.$router.push("/fundWalletView");
      window.scrollTo(0, 0);
    },
  }
}
</script>

<style scoped >
h3 {margin: 40px 0 0; }
ul {list-style-type: none; padding: 0; }
li {display: inline-block; margin: 0 10px; }




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
  font-family: GTEestiProDisplay-Regular,serif ;
  font-weight: bold;
}
p{
  font-family: GTEestiProDisplay-Regular,serif ;
}
dialog {
  position: fixed;
  top: 13vh;
  width: 32rem;
  height: 20rem;
  left: calc(50% - 13rem);
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
    top: 13vh;
    width: 25rem;
    height: 20rem;
    right: 30px;
    left: calc(50% - 10.8rem);
  }
  h3{
    font-size: 20px;
  }
  p{
    font-size: unset;
  }
}
</style>