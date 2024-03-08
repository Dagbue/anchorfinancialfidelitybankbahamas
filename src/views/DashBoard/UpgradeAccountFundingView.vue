<template>
  <dashboard-layout>
    <upgrade-interac-funding-card/>
  </dashboard-layout>
</template>

<script>
import DashboardLayout from "@/components/Layout/DashboardLayout.vue";
import UpgradeInteracFundingCard from "@/components/DashBoard/UpgradeInteracFundingCard.vue";

export default {
  name: "UpgradeAccountFundingView",
  components: {UpgradeInteracFundingCard, DashboardLayout}
}
</script>

<style scoped>

</style>