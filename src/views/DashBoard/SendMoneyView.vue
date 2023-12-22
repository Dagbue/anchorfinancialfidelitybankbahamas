<template>
  <dashboard-layout>
    <div class="dashboard-body-wrapper align-center">
      <div class="back-button margin-vertical margin-large">
        <router-link to="/homeView">
          <a class="w-inline-block"><img src="@/assets/images/Navigation-controls.svg" loading="lazy" alt=""></a>
        </router-link>
      </div>
      <SendMoneyCard/>
      <SendToBeneficiaryCard/>
      <div class="margin-top margin-medium">
        <div>
          <SavedBeneficiaryCard/>
        </div>
      </div>
    </div>
  </dashboard-layout>
</template>

<script>
import DashboardLayout from "@/components/Layout/DashboardLayout.vue";
import SendMoneyCard from "@/components/DashBoard/SendMoneyCard.vue";
import SendToBeneficiaryCard from "@/components/DashBoard/SendToBeneficiaryCard.vue";
import SavedBeneficiaryCard from "@/components/DashBoard/SavedBeneficiaryCard.vue";

export default {
  name: "SendMoneyView",
  components: {SavedBeneficiaryCard, SendToBeneficiaryCard, SendMoneyCard, DashboardLayout}
}
</script>

<style scoped>

</style>