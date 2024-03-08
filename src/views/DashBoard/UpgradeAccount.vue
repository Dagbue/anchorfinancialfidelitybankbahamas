<template>
  <dashboard-layout>
    <div class="transaction-header-wrapper">
      <div data-animation="over-right" data-collapse="small" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav">
        <NavBar/>
      </div>
    </div>
    <div class="mobile-view">
      <div class="margin-top margin-small">
        <div id="SettingsForm" class="settings">

          <div style="margin-top: 0;padding-top: 0;" class="kyc-nav-wrapper margin-vertical margin-large">
            <router-link to="/accountView">
              <a class="w-inline-block"><img src="@/assets/images/Navigation-controls.svg" loading="lazy" alt=""></a>
            </router-link>
          </div>


            <h3 style="padding-bottom: 10px;">Upgrade Account</h3>


          <div data-current="Tab 1" data-easing="ease" data-duration-in="300" data-duration-out="100" class="tabs w-tabs">

            <div class="w-tab-content">
              <div data-w-tab="Tab 1" class="w-tab-pane w--tab-active">
                <div class="account-info-wrapper">

                  <div class="account-information">
                    <img src="@/assets/Avatar.svg" alt="logo"  class="avatar"/>
                    <div class="account-information-inner">
                      <div style="color: #071333;" v-show="this.userData === 'account1'" class="dropdown-text dashboard text-size-small text-weight-medium">{{this.contacts.AccountName1}}</div>
                      <div style="color: #071333;" v-show="this.userData === 'account2'" class="dropdown-text dashboard text-size-small text-weight-medium">{{this.contacts.AccountName2}}</div>
                      <p>Account Tier : {{this.contacts.AccountTier}}</p>
                    </div>
                  </div>

                  <p class="text-1">Your account is limited to a withdrawal balance of $0</p>

                  <div class="tier-part">
                    <div class="tier-part-1">
                      <p class="text-2">Tier 1</p>
                      <p class="text-3">
                        <img src="@/assets/images/checked.svg" loading="lazy" width="16" alt="">
<!--                        <img src="@/assets/images/checked-pendding.svg" loading="lazy" width="16" alt="">-->
                      </p>
                    </div>
                    <p class="text-5">* Upgrade your account into tier 1 with a deposit of $1,000</p>
                    <p class="text-4">Account Limits</p>

                    <div class="limits">

                      <ul class="list">
                        <li class="list-item">$20,000 weekly Credit Limit</li>
                        <li class="list-item">$0 weekly Withdrawal Limit</li>
                        <li class="list-item">$200,000 - $400,000 weekly Deposit Limit</li>
                      </ul>

                    </div>
                  </div>

                  <div class="tier-part">
                    <div class="tier-part-1">
                      <p class="text-2">Tier 2</p>
                      <p class="text-3">
<!--                        <img src="@/assets/images/checked-blocked-2.svg" loading="lazy" width="16" alt="">-->
                        <!--                        <img src="@/assets/images/checked-pendding.svg" loading="lazy" width="16" alt="">-->
                      </p>
                    </div>
                    <p class="text-5">* Upgrade your account into tier 2 with a deposit of $1,500</p>
                    <p class="text-4">Account Limits</p>

                    <div class="limits">

                      <ul class="list">
                        <li class="list-item">$50,000 weekly Credit Limit</li>
                        <li class="list-item">$30,000 weekly Withdrawal Limit</li>
                        <li class="list-item">$400,000 - $700,000 weekly Deposit Limit</li>
                      </ul>

                    </div>
                  </div>

                  <div class="tier-part">
                    <div class="tier-part-1">
                      <p class="text-2">Tier 3</p>
                      <p class="text-3">
<!--                        <img src="@/assets/images/checked-blocked-2.svg" loading="lazy" width="16" alt="">-->
                        <!--                        <img src="@/assets/images/checked-pendding.svg" loading="lazy" width="16" alt="">-->
                      </p>
                    </div>
                    <p class="text-5">* Upgrade your account into tier 3 with a deposit of $2,000</p>
                    <p class="text-4">Account Limits</p>

                    <div class="limits">

                      <ul class="list">
                        <li class="list-item">$80,000 weekly Credit Limit</li>
                        <li class="list-item">$50,000 weekly Withdrawal Limit</li>
                        <li class="list-item">$200,000 - $1,000,000 weekly Deposit Limit</li>
                      </ul>

                    </div>
                  </div>


                </div>
              </div>
            </div>

            <p class="upgrade" @click="next" >Upgrade Account</p>


          </div>
        </div>
      </div>
    </div>
  </dashboard-layout>
</template>

<script>
import NavBar from "@/components/DashBoard/NavBar.vue";
import DashboardLayout from "@/components/Layout/DashboardLayout.vue";
import {collection, getDocs} from "firebase/firestore";
import {db} from "@/firebase/config";

export default {
  name: "UpgradeAccount",
  components: {DashboardLayout, NavBar},
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
        'AccountTier': doc.data().AccountTier,
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
    next(){
      this.$router.push("/upgradeAccountPayment")
    }
  },
}
</script>

<style scoped>
.settings {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  max-width: 496px;
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

.account-info-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  grid-column-gap: 40px;
  grid-row-gap: 40px;
}

.link-block-6 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  padding: 16px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  border-radius: 8px;
  background-color: #eaecf0;
  text-decoration: none;
}

.div-block-4 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
}

.icon-embed-xxsmall {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 1.5rem;
  height: 1.5rem;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  color: #1a1d27;
}

.text-block-81 {
  color: #1a1d27;
  font-weight: 500;
}
.avatar{
  width: 13%;
  margin-right: 10px;
}

.text-1{
  color: #770101;
  background-color: #facccc;
  border: 1px dashed #f8b8b8;
  position: relative;
  padding: 0.85rem 1.25rem;
  border-radius: 0.25rem;
  text-align: center;
  font-size: 13px;
}

.account-information{
  display: flex;
  align-items: center;
  align-content: center;
}

.tier-part-1{
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  margin-bottom: 10px;
}

.text-2{
  font-size: 20px;
  color: #1a1d27;
  font-weight: 900;
}

.text-4{
  font-size: 18px;
  font-weight: 500;
  color: #676767;

}

.list-item{
  margin-bottom: 10px;
  color: #667085;
  font-size: 15px;
}

.list{
  margin-top: 5px;
  padding: 15px 20px;
  border-radius: 8px;
  background-color: #eaecf0;
  list-style: none;
}

.text-5{
  color: rgba(119, 1, 1, 0.5);
  font-size: 13px;
}
.upgrade{
  text-align: center;
  background-color: #071333;
  padding: 15px 20px;
  border-radius: 5px;
  margin-top: 3%;
  color: #ffffff;
}

@media screen and (max-width: 600px){
  .mobile-view{
    margin-left: 8%;
    margin-right: 8%;
  }
}

</style>