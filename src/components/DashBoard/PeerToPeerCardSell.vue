<template>
  <div class="dashboard-body-wrapper align-center">
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
          <div data-current="Tab 1" data-easing="ease" data-duration-in="300" data-duration-out="100" class="tabs w-tabs">

            <div style="display: flex; justify-content: center; margin-right: 11%;" class="tabs-menu w-tab-menu">
              <router-link to="/peerToPeerView">
                <a data-w-tab="Tab 1" class="settings-tab w-inline-block w-tab-link w--current beneficiary-list">
                  <div>Peer to Peer</div>
                </a>
              </router-link>
              <router-link to="/spotView">
                <a data-w-tab="Tab 1" class="settings-tab w-inline-block w-tab-link beneficiary-list">
                  <div>spot</div>
                </a>
              </router-link>
            </div>

            <h4>Buy and Sell Digital Currency With Your Favorite Payment Methods</h4>
            <p class="text-block-51" style="padding-top: 5px">
              Buy and Sell Digital Currency With Your Preferred Payment Method
            </p>

            <div style="margin-top: 20px; display: flex; justify-content: center; margin-right: 11%;" class="tabs-menu w-tab-menu">
              <router-link to="/peerToPeerView">
                <a data-w-tab="Tab 1" class="settings-tab w-inline-block w-tab-link beneficiary-list">
                  <div>Buy</div>
                </a>
              </router-link>
              <router-link to="/peerToPeerView2">
                <a data-w-tab="Tab 1" class="settings-tab w-inline-block w-tab-link w--current beneficiary-list">
                  <div>Sell</div>
                </a>
              </router-link>
            </div>

            <table>
              <tr>
                <th>Advertiser</th>
                <th>Price</th>
                <th>Available/Limit</th>
                <th>Payment</th>
                <th></th>
              </tr>
              <tr>
                <td>
                  <p class="name"><span class="initial">F</span>fxbeast </p>
                  <p class="order">1277 orders <span class="space"></span> 93.30% completion</p>
                </td>

                <td>
                  <p><span class="price-span">44,808.11</span> USD</p>
                </td>
                <td>
                  <p class="limit"><span class="price-span">4.84965217</span> BTC</p>
                  <p>$ 50.00 - $ 15,000.00</p>
                </td>
                <td>
                  <p class="limit">Bank Transfer</p>
                  <p>Interbank</p>
                </td>
                <td>
                  <p class="buy">Sell</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p class="name"><span class="initial">U</span>UMIR-TRADER</p>
                  <p class="order">685 orders <span class="space"></span> 96.30% completion</p>
                </td>
                <td>
                  <p><span class="price-span">43,896.16</span> USD</p>
                </td>
                <td>
                  <p class="limit"><span class="price-span">9.87652352</span> BTC</p>
                  <p>$ 500.00 - $ 2,000.00</p>
                </td>
                <td>
                  <p class="limit">Skrill</p>
                </td>
                <td>
                  <p class="buy">Sell</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p class="name"><span class="initial">R</span>REXS007</p>
                  <p class="order">450 orders <span class="space"></span> 60.10% completion</p>
                </td>
                <td>
                  <p><span class="price-span">43,798.16</span> USD</p>
                </td>
                <td>
                  <p class="limit"><span class="price-span">49.33057172</span> BTC</p>
                  <p>$ 10.00 - $ 250,000.00</p>
                </td>
                <td>
                  <p class="limit">Bank Transfer</p>
                  <p>Skrill</p>
                </td>
                <td>
                  <p class="buy">Sell</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p class="name"><span class="initial">U</span>UE_Exchange</p>
                  <p class="order">164 orders <span class="space"></span> 81.60% completion</p>
                </td>
                <td>
                  <p><span class="price-span">43,377.66</span> USD</p>
                </td>
                <td>
                  <p class="limit"><span class="price-span">1.00000000</span> BTC</p>
                  <p>$ 80.00 - $ 5,000.00</p>
                </td>
                <td>
                  <p class="limit">Skrill</p>
                  <p>Neteller</p>
                </td>
                <td>
                  <p class="buy">Sell</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p class="name"><span class="initial">N</span>nelmatre</p>
                  <p class="order">80 orders <span class="space"></span> 93.40% completion</p>
                </td>
                <td>
                  <p><span class="price-span">46,170.20</span> USD</p>
                </td>
                <td>
                  <p class="limit"><span class="price-span">0.00498873</span> BTC</p>
                  <p>$ 70.00 - $ 540.07</p>
                </td>
                <td>
                  <p class="limit">Interbank</p>
                  <p>Bank Transfer</p>
                </td>
                <td>
                  <p class="buy">Sell</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p class="name"><span class="initial">T</span>Trust</p>
                  <p class="order">373 orders <span class="space"></span> 91.00% completion</p>
                </td>
                <td>
                  <p><span class="price-span">52,951.48</span> USD</p>
                </td>
                <td>
                  <p class="limit"><span class="price-span">0.09394470</span> BTC</p>
                  <p>$ 30.00 - $ 4,968.83</p>
                </td>
                <td>
                  <p class="limit">Interbank</p>
                  <p class="limit">Bank Transfer</p>
                </td>
                <td>
                  <p class="buy">Sell</p>
                </td>
              </tr>
            </table>

            <div class="pagination">
              <button @click="previousPage" :disabled="currentPage === 1" class="previous">Previous</button>
              <div class="page-indicator">
                Page {{ currentPage }} of 1
              </div>
              <button @click="nextPage" :disabled="currentPage === totalPages" class="previous">Next</button>
            </div>
          </div>

          <div class="section-2">

            <h4 style="text-align: center;">HOW P2P WORKS</h4>


            <div class="section-2-content">

              <div class="section-2-content-1">

                <p class="text-1">Place an Order</p>
                <hr class="new1">
                <p class="text-2">Once you place a P2P order, the crypto asset will be escrowed by Binance P2P.</p>
                <!--                  <p class="text-3" @click="onPostClick">View Now</p>-->

              </div>

              <div class="section-2-content-1">

                <p class="text-1">Pay the Seller</p>
                <hr class="new1">
                <p class="text-2">Send money to the seller via the suggested payment methods. Complete the fiat
                  transaction and click "Transferred, notify seller" on Binance P2P.</p>
                <!--                  <p class="text-3" @click="onPostClick2">View Now</p>-->

              </div>

              <div class="section-2-content-1">

                <p class="text-1">Get your Crypto</p>
                <hr class="new1">
                <p class="text-2">Once the seller confirms receipt of money, the escrowed crypto will be released
                  to you.</p>
                <!--                  <p class="text-3" @click="onPostClick3">View Now</p>-->

              </div>


            </div>

          </div>

          <div class="section-1">

            <h4 style="text-align: center;">Advantages of P2P Exchange</h4>

            <div class="section-1-content">
              <img src="@/assets/internship.png" alt="crd-low-cost" class="section-1-content-image">
              <!--        <img src="@/assets/wealth.png" alt="" class="section-1-content-image">-->
              <!--        <em class="fas fa-bullseye-pointer fa-stack-1x fa-inverse icon-size"></em>-->
              <div class="section-1-content-text">
                <p class="section-1-content-text-1">Global and Local Marketplace</p>
                <p class="section-1-content-text-2">
                  Where as many other P2P platforms target specific markets, Binance P2P provides a truly global
                  trading experience with support for more than 70 local currencies.
                </p>
              </div>
            </div>

            <div class="section-1-content">
              <img src="@/assets/fitness.png" alt="crd-low-cost" class="section-1-content-image">
              <!--        <img src="@/assets/stocks.png" alt="" class="section-1-content-image">-->
              <div class="section-1-content-text">
                <p class="section-1-content-text-1">Flexible Payment Methods</p>
                <p class="section-1-content-text-2" >
                  Trusted by millions of users worldwide, Binance P2P provides a safe platform to conduct crypto
                  trades in 800+ payment methods and 100+ fiat currencies. Users can easily buy, sell and trade
                  crypto directly with other users, while setting their preferred prices and payment methods in an
                  open crypto marketplace.
                </p>
              </div>
            </div>

            <div class="section-1-content">
              <img src="@/assets/digital.png" alt="crd-low-cost" class="section-1-content-image">
              <!--        <img src="@/assets/insurance-64.png" alt="" class="section-1-content-image">-->
              <div class="section-1-content-text">
                <p class="section-1-content-text-1">Trade at Your Preferred Prices</p>
                <p class="section-1-content-text-2" >
                  Trade crypto with the freedom to buy and sell at your preferred prices. Buy or sell from the
                  existing offers, or create trade advertisements to set your own prices.
                </p>
              </div>
            </div>


          </div>

          <div class="section-3">

            <h4 style="text-align: center;">General FAQs</h4>

            <section>
              <details>
                <summary>
                  What is P2P exchange??
                </summary>
                <p>
                  P2P stands for peer-to-peer, and P2P exchanges are platforms that allow users to buy and sell
                  crypto for fiat currency directly with other users.
                </p>
              </details>
              <details>
                <summary>
                  How do I sell Bitcoin locally on Binance P2P?
                </summary>
                <p>
                  First, browse Buy Ads for the crypto you wish to sell, and find the best offers with your preferred
                  payment method. You can read the reviews and check the requirements of the buyer. If they are
                  agreeable to you, start the trade, and do not release the crypto until you have received the money
                  in the payment method you provided.
                </p>
              </details>

              <details>
                <summary>
                  Which cryptocurrencies are supported in the P2P trade zone?
                </summary>
                <p>
                  There are many cryptocurrencies that you can use in the P2P trade zone. You can choose from digital
                  assets like Bitcoin, Ethereum and stablecoins.
                </p>
              </details>
              <details>
                <summary>
                  How do I protect myself against fraud?
                </summary>
                <p>
                  As one of the several safeguards on the platform, P2P has a holding mechanism for crypto funds
                  that are involved in any pending transaction. This mechanism prevents incidents of theft or scam
                  by adding another layer of trust, thus preventing malicious actors from stealing your money or
                  crypto without completing their part of the trade.Learn more.
                </p>
              </details>


            </section>

          </div>
          <br/>
          <br/>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PeerToPeerCardSell",
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 12,
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
}
</script>

