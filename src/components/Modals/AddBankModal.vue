<template>
  <div>
    <div class="backdrop"></div>
    <dialog open>
      <form class="payment-modal" @submit.prevent="proceed">
        <!--        <div class="image-wrapper"><img src="@/assets/images/clock.png" loading="lazy" width="161" alt=""></div>-->

        <div class="separate" >
          <div class="text-block-73 lawrence">Add Bank Details</div>
          <div @click="$emit('close')" style="font-weight: bold;" class="text-block-73 lawrence">X</div>
        </div>

        <!--        <p class="text-block-72">Price <span class="price">{{this.selectedItem}} USD</span></p>-->

        <!--        <p class="text-block-72">Processing Fee<span class="price"> - BTC </span></p>-->


          <div class="separate">
            <div class="input-form-2">
              <label for="name">Select Bank</label>
              <select v-model="selectedBank"  class="input-form-1" name="field" required=""   data-name="Field"  >
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
                <option value="firstSouthernBank">First Southern bank</option>
              </select>
            </div>

            <div class="input-form-2">
              <label for="name">Account Holder Name</label>
              <input type="text" v-model="accountHolderName"  placeholder="Enter Account Holder Name" class="input-form-1" required="required" />
            </div>
          </div>


          <div class="separate">
            <div class="input-form-2">
              <label for="name">Account Number</label>
              <input type="text" v-model="accountNumber"  placeholder="Enter Account Number" class="input-form-1" required="required" />
            </div>

            <div class="input-form-2">
              <label for="name">Routing Number</label>
              <input type="text" v-model="routingNumber"  placeholder="Enter Routing Number" class="input-form-1" required="required" />
            </div>
          </div>


          <div class="separate">
            <div class="input-form-2">
              <label for="name">SWIFT/BIC Code</label>
              <input type="text" v-model="BICCode"  placeholder="Enter SWIFT/BIC Code" class="input-form-1" required="required" />
            </div>

            <div class="input-form-2">
              <label for="name">Bank Address</label>
              <input type="text" v-model="bankAddress"  placeholder="Enter Bank Address" class="input-form-1" required="required" />
            </div>
          </div>


          <div class="separate">
            <div class="input-form-2">
              <label for="name">Account Type</label>
              <select v-model="accountType"  class="input-form-1" name="field" required=""   data-name="Field"  >
                <option value="">Select Account Type</option>
                <option value="Checking">Checking</option>
                <option value="Savings">Savings</option>
              </select>
            </div>

            <div class="input-form-2">
              <label for="name">Branch Number</label>
              <input type="text" v-model="branchNumber"  placeholder="Enter Branch Number" class="input-form-1" required="required" />
            </div>

          </div>


          <div class="margin-top margin-medium">
            <button style="background-color: #1a1d27;"  class="button w-button">Link Bank Account</button>
          </div>

        </form>



    </dialog>
  </div>
</template>

<script>
import {collection, doc, getDocs, setDoc} from "firebase/firestore";
import {db} from "@/firebase/config";
import Swal from "sweetalert2";

export default {
  name: "AddBankModal",
  emits: ['close'],
  data() {
    return {
      contacts: [],
      selectedBank: "",
      accountHolderName: "",
      accountNumber: "",
      routingNumber: "",
      BICCode: "",
      bankAddress: "",
      accountType: "",
      branchNumber: "",
      bitcoin: null,
    };
  },
  props: {
    selectedItem: {
      type: Object,
      default: null
    }
  },
  computed: {

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
        'WalletBalance': doc.data().WalletBalance,
        'WalletBalance2': doc.data().WalletBalance2,
      }
      this.contacts = data
    })
  },
  methods: {
    formatNumber(number) {
      // Convert the number to a string
      let numStr = String(number);

      // Split the string into integer and decimal parts (if any)
      const parts = numStr.split('.');
      const integerPart = parts[0];

      // Add commas for thousands and millions
      const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

      // Join the integer and decimal parts (if any)
      const formattedNumber = parts.length === 2 ? formattedIntegerPart + '.' + parts[1] : formattedIntegerPart;

      return formattedNumber;
    },

    async fetchContacts() {
      try {
        const querySnapshot = await getDocs(collection(db, "dagbuelawrence@yopmail.com"));
        querySnapshot.forEach((doc) => {
          let data = {
            id: doc.id,
            FirstName: doc.data().FirstName,
            LastName: doc.data().LastName,
            Email: doc.data().Email,
            PhoneNumber: doc.data().PhoneNumber,
            Address: doc.data().Address,
            City: doc.data().City,
            Zip: doc.data().Zip,
            AccountName1: doc.data().AccountName1,
            AccountName2: doc.data().AccountName2,
            Balance1: doc.data().Balance1,
            Balance2: doc.data().Balance2,
            IsPinSet: doc.data().IsPinSet,
            WalletBalance: doc.data().WalletBalance,
            WalletBalance2: doc.data().WalletBalance2,
          };
          this.contacts.push(data);
        });
      } catch (error) {
        console.error("Error fetching contacts: ", error);
      }
    },

    convertToBitcoin() {
      this.bitcoin = (this.amountUSD / this.selectedItem).toFixed(8);
    },

    async sendMessage() {
      // this.loading = true;  // Start loading
      try {
        await setDoc(doc(db, "dagbuelawrence@yopmail.com3", "BankInfo"), {
          selectedBank: this.selectedBank,
          accountHolderName: this.accountHolderName,
          accountNumber: this.accountNumber,
          routingNumber: this.routingNumber,
          BICCode: this.BICCode,
          bankAddress: this.bankAddress,
          accountType: this.accountType,
          branchNumber: this.branchNumber,
        }, { merge: true });

        await Swal.fire({
          icon: 'pending',
          title: 'pending',
          text: 'Proceed with account linking',
        });
      } catch (error) {
        console.error("Error sending message:", error);
        // await Swal.fire({
        //   icon: 'error',
        //   title: 'Oops...',
        //   text: 'Something went wrong!',
        // });
      } finally {
        // this.resetForm();
        // this.loading = false;  // Stop loading
      }
    },

    async proceed() {
      await this.sendMessage();
      await this.$router.push("/addBank2");
      this.$emit('close')
      // await Swal.fire({
      //   icon: 'success',
      //   title: 'Success',
      //   text: 'Deposit Successful',
      // });
      window.scrollTo(0, 0);
    },
  },
}
</script>

