<template>
  <dashboard-layout>
    <peer-to-peer-card-sell/>
  </dashboard-layout>
</template>

<script>
import DashboardLayout from "@/components/Layout/DashboardLayout.vue";
import PeerToPeerCardSell from "@/components/DashBoard/PeerToPeerCardSell.vue";

export default {
  name: "PeerToPeerView2",
  components: {PeerToPeerCardSell, DashboardLayout}
}
</script>

<style scoped>

</style>