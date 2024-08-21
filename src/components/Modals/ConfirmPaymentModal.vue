<template>
  <div>
    <div class="backdrop"></div>
    <dialog open>
      <info-confirm-payment-modal4 @close="hideDialog2" v-if="dialogIsVisible2"/>
      <form class="payment-modal" @submit.prevent="">
        <div class="margin-bottom margin-medium">
          <div class="amount-profile-wrapper">
<!--            <div class="text-block-71">&#8358;{{this.transferFormData.amount | formatAmount}}</div>-->
            <div class="profile-image">
<!--              <div class="text-block-70">{{this.userInfo.customerFirstName[0]}}</div>-->
            </div>
          </div>
        </div>
        <div class="payment-details">
          <div class="payment-details-row">
            <div class="text-block-72">From</div>
            <div v-show="this.userData === 'account1'" class="text-block-73 lawrence">{{this.contacts.AccountName1}}</div>

            <div v-show="this.userData === 'account2'" class="text-block-73 lawrence">{{this.contacts.AccountName2}}</div>
          </div>
          <div class="payment-details-row">
            <div class="text-block-72">To</div>
            <div class="text-block-73">{{this.loginForm.accountName}}</div>
          </div>
          <div class="payment-details-row">
            <div class="text-block-72">Amount</div>
            <div class="text-block-73">${{this.loginForm.amountNGN}}</div>
          </div>
          <div class="payment-details-row">
            <div class="text-block-72">Account number</div>
            <div class="text-block-73">{{this.loginForm.accountNumber}}</div>
          </div>
          <div class="payment-details-row">
            <div class="text-block-72">Sort code / <br/> Routing Number</div>
            <div class="text-block-73">{{this.loginForm.routingNumber}}</div>
          </div>
          <div class="payment-details-row">
            <div class="text-block-72">Note</div>
            <div class="text-block-73">{{this.loginForm.note}}</div>
          </div>
        </div>
        <div class="margin-top margin-medium">
          <!--            <a href="#" @click="sendToNGNAccount"  class="button w-button">Proceed with payment</a>-->
<!--          <base-button :loading="loading"></base-button>-->
          <button class="button max-width-full w-button" @click="showDialog2">Proceed with payment</button>
        </div>
        <div class="margin-top margin-small">
          <a href="#"  @click="cancel" class="button is-secondary w-button">Cancel payment</a>
        </div>
      </form>
    </dialog>
  </div>
</template>

<script>
import {mapState} from "vuex";
import {collection, getDocs} from "firebase/firestore";
import {db} from "@/firebase/config";
import InfoConfirmPaymentModal4 from "@/components/Modals/InfoConfirmPaymentModal4.vue";

export default {
  name: "ConfirmPaymentModal",
  components: {InfoConfirmPaymentModal4},
  emits: ['close'],
  data() {
    return {
      contacts: [],
      dialogIsVisible2: false,
    };
  },
  computed: {
    ...mapState(['count','screen','loginForm']),
    // transferFormData() {
    //   return StoreUtils.rootGetters(StoreUtils.getters.fundTransfer.getTransferFormData)
    // }
    userData() {
      return this.$store.getters.getUserData;
    },

  },
  async created() {
    const querySnapshot = await getDocs(collection(db, "dagbuelawrence@yopmail.com"));
    querySnapshot.forEach((doc) => {
      let data = {
        'id': doc.id,
        'FirstName': doc.data().FirstName,
        'LastName': doc.data().LastName,
        'Email': doc.data().Email,
        'PhoneNumber': doc.data().PhoneNumber,
        'Address': doc.data().Address,
        'City': doc.data().City,
        'Zip': doc.data().Zip,
        'AccountName1': doc.data().AccountName1,
        'AccountName2': doc.data().AccountName2,
        'Balance1': doc.data().Balance1,
        'Balance2': doc.data().Balance2,
        'IsPinSet': doc.data().IsPinSet,
      }
      this.contacts = data
    })
  },
  async mounted() {
    const querySnapshot = await getDocs(collection(db, "dagbuelawrence@yopmail.com"));
    querySnapshot.forEach((doc) => {
      let data = {
        'id': doc.id,
        'FirstName': doc.data().FirstName,
        'LastName': doc.data().LastName,
        'Email': doc.data().Email,
        'PhoneNumber': doc.data().PhoneNumber,
        'Address': doc.data().Address,
        'City': doc.data().City,
        'Zip': doc.data().Zip,
        'AccountName1': doc.data().AccountName1,
        'AccountName2': doc.data().AccountName2,
        'Balance1': doc.data().Balance1,
        'Balance2': doc.data().Balance2,
        'IsPinSet': doc.data().IsPinSet,
      }
      this.contacts = data
    })
  },
  methods: {
    hideDialog2() {
      this.dialogIsVisible2 = false;
    },
    showDialog2() {
      this.dialogIsVisible2 = true;
      this.$emit('close')
    },
    // async sendToNGNAccount() {
    //   await StoreUtils.dispatch(StoreUtils.actions.fundTransfer.doFundsTransferNGNNaira, {
    //     email: this.transferFormData.email,
    //     amount: this.transferFormData.amount,
    //     bankcode: this.transferFormData.bankcode,
    //     reference: this.transferFormData.reference,
    //     creditAccountName: this.transferFormData.creditAccountName,
    //     creditAccountNumber: this.transferFormData.creditAccountNumber,
    //     pin: this.transferFormData.pin
    //   });
    //   await StoreUtils.dispatch(StoreUtils.actions.auth.getUserDetails);
    //   await StoreUtils.dispatch(StoreUtils.actions.transaction.transactionReadAllWalletTransaction, {
    //     searchItem: "",
    //     startDate: "",//YYYY-MM-DD eg. 2023-02-05
    //     endDate: "",//YYYY-MM-DD eg. 2023-02-05
    //     page: 1
    //   });
    // },
     cancel() {
       this.$emit('close')
       this.$router.push("/addRecipientView");
       window.scrollTo(0, 0);
    }
  },
}
</script>

<style scoped >
h3 {margin: 40px 0 0; }
ul {list-style-type: none; padding: 0; }
li {display: inline-block; margin: 0 10px; }


.lawrence{
  text-transform: lowercase;
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
  top: 4vh;
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
    top: 5vh;
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