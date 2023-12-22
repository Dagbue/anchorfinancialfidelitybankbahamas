<template>
  <div>
    <div class="backdrop"></div>
    <dialog open>
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
<!--            <div class="text-block-73 lawrence">{{this.userInfo.customerFirstName}} {{this.userInfo.customerLastName}}</div>-->
          </div>
          <div class="payment-details-row">
            <div class="text-block-72">To</div>
<!--            <div class="text-block-73">{{this.transferFormData.creditAccountName}}</div>-->
          </div>
          <div class="payment-details-row">
            <div class="text-block-72">Account number</div>
<!--            <div class="text-block-73">{{this.transferFormData.creditAccountNumber}}</div>-->
          </div>
          <div class="payment-details-row">
            <div class="text-block-72">Sort code</div>
            <div class="text-block-73">20-30-45</div>
          </div>
          <div class="payment-details-row">
            <div class="text-block-72">Note</div>
<!--            <div class="text-block-73">{{this.transferFormData.note}}</div>-->
          </div>
        </div>
        <div class="margin-top margin-medium">
          <!--            <a href="#" @click="sendToNGNAccount"  class="button w-button">Proceed with payment</a>-->
<!--          <base-button :loading="loading"></base-button>-->
          <button class="button max-width-full w-button">Proceed with payment</button>
        </div>
        <div class="margin-top margin-small">
          <a href="#"  @click="cancel" class="button is-secondary w-button">Cancel payment</a>
        </div>
      </form>
    </dialog>
  </div>
</template>

<script>
export default {
  name: "ConfirmPaymentModal",
  emits: ['close'],
  computed: {
    // ...mapState({
    //   loading: state => state.fundTransfer.loading,
    //   auth: state => state.auth,
    //   userInfo: state => state.auth.userInfo,
    // }),
    // transferFormData() {
    //   return StoreUtils.rootGetters(StoreUtils.getters.fundTransfer.getTransferFormData)
    // }

  },
  methods: {
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