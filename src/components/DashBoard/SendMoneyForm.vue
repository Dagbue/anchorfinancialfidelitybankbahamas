<!--suppress XmlDuplicatedId -->
<template>
  <section id="SendMoneyForm">
    <div class="kyc-title-wrapper">
      <div class="margin-bottom margin-xxsmall">
        <div class="text-block-53">Add recipient</div>
      </div>
      <div class="text-block-54">Kindly provide the recipient's Account details</div>
    </div>
    <form ref="form" class="margin-top margin-large" @submit.prevent="next" >
      <div class="kyc-form-wrapper">
        <select id="field" name="field" required=""  data-name="Field" class="input-field select-field w-select">
          <option value="">Select Bank</option>
          <option value="wema">Wema</option>
          <!--                  <option :value="null" disabled>Select Bank</option>-->
<!--          <option  :value="item" v-for="item in bankList" v-bind:key="item">{{ item.name }}</option>-->
        </select>


        <input   type="text"  class="input-field w-input" maxlength="256" name="field-3" data-name="Field 3" placeholder="Enter account number" id="field-3" required="">

        <div v-if="passwordErrors.length" class="error-messages">
          <ul>
            <li v-for="error in passwordErrors" :key="error">{{ error }}</li>
          </ul>
        </div>

        <input   type="text"  class="input-field w-input" maxlength="256" name="field-3" data-name="Field 3" placeholder="Enter routing number" id="field-3" required="">

<!--        <p class="input-field w-input" maxlength="256" name="field-3" data-name="Field 3" placeholder="Account Name" id="field-3"></p>-->

        <div class="save-beneficiary-wrapper">
          <div>Save beneficiary</div>
          <input type="checkbox" v-model="isChecked">
        </div>
      </div>
      <div class="margin-top margin-medium">
