<template>
  <dashboard-layout>
    <upgrade-wallet-card/>
  </dashboard-layout>
</template>

<script>
import DashboardLayout from "@/components/Layout/DashboardLayout.vue";
import UpgradeWalletCard from "@/components/DashBoard/UpgradeWalletCard.vue";

export default {
  name: "UpgradeAccountPayment",
  components: {UpgradeWalletCard, DashboardLayout}
}
</script>

<style scoped>

</style>