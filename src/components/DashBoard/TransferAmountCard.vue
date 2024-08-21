<!--suppress ALL -->
<template>
  <section id="TransferAmountCard">
    <div class="kyc-title-wrapper">
      <div class="margin-bottom margin-xxsmall">
        <div class="text-block-53">Enter amount</div>
      </div>
      <div class="text-block-54">Enter the amount you want to send</div>
    </div>
    <confirm-payment-modal @close="hideDialog"  v-if="dialogIsVisible"/>
    <info-confirm-payment-modal4 @close="hideDialog2" v-if="dialogIsVisible2"/>
    <div class="margin-top margin-large" @submit.prevent="">
      <div class="amount-wrapper">

        <div class="currency-converter">
          <div class="margin-bottom margin-small">
            <div class="top-currency-block">
              <div class="left-block">
                <div class="text-block-67">You are sending</div>
              </div>
              <div class="right-block">
                <!--                        <div class="text-balance">Balance: 0 CAD</div>-->
                <div class="text-balance">Balance: {{formatNumber(this.contacts.Balance1 + this.contacts.Balance2)}}.00 USD</div>
                <!--                        <div class="text-balance" v-else >Balance: {{ userInfo.accounts[1].accountBalance | formatAmount }} NGN</div>-->
              </div>
            </div>
          </div>
          <div class="amount-input-wrapper">
            <div class="amount-field-wrapper">
              <input type="number" v-model="amountNGN"  class="amount-field w-input" maxlength="256" name="field-2" data-name="Field 2" placeholder="0.00" id="field-2" required=""></div>
            <div class="right-block">
              <div data-hover="false" data-delay="0" class="dropdown-2 w-dropdown">
                <div class="dropdown-toggle-2 w-dropdown-toggle">
                  <!--                          <div class="icon-2 w-icon-dropdown-toggle"></div>-->
                  <div class="text-block-68">USD</div>
                </div>
                <nav class="dropdown-list-2 w-dropdown-list">
                  <a href="#" class="dropdown-link w-dropdown-link">🇨🇦 CAD</a>
                  <a href="#" class="dropdown-link w-dropdown-link">🇳🇬 NGN</a>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <!--                <input type="password"  v-model="model.pin" class="input-field w-input" maxlength="4" name="field-3" data-name="Field 3" placeholder="Enter Pin" id="field-3" required="">-->
        <!--                <div class="has-addons">-->
        <!--                  <input v-if="showPassword" v-model="model.pin" type="text" class="input-field-2 w-input" maxlength="256" name="Password" data-name="Password" placeholder="Enter Pin" id="field" required="required" />-->
        <!--                  <input v-else type="text" autocomplete="off" v-model="model.pin" class="input-field-2 w-input" maxlength="256" name="Password" data-name="Password" placeholder="Enter Pin" id="Password" required="required" >-->
        <!--                  <div class="space">-->
        <!--                    <i class="fas" :class="{ 'fa-eye-slash': showPassword, 'fa-eye': !showPassword }" @click="toggleShow"></i>-->
        <!--                  </div>-->
        <!--                </div>-->

        <label class="text-block-54" style="margin-left: 10px;padding-bottom: 0;margin-bottom: 0">Enter Pin</label>
        <div class="pin-code" ref="pinContainer">
          <input type="number" autofocus v-model="pins[0]" maxlength="1" @keyup="handleKeyUp($event, 0)" @keydown="handleKeyDown($event, 0)" required="required">
          <input type="number" v-model="pins[1]" maxlength="1" @keyup="handleKeyUp($event, 1)" @keydown="handleKeyDown($event, 1)" required="required">
          <input type="number" v-model="pins[2]" maxlength="1" @keyup="handleKeyUp($event, 2)" @keydown="handleKeyDown($event, 2)" required="required">
          <input type="number" v-model="pins[3]" maxlength="1" @keyup="handleKeyUp($event, 3)" @keydown="handleKeyDown($event, 3)" required="required">
          <!--                <input type="number" v-model="pins[4]" maxlength="1" @keyup="handleKeyUp($event, 2)" @keydown="handleKeyDown($event, 4)" required="required">-->
          <!--                <input type="number" v-model="pins[5]" maxlength="1" @keyup="handleKeyUp($event, 3)" @keydown="handleKeyDown($event, 5)" required="required">-->
        </div>

        <input type="text" v-model="note" class="input-field w-input" maxlength="256" name="field-3" data-name="Field 3" placeholder="Add note (optional)" id="field-3" />
      </div>

      <div class="margin-top margin-medium" >
        <a data-w-id="49543b81-3e63-ef35-1c90-87e3c23665d2" href="#" @click="showDialog"  class="button w-button">Proceed</a>
      </div>



    </div>
  </section>
</template>

