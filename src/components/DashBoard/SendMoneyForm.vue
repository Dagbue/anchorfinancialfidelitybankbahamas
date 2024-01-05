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

        <select id="field" name="field" required=""  data-name="Field" class="input-field select-field w-select" >
          <option value="">Select Bank</option>
          <option value="chase">Chase Bank</option>
          <option value="bofa">Bank of America</option>
          <option value="wellsfargo">Wells Fargo</option>
          <option value="usbank">U.S. Bank</option>
          <option value="bbvacompass">BBVA Compass</option>
          <option value="capitalone">Capital One Bank</option>
          <option value="bankwest">Bank of the West</option>
          <option value="santander">Santander Consumer Bank</option>
          <option value="citibank">Citi Bank</option>
          <option value="huntington">Huntington Bank</option>
          <option value="mtbank">M&T Bank</option>
          <option value="woodforest">Woodforest National Bank</option>
          <option value="citizens">Citizens Bank</option>
          <option value="fifththird">Fifth Third Bank</option>
          <option value="keybank">Key Bank</option>
          <option value="tdbank">TD Bank</option>
          <option value="suntrust">Sun Trust Bank</option>
          <option value="regions">Regions Bank</option>
          <option value="pnc">PNC Bank</option>
          <option value="bbt">BB&T Bank</option>
          <option value="firstnational">First National Bank</option>
          <option value="bmoharris">BMO Harris Bank</option>
          <option value="firstcitizens">First Citizens Bank</option>
          <option value="comerica">Comerica Bank</option>
          <option value="peoplesunited">People's United Bank</option>
          <option value="umpqua">Umpqua Bank</option>
          <option value="ozarks">Bank of the Ozarks</option>
          <option value="hsbc">HSBC</option>
          <option value="unionbank">MUFG Union Bank</option>
          <option value="arvest">Arvest Bank</option>
          <option value="chemical">Chemical Bank</option>
          <option value="tcf">TCF Bank</option>
          <option value="synovus">Synovus Bank</option>
          <option value="bancorpsouth">Bancorp South Bank</option>
          <option value="washingtonfederal">Washington Federal</option>
          <option value="associated">Associated Bank</option>
          <option value="iberiabank">Iberiabank</option>
          <option value="valleynational">Valley National Bank</option>
          <option value="whitney">Whitney Bank</option>
          <option value="trustmark">Trust Mark National Bank</option>
          <option value="greatwestern">Great Western Bank</option>
          <option value="columbiastate">Columbia State Bank</option>
          <option value="centennial">Centennial Bank</option>
          <option value="oldnational">Old National Bank</option>
          <option value="southstate">South State Bank</option>
          <option value="firsttennessee">First Tennessee Bank</option>
          <option value="nbt">NBT Bank</option>
          <option value="renasant">Renasant Bank</option>
          <option value="banner">Banner Bank</option>
          <option value="webster">Webster Bank</option>
          <option value="simmons">Simmons Bank</option>
          <option value="united">United Bank</option>
          <option value="frost">Frost Bank</option>
          <option value="wesbanco">WesBanco Bank</option>
          <option value="commerce">Commerce Bank</option>
          <option value="investors">Investors Bank</option>
          <option value="trustco">TrustCo Bank</option>
          <option value="firstcommonwealth">First Commonwealth Bank</option>
          <option value="sterling">Sterling National Bank</option>
          <option value="carterbank">Carter Bank And Trust</option>
          <option value="firstmidwest">First Midwest Bank</option>
          <option value="firstbank">First Bank</option>
          <option value="parknational">Park National Bank</option>
          <option value="pinnacle">Pinnacle Bank</option>
          <option value="glacier">Glacier Bank</option>
          <option value="fulton">Fulton Bank</option>
          <option value="rabobank">Rabobank</option>
          <option value="zions">Zions Bank</option>
          <option value="firstmerchants">First Merchants Bank</option>
          <option value="eastwest">East West Bank</option>
          <option value="firstinterstate">First Interstate Bank</option>
          <option value="uniontrust">Union Bank and Trust</option>
          <option value="greatsouthern">Great Southern Bank</option>
          <option value="flagstar">Flagstar Bank</option>
          <option value="jpmorganchase">JP Morgan Chase Bank</option>
          <option value="bofa2">Bank of America</option>
          <option value="wellsfargo2">Wells Fargo</option>
          <option value="citibank2">Citi Bank</option>
          <option value="goldmansachs">Goldman Sachs</option>
          <option value="morganstanley">Morgan Stanley</option>
          <option value="bnpparibas">BNP Paribas</option>
          <option value="bbva2">BBVA</option>
          <option value="bny">Bank of New York</option>
          <option value="bmo">Bank of Montreal</option>
          <option value="southsidevirginia">Bank of Southside Virginia</option>
          <option value="clearmountain">Clear Mountain Bank</option>
          <option value="communityoregon">Community Bank Oregon</option>
          <option value="blueharbor">Blue Harbor Bank</option>
          <option value="austincapital">Austin Capital Bank</option>
          <option value="beneficialstate">Beneficial State Bank</option>
          <option value="communityna">Community Bank N.A</option>
          <option value="crossriver">Cross River Bank</option>
          <option value="fairfieldcounty">Fairfield County Bank</option>
          <option value="fnb">FNB Bank</option>
          <option value="firstcommunityalabama">First Community Bank of Central Alabama</option>
          <option value="firstnorthern">First Northern Bank</option>
          <option value="hometown">Home Town Bank</option>
          <option value="patriot">Patriot Bank</option>
          <option value="unitedcommunity">United Community Bank</option>
          <option value="ally">Ally Bank</option>
          <option value="cit">CIT Bank</option>
          <option value="synchrony">Synchrony Bank</option>
          <option value="discover">Discover Bank</option>
          <option value="fnbodirect">FNBO Direct</option>
          <option value="bank5connect">Bank5connect</option>
          <option value="barclays">Barclays</option>
          <option value="everbank">Ever Bank</option>
          <option value="gecapital">GE Capital Bank</option>
          <option value="salliemae">Sallie Mae Bank</option>
          <option value="tiaadirect">TIAA Direct</option>
          <option value="firstinternet">First Internet Bank</option>
          <option value="simple">Simple Bank</option>
          <option value="bankofinternet">Bank of Internet</option>
          <option value="alliant">Alliant Credit Union</option>
          <option value="radius">Radius Bank</option>
          <option value="chime">Chime Bank</option>
          <option value="usaa">USAA</option>
          <option value="fidelity">Fidelity</option>
          <option value="charlesschwab">Charles Schwab Bank</option>
        </select>

        <input   type="text"  class="input-field w-input" maxlength="256" name="field-3" data-name="Field 3" placeholder="Enter account name" id="field-3" required="">


        <input   type="text"  class="input-field w-input" maxlength="256" name="field-3" data-name="Field 3" placeholder="Enter account number" id="field-3" required="">

<!--        <div v-if="passwordErrors.length" class="error-messages">-->
<!--          <ul>-->
<!--            <li v-for="error in passwordErrors" :key="error">{{ error }}</li>-->
<!--          </ul>-->
<!--        </div>-->

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