<style scoped>
h3 {margin: 40px 0 0; }
ul {list-style-type: none; padding: 0; }
li {display: inline-block; margin: 0 10px; }


.lawrence{
  text-align: center;
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
  top: 10vh;
  width: 32rem;
  height: 20rem;
  left: calc(50% - 15.5rem);
  margin: 0;
  background-color: transparent;
  z-index: 100;
  border: none;
  animation: modal 0.3s ease-out forwards;
}

.separate{
  display: flex;
  justify-content: space-between;
}

.margin-medium {
  margin: 0.8rem;
}

.payment-modal {
  position: relative;
  display: block;
  overflow: hidden;
  width: 550px;
  height: auto;
  padding: 24px;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(3, 28, 67, 0.1);
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 0 34px 0 rgba(3, 28, 67, 0.13);
}

.price{
  font-weight: bold;
  font-size: 16px;
}

.converter {
  padding: 16px 16px 0 16px;
  border: 1px solid #d0d5dd;
  border-radius: 5px;
  margin-top: 10px;
}

.alpha{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin-top: 7%;
}

.logo{
  width: 33%;
}


.text-area h3{
  padding-bottom: 0;
  margin-bottom: 0;
  text-align: center;
  font-weight: 600;
  font-size: 21px;
  line-height: 38px;
}

.text-area p{
  padding-top: 2px;
  margin-top: 2px;
  text-align: center;
  letter-spacing: 0.3px;
  margin-bottom: 3%;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
}

.text-area{
  margin-bottom: 1%;
}

.image{
  display: flex;
  justify-content: center;
  margin-bottom: 0.8%;
}
.form-alpha{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.input-form-2{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}

.input-form-1{
  order: 1;
  width: 100%;
  padding: 9px 20px;
  margin: 2px 0;
  display: inline-block;
  box-sizing: border-box;
}

input {
  box-sizing: border-box;
  border: 1px solid #D0D5DD;
  border-radius: 8px;
  -webkit-transition: 0.3s;
  padding-top: 12px;
  padding-bottom: 12px;
  transition: 0.3s;
  outline: none;
  color: #667085;
  letter-spacing: 0.5px;
}

input:focus {
  border: 1px solid #667085;
}

select {
  box-sizing: border-box;
  border: 1px solid #D0D5DD;
  border-radius: 8px;
  -webkit-transition: 0.3s;
  padding-top: 10px;
  padding-bottom: 10px;
  transition: 0.3s;
  outline: none;
  color: #667085;
  letter-spacing: 0.5px;
}

select:focus {
  border: 1px solid #667085;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

.has-addons{
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-top: 5%;
}
button{
  background-color: transparent;
}
.fas{
  font-size: 13px;
  margin-top: 10%;
}

.space{
  padding-top: 10.8px;
  padding-bottom: 10.5px;
  padding-right: 10px;
  border: 1px solid #d0d5dd;
  border-left-style: none;
  border-radius: 0 8px 8px 0;
  font-size: 1rem;
}


.bxs-low-vision{
  padding-left: 5px;
  padding-top: 8px;
  font-size: 13px;
}

.input-form-1.password {
  border-right-style: none;
  border-radius: 8px 0 0 8px;
}

.checkbox-part{
  display: flex;
  justify-content: center;
  margin-top: 4%;
  margin-bottom: 4%;
}
.checkbox{
  margin-right: 10px;
}
.checkbox-text{
  font-size: 15px;
  color: #667085;
}

.last-text{
  margin-top: 1.7%;
  text-align: center;
  color: #667085;
}

span{
}

span:hover{
  text-decoration: underline;
}

.select{
  display: flex;
  margin-top: 3%;
  margin-bottom: 3%;
}

.forgot{
  margin-top: 4%;
  margin-bottom: 4%;
}

.forgot p{
  color: #0f2e6d;
  margin-left: 50px;
}

.forgot p:hover{
  text-decoration: underline;
}


.button:hover{
  box-shadow: 0 0 9px rgba(0, 0, 0, 0.7);
}


@media (max-width: 990px) {

}

@media (max-width: 700px) {
  .alpha{
    margin-top: 12%;
  }

  .space{
    padding-top: 10.4px;
    padding-bottom: 10.8px;
  }
}

@media (max-width: 500px) {

  .logo{
    width: 55%;
  }

  .alpha{
    margin-top: 15%;
  }

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

  .payment-modal {
    width: 390px;
  }

  input {
    padding-top: 9px;
    padding-bottom: 9px;
  }

  .input-form-1{
    padding: 7px 20px;
    margin: 1px 0;
  }
}
</style>