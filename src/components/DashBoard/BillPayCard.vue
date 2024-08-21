<template>
  <section id="FundWalletCard" class="dashboard-body-wrapper align-center">

    <info-confirm-payment-modal2 @close="hideDialog2" v-if="dialogIsVisible2" />

    <div class="back-button margin-vertical margin-large">
      <!--            <a href="@/assets/views/home-view.html" class="w-inline-block"><img src="@/assets/images/Navigation-controls.svg" loading="lazy" alt=""></a>-->
      <router-link to="/homeView"><a class="w-inline-block"><img src="@/assets/images/Navigation-controls.svg" loading="lazy" alt=""></a></router-link>
    </div>

    <div class="add-money-banner">
      <div class="add-money-wrapper">
        <div>
          <div class="text-block-58">Bill Pay</div>
          <div class="text-block-59">Schedule and Automate recurring payments directly from your account.</div>
        </div>
        <div><img src="@/assets/images/add-money-1-1.png" loading="lazy" width="84" alt=""></div>
      </div>
    </div>


    <div class="margin-top margin-medium">

      <router-link to="">
        <a class="interac-card w-inline-block">
          <div class="setup-title-wrapper"><img src="@/assets/images/bank.svg" loading="lazy" alt="">
            <div class="setup-title">
              <div class="text-block-50">Add Bank</div>
              <div class="text-block-51">Send or deposit directly from your bank by linking your bank.</div>
            </div>
          </div><img src="@/assets/images/Component-3.svg" loading="lazy" alt="">
        </a>
      </router-link>

      <router-link to="">
        <a class="interac-card w-inline-block">
          <div class="setup-title-wrapper"><img src="@/assets/images/bank.svg" loading="lazy" alt="">
            <div class="setup-title">
              <div class="text-block-50">Add Card</div>
              <div class="text-block-51">Send or deposit directly from your credit/debit card by linking your card
              details.</div>
            </div>
          </div><img src="@/assets/images/Component-3.svg" loading="lazy" alt="">
        </a>
      </router-link>


<!--      <a class="interac-card w-inline-block" @click="showDialog2">-->
<!--        <div class="setup-title-wrapper"><img src="@/assets/images/bank.svg" loading="lazy" alt="">-->
<!--          <div class="setup-title">-->
<!--            <div class="text-block-50">Deposit into your account</div>-->
<!--            <div class="text-block-51">Connect your bank account, credit or debit card and fund instantly.</div>-->
<!--          </div>-->
<!--        </div><img src="@/assets/images/Component-3.svg" loading="lazy" alt="">-->
<!--      </a>-->


    </div>

    <!--          <div class="margin-top margin-medium">-->
    <!--            <div class="connected-bank-wrapper">-->
    <!--              <div class="margin-bottom margin-medium">-->
    <!--                <div class="text-block-60">CONNECTED BANK ACCOUNTS</div>-->
    <!--              </div>-->
    <!--              <div class="connected-banks-list">-->

    <!--                <router-link to="">-->
    <!--                  <a  class="interac-card w-inline-block">-->
    <!--                    <div class="setup-title-wrapper"><img src="@/assets/images/bank.svg" loading="lazy" alt="">-->
    <!--                      <div class="setup-title">-->
    <!--                        <div class="text-block-50">0123456789</div>-->
    <!--                        <div class="text-block-51">REVOLUT | Orofin Oluwaseun Godwin</div>-->
    <!--                      </div>-->
    <!--                    </div>-->
    <!--                  </a>-->
    <!--                </router-link>-->

    <!--              </div>-->
    <!--            </div>-->
    <!--          </div>-->

  </section>
</template>

<script>
import InfoConfirmPaymentModal2 from "@/components/Modals/InfoConfirmPaymentModal2.vue";

export default {
  name: "BillPayCard",
  components: {InfoConfirmPaymentModal2},
  data() {
    return {
      dialogIsVisible2: false,
    };
  },
  methods:{
    hideDialog2() {
      this.dialogIsVisible2 = false;
    },
    showDialog2() {
      this.dialogIsVisible2 = true;
    },
  },
}
</script>

<style scoped>
h3 {margin: 40px 0 0; }
ul {list-style-type: none; padding: 0; }
li {display: inline-block; margin: 0 10px; }
</style>