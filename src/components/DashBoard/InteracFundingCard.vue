<template>
  <section id="InteracFundingCard" class="dashboard-body-wrapper align-center">
    <div class="back-button margin-vertical margin-large">
      <router-link to="/fundWalletView">
        <a class="w-inline-block"><img src="@/assets/images/Navigation-controls.svg" loading="lazy" alt=""></a>
      </router-link>
    </div>
    <h4>Follow the instructions below to fund your AFFBB Bank Account using Direct Deposit</h4>
    <p class="text-block-51" style="padding-top: 10px">
      Note: With Direct Deposit, payment deposit takes between 2-7 business working days, wire deposit takes 1-3 business
      working days. Direct Deposit early availability depends on timing and manner of payer's payments,
      instructions and fraud prevention restrictions may apply. As such, the availability or timing of early direct
      deposit may vary from pay period to pay period.
    </p>
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
                  <div class="text-block-51">Login to your Dashboard and send money to the Direct Deposit Account displayed below
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
                  <div class="text-block-51">Make sure you are sending money from a verified Bank Account to the
                    Direct Deposit Account displayed below
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
        <div class="payment-email">
          <div class="text-block-61">Bank Name: Chase bank</div>
          <div class="text-block-61">Bank Routing Number: 061092387</div>
          <div class="text-block-61">Bank Account Name: Val Wingfield</div>
          <div class="text-block-62">Direct Deposit Account Number: 559610335</div>
        </div>
        <div class="copy-button">
          <a @click="copyToClipboard('559610335')" class="button is-secondary copy ">Copy</a>
        </div>
      </div>
    </div>


  </section>
</template>

<script>
export default {
  name: "InteracFundingCard",
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