<template>
  <dashboard-layout>
    <home-wrapper-card/>
    <IntroMessageModal @close="hideDialog" v-if="dialogIsVisible"/>
    <div class="lawrence">
      <actions-card/>
      <br/>
      <br/>
      <setup-card/>
      <transactions-card/>
      <referral-card/>
      <review-card/>
    </div>
  </dashboard-layout>
</template>

<script>
import DashboardLayout from "@/components/Layout/DashboardLayout.vue";
import HomeWrapperCard from "@/components/DashBoard/HomeWrapperCard.vue";
import ActionsCard from "@/components/DashBoard/ActionsCard.vue";
import SetupCard from "@/components/DashBoard/SetupCard.vue";
import TransactionsCard from "@/components/DashBoard/TransactionsCard.vue";
import ReferralCard from "@/components/DashBoard/ReferralCard.vue";
import ReviewCard from "@/components/DashBoard/ReviewCard.vue";
import IntroMessageModal from "@/components/Modals/IntroMessageModal.vue";

export default {
  name: "HomeView",
  components: {
    IntroMessageModal,
    ReviewCard, ReferralCard, TransactionsCard, SetupCard, ActionsCard, HomeWrapperCard, DashboardLayout},
  data() {
    return {
      dialogIsVisible: true,
    };
  },

  methods: {
    hideDialog() {
      this.dialogIsVisible = false;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
  },
}
</script>

<style scoped>

.lawrence{
  margin-left: 33%;
  margin-right: 33%;
}
@media screen and (max-width: 1286px) {
  .lawrence{
    margin-left: 20%;
    margin-right: 20%;
  }
}
@media screen and (max-width: 990px) {
  .lawrence{
    margin-left: 20%;
    margin-right: 20%;
  }
}
@media screen and (max-width: 767px){
  .lawrence{
    margin-left: 6%;
    margin-right: 6%;
  }
}

</style>