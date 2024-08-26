<template>
  <section id="InteracFundingCard" class="dashboard-body-wrapper align-center">
    <div class="back-button margin-vertical margin-large">
      <router-link to="/billPayView">
        <a class="w-inline-block"><img src="@/assets/images/Navigation-controls.svg" loading="lazy" alt=""></a>
      </router-link>
    </div>
    <h4>Follow the instructions below to Link your credit/debit card to your AFFBB Bank Account </h4>
<!--    <p class="text-block-51" style="padding-top: 10px">-->
<!--      Note: With Direct Deposit, payment deposit takes between 2-7 business working days, wire deposit takes 1-3 business-->
<!--      working days. Direct Deposit early availability depends on timing and manner of payer's payments,-->
<!--      instructions and fraud prevention restrictions may apply. As such, the availability or timing of early direct-->
<!--      deposit may vary from pay period to pay period.-->
<!--    </p>-->
    <div class="margin-top margin-medium">
      <!--            <div class="interac-funding-steps">-->
      <!--              <div class="margin-bottom margin-small">-->
      <!--                <div class="text-block-60">STEP 1</div>-->
      <!--              </div>-->
      <!--              <div class="connected-banks-list">-->
      <!--                <router-link to="/updateKycStep">-->
      <!--                  <a class="interac-card w-inline-block">-->
      <!--                    <div class="setup-title-wrapper"><img src="@/assets/images/bank.svg" loading="lazy" alt="">-->
      <!--                      <div class="setup-title">-->
      <!--                        <div class="text-block-51">Login to your banking app and send money to <strong>deposit@rubies.com</strong></div>-->
      <!--                      </div>-->
      <!--                    </div>-->
      <!--                  </a>-->
      <!--                </router-link>-->
      <!--              </div>-->
      <!--            </div>-->
      <div class="interac-funding-steps">
        <div class="margin-bottom margin-small">
          <div class="text-block-60">STEP 1</div>
        </div>

        <div class="connected-banks-list">
          <a class="interac-card w-inline-block">
            <div class="setup-title-wrapper"><img src="@/assets/images/bank.svg" loading="lazy" alt="">
              <div class="setup-title">
                <div class="text-block-51"> Enter your card information
                  (number, expiration date, CVV , Bank Name and 4 pin digits).
                  <!--                    <strong>payment@rubieswire.com</strong>-->
                </div>
              </div>
            </div>
          </a>
        </div>

      </div>
      <div class="interac-funding-steps">
        <div class="margin-bottom margin-small">
          <div class="text-block-60">STEP 2</div>
        </div>

        <div class="connected-banks-list">
          <a class="interac-card w-inline-block">
            <div class="setup-title-wrapper"><img src="@/assets/images/bank.svg" loading="lazy" alt="">
              <div class="setup-title">
                <div class="text-block-51">Make sure you are filling the forms with the correct details.
                  Click the proceed button below to begin
                  <!--                    <strong>({{userInfo.customerEmail}})</strong>-->
                </div>
              </div>
            </div>
          </a>
        </div>

      </div>

      <!--      <p class="text-block-51" style="padding-top: 10px">-->
      <!--        Note: After Deposit for faster response send proof of payment to any of  our-->
      <!--        support channels-->
      <!--      </p>-->


    </div>
    <div class="margin-top margin-medium">
      <div class="payment-email-wrapper">
<!--        <div class="payment-email">-->
<!--          <div class="text-block-61">Bank Name: </div>-->
<!--          <div class="text-block-61">Bank Routing Number: </div>-->
<!--          <div class="text-block-61">Bank Account Name: </div>-->
<!--          <div class="text-block-62">Direct Deposit Account Number: </div>-->
<!--        </div>-->
        <div class="copy-button">
          <a  class="button is-secondary copy " @click="next" >Proceed</a>
        </div>
      </div>
    </div>


  </section>
</template>


<script>
export default {
  name: "AddCardComponent",
  computed: {
    // ...mapState({
    //   loading: state => state.address.loading,
    //   auth: state => state.auth,
    //   userInfo: state => state.auth.userInfo,
    //   accountState: state => state.auth.accountState
    // }),
  },
  methods: {
    copyToClipboard(content) {
      const textarea = document.createElement('textarea')
      textarea.value = content
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
    },
    next(){
      this.$router.push("/addCard2");
    }
  }
}
</script>

<style scoped>
h3 {margin: 40px 0 0; }
ul {list-style-type: none; padding: 0; }
li {display: inline-block; margin: 0 10px; }

strong{
  text-transform: lowercase;
}
</style>