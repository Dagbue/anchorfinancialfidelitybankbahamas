<template>
  <div>
    <div class="backdrop"></div>
    <dialog open>
      <section>
        <div class="welcome-modal">
          <div class="modal-image-container"></div>
          <div class="margin-bottom margin-small">
            <div class="balance-heading-wrapper">
              <div class="left-block">
                <div class="text-block-57">Your accounts</div>
              </div>
              <div class="right-block">
                <a data-w-id="67fbd4d2-67b1-f382-36f8-ba9be3dc7334" @click="$emit('close')" class="w-inline-block"><img src="@/assets/images/close.svg" loading="lazy" alt=""></a>
              </div>
            </div>
          </div>

            <div @click="fetchData1" class="currency-card link-block-2 w-inline-block">
              <div class="left-block"><img src="@/assets/images/KYC.svg" loading="lazy" alt="">
                <div class="balance-details">
                  <div class="currency">{{this.contacts.AccountName1}}'s Account</div>
                  <div class="balance-text">&#36; {{this.contacts.Balance1}}.00</div>
                </div>
              </div>
              <div class="currency-switch">
                <div class="right-block" v-if="this.userData === 'account1'">
                  <img src="@/assets/images/checked.svg" loading="lazy" alt="">
                </div>
                <div class="right-block" v-else >
                  <img src="@/assets/images/Unchekced.svg" loading="lazy" alt="">
                </div>
              </div>
            </div>

            <div @click="fetchData2" class="currency-card link-block-2 w-inline-block">
              <div class="left-block"><img src="@/assets/images/KYC.svg" loading="lazy" alt="">
                <div class="balance-details">
                  <div class="currency">{{this.contacts.AccountName2}}'s Account</div>
                  <div class="balance-text">&#36; {{this.contacts.Balance2}}.00</div>
                </div>
              </div>

              <div @click="fetchData2" class="currency-switch">
                <div class="right-block" v-if="this.userData === 'account2'" >
                  <img src="@/assets/images/checked.svg" loading="lazy" alt="">
                </div>
                <div class="right-block" v-else>
                  <img src="@/assets/images/Unchekced.svg" loading="lazy" alt="">
                </div>
              </div>


            </div>

        </div>
      </section>
    </dialog>
  </div>
</template>

<script>
import {collection, getDocs} from "firebase/firestore";
import {db} from "@/firebase/config";

export default {
  name: "BalanceModalCard",
  emits: ['close'],
  data(){
    return {
      userData2: "account1",
      userData3: "account2",
      contacts: [],
    }
  },
  computed: {
    userData() {
      return this.$store.getters.getUserData;
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

  methods: {
    fetchData1() {
      this.$store.dispatch('fetchUserData', this.userData2);
    },
    fetchData2() {
      this.$store.dispatch('fetchUserData', this.userData3);
    },
  }
}
</script>

<style scoped>
h3 {margin: 40px 0 0; }
ul {list-style-type: none; padding: 0; }
li {display: inline-block; margin: 0 10px; }



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
  top: 18vh;
  width: 32rem;
  height: 20rem;
  left: calc(50% - 13.5rem);
  margin: 0;
  /*box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);*/
  /*border-radius: 12px;*/
  /*padding: 1rem;*/
  background-color: transparent;
  /*color: black;*/
  z-index: 100;
  border: none;
  animation: modal 0.3s ease-out forwards;
}


.currency-switch{
  margin-top: 4%;
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
    top: 18vh;
    width: 25rem;
    height: 20rem;
    /*left: unset;*/
    left: calc(50% - 11.4rem);
  }
  h3{
    font-size: 20px;
  }
  p{
    font-size: unset;
  }
}
</style>