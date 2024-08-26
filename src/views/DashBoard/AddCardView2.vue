<template>
  <dashboard-layout>
    <add-card-component2/>
  </dashboard-layout>
</template>

<script>
import DashboardLayout from "@/components/Layout/DashboardLayout.vue";
import AddCardComponent2 from "@/components/DashBoard/AddCardComponent2.vue";

export default {
  name: "AddCardView2",
  components: {AddCardComponent2, DashboardLayout}
}
</script>

<style scoped>

</style>