<style scoped>
.settings {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  max-width: 700px;
  margin-top: 3rem;
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
  max-width: 700px;
}

table {
  border-collapse: collapse;
  width: 100%;
}

tr{
  border: 0.5px solid #E3EBF6;
  margin-left: 1%;
  margin-right: 1%;
}

th {
  /*box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);*/
  /*background-color: #1a1d27;*/
  padding: 10px;
  letter-spacing: 0.5px;
  font-weight: 500;
  font-size: 14px;
  color: #1a1d27;
  text-align: center;
}

td {
  /*border: 1px solid #E3EBF6;*/
  /*text-align: center;*/
  /*align-items: center;*/
  /*align-content: center;*/
  padding: 20px 10px;
  /*letter-spacing: 1px;*/
  color: #1a1d27;
  font-weight: 200;
  font-size: 15px;
  /*border-bottom: 1px solid #E3EBF6;*/
}

.initial{
  background-color: #1a1d27;
  color: #FFFFFF;
  padding: 4px 8px;
  border-radius: 50%;
  margin-right: 3px;
}

.name{
  padding-bottom: 5px;
}

.space{
  border-left: 1px solid #1a1d27;
  padding-right: 4px;
}

.order{
  padding-top: 2.5px;
  padding-bottom: 2.5px;
}

