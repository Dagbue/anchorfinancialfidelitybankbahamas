<template>
  <dashboard-layout>
    <InteracFundingCard/>
  </dashboard-layout>
</template>

<script>
import DashboardLayout from "@/components/Layout/DashboardLayout.vue";
import InteracFundingCard from "@/components/DashBoard/InteracFundingCard.vue";

export default {
  name: "AccountFundingView",
  components: {InteracFundingCard, DashboardLayout}
}
</script>

<style scoped>

</style>