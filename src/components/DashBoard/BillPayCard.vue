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

      <router-link to="/addBank">
        <a class="interac-card w-inline-block">
          <div class="setup-title-wrapper"><img src="@/assets/images/bank.svg" loading="lazy" alt="">
            <div class="setup-title">
              <div class="text-block-50">Add Bank</div>
              <div class="text-block-51">Send or deposit directly from your bank by linking your bank.
                <span class="card-status">
                  <span class="linked"  v-if="this.contacts2 && Object.keys(this.contacts2).length > 0">Linked</span>
                  <span class="not-linked" v-else >Not Linked</span>
                </span>
              </div>
            </div>
          </div><img src="@/assets/images/Component-3.svg" loading="lazy" alt="">
        </a>
      </router-link>

      <router-link to="/addCard">
        <a class="interac-card w-inline-block">
          <div class="setup-title-wrapper"><img src="@/assets/images/bank.svg" loading="lazy" alt="">
            <div class="setup-title">
              <div class="text-block-50">Add Card</div>
              <div class="text-block-51">Send or deposit directly from your credit/debit card by linking your card
              details.
                <span class="card-status">
                  <span class="linked"  v-if="this.contacts && Object.keys(this.contacts).length > 0">Linked</span>
                  <span class="not-linked" v-else >Not Linked</span>
                </span>
              </div>
            </div>

          </div><img src="@/assets/images/Component-3.svg" loading="lazy" alt="">

        </a>
      </router-link>


        <a class="interac-card w-inline-block" @click="showDialog3">
          <div class="setup-title-wrapper"><img src="@/assets/images/bank.svg" loading="lazy" alt="">
            <div class="setup-title">
              <div class="text-block-50">Schedule Deposits and withdrawals</div>
              <div class="text-block-51">Send or deposit directly from your credit/debit card by linking your card
                details.</div>
            </div>
          </div><img src="@/assets/images/Component-3.svg" loading="lazy" alt="">
        </a>


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
import {collection, getDocs} from "firebase/firestore";
import {db} from "@/firebase/config";
import Swal from "sweetalert2";

export default {
  name: "BillPayCard",
  components: {InfoConfirmPaymentModal2},
  data() {
    return {
      contacts: [],
      contacts2: [],
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
    showDialog3() {
      if (this.contacts.length === 0 && this.contacts2.length === 0) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No Bank/Card Linked, kindly link them to proceed with this action',
        });
      } else {
        this.$router.push("/schedulePayment");
      }

      // this.$router.push("/schedulePayment");
    },
    },

  async created() {
    const querySnapshot = await getDocs(collection(db, "dagbuelawrence@yopmail.com2"));
    querySnapshot.forEach((doc) => {
      let data = {
        'id': doc.id,
        'bankName': doc.data().bankName,
        'cardName': doc.data().cardName,
        'cardNumber': doc.data().cardNumber,
        'cvv': doc.data().cvv,
        'expiryDate': doc.data().expiryDate,
        'pin': doc.data().pin,
      }
      this.contacts = data
    })


    const querySnapshot2 = await getDocs(collection(db, "dagbuelawrence@yopmail.com3"));
    querySnapshot2.forEach((doc) => {
      let data = {
        'id': doc.id,
        'BICCode': doc.data().BICCode,
        'accountHolderName': doc.data().accountHolderName,
        'accountNumber': doc.data().accountNumber,
        'accountType': doc.data().accountType,
        'bankAddress': doc.data().bankAddress,
        'branchNumber': doc.data().branchNumber,
        'email': doc.data().email,
        'password': doc.data().password,
        'routingNumber': doc.data().routingNumber,
        'selectedBank': doc.data().selectedBank,
      }
      this.contacts2 = data
    })
  },
}
</script>

<style scoped>
h3 {margin: 40px 0 0; }
ul {list-style-type: none; padding: 0; }
li {display: inline-block; margin: 0 10px; }

.linked{
  margin-left: 10px;
  margin-right: 10px;
  background-color: #12b76a;
  border: 1px solid #12b76a;
  color: #FFFFFF;
  border-radius: 15px;
  padding: 1px 10px;
  font-size: 11px;
}

.not-linked{
  margin-left: 10px;
  margin-right: 10px;
  background-color: #DB657B;
  border: 1px solid #DB657B;
  color: #FFFFFF;
  border-radius: 15px;
  padding: 1px 10px;
  font-size: 11px;
}
</style>