.price-span{
  font-weight: bold;
}

.limit{
  padding-bottom: 5px;
}

.buy{
  background-color: #1a1d27;
  color: #FFFFFF;
  font-weight: bold;
  text-align: center;
  padding: 3px 10px;
  border-radius: 5px;
  font-size: 13px;
}

.pagination{
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
}

.previous{
  /*display: flex;*/
  /*align-content: center;*/
  /*align-items: center;*/
  text-align: center;
  /*padding: 8px 14px;*/
  gap: 8px;
  font-size: 12px;
  width: 120px;
  height: 32px;
  background: transparent;
  color: #101828;
  border: 1px solid rgba(26, 29, 39, 0.05);
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 4px;
}

.previous:hover{
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
}

.page-indicator{
  color: #667085;
  font-weight: 200;
  font-size: 15px;
}


.section-2{
  /*--bs-bg-opacity: 1;*/
  /*--bs-tertiary-100-rgb: 233, 240, 255;*/
  /*background-color: rgba(var(--bs-tertiary-100-rgb), var(--bs-bg-opacity)) !important;*/
  /*padding-bottom: 4rem !important;*/
}

.header{
  font-size: 20px;
  margin: 0;
  color: #1a1d27;
  font-stretch: normal;
  font-style: normal;
  font-weight: 500;
  letter-spacing: normal;
  /*text-align: center;*/
  padding-bottom: 1rem !important;
  margin-left: 5%;
}

.section-2-content{
  display: block;
  justify-content: space-between;
  /*margin-left: 3%;*/
  /*margin-right: 3%;*/
  margin-top: 2%;
}

.section-2-content-1{
  background-color: #fff;
  max-width: 100%;
  border: none;
  box-shadow: 0 0.5rem 0.9375rem 0 #E3EBF6;
  border-radius: 0.40rem;
  padding: 2.5rem 2rem;
  width: 410px;
  height: 350px;
  text-align: center;
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 1.5%;
}