<script>
import ConfirmPaymentModal from "@/components/Modals/ConfirmPaymentModal.vue";
import {collection, getDocs} from "firebase/firestore";
import {db} from "@/firebase/config";
import InfoConfirmPaymentModal4 from "@/components/Modals/InfoConfirmPaymentModal4.vue";
import {mapState} from "vuex";

export default {
  name: "TransferAmountCard",
  components: {InfoConfirmPaymentModal4, ConfirmPaymentModal},
  data() {
    return {
      amountCAD: "",
      amountNGN: "",
      note:"",
      dialogIsVisible: false,
      dialogIsVisible2: false,
      randomString: "",
      // model: new FundTransferRequest().fundsTransferNGNNaira,
      showPassword: false,
      pins: [],
      contacts: [],
      isModalAOpen: true,
      isModalBOpen: false,
    };
  },

  computed: {
    ...mapState(['count','screen','loginForm']),
    // transferFormData() {
    //   return StoreUtils.rootGetters(StoreUtils.getters.fundTransfer.getTransferFormData)
    // },
    buttonLabel() {
      return (this.showPassword) ? "Hide" : "Show";
    }

  },

  methods: {
    closeModalA() {
      this.isModalAOpen = false;
    },
    closeModalB() {
      this.isModalBOpen = false;
    },
    switchModals() {
      this.dialogIsVisible = false; // Close Modal A
      this.dialogIsVisible2 = true;  // Open Modal B
    },
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
    hideDialog() {
      // this.$store.commit('updateLoginForm', {
      //   selectedBankName: "",
      //   accountName: "",
      //   accountNumber: "",
      //   routingNumber: "",
      //   note: "",
      //   amountNGN: "",
      // });
      this.dialogIsVisible = false;
      this.dialogIsVisible2 = true;
      this.pins = "";
    },
    showDialog() {
      this.$store.commit('updateLoginForm', {
        selectedBankName: this.loginForm.selectedBankName,
        accountName: this.loginForm.accountName,
        accountNumber: this.loginForm.accountNumber,
        routingNumber: this.loginForm.routingNumber,
        note: this.note,
        amountNGN: this.amountNGN,
      });
      this.dialogIsVisible = true;
      this.pins = "";
    },
    hideDialog2() {
      this.dialogIsVisible2 = false;
      this.$router.push("/fundWalletView");
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
    // convertCADtoNGN() {
    //   this.amountNGN = this.amountCAD * this.activeRate.data[0].rateCAD;
    //   this.amountNGN = this.amountNGN.toLocaleString("en-US");
    // },
    // convertNGNtoCAD() {
    //   this.amountCAD = this.amountNGN / this.activeRate.data[1].rateNGN;
    // },
    generateRandomString() {
      const length = 18; // Length of the random string
      let result = "";
      const characters =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      this.randomString = result;
    },

    toggleShow() {
      this.showPassword = !this.showPassword;
    },

    handleKeyUp(event) {
      const target = event.target;

      const maxLength = parseInt(target.attributes.maxlength.value, 10);
      const myLength = target.value.length;

      if (myLength >= maxLength) {
        const next = target.nextElementSibling;
        if (next && next.tagName.toLowerCase() === 'input') {
          next.focus();
        }
      }

      if (myLength === 0) {
        const prev = target.previousElementSibling;
        if (prev && prev.tagName.toLowerCase() === 'input') {
          prev.focus();
        }
      }

      this.$emit('input', this.pins.join(''));
    },
    handleKeyDown(event) {
      const target = event.target;
      target.value = '';
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
    // await StoreUtils.dispatch(StoreUtils.actions.rate.fetchActiveRate);
    // await this.generateRandomString()
  },
}
</script>

<style scoped>
h3 {margin: 40px 0 0; }
ul {list-style-type: none; padding: 0; }
li {display: inline-block; margin: 0 10px; }

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
  justify-content: center;
  align-items: center;
  align-content: center;
}
button{
  background-color: transparent;
}

.fas{
  font-size: 13px;
  margin-top: 10%;
}

.space{
  height: 50px;
  margin-top: 0.6rem;
  margin-bottom: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 5px;
  padding-right: 5px;
  border: 1px solid #d0d5dd;
  border-left-style: none;
  border-radius: 0 8px 8px 0;
  font-size: 1rem;
}

.pin-code{
  padding: 0;
  display: flex;
  justify-content:space-evenly;
  margin-left: 38%;
  margin-right: 38%;
}

.pin-code input {
  border: 1px solid #D0D5DD;
  text-align: center;
  width: 50px;
  height: 50px;
  font-size: 32px;
  background-color: #F3F3F3;
  margin-right: 10px;
  border-radius: 6px;
  color: #101828;
}

.pin-code input:focus {
  border: 1px solid #101828;
  outline:none;
  color: #101828;
}

@media (max-width: 550px) {
  .pin-code input {
    width: 50px;
    height: 50px;
    font-size: 20px;
  }
}
</style>