<!--        <base-button  :loading="loading || loading2">Proceed</base-button>-->
        <button class="button max-width-full w-button">Proceed</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: "SendMoneyForm",
  data(){
    return {
      bankName: "",
      creditAccountName: "",
      isChecked: false,
      passwordErrors: [],
    }
  },
  computed:{
    // ...mapState({
    //   loading: state => state.fundTransfer.loading,
    //   loading2: state => state.transaction.loading,
    //   auth: state => state.auth,
    //   userInfo: state => state.auth.userInfo,
    //   getBanks: state => state.transaction.getBanks,
    // }),
    // nameEnquiryResponse() {
    //   return StoreUtils.rootGetters(StoreUtils.getters.fundTransfer.getNameEnquiryResponse)
    // },
    // bankList(){
    //   let banks = this.getBanks.result
    //   let bankIds = banks.map(it => it.name+"|"+it.id)
    //   bankIds.sort()
    //   return bankIds.map((it) => {
    //     return {id: it.split("|")[1], name: it.split("|")[0]};
    //   })
    // }
  },
  methods:{
    next(){
      this.$router.push("/transferAmountView");
      window.scrollTo(0, 0);
    }

    // nameEnquiry(event) {
    //   this.validatePassword();
    //
    //   if (this.passwordErrors.length > 0) {
    //     event.preventDefault(); // Prevent form submission
    //     swal('Error', 'Account Number must be exactly 10 characters.', 'error')
    //   } else {
    //     StoreUtils.dispatch(StoreUtils.actions.fundTransfer.doNameEnquiry, {
    //       accountNumber: this.model.accountNumber,
    //       bankCode: this.bankName.id
    //     })
    //   }
    // },
    // transferFormData(){
    //
    //   if (this.isChecked === true) {
    //     StoreUtils.commit(StoreUtils.mutations.fundTransfer.updateTransferFormData, {
    //       email: this.userInfo.customerEmail,
    //       amount: "",
    //       bankName: this.bankName.name,
    //       bankcode: this.bankName.id,
    //       reference: "",
    //       creditAccountName: this.nameEnquiryResponse.result.accountName,
    //       creditAccountNumber: this.model.accountNumber
    //     });
    //     StoreUtils.dispatch(StoreUtils.actions.beneficiary.beneficiaryCreate, {
    //       beneficiaryName : this.bankName.name,
    //       beneficiaryCustomerId : this.userInfo.customerId,
    //       beneficiaryAccountNumber : this.model.accountNumber,
    //       beneficiaryBankCode : this.bankName.id,
    //       beneficiaryBankName : this.nameEnquiryResponse.result.accountName
    //     });
    //     RouterUtils.navigateTo(RouterUtils.routes.dashboard.transferAmount.name);
    //     this.nameEnquiryResponse.result.accountName = null;
    //     this.$refs.form.reset();
    //   } else {
    //     StoreUtils.commit(StoreUtils.mutations.fundTransfer.updateTransferFormData, {
    //       email: this.userInfo.customerEmail,
    //       amount: "",
    //       bankName: this.bankName.name,
    //       bankcode: this.bankName.id,
    //       reference: "",
    //       creditAccountName: this.nameEnquiryResponse.result.accountName,
    //       creditAccountNumber: this.model.accountNumber
    //     });
    //     RouterUtils.navigateTo(RouterUtils.routes.dashboard.transferAmount.name);
    //     this.nameEnquiryResponse.result.accountName = null;
    //     this.$refs.form.reset();
    //   }
    //
    // },

    // validatePassword() {
    //   this.passwordErrors = [];
    //
    //   if (this.model.accountNumber  === '') {
    //     this.passwordErrors.push("Account Number is required.");
    //   }
    //
    //   if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!&])[A-Za-z\d@$!&]{8,15}$/.test(this.model.accountNumber)) {
    //     this.passwordErrors.push("Password must meet the following criteria:");
    //     this.passwordErrors.push("- It should be alphanumeric.");
    //     this.passwordErrors.push("- The first letter should be capitalized.");
    //     this.passwordErrors.push("- It must contain a special character (@, $, !, & etc).");
    //     this.passwordErrors.push("- It should be at least 8 characters long.");
    //   }
    //
    // },

    // validatePassword() {
    //   this.passwordErrors = [];
    //
    //   if (this.model.accountNumber === '') {
    //     this.passwordErrors.push("Account Number is required.");
    //   }
    //
    //   if (this.model.accountNumber.length !== 10) {
    //     this.passwordErrors.push("Account Number must be exactly 10 characters.");
    //   }
    // }


  },
  created() {
    // StoreUtils.rootGetters(StoreUtils.getters.transaction.getGetBanks);
  },

  mounted() {
    // StoreUtils.dispatch(StoreUtils.actions.transaction.fetchGetBanks);
  },
}
</script>

<style scoped>
h3 {margin: 40px 0 0; }
ul {list-style-type: none; padding: 0; }
li {display: inline-block; margin: 0 10px; }
input[type="checkbox"] {
  position: relative;
  width: 60px;
  height: 30px;
  -webkit-appearance: none;
  appearance: none;
  background: red;
  outline: none;
  border-radius: 2rem;
  cursor: pointer;
}

input[type="checkbox"]::before {
  content: "";
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.5s;
}

input[type="checkbox"]:checked::before {
  transform: translateX(100%);
  background: #fff;
}

input[type="checkbox"]:checked {
  background: #12b76a;
}

.error-messages {
  color: #db657b;
  font-size: 12px;
  text-decoration: none;
  list-style: none;
}
.w-button {
  display: inline-block;
  padding: 9px 15px;
  background-color: #3898EC;
  color: white;
  border: 0;
  line-height: inherit;
  text-decoration: none;
  cursor: pointer;
  border-radius: 0;
}

input.w-button {
  -webkit-appearance: button;
}

.max-width-full {
  position: static;
  top: 89%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  max-width: none;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.button {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 60px;
  padding: 10px 1.5rem;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 8px;
  background-color: #101828;
  font-family: Satoshi, sans-serif;
  color: #fff;
  font-weight: 500;
  text-align: center;
}
</style>