<template>
  <section id="InteracFundingCard" class="dashboard-body-wrapper align-center">
    <info-confirm-payment-modal3 @close="hideDialog2" @open="showDialog3" v-if="dialogIsVisible2"/>
    <info-confirm-payment-modal6 @close="hideDialog3" v-if="dialogIsVisible3"/>
    <div class="back-button margin-vertical margin-large">
      <router-link to="/fundWalletView">
        <a class="w-inline-block"><img src="@/assets/images/Navigation-controls.svg" loading="lazy" alt=""></a>
      </router-link>
    </div>
    <h4>Follow the instructions below to fund your AFFBB Bank Account using Digital Currency</h4>
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
                <div class="text-block-51">
                  Select Digital currency
                  <!--                    <strong>payment@rubieswire.com</strong>-->
                </div>
              </div>
            </div>
          </a>
        </div>

      </div>


      <div class="input-form-2">
        <select
            class="input-form-3"
            v-model="currency"
            aria-required="required"
            data-name="Field"
            placeholder="Select Digital Currency"
            aria-placeholder="Select Digital Currency"
            @change="fetchData1"
        >
          <option selected disabled value="">Select Digital Currency</option>
          <option :value="null" disabled>Select Digital Currency</option>
          <option value="Bitcoin">Bitcoin</option>
          <option value="Ethereum">Ethereum</option>
          <option value="USDT">USDT</option>
        </select>
      </div>

      <div class="interac-funding-steps">
        <div class="margin-bottom margin-small">
          <div class="text-block-60">STEP 2</div>
        </div>

        <div class="connected-banks-list">
          <a class="interac-card w-inline-block">
            <div class="setup-title-wrapper"><img src="@/assets/images/bank.svg" loading="lazy" alt="">
              <div class="setup-title">
                <div class="text-block-51">
                  Click Proceed to begin transactions
                  <!--                    <strong>payment@rubieswire.com</strong>-->
                </div>
              </div>
            </div>
          </a>
        </div>

      </div>


      <p class="text-block-51" style="padding-top: 10px; color: rgba(219,101,123,0.6);" >
        Note: we may require payment screenshot for faster response, send all correspondents to our support channel
      </p>
    </div>
    <div class="margin-top margin-medium">
      <div class="payment-email-wrapper">
        <div class="payment-email">
          <div v-show="this.currency != null" class="text-block-62">{{currency}}</div>
          <div v-show="this.currency === ''" class="text-block-61">Selected Currency would be displayed here</div>
<!--          <div class="text-block-62">Selected Currency would be displayed here</div>-->
        </div>
        <div class="copy-button" @click="showDialog2">
          <a  class="button is-secondary copy ">Proceed</a>
        </div>
      </div>
    </div>


  </section>
</template>

<script>
import InfoConfirmPaymentModal3 from "@/components/Modals/InfoConfirmPaymentModal3.vue";
import InfoConfirmPaymentModal6 from "@/components/Modals/InfoConfirmPaymentModal6.vue";

export default {
  name: "InteracFundingCard2",
  components: {InfoConfirmPaymentModal6, InfoConfirmPaymentModal3},
  data() {
    return {
      currency: "",
      dialogIsVisible2: false,
      dialogIsVisible3: false,
    };
  },
  computed: {
    // ...mapState({
    //   loading: state => state.address.loading,
    //   auth: state => state.auth,
    //   userInfo: state => state.auth.userInfo,
    //   accountState: state => state.auth.accountState
    // }),
  },
  methods: {
    fetchData1() {
        this.$store.dispatch('fetchDigitalCurrency', this.currency);
      },

    hideDialog2() {
      this.dialogIsVisible2 = false;
    },

    showDialog2() {
      this.dialogIsVisible2 = true;
    },

    hideDialog3() {
      this.dialogIsVisible3 = false;
    },

    showDialog3() {
      this.dialogIsVisible3 = true;
    },

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
.input-form-2{
  /*margin-top: 7%;*/
  display: block;
  /*justify-content: center;*/
}
.input-form-3{
  order: 1;
  width: 100%;
  padding: 12px 10px;
  /*margin: 8px 0;*/
  display: inline-block;
  box-sizing: border-box;
}

select{
  box-sizing: border-box;
  border: 1px solid #D0D5DD;
  border-radius: 5px;
  -webkit-transition: 0.3s;
  padding-top: 12px;
  padding-bottom: 12px;
  transition: 0.3s;
  outline: none;
  color: #667085;
}

select:focus {
  border: 1px solid #0f2e6d;
}

option{
  box-sizing: border-box;
  border: 1px solid #D0D5DD;
  border-radius: 8px;
  -webkit-transition: 0.3s;
  padding-top: 12px;
  padding-bottom: 12px;
  transition: 0.3s;
  outline: none;
  color: #667085;
}
</style>