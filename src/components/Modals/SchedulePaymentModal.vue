<template>
  <div>
    <div class="backdrop"></div>
    <dialog open>
      <form class="payment-modal">
        <!--        <div class="image-wrapper"><img src="@/assets/images/clock.png" loading="lazy" width="161" alt=""></div>-->

        <div class="separate">
          <div class="text-block-73 lawrence">Schedule Payments</div>
          <div @click="$emit('close')" style="font-weight: bold;" class="text-block-73 lawrence">X</div>
        </div>

<!--                <p class="text-block-72">Name <span class="price">{{this.selectedItem}} USD</span></p>-->

<!--                <p class="text-block-72">Account Number<span class="price"> - BTC </span></p>-->



        <form @submit.prevent="proceed">

          <div class="separate">
            <div class="input-form-2">
              <label for="name">Payee Name</label>
              <input type="text" v-model="payeeName"  placeholder="Enter Payee Name" class="input-form-1" required="required" />
            </div>

            <div class="input-form-2">
              <label for="name">Payee Account Number</label>
              <input type="number" v-model="payeeAccountNumber"  placeholder="Enter Payee Account Number" class="input-form-1" required="required" />
            </div>
          </div>

          <div class="separate">
            <div class="input-form-2">
              <label for="name">Payee Address</label>
              <input type="text" v-model="payeeAddress"  placeholder="Enter Payee Address" class="input-form-1" required="required" />
            </div>

            <div class="input-form-2">
              <label for="name">Payee Phone Number</label>
              <input type="number" v-model="payeePhoneNumber"  placeholder="Enter Payee Phone Number" class="input-form-1" required="required" />
            </div>
          </div>

          <div class="separate">
            <div class="input-form-2">
              <label for="name">Amount</label>
              <input type="number" v-model="amount"  placeholder="Enter Amount" class="input-form-1" required="required" />
            </div>

            <div class="input-form-2">
              <label for="name">Payment Frequency</label>
              <select class="input-form-1" v-model="paymentFrequency" required="required">
                <option selected disabled value="">Payment Frequency</option>
                <option :value="null" disabled>Payment Frequency</option>
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="Quarterly">Quarterly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>
          </div>

          <div class="separate">
            <div class="input-form-2">
              <label for="name">Funding Account</label>
              <select class="input-form-1" v-model="fundingAccount" required="required">
                <option selected disabled value="">Funding Account</option>
                <option :value="null" disabled>Funding Account</option>
                <option value="likedBankAccount">Linked Bank Account</option>
                <option value="linkedBankCard">Linked Card</option>
              </select>
            </div>

            <div class="input-form-2">
              <label for="name">Transaction Type</label>
              <select class="input-form-1" v-model="transactionType" required="required">
                <option selected disabled value="">Transaction Type</option>
                <option :value="null" disabled>Transaction Type</option>
                <option value="Daily">Deposit</option>
                <option value="Weekly">Withdrawal</option>
              </select>
            </div>
          </div>

          <div class="separate">
            <div class="input-form-2">
              <label for="name">Payment Start Date</label>
              <input type="date" v-model="startDate"  placeholder="Enter Amount" class="input-form-1" required="required" />
            </div>

            <div class="input-form-2">
              <label for="name">Payment End Date</label>
              <input type="date"  v-model="endDate"  placeholder="Enter Payment Frequency" class="input-form-1" required="required" />
            </div>
          </div>

          <div class="input-form-2">
            <label for="name">Notification Preferences</label>
            <select class="input-form-1" v-model="notificationPreferences" required="required">
              <option selected disabled value="">Notification Preferences</option>
              <option :value="null" disabled>Notification Preferences</option>
              <option value="Email">Email</option>
              <option value="phoneNumber">Phone Number</option>
            </select>
          </div>

          <div class="margin-top margin-medium">
            <button style="background-color: #101828;"  class="button w-button">Proceed</button>
          </div>

        </form>



      </form>
    </dialog>
  </div>
</template>

<script>
import {collection, doc, getDocs, setDoc} from "firebase/firestore";
import {db, database} from "@/firebase/config";
import Swal from "sweetalert2";
import {  ref, set, push, serverTimestamp } from "firebase/database";


export default {
  name: "SchedulePaymentModal",
  emits: ['close'],
  data() {
    return {
      contacts: [],
      payeeName: "",
      payeeAccountNumber: "",
      payeeAddress: "",
      payeePhoneNumber: "",
      amount: "",
      paymentFrequency: "",
      fundingAccount: "",
      transactionType: "",
      startDate: "",
      endDate: "",
      notificationPreferences: "",

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
    sanitizePath(path) {
      return path.replace(/\./g, '_dot_')
          .replace(/#/g, '_hash_')
          .replace(/\$/g, '_dollar_')
          .replace(/\[/g, '_lbracket_')
          .replace(/\]/g, '_rbracket_');
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
        const sanitizedEmail = this.sanitizePath("dagbuelawrence@yopmail.com4");

        await setDoc(doc(db, sanitizedEmail, "schedulePayment"), {
          payeeName: this.payeeName,
          payeeAccountNumber: this.payeeAccountNumber,
          payeeAddress: this.payeeAddress,
          payeePhoneNumber: this.payeePhoneNumber,
          amount: this.amount,
          paymentFrequency: this.paymentFrequency,
          fundingAccount: this.fundingAccount,
          transactionType: this.transactionType,
          startDate: this.startDate,
          endDate: this.endDate,
          notificationPreferences: this.notificationPreferences,
        }, { merge: true });
        const depositRef = ref(database, sanitizedEmail + "Transactions");
        const newDeposit = push(depositRef);
        await set(newDeposit, {
          payeeName: this.payeeName,
          payeeAccountNumber: this.payeeAccountNumber,
          payeeAddress: this.payeeAddress,
          payeePhoneNumber: this.payeePhoneNumber,
          amount: this.amount,
          paymentFrequency: this.paymentFrequency,
          fundingAccount: this.fundingAccount,
          transactionType: this.transactionType,
          startDate: this.startDate,
          endDate: this.endDate,
          notificationPreferences: this.notificationPreferences,
          createdAt: serverTimestamp(),
        })

        // await Swal.fire({
        //   icon: 'success',
        //   title: 'Success',
        //   text: 'Payment Scheduled',
        // });
      } catch (error) {
        console.error("Error sending message:", error);
        await Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      } finally {
        // this.resetForm();
        // this.loading = false;  // Stop loading
      }
    },

    async proceed() {
      this.$store.commit('updatePeerToPeerForm', { amount: this.amount });
      await this.sendMessage();
      await this.$emit('close')
      // this.$router.push("/billPayView")
      window.scrollTo(0, 0);
    },
  },
}
</script>

<style scoped>
h3 {margin: 40px 0 0; }
ul {list-style-type: none; padding: 0; }
li {display: inline-block; margin: 0 10px; }

.margin-medium {
  margin: 0.8rem;
}

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
  top: 5vh;
  width: 32rem;
  height: 20rem;
  left: calc(50% - 17.5rem);
  margin: 0;
  background-color: transparent;
  z-index: 100;
  border: none;
  animation: modal 0.3s ease-out forwards;
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
  padding: 8px 20px;
  margin: 4px 0;
  display: inline-block;
  box-sizing: border-box;
}

input {
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
    width: 400px;
  }

  input {
    padding-top: 9px;
    padding-bottom: 9px;
  }

  .input-form-1{
    padding: 7px 20px;
    margin: 1px 0;
  }

  input[type=date] {
    width: 90%;
  }

}
</style>