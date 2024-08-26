<template>
  <section id="BalanceCard" class="balance-wrapper margin-top margin-large">
    <div class="balance heading-style-h2" >&#36;{{formatNumber(this.contacts.Balance1 + this.contacts.Balance2 - this.contacts.WalletBalance)}}.00</div>
<!--    <div class="balance heading-style-h2" v-else-if="this.accountState === 'NGN'">&#8358;0</div>-->
<!--    <div class="balance heading-style-h2" >&#8358;0.00</div>-->

<!--    <a data-w-id="b4a46994-6187-287f-f799-9f553a35b0df" v-if="this.accountState === 'CAD'" href="#" @click="showDialog" class="link-block w-inline-block">-->
<!--      <img src="@/assets/images/CAD.svg" loading="lazy" width="16" alt="">-->
<!--      <div class="dropdown-text dashboard text-size-small text-weight-medium">CAD Account</div>-->
<!--      <img src="@/assets/images/arrow-down.svg" loading="lazy" width="16" alt="">-->
<!--    </a>-->

<!--    <a data-w-id="b4a46994-6187-287f-f799-9f553a35b0df" v-else-if="this.accountState === 'NGN'" href="#" @click="showDialog" class="link-block w-inline-block">-->
<!--      <img src="@/assets/images/Nigeria-NG.svg" loading="lazy" width="16" alt="">-->
<!--      <div class="dropdown-text dashboard text-size-small text-weight-medium">NGN Account</div>-->
<!--      <img src="@/assets/images/arrow-down.svg" loading="lazy" width="16" alt="">-->
<!--    </a>-->

    <a data-w-id="b4a46994-6187-287f-f799-9f553a35b0df" href="#" @click="showDialog" class="link-block w-inline-block">
      <img src="@/assets/images/checked.svg" loading="lazy" width="16" alt="">
      <div v-show="this.userData === 'account1'" class="dropdown-text dashboard text-size-small text-weight-medium">Hi {{this.contacts.AccountName1}}</div>
      <div v-show="this.userData === 'account2'" class="dropdown-text dashboard text-size-small text-weight-medium">Hi {{this.contacts.AccountName2}}</div>
      <img src="@/assets/images/arrow-down.svg" loading="lazy" width="16" alt="">
    </a>


    <BalanceModalCard @close="hideDialog" v-if="dialogIsVisible"/>

  </section>
</template>

<script>
import BalanceModalCard from "@/components/Modals/BalanceModalCard.vue";
import {collection, getDocs} from "firebase/firestore";
import {db} from "@/firebase/config";

export default {
  name: "BalanceCard",
  components: {BalanceModalCard},
  data() {
    return {
      dialogIsVisible: false,
      userData2: "account2",
      userData3: "account1",
      contacts: [],
    };
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

  computed: {
    userData() {
      return this.$store.getters.getUserData;
    },
  },

  methods: {
    hideDialog() {
      this.dialogIsVisible = false;
    },
    showDialog() {
      this.dialogIsVisible = true;
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
  },

}
</script>

<style scoped>
h3 {margin: 40px 0 0; }
ul {list-style-type: none; padding: 0; }
li {display: inline-block; margin: 0 10px; }
</style>