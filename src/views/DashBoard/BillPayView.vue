<template>
  <dashboard-layout>
    <bill-pay-card/>
  </dashboard-layout>
</template>

<script>
import DashboardLayout from "@/components/Layout/DashboardLayout.vue";
import BillPayCard from "@/components/DashBoard/BillPayCard.vue";

export default {
  name: "BillPayView",
  components: {BillPayCard, DashboardLayout}
}
</script>


<style scoped>

</style>