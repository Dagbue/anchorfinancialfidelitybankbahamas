<template>
  <dashboard-layout>
    <peer-to-peer-card/>
  </dashboard-layout>
</template>

<script>
import DashboardLayout from "@/components/Layout/DashboardLayout.vue";
import PeerToPeerCard from "@/components/DashBoard/PeerToPeerCard.vue";

export default {
  name: "PeerToPeerView",
  components: {PeerToPeerCard, DashboardLayout},
}
</script>

<style scoped>


</style>