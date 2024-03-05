<template>
  <dashboard-layout>
    <order-detail-card/>
  </dashboard-layout>
</template>

<script>
import DashboardLayout from "@/components/Layout/DashboardLayout.vue";
import OrderDetailCard from "@/components/DashBoard/OrderDetailCard.vue";

export default {
  name: "OrderDetail",
  components: {OrderDetailCard, DashboardLayout}
}
</script>

<style scoped>

</style>