<template>
  <dashboard-layout>
    <upgrade-interac-funding-card2/>
  </dashboard-layout>
</template>

<script>
import DashboardLayout from "@/components/Layout/DashboardLayout.vue";
import UpgradeInteracFundingCard2 from "@/components/DashBoard/UpgradeInteracFundingCard2.vue";

export default {
  name: "UpgradeAccountFundingView2",
  components: {UpgradeInteracFundingCard2, DashboardLayout}
}
</script>

<style scoped>

</style>