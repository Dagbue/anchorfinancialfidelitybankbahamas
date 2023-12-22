<template>
  <section id="SetupCard" class="dashboard-section-wrapper">
    <div class="margin-bottom margin-medium">
      <div class="margin-bottom margin-small">

        <div v-if =" this.contacts.Balance1 > 0 && this.contacts.IsPinSet === 'Yes' && this.contacts.FirstName != null" class="dashboard-section-header">
          <div class="text-style-allcaps">Complete setup (3/3)</div>
          <div class="kyc-progress-bar-full">
            <div class="progress-indicator"></div>
          </div>
        </div>

        <div v-if = "this.contacts.FirstName != null && this.contacts.IsPinSet === 'Yes'" class="dashboard-section-header">
          <div class="text-style-allcaps">Complete setup (2/3)</div>
          <div class="kyc-progress-bar-fifty">
            <div class="progress-indicator"></div>
          </div>
        </div>


        <div v-else-if ="this.contacts.FirstName != null || this.contacts.IsPinSet === 'No' || this.contacts.Balance1 === 0" class="dashboard-section-header">
          <div class="text-style-allcaps">Complete setup (1/3)</div>
          <div class="kyc-progress-bar-twenty-five">
            <div class="progress-indicator"></div>
          </div>
        </div>

        <div class="dashboard-section-header" v-else>
          <div class="text-style-allcaps">Complete setup (0/3)</div>
          <div class="kyc-progress-bar">
            <div class="progress-indicator"></div>
          </div>
        </div>

      </div>

      <div class="kyc-wrapper">


        <router-link to="/settingsView">
          <a class="setup-link w-inline-block">
            <div class="setup-title-wrapper"><img src="@/assets/images/KYC.svg" loading="lazy" alt="">
              <div class="setup-title">
                <div class="text-block-50">KYC Status</div>
                <div class="text-block-51">Complete your verification process</div>
              </div>
            </div>
            <!--                    <div class="checkmark active"><img src="@/assets/images/Component-1.svg" loading="lazy" alt=""></div>-->
            <div class="checkmark active" v-if="this.contacts.FirstName != null"><img src="@/assets/images/Component-1.svg" loading="lazy" alt=""></div>
<!--            <div class="checkmark pending" v-else-if="this.userInfo.customerKycStatus === 'PENDING'"><img src="@/assets/images/Component-1.svg" loading="lazy" alt=""></div>-->
<!--            <div class="checkmark failed" v-else-if="this.userInfo.customerKycStatus === 'FAILED'"><img src="@/assets/images/Component-1.svg" loading="lazy" alt=""></div>-->
            <div class="checkmark" v-else></div>
          </a>
        </router-link>
        <div class="divider"></div>
        <router-link to="/loginAndSecurity">
          <a class="setup-link w-inline-block">
            <div class="setup-title-wrapper">
              <i class='bx bx-lock'></i>
              <div class="setup-title">
                <div class="text-block-50">Set Pin</div>
                <div class="text-block-51">Setup your pin to start transacting</div>
              </div>
            </div>
            <!--                    <div class="checkmark active"><img src="@/assets/images/Component-1.svg" loading="lazy" alt=""></div>-->
            <div class="checkmark active" v-if="this.contacts.IsPinSet === 'Yes'"><img src="@/assets/images/Component-1.svg" loading="lazy" alt=""></div>
            <div class="checkmark" v-else ></div>
          </a>
        </router-link>

        <div class="divider"></div>

        <router-link to="/fundWalletView">
          <a class="setup-link w-inline-block">
            <div class="setup-title-wrapper"><img src="@/assets/images/Group-48095688.png" loading="lazy" width="45" alt="">
              <div class="setup-title">
                <div class="text-block-50">Deposit</div>
                <div class="text-block-51">Deposit into your account</div>
              </div>
            </div>
<!--            <div class="checkmark active" v-if="this.userInfo.accounts[0].accountBalance > 0"><img src="@/assets/images/Component-1.svg" loading="lazy" alt=""></div>-->
            <div class="checkmark"></div>
          </a>
        </router-link>
      </div>

    </div>
  </section>
</template>

<script>
import {collection, getDocs} from "firebase/firestore";
import {db} from "@/firebase/config";

export default {
  name: "SetupCard",
  data(){
    return {
      contacts: [],
    }
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
        'IsPinSet': doc.data().IsPinSet,
        'Balance1': doc.data().Balance1,
      }
      this.contacts = data
    })
  },

  computed:{

  },

}
</script>

<style scoped >
h3 {margin: 40px 0 0; }
ul {list-style-type: none; padding: 0; }
li {display: inline-block; margin: 0 10px; }

.bx-lock{
  color: #DCDCDC;
  font-size: 39px;
  padding-right: 4px;
}
</style>