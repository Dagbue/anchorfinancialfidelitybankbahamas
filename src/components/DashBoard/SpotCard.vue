<template>
  <div class="dashboard-body-wrapper align-center">
    <deposit-modal @close="hideDialog2" v-if="dialogIsVisible2" :selected-item="selectedItem" />
    <withdrawal-modal @close="hideDialog3" v-if="dialogIsVisible3" :selected-item="selectedItem" />
    <div class="kyc-nav-wrapper margin-vertical margin-large">
      <router-link to="/sendMoneyView">
        <a class="w-inline-block"><img src="@/assets/images/Navigation-controls.svg" loading="lazy" alt=""></a>
      </router-link>
    </div>

    <div class="mobile-view">
      <div class="margin-top margin-small">
        <div id="SettingsForm" class="settings">
          <!--            <div class="margin-bottom margin-medium">-->
          <!--              <h3>Settings</h3>-->
          <!--            </div>-->


            <div style="display: flex; justify-content: center; margin-right: 11%;" class="tabs-menu w-tab-menu">
              <router-link to="/peerToPeerView">
                <a data-w-tab="Tab 1" class="settings-tab w-inline-block w-tab-link beneficiary-list">
                  <div>Peer to Peer</div>
                </a>
              </router-link>
              <router-link to="/spotView">
                <a data-w-tab="Tab 1" class="settings-tab w-inline-block w--current w-tab-link beneficiary-list">
                  <div>spot</div>
                </a>
              </router-link>
            </div>




          <div class="wallet-alpha">

            <div>
              <p class="text-1">Estimated Balance</p>
              <p class="text-2">{{bitcoin}} BTC</p>
              <p class="text-2">{{this.contacts.WalletBalance - this.contacts.WalletBalance2}} USD</p>
              <p class="text-3">Today's PnL: ${{ pnlValue }} ({{ pnlPercentage }}%)</p>
            </div>

            <div class="action">
              <p class="action-btn" @click="showDialog2">Deposit</p>
              <p class="action-btn" @click="showDialog3">Withdrawal</p>
            </div>

          </div>

          <div class="bit-chart">

            <div style="height:787px; background-color: #FFFFFF; overflow:hidden; box-sizing: border-box; border: 1px solid #1a1d27; border-radius: 4px; text-align: right; line-height:14px; font-size: 12px; font-feature-settings: normal; text-size-adjust: 100%; box-shadow: inset 0 -20px 0 0 #1a1d27; padding: 0px; margin: 0px; width: 100%;"><div style="height:767px; padding:0px; margin:0px; width: 100%;"><iframe src="https://widget.coinlib.io/widget?type=full_v2&theme=light&cnt=12&pref_coin_id=1505&graph=yes" width="100%" height="763px" scrolling="auto" marginwidth="0" marginheight="0" frameborder="0" border="0" style="border:0;margin:0;padding:0;"></iframe></div><div style="color: #FFFFFF; line-height: 14px; font-weight: 400; font-size: 11px; box-sizing: border-box; padding: 2px 6px; width: 100%; font-family: Verdana, Tahoma, Arial, sans-serif;"><a href="https://coinlib.io" target="_blank" style="font-weight: 500; color: #FFFFFF; text-decoration:none; font-size:11px">Cryptocurrency Prices</a>&nbsp;by AFFBB</div></div>

          </div>


        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DepositModal from "@/components/Modals/DepositModal.vue";
import WithdrawalModal from "@/components/Modals/WithdrawalModal.vue";
import axios from "axios";
import {collection, getDocs} from "firebase/firestore";
import {db} from "@/firebase/config";

export default {
  name: "SpotCard",
  components: {WithdrawalModal, DepositModal},
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 12,
      dialogIsVisible2: false,
      dialogIsVisible3: false,
      bitcoinRate: null,
      selectedItem: null,
      contacts: [],
      bitcoin: '',
      bitcoinPnL: '',
      bitcoinRate2: 0,
      pnlValue: 0,
      pnlPercentage: 0,
      loading: false,
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
      this.selectedItem = this.bitcoinRate;
    },

    hideDialog3() {
      this.dialogIsVisible3 = false;
    },
    showDialog3() {
      this.dialogIsVisible3 = true;
      this.selectedItem = this.bitcoinRate;
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
.settings {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  max-width: 550px;
  /*margin-top: 3rem;*/
  margin-right: auto;
  margin-left: auto;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.tabs {
  padding-bottom: 3rem;
}

.tabs-menu {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 2rem;
  grid-column-gap: 8px;
  grid-row-gap: 8px;
}

.settings-tab {
  padding-right: 12px;
  padding-left: 12px;
  background-color: transparent;
  color: #1a1d27;
  font-weight: 500;
}

.settings-tab.w--current {
  border-radius: 8px;
  background-color: #1a1d27;
  color: #fff;
}

.dashboard-body-wrapper {
  max-width: 550px;
}

.wallet-alpha{
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  border: 1px solid #E3EBF6;
  border-radius: 8px;
  padding: 20px 20px;
}

.action{
  display: flex;
}

.action-btn{
  background-color: #1a1d27;
  border-radius: 5px;
  color: #FFFFFF;
  padding: 10px 25px;
  margin-left: 5px;
  /*margin-right: 5px;*/
}

.text-1{
  font-size: 22px;
  font-weight: 700;
  padding-bottom: 5px;
  color: #1a1d27;
}

.text-2{
  font-size: 15px;
  font-weight: 500;
  padding-bottom: 5px;
  color: rgba( 219, 101, 123, 1);
}

.text-3{
  color: #1a1d27;
}

.bit-chart{
  margin-top: 5%;
}

@media screen and (max-width: 600px){
  .mobile-view{
    margin-left: 8%;
    margin-right: 8%;
  }
  .wallet-alpha{
    display: block;
  }

  .action{
    padding-top: 9%;
    padding-bottom: 3%;
  }

  .action-btn{
    background-color: #1a1d27;
    border-radius: 5px;
    color: #FFFFFF;
    padding: 8px 30px;
    margin-left: unset;
    margin-right: 5px;
  }
}
</style>