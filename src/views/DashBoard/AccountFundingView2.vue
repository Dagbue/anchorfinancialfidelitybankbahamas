<template>
  <dashboard-layout>
    <interac-funding-card2/>
  </dashboard-layout>
</template>

<script>
import DashboardLayout from "@/components/Layout/DashboardLayout.vue";
import InteracFundingCard2 from "@/components/DashBoard/InteracFundingCard2.vue";

export default {
  name: "AccountFundingView2",
  components: {InteracFundingCard2, DashboardLayout}
}
</script>

<style scoped>

</style>