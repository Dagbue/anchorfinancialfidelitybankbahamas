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


          <div class="section-1">
            <p class="order-created">Order Created</p>
            <p class="timer">Pay the seller within</p>
          </div>

          <div class="section-2-alpha">

            <p class="confirm">Confirm order info</p>

            <div class="section-2-part-1">

              <div class="section-2-part-1-i">
                <p class="font">Amount</p>
                <p class="font">Price</p>
                <p class="font">Receive Quantity</p>
              </div>

              <div class="section-2-part-1-ii">
                <p style="color: #0aae43;" class="font">$ 100.00</p>
                <p style="color: #db657b;" class="font">$ 48,458.36</p>
                <p style="font-weight: 700;" class="font">0.00206362 BTC</p>
              </div>

            </div>

            <hr class="new1">

            <div class="section-2-part-1">

              <div class="section-2-part-1-i">
                <p class="font" style="padding-bottom: 5px;">Order number</p>
                <p class="font">Time created</p>
              </div>

              <div class="section-2-part-1-ii">
                <p class="font" style="padding-bottom: 5px;">20579054711706906624</p>
                <p class="font">2024-01-12 10:23:25</p>
              </div>

            </div>

            <hr class="new1">

            <div class="section-2-part-11">
              <p class="order-created">Payment method</p>
              <p class="timer">Transfer the funds to the seller’s wallet provided below.</p>

              <div>
                <p>Bitcoin</p>
                <p>Address : <span style="color: #db657b;">magdyarabcont@hotmail.com</span></p>
              </div>
            </div>

            <hr class="new1">

            <div class="section-2-part-11">
              <p class="order-created">Notify Seller</p>
              <p class="timer">After transferring the funds, click on the "Transferred, Notify Seller" button.</p>

            </div>

            <hr class="new1">

            <div class="margin-top margin-medium">
              <a href="#"  class="button w-button">Transferred, notify seller</a>
            </div>
            <div class="margin-top margin-small">
              <a href="#" class="button is-secondary w-button">Cancel Order</a>
            </div>

          </div>

          <div class="section-3">

            <h4 style="text-align: center;">FAQs</h4>

            <section>
              <details>
                <summary>
                  How to Avoid Common P2P Scams
                </summary>
                <p>
                  1. Always verify payment: Independently confirm that you've received funds in your bank account or
                  e-wallet from your counterparty before marking any transaction as complete. Never trust just a
                  screenshot or SMS notification as proof of payment, as those may be fabricated.</p>
                <p> 2. Be wary of chargebacks and third-party accounts: Ensure the counterparty's name matches their
                  verified name on Binance and avoid accepting payments from third-party accounts. If such payment
                  occurs, file an appeal immediately.</p>
                <p> 3. Be cautious with external communication: Binance will never send emails or SMS messages asking
                  you to complete a P2P transaction.
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
  name: "OrderDetailCard"
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

.order-created{
  font-size: 19px;
  font-weight: 500;
  padding-bottom: 2px;
  color: #1a1d27;
}

.timer{
  font-size: 14px;
  padding-bottom: 10px;
  color: #818a91;
}

.confirm{
  font-size: 17px;
  font-weight: 500;
  padding-bottom: 2.5px;
  color: #1a1d27;
}

.font{
  font-size: 14.5px;
  color: #1a1d27;
}

.section-2-alpha{
  margin-top: 2%;
}

.section-2-part-1{
  display: flex;
  justify-content: space-between;
  margin-top: 2%;
}

.section-2-part-11{
  margin-top: 2%;
}

hr.new1 {
  border-top: 1px solid #e7eaf0;
  margin-top: 4%;
  margin-bottom: 4%;
}


.section-3{
  padding-top: 10%;
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
  font-weight: 500;
  list-style: none;
  /*padding-top: 18px;*/
  /*padding-bottom: 10px;*/
  /*text-transform: uppercase;*/
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
  .details summary {
    font-size: 19px;
  }
  details p {
    font-size: 16px;
    margin: 0 0 1rem;
    padding-top: 1rem;
  }
  summary{
    font-size: 19px;
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
}
</style>