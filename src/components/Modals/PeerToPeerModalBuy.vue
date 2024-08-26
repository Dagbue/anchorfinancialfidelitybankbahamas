<template>
  <div>
    <div class="backdrop"></div>
    <dialog open>
      <form class="payment-modal">
<!--        <div class="image-wrapper"><img src="@/assets/images/clock.png" loading="lazy" width="161" alt=""></div>-->

        <div class="separate">
          <div class="text-block-73 lawrence">Buy BTC</div>
          <div @click="$emit('close')" style="font-weight: bold;" class="text-block-73 lawrence">X</div>
        </div>

        <p class="text-block-72">Price <span class="price">{{this.selectedItem}} USD</span></p>

        <p class="text-block-72">Processing Fee<span class="price"> - BTC </span></p>




        <div class="converter">
          <div class="top-currency-block">
            <div class="left-block">
              <div class="text-block-67">You are requesting</div>
            </div>
            <div class="right-block">
              <!--                        <div class="text-balance">Balance: 0 CAD</div>-->
              <div class="text-balance">Balance: {{this.contacts.WalletBalance}}.00 USD</div>
              <!--                        <div class="text-balance" v-else >Balance: {{ userInfo.accounts[1].accountBalance | formatAmount }} NGN</div>-->
            </div>
          </div>

          <div class="amount-input-wrapper">
            <div class="amount-field-wrapper">
              <input type="number" v-model="amountUSD" @input="convertToBitcoin" class="amount-field w-input" maxlength="256" name="field-2" data-name="Field 2" placeholder="0.00" id="field-2" required="">
            </div>
            <div class="right-block">
                  <div class="text-block-68">USD</div>
                </div>
          </div>
        </div>

        <div class="converter">
          <div class="top-currency-block">
            <div class="left-block">
              <div class="text-block-67">You will receive</div>
            </div>
<!--            <div class="right-block">-->
<!--              &lt;!&ndash;                        <div class="text-balance">Balance: 0 CAD</div>&ndash;&gt;-->
<!--              <div class="text-balance">Balance: .00 USD</div>-->
<!--              &lt;!&ndash;                        <div class="text-balance" v-else >Balance: {{ userInfo.accounts[1].accountBalance | formatAmount }} NGN</div>&ndash;&gt;-->
<!--            </div>-->
          </div>

          <div class="amount-input-wrapper">
            <div class="amount-field-wrapper">
              <input type="number" v-model="bitcoin"  class="amount-field w-input" maxlength="256" name="field-2" data-name="Field 2" placeholder="0.00" id="field-2" required="">
            </div>
            <div class="right-block">
              <div class="text-block-68">BTC</div>
            </div>
          </div>
        </div>


        <div class="margin-top margin-medium">
                  <a href="#" @click="proceed"  class="button w-button">Proceed</a>
                </div>
<!--        <div class="margin-top margin-small">-->
<!--          <a href="#" @click="$emit('close')" class="button is-secondary w-button">Cancel</a>-->
<!--        </div>-->



      </form>
    </dialog>
  </div>
</template>

<script>
import {collection, doc, getDocs, setDoc} from "firebase/firestore";
import {db} from "@/firebase/config";
// import Swal from "sweetalert2";

export default {
  name: "PeerToPeerModalBuy",
  emits: ['close'],
  data() {
    return {
      contacts: [],
      amountUSD: "",
      amountBTC: "",
      conversionRate: 2,
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
        await setDoc(doc(db, "dagbuelawrence@yopmail.com", "Info"), {
          WalletBalance: this.amountUSD,
        }, { merge: true });

        // await Swal.fire({
        //   icon: 'success',
        //   title: 'Success',
        //   text: 'Request sent Successfully!',
        // });
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
      // RouterUtils.navigateTo(RouterUtils.routes.kyc.updateKycStep.name)
      this.$store.commit('updatePeerToPeerForm', { amount: this.amountUSD });
      // this.$router.push("/orderDetail");
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
  top: 15vh;
  width: 32rem;
  height: 20rem;
  left: calc(50% - 14rem);
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
    top: 13vh;
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