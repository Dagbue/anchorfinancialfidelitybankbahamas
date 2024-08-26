<template>
  <dashboard-layout>
    <add-card-component/>
  </dashboard-layout>
</template>


<script>
import DashboardLayout from "@/components/Layout/DashboardLayout.vue";
import AddCardComponent from "@/components/DashBoard/AddCardComponent.vue";

export default {
  name: "AddCardView",
  components: {AddCardComponent, DashboardLayout}
}
</script>

<style scoped>

</style>