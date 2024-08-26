<template>
  <section id="InteracFundingCard" class="dashboard-body-wrapper align-center">
    <add-bank-modal @close="hideDialog2" v-if="dialogIsVisible2" />
    <div class="back-button margin-vertical margin-large">
      <router-link to="/billPayView">
        <a class="w-inline-block"><img src="@/assets/images/Navigation-controls.svg" loading="lazy" alt=""></a>
      </router-link>
    </div>
    <h4>Follow the instructions below to Link your Bank to your AFFBB Account </h4>
    <!--    <p class="text-block-51" style="padding-top: 10px">-->
    <!--      Note: With Direct Deposit, payment deposit takes between 2-7 business working days, wire deposit takes 1-3 business-->
    <!--      working days. Direct Deposit early availability depends on timing and manner of payer's payments,-->
    <!--      instructions and fraud prevention restrictions may apply. As such, the availability or timing of early direct-->
    <!--      deposit may vary from pay period to pay period.-->
    <!--    </p>-->
    <div class="margin-top margin-medium">
      <!--            <div class="interac-funding-steps">-->
      <!--              <div class="margin-bottom margin-small">-->
      <!--                <div class="text-block-60">STEP 1</div>-->
      <!--              </div>-->
      <!--              <div class="connected-banks-list">-->
      <!--                <router-link to="/updateKycStep">-->
      <!--                  <a class="interac-card w-inline-block">-->
      <!--                    <div class="setup-title-wrapper"><img src="@/assets/images/bank.svg" loading="lazy" alt="">-->
      <!--                      <div class="setup-title">-->
      <!--                        <div class="text-block-51">Login to your banking app and send money to <strong>deposit@rubies.com</strong></div>-->
      <!--                      </div>-->
      <!--                    </div>-->
      <!--                  </a>-->
      <!--                </router-link>-->
      <!--              </div>-->
      <!--            </div>-->
      <div class="interac-funding-steps">
        <div class="margin-bottom margin-small">
          <div class="text-block-60">STEP 1</div>
        </div>

        <div class="connected-banks-list">
          <a class="interac-card w-inline-block">
            <div class="setup-title-wrapper"><img src="@/assets/images/bank.svg" loading="lazy" alt="">
              <div class="setup-title">
                <div class="text-block-51">Provide your bank account details, such as account number and routing number
                  Etc.
                  <!--                    <strong>payment@rubieswire.com</strong>-->
                </div>
              </div>
            </div>
          </a>
        </div>

      </div>
      <div class="interac-funding-steps">
        <div class="margin-bottom margin-small">
          <div class="text-block-60">STEP 2</div>
        </div>

        <div class="connected-banks-list">
          <a class="interac-card w-inline-block">
            <div class="setup-title-wrapper"><img src="@/assets/images/bank.svg" loading="lazy" alt="">
              <div class="setup-title">
                <div class="text-block-51">Verify your bank account by linking your Online details such as Email/UserName
                  and password.
                  <!--                    <strong>({{userInfo.customerEmail}})</strong>-->
                </div>
              </div>
            </div>
          </a>
        </div>

      </div>
      <div class="interac-funding-steps">
        <div class="margin-bottom margin-small">
          <div class="text-block-60">STEP 3</div>
        </div>

        <div class="connected-banks-list">
          <a class="interac-card w-inline-block">
            <div class="setup-title-wrapper"><img src="@/assets/images/bank.svg" loading="lazy" alt="">
              <div class="setup-title">
                <div class="text-block-51">Make sure you are filling the forms with the correct details.
                  Click the proceed button below to begin
                  <!--                    <strong>({{userInfo.customerEmail}})</strong>-->
                </div>
              </div>
            </div>
          </a>
        </div>

      </div>

      <!--      <p class="text-block-51" style="padding-top: 10px">-->
      <!--        Note: After Deposit for faster response send proof of payment to any of  our-->
      <!--        support channels-->
      <!--      </p>-->


    </div>
    <div class="margin-top margin-medium">
      <div class="payment-email-wrapper">
        <!--        <div class="payment-email">-->
        <!--          <div class="text-block-61">Bank Name: </div>-->
        <!--          <div class="text-block-61">Bank Routing Number: </div>-->
        <!--          <div class="text-block-61">Bank Account Name: </div>-->
        <!--          <div class="text-block-62">Direct Deposit Account Number: </div>-->
        <!--        </div>-->
        <div class="copy-button">
          <a  class="button is-secondary copy " @click="showDialog2"  >Proceed</a>
        </div>
      </div>
    </div>


  </section>
</template>

<script>
import axios from "axios";
import {collection, getDocs} from "firebase/firestore";
import {db} from "@/firebase/config";
import AddBankModal from "@/components/Modals/AddBankModal.vue";

export default {
  name: "AddBankComponent",
  components: {AddBankModal},
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 12,
      dialogIsVisible2: false,
      selectedItem: null,
      contacts: [],
      bitcoin: '',
      bitcoinRate: null,
    };
  },
  computed: {
    // paginatedItems() {
    //   const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    //   const endIndex = startIndex + this.itemsPerPage;
    //   //remember to change and point the right data
    //   return this.data.slice(startIndex, endIndex);
    // },
    // totalPages() {
    //   //remember to change and point the right data
    //   return Math.ceil(this.data.length / this.itemsPerPage);
    // },
  },
  methods: {
    fetchBitcoinRate() {
      // Set loading to true when the request starts
      this.loading = true;

      // eslint-disable-next-line no-undef
      axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json')
          .then(response => {
            this.bitcoinRate = response.data.bpi.USD.rate_float;
            // Set loading to false when the data is successfully fetched
            this.loading = false;
          })
          .catch(error => {
            console.error(error);
            // Set loading to false also if there is an error
            this.loading = false;
          });
    },

    fetchBitcoinPnL() {
      // Set loading to true when the request starts
      this.loading = true;

      axios.get('https://api.coingecko.com/api/v3/coins/bitcoin')
          .then(response => {
            const marketData = response.data.market_data;
            this.bitcoinRate2 = marketData.current_price.usd;
            this.pnlValue = marketData.price_change_24h_in_currency.usd;
            this.pnlPercentage = marketData.price_change_percentage_24h;

            // Set loading to false when the data is successfully fetched
            this.loading = false;
          })
          .catch(error => {
            console.error(error);

            // Set loading to false if there is an error
            this.loading = false;
          });
    },

    convertToBitcoin() {
      this.bitcoin = ((this.contacts.WalletBalance - this.contacts.WalletBalance2)  / this.bitcoinRate).toFixed(8);
    },
    hideDialog2() {
      this.dialogIsVisible2 = false;
    },
    showDialog2() {
      this.dialogIsVisible2 = true;
      // this.selectedItem = this.bitcoinRate;
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },

    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },

    goToPage(pageNumber) {
      if (pageNumber > 0 && pageNumber <= this.totalPages) {
        this.currentPage = pageNumber;
      }
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
        'WalletBalance': doc.data().WalletBalance,
        'WalletBalance2': doc.data().WalletBalance2,
      }
      this.contacts = data
    })
    this.fetchBitcoinRate()
    this.convertToBitcoin();
    this.fetchBitcoinPnL();
  },
  mounted() {
    this.fetchBitcoinRate();
    this.convertToBitcoin();
    this.fetchBitcoinPnL();
  }
}
</script>

<style scoped>
h3 {margin: 40px 0 0; }
ul {list-style-type: none; padding: 0; }
li {display: inline-block; margin: 0 10px; }

strong{
  text-transform: lowercase;
}
</style>