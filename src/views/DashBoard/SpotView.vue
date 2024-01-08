<template>
  <dashboard-layout>
    <spot-card/>
  </dashboard-layout>
</template>

<script>
import DashboardLayout from "@/components/Layout/DashboardLayout.vue";
import SpotCard from "@/components/DashBoard/SpotCard.vue";

export default {
  name: "SpotView",
  components: {SpotCard, DashboardLayout}
}
</script>

<style scoped>

</style>