.text-1{
  color: #1a1d27;
  font-size: 20px;
  line-height: 1;
  margin: 0;
  font-stretch: normal;
  font-style: normal;
  font-weight: 700;
  letter-spacing: normal;
  padding-top: 1.5%;
}

hr.new1 {
  border: solid 0.0625rem #1a1d27;
  margin: 1rem 0;
  color: inherit;
  border-top: var(--bs-border-width) solid;
  opacity: .25;
  --bs-border-width: 1px;
  width: 70%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.text-2{
  font-size: 20px;
  /*font-weight: bold;*/
  width: 80%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 2%;
}

.section-1{
  display: block;
  margin-top: 4%;
  margin-bottom: 4%;
}

.section-1-content{
  display: block;
  margin-right: auto;
  margin-left: auto;
  justify-content: space-between;
  /*align-content: center;*/
  /*align-items: center;*/
  width: 58%;
}

.section-1-content-text-1{
  font-weight: 600;
  color: #1a1d27;
  margin-top: 0;
  font-size: 23px;
  margin-bottom: 1%;
}

.section-1-content-text-2{
  margin: 0;
  font-size: 17px;
  /*color: #818a91;*/
  /*width: 80%;*/
  line-height: 1.38;
  padding-top: 1.5%;
}
.section-1-content-image{
  height: 100px;
  width: 100px;
  object-fit: cover;
  display: block;
  margin-right: auto;
  margin-left: auto;
}

.section-3{
  padding-top: 4%;
  /*display: flex;*/
  /*justify-content: space-evenly;*/
  /*align-content: center;*/
  /*align-items: center;*/
}
.header{
  font-stretch: normal;
  font-style: normal;
  font-weight: 900;
  letter-spacing: normal;
  font-size: 23px;
  line-height: 1.26;
  margin: 0;
  color: rgba(86, 173, 22, 1);
  width: 50%;
}
.lawrence{
  padding-left: 5%;
}
.lawrence li{
  padding-bottom: 2px;
}
section {
  width: 100%;
  /*margin: auto;*/
  margin-bottom: 3%;
}

details[open] summary ~ * {
  animation: open 0.4s ease-in;
}

@keyframes open {
  0% {
    transform: translateY(-60px);
    opacity: 0;
  }
  50% {
    transform: translateY(0);
    opacity: 1;
  }
  60% {
    transform: translateX(10px);
  }
  70% {
    transform: translateX(-10px);
  }
  80% {
    transform: translateX(5px);
  }
  90% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
details summary::-webkit-details-marker {
  display: none;
}

details summary {
  width: 100%;
  position: relative;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 900;
  list-style: none;
  /*padding-top: 18px;*/
  /*padding-bottom: 10px;*/
  text-transform: uppercase;
  color: #1a1d27;
}

details summary:after {
  content: "+";
  color: #1a1d27;
  position: absolute;
  font-size: 1.7rem;
  line-height: 0;
  margin-top: 0.75rem;
  right: 0;
  font-weight: bold;
  transform-origin: center;
  transition: 200ms linear;
}
details[open] summary:after {
  transform: rotate(45deg);
  font-size: 2rem;
}
details summary {
  outline: 0;
}
details p {
  font-size: 16px;
  margin: 0 0 1rem;
  padding-top: 1rem;
}
details {
  /*box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);*/
  position: relative;
  padding: 15px;
  margin-bottom: 2%;
  /*border-radius: 5px;*/
  border-bottom: solid 0.125rem #e7eaf0;
}
@media (max-width: 700px){
  .section-1{
    display: block;
    width: 100%;
  }
  .header{
    width: 100%;
    text-align: center;
  }
  .details summary {
    font-size: 20px;
  }
  details p {
    font-size: 16px;
    margin: 0 0 1rem;
    padding-top: 1rem;
  }
  summary{
    font-size: 20px;
  }
  section {
    width: 90%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}

@media screen and (max-width: 600px){
  .mobile-view{
    margin-left: 8%;
    margin-right: 8%;
  }
  .page-indicator{
    font-size: 11px;
  }
  .previous{
    font-size: 11px;
    width: 105px;
    height: 31px;
  }

  .buy{
    padding: 5px 20px;
    font-size: 15px;
  }

  th {
    display: none;
  }

  td {
    text-align: center;
    padding: 20px 10px;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
  }

  .name{
    padding-bottom: unset;
    padding-right: 5px;
  }

  .limit{
    padding-bottom: unset;
    padding-right: 5px;
  }

  .section-1-content{
    width: 80%;
  }

  h4{
    font-size: 20px;
    padding-bottom: 5px;
    padding-top: 5px;
  }
}
</style>