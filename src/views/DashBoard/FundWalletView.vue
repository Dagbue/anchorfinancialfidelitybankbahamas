<template>
  <dashboard-layout>
    <FundWalletCard/>
  </dashboard-layout>
</template>

<script>
import DashboardLayout from "@/components/Layout/DashboardLayout.vue";
import FundWalletCard from "@/components/DashBoard/FundWalletCard.vue";

export default {
  name: "FundWalletView",
  components: {FundWalletCard, DashboardLayout}
}
</script>

<style scoped